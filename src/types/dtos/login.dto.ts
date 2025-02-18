import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { IOriginalResponse } from "./http";
import { RoleEntity } from "../entities/role.entity";
import { ScreenEntity } from "../entities/screen.entity";

export class LoginDataDTO {
  @IsNotEmpty({ message: "Username is required" })
  @MaxLength(50, {
    message: "Username must be less than 50 character",
  })
  username!: string;

  @IsNotEmpty({ message: "Password is required" })
  @MinLength(8, {
    message: "Password must be at least 8 character",
  })
  @MaxLength(255, {
    message: "Password must be less than 255 character",
  })
  password!: string;
}

export type PermissionLoginViewModel = {
  insert_uris: string[];
  select_uris: string[];
  update_uris: string[];
  delete_uris: string[];
  is_select: boolean;
  is_insert: boolean;
  is_update: boolean;
  is_delete: boolean;
  role: RoleEntity;
  screen: ScreenEntity;
};

export interface LoginOriginalResponse extends IOriginalResponse {
  data: {
    permissions: PermissionLoginViewModel[];
    roles: RoleEntity[];
  };
}
