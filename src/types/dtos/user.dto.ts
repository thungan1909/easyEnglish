export interface UserDTO {
  id: string;
  username: string;
  email: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  avatarUrl?: string;
  fullName?: string;
}
