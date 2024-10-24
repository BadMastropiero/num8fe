import {EmployeeListItem} from "@/components";
import styles from "./EmployeesList.module.css";
import {EmployeeMinAggregate} from "@/types/employee";

interface EmployeesListProps {
    employees: EmployeeMinAggregate[];
}

export function EmployeesList({employees}: EmployeesListProps) {
    return (
        <div className={styles.list}>
            {employees.map((employee) =>
                <EmployeeListItem key={employee.id} employee={employee}/>
            )}
        </div>
    );
}