export type EmployeeMinAggregate = {
    id: number;
    firstName: string;
    lastName: string;
    hireDate: string;
    department?: {
        name: string;
    } | null;
};

export type Employee = {
    id: number;
    firstName: string;
    lastName: string;
    hireDate: string;
    department: {
        id: number;
        name: string;
    } | null;
    phone?: string | null;
    address?: string | null;
    isActive: boolean;
};