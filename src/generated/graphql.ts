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
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateEmployeeInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  departmentId?: InputMaybe<Scalars['Int']['input']>;
  firstName: Scalars['String']['input'];
  hireDate: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type Department = {
  __typename?: 'Department';
  description?: Maybe<Scalars['String']['output']>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

export type Employee = {
  __typename?: 'Employee';
  address?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Department>;
  departmentId?: Maybe<Scalars['Int']['output']>;
  firstName: Scalars['String']['output'];
  hireDate: Scalars['String']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  lastName: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDepartment: Department;
  createEmployee: Employee;
  removeDepartment?: Maybe<Department>;
  removeEmployee?: Maybe<Employee>;
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
  __typename?: 'Query';
  getDepartment?: Maybe<Department>;
  getDepartments: Array<Maybe<Department>>;
  getEmployee?: Maybe<Employee>;
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
  id: Scalars['Int']['input'];
};

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeesQuery = { __typename?: 'Query', getEmployees: Array<{ __typename?: 'Employee', id?: number | null, firstName: string, lastName: string, phone?: string | null, address?: string | null, department?: { __typename?: 'Department', id?: number | null, name: string } | null } | null> };


export const GetEmployeesDocument = gql`
    query GetEmployees {
  getEmployees {
    id
    firstName
    lastName
    phone
    address
    department {
      id
      name
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const GetEmployeesDocumentString = print(GetEmployeesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetEmployees(variables?: GetEmployeesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetEmployeesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetEmployeesQuery>(GetEmployeesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEmployees', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;