export interface UserDTO {
  username: string;
  fullName?: string;
  email: string;
  phoneNumber?: string;
  birthDate?: Date;
  gender?: string;
  city?: string;
  district?: string;
  ward?: string;
  detailAddress?: string;
  university?: string;
  major?: string;
  avatarUrl: string;
}

// UpdateUserDTO now extends UserDTO but removes 'avatarUrl'
export type UpdateUserDTO = Omit<UserDTO, "avatarUrl">;

// Separate DTO for updating only the avatar
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
