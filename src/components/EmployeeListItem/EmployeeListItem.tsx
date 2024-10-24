import styles from "./EmployeeListItem.module.css";
import {EmployeeMinAggregate} from "@/types/employee";
import Link from "next/link";

interface EmployeeListItemProps {
    employee: EmployeeMinAggregate;
}

const getSince = (date: string) => {
    const hireDate = new Date(+date);
    const now = new Date();
    const years = now.getFullYear() - hireDate.getFullYear();
    const months = now.getMonth() - hireDate.getMonth();
    const days = now.getDate() - hireDate.getDate();
    return `${years} y - ${months} m - ${days} d`;
}

export function EmployeeListItem({employee}: EmployeeListItemProps) {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}></div>
            <div className={styles.data}>
                <p className={styles.name}><b>{employee.firstName} {employee.lastName}</b> ({employee.department?.name})
                </p>
                <div className={styles.hireData}>
                    <b>Hire date</b>
                    <p>{new Date(+employee.hireDate).toDateString()} ({getSince(employee.hireDate)}) </p>
                </div>
            </div>
            <div className={styles.linkContainer}>
                <Link href={`/${employee.id}`} className={styles.link}>
                    View details
                </Link>
            </div>
        </div>
    );
}