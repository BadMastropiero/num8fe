import styles from "./EmployeeListItem.module.css";
import componentStyles from "@/components/Components.module.css";
import {EmployeeMinAggregate} from "@/types/employee";
import Link from "next/link";
import {getSince} from "@/utils/dates";

interface EmployeeListItemProps {
    employee: EmployeeMinAggregate;
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
                <Link href={`/${employee.id}`} className={componentStyles.btn}>
                    View details
                </Link>
            </div>
        </div>
    );
}