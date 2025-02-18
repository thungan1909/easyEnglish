export interface IUserCoreInfoDropdown {
    id?: string;
    code: string;
    name?: string;
}

export interface IUserInfoBase {
    userId: string;
    fullname: string;
    username: string;
    phoneNumber: string;
    email: string;
    dateOfBirth: string;
    avataImage?: string;
}

export interface BasicUserInfoDTO {
    english_name: string;
}