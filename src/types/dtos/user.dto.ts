export interface UserDTO {
  username: string;
  email: string;
  avatarUrl?: string;
  fullName?: string;
  birthDate?: Date;
  gender?: string;
  phoneNumber?: string;
  city?: string;
  district?: string;
  ward?: string;
  detailAddress?: string;
  university?: string;
  major?: string;
}

export interface UpdateUserDTO extends UserDTO {}

export interface UpdateUserAvatarDTO {
  avatarUrl: string | File;
}

export interface GetUserDTO extends UserDTO {
  id: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserResponse {}
export interface UpdateUserResponse extends UserResponse {}
export interface UpdateUserAvatarResponse extends UserResponse {}
export interface ChangePasswordResponse extends UserResponse {}
export interface ChangeEmailResponse extends UserResponse {}
