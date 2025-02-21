import * as zod from "zod";

export const UserSignUpSchema = zod.object({
  username: zod.string().min(1, "Username is required"),
  password: zod.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: zod.string().min(6, "Please confirm your password"),
  email: zod.string().email("Invalid email format"),
});

export type TUserSignUpSchema = zod.infer<typeof UserSignUpSchema>;
