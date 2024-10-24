import styles from "@/app/page.module.css";
import {sdk} from "@/graphql/client";
import {notFound} from "next/navigation";
import {EmployeeDetails} from "@/components";
import {DepartmentSelect} from "@/components/DepartmentSelect/DepartmentSelect";
import {DepartmentMinAggregate} from "@/types/department";

const getEmployee = async (id: string) => {
    const data = await sdk.GetEmployee({id: +id});
    return data.data.getEmployee;
}

const getDepartments = async () => {
    const data = await sdk.GetDepartments();
    const nonNullList: DepartmentMinAggregate[] = [];
    data.data.getDepartments.forEach((d) => {
        if (d?.id) {
            nonNullList.push(d);
        }
    });
    return nonNullList;
}

interface Params {
    id: string;
}

export async function generateMetadata({params}: { params: Promise<Params> }) {
    const {id} = await params;
    const data = await getEmployee(id);

    if (!data) {
        return {
            title: 'Employee Not Found',
            description: 'No details available for this employee.',
        };
    }

    return {
        title: `${data.firstName} ${data.lastName}'s Profile`,
        description: 'Details about the employee.',
    };
}

export default async function EmployeeDetailsPage({params}: { params: Promise<Params> }) {
    const {id} = await params;

    if (!+id) {
        return notFound();
    }

    const data = await getEmployee(id);
    const departments = await getDepartments();

    if (!data) {
        return notFound();
    }

    return (
        <>
            <main className={styles.main}>
                <EmployeeDetails employee={data}/>
                <DepartmentSelect selected={data.department?.id} userId={data.id} departments={departments}/>
            </main>
        </>
    );
}