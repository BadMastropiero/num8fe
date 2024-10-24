import {DepartmentHistoryMinAggregate} from "@/types/department";
import styles from "./DepartmentsHistory.module.css";

interface DepartmentsHistoryProps {
    departments: DepartmentHistoryMinAggregate[];
}

export function DepartmentsHistory({departments}: DepartmentsHistoryProps) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Departments history</h2>
            <table>
                <thead>
                <tr>
                    <th>Department</th>
                    <th>Start date</th>
                </tr>
                </thead>
                <tbody>
                {departments.map((department) => (
                    <tr key={department.startDate}>
                        <td>{(new Date(+department.startDate)).toDateString()}</td>
                        <td>{department.department.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}