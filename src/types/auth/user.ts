export enum UserUserRoleEnum {
  GUEST = "GUEST",
  ROLE_INDIVIDUAL = "ROLE_INDIVIDUAL",
  ROLE_AGENCY_USER = "ROLE_AGENCY_USER",
  ROLE_AGENCY_ADMIN = "ROLE_AGENCY_ADMIN",
  ROLE_PROVIDER_ADMIN = "ROLE_PROVIDER_ADMIN",
  ROLE_PORTAL_ADMIN = "ROLE_PORTAL_ADMIN",
}

export enum EUserRole {
  GUEST = "GUEST",
  INDIVIDUAL_USER = UserUserRoleEnum.ROLE_INDIVIDUAL,
}

export const RoleName = {};

export interface ICurrentUser {
  id: string;
  username: string;
  email?: string;
  //   role: EUserRole;
  //   phone?: string;
  //   user_agency_representative_approval?: boolean;
  //   accountBank?: string;
  //   accountNumber?: string;
  //   accountOwner?: string;
  //   agencyId?: number;
  //   agencyName?: string;
}
