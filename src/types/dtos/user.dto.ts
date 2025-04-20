import { TUserChangePasswordSchema } from "../../validation/user.schema";

// ─── Core User DTO ────────────────────────────────────────────────────────────

export interface UserDTO {
  _id: string;
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
  streak?: number;
  lastStreakDate?: Date;

  // Lesson history
  listenedLessons?: {
    lesson: string;
    listenedAt: string;
  }[];

  // Score system
  totalScore: number;
  weeklyScores: {
    weekStart: string;
    score: number;
  }[];
}

// ─── User Extensions and Modifications ────────────────────────────────────────

export type UpdateUserDTO = Omit<
  UserDTO,
  "avatarUrl" | "_id" | "totalScore" | "weeklyScores"
>;

export interface UpdateUserAvatarDTO {
  avatarUrl: string | File;
}

export interface GetUserDTO extends UserDTO {
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export type UserChangePasswordDTO = Omit<
  TUserChangePasswordSchema,
  "email" | "confirmPassword"
>;

// ─── API Responses ────────────────────────────────────────────────────────────

export interface UserResponse {}
export interface UpdateUserResponse extends UserResponse {}
export interface UpdateUserAvatarResponse extends UserResponse {}
export interface ChangePasswordResponse extends UserResponse {}
export interface ChangeEmailResponse extends UserResponse {}
