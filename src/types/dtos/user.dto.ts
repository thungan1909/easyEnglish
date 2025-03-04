export interface UserDTO {
  id: string;
  name: string;
  email: string;
  role: string; // Example: "admin" | "user"
  avatarUrl?: string;
}
