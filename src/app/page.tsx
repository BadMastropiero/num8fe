import styles from "./page.module.css";
import {sdk} from "@/graphql/client";
import {EmployeesList} from "@/components";
import {EmployeeMinAggregate} from "@/types/employee";


const getEmployees = async () => {
    const data = await sdk.GetEmployees();
    const nonNullList: EmployeeMinAggregate[] = [];
    data.data.getEmployees.forEach((employee) => {
        if (employee?.id) {
            nonNullList.push({...employee, id: employee.id || -1});
        }
    });
    return nonNullList;
}

export default async function Home() {
    const data = await getEmployees();
    return (
        <>
            <main className={styles.main}>
                <EmployeesList employees={data}/>
            </main>
        </>
    );
}
