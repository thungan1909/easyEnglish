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
  ORGANIZATION_USER = UserUserRoleEnum.ROLE_AGENCY_USER,
  ORGANIZATION_ADMIN = UserUserRoleEnum.ROLE_AGENCY_ADMIN,
  PROVIDER_ADMIN = UserUserRoleEnum.ROLE_PROVIDER_ADMIN,
  PORTAL_ADMIN = UserUserRoleEnum.ROLE_PORTAL_ADMIN,
}

export const RoleName = {
  [EUserRole.PROVIDER_ADMIN]: "제공기관 관리자",
  [EUserRole.PORTAL_ADMIN]: "포털 관리자",
};

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
