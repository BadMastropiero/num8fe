import { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateDepartmentInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateEmployeeInput = {
  address: InputMaybe<Scalars['String']['input']>;
  departmentId: Scalars['Int']['input'];
  firstName: Scalars['String']['input'];
  hireDate: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  lastName: Scalars['String']['input'];
  phone: InputMaybe<Scalars['String']['input']>;
};

export type Department = {
  __typename: 'Department';
  description: Maybe<Scalars['String']['output']>;
  employees: Maybe<Array<Maybe<Employee>>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Employee = {
  __typename: 'Employee';
  address: Maybe<Scalars['String']['output']>;
  department: Maybe<Department>;
  departmentId: Scalars['Int']['output'];
  firstName: Scalars['String']['output'];
  hireDate: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  phone: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename: 'Mutation';
  createDepartment: Department;
  createEmployee: Employee;
  removeDepartment: Maybe<Department>;
  removeEmployee: Maybe<Employee>;
  updateDepartment: Department;
  updateEmployee: Employee;
};


export type MutationCreateDepartmentArgs = {
  createDepartmentInput: CreateDepartmentInput;
};


export type MutationCreateEmployeeArgs = {
  createEmployeeInput: CreateEmployeeInput;
};


export type MutationRemoveDepartmentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveEmployeeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateDepartmentArgs = {
  updateDepartmentInput: UpdateDepartmentInput;
};


export type MutationUpdateEmployeeArgs = {
  updateEmployeeInput: UpdateEmployeeInput;
};

export type Query = {
  __typename: 'Query';
  getDepartment: Maybe<Department>;
  getDepartments: Array<Maybe<Department>>;
  getEmployee: Maybe<Employee>;
  getEmployees: Array<Maybe<Employee>>;
};


export type QueryGetDepartmentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetEmployeeArgs = {
  id: Scalars['Int']['input'];
};

export type UpdateDepartmentInput = {
  id: Scalars['Int']['input'];
};

export type UpdateEmployeeInput = {
  address: InputMaybe<Scalars['String']['input']>;
  departmentId: InputMaybe<Scalars['Int']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  hireDate: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
};

export type ActivateEmployeeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ActivateEmployeeMutation = { __typename: 'Mutation', updateEmployee: { __typename: 'Employee', id: number } };

export type DeactivateEmployeeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeactivateEmployeeMutation = { __typename: 'Mutation', updateEmployee: { __typename: 'Employee', id: number } };

export type UpdateEmployeeDepartmentMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  departmentId: Scalars['Int']['input'];
}>;


export type UpdateEmployeeDepartmentMutation = { __typename: 'Mutation', updateEmployee: { __typename: 'Employee', id: number } };

export type GetDepartmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDepartmentsQuery = { __typename: 'Query', getDepartments: Array<{ __typename: 'Department', id: number, name: string } | null> };

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeesQuery = { __typename: 'Query', getEmployees: Array<{ __typename: 'Employee', id: number, firstName: string, lastName: string, hireDate: string, department: { __typename: 'Department', name: string } | null } | null> };

export type GetEmployeeQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetEmployeeQuery = { __typename: 'Query', getEmployee: { __typename: 'Employee', id: number, firstName: string, lastName: string, hireDate: string, address: string | null, phone: string | null, isActive: boolean, department: { __typename: 'Department', id: number, name: string } | null } | null };


export const ActivateEmployeeDocument = gql`
    mutation ActivateEmployee($id: Int!) {
  updateEmployee(updateEmployeeInput: {id: $id, isActive: true}) {
    id
  }
}
    `;
export const DeactivateEmployeeDocument = gql`
    mutation DeactivateEmployee($id: Int!) {
  updateEmployee(updateEmployeeInput: {id: $id, isActive: false}) {
    id
  }
}
    `;
export const UpdateEmployeeDepartmentDocument = gql`
    mutation UpdateEmployeeDepartment($id: Int!, $departmentId: Int!) {
  updateEmployee(updateEmployeeInput: {id: $id, departmentId: $departmentId}) {
    id
  }
}
    `;
export const GetDepartmentsDocument = gql`
    query GetDepartments {
  getDepartments {
    id
    name
  }
}
    `;
export const GetEmployeesDocument = gql`
    query GetEmployees {
  getEmployees {
    id
    firstName
    lastName
    hireDate
    department {
      name
    }
  }
}
    `;
export const GetEmployeeDocument = gql`
    query GetEmployee($id: Int!) {
  getEmployee(id: $id) {
    id
    firstName
    lastName
    hireDate
    address
    phone
    isActive
    department {
      id
      name
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const ActivateEmployeeDocumentString = print(ActivateEmployeeDocument);
const DeactivateEmployeeDocumentString = print(DeactivateEmployeeDocument);
const UpdateEmployeeDepartmentDocumentString = print(UpdateEmployeeDepartmentDocument);
const GetDepartmentsDocumentString = print(GetDepartmentsDocument);
const GetEmployeesDocumentString = print(GetEmployeesDocument);
const GetEmployeeDocumentString = print(GetEmployeeDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ActivateEmployee(variables: ActivateEmployeeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ActivateEmployeeMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ActivateEmployeeMutation>(ActivateEmployeeDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ActivateEmployee', 'mutation', variables);
    },
    DeactivateEmployee(variables: DeactivateEmployeeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeactivateEmployeeMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeactivateEmployeeMutation>(DeactivateEmployeeDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeactivateEmployee', 'mutation', variables);
    },
    UpdateEmployeeDepartment(variables: UpdateEmployeeDepartmentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdateEmployeeDepartmentMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateEmployeeDepartmentMutation>(UpdateEmployeeDepartmentDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateEmployeeDepartment', 'mutation', variables);
    },
    GetDepartments(variables?: GetDepartmentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetDepartmentsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetDepartmentsQuery>(GetDepartmentsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetDepartments', 'query', variables);
    },
    GetEmployees(variables?: GetEmployeesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetEmployeesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetEmployeesQuery>(GetEmployeesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEmployees', 'query', variables);
    },
    GetEmployee(variables: GetEmployeeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetEmployeeQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetEmployeeQuery>(GetEmployeeDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEmployee', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;