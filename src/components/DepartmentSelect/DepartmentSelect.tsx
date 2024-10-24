'use client';

import {DepartmentMinAggregate} from "@/types/department";
import {updateDepartment} from "@/app/actions";
import componentStyles from "@/components/Components.module.css";
import styles from "./DepartmentSelect.module.css";
import {FormEvent, useState} from "react";
import {useFormStatus} from "react-dom";

interface DepartmentSelectProps {
    selected?: number;
    userId: number;
    departments: DepartmentMinAggregate[];
}

export function DepartmentSelect({selected, userId, departments}: DepartmentSelectProps) {
    const [selectedDepartment, setSelectedDepartment] = useState(selected);
    const {pending} = useFormStatus();

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedDepartment) return;
        if (!+selectedDepartment) return;
        await updateDepartment(userId, +selectedDepartment);
    }

    if (pending) {
        return <div>Loading...</div>;
    }
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <label htmlFor="department" className={styles.label}>Update department</label>
            <select name="department" className={styles.select} value={selectedDepartment} onChange={(e) => {
                const value = e.target.value;
                setSelectedDepartment(+value);
            }}>
                {departments.map((department) => (
                    <option key={department.id} value={department.id}>{department.name}</option>
                ))}
            </select>
            <button className={componentStyles.btn} type="submit">Update</button>
        </form>
    )
}