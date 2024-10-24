'use client';

import {Employee} from "@/types/employee";
import styles from "./EmployeeDetails.module.css";
import componentStyles from "@/components/Components.module.css";
import {getSince} from "@/utils/dates";
import {activate, deactivate} from "@/app/actions";

interface EmployeeDetailsProps {
    employee: Employee;
}

export function EmployeeDetails({employee}: EmployeeDetailsProps) {
    const onActivate = async () => {
        if (employee.isActive) {
            await deactivate(employee.id);
            return;
        }
        await activate(employee.id);
    }

    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <div className={styles.activeStatus + " " + (employee.isActive ? "" : styles.danger)}>
                    {employee.isActive ? 'Active' : 'Inactive'}
                </div>
            </div>
            <div className={styles.data}>
                <div className={styles.name}>
                    <h2>{employee.firstName} {employee.lastName}</h2>
                </div>
                <p>
                    <b>Employee Id: </b> {employee.id}
                </p>
                <p>
                    <b>Department: </b> {employee.department?.name}
                </p>
                <p>
                    <b>Phone: </b> {employee.phone}
                </p>
                <p>
                    <b>Address: </b> {employee.address}
                </p>
            </div>

            <div className={styles.hireControls}>
                <div className={styles.hireData}>
                    <b>Hire date</b>
                    <p>{new Date(+employee.hireDate).toDateString()}</p>
                    <p>{getSince(employee.hireDate)}</p>
                </div>
                <button className={componentStyles.btn + " " + (!employee.isActive ? "" : styles.danger)}
                        onClick={onActivate}>
                    {employee.isActive ? 'Deactivate' : 'Activate'}
                </button>
            </div>

        </div>
    );
}