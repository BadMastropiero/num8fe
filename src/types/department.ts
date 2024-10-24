export type DepartmentMinAggregate = {
    id: number;
    name: string;
};

export type DepartmentHistoryMinAggregate = {
    department: {
        name: string;
    };
    startDate: string;
};