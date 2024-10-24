'use server'

import {sdk} from "@/graphql/client";
import { revalidatePath } from 'next/cache';

export async function activate(id: number) {
    const data = await sdk.ActivateEmployee({id});
    revalidatePath('/');
    revalidatePath(`/${id}`);
    return data;
}

export async function deactivate(id: number) {
    const data = await sdk.DeactivateEmployee({id});
    revalidatePath('/');
    revalidatePath(`/${id}`);
    return data;
}

export async function updateDepartment(id: number, departmentId: number) {
    const data = await sdk.UpdateEmployeeDepartment({id, departmentId});
    revalidatePath('/');
    revalidatePath(`/${id}`);
    return data;
}