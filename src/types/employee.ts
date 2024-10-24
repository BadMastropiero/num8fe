export type EmployeeMinAggregate = {
    id: number;
    firstName: string;
    lastName: string;
    hireDate: string;
    department?: {
        name: string;
    } | null;
};