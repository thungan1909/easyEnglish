import * as zod from "zod";
import {
  invalidPasswordMsg,
  invalidUsernameMsg,
} from "../../constants/errorMessage";

export const UserSignInSchema = zod.object({
  username: zod.string().min(1, invalidUsernameMsg),
  password: zod.string().min(6, invalidPasswordMsg),
});

export type TUserSignInSchema = zod.infer<typeof UserSignInSchema>;
