import styles from "@/app/page.module.css";
import {sdk} from "@/graphql/client";
import {notFound} from "next/navigation";

const getEmployee = async (id: string) => {
    const data = await sdk.GetEmployee({id: +id});
    return data.data.getEmployee;
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

export default async function EmployeeDetails({params}: { params: Promise<Params> }) {
    const {id} = await params;
    const data = await getEmployee(id);

    if (!data) {
        return notFound();
    }

    return (
        <>
            <main className={styles.main}>
                {data.firstName} {data.lastName}
            </main>
        </>
    );
}