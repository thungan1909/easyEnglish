export type RoleId = {
    id: string;
}

export interface UserListQueryFilter {  
    status?: number | string;
    fullName?: string;
    email?: string;
    role?: RoleId[]
}

export interface QueryFilterOutputDTO extends UserListQueryFilter {
    status?: number;
}

export interface QueryFilterInputDTO extends UserListQueryFilter {
    status?: string;
    createDate?: string[];
}

export type ChangePasswordDataDTO  = {
    old_password: string;
    new_password: string;
}
