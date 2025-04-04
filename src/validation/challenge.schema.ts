import * as zod from "zod";
import {
  invalidChallengeLessonMsg,
  invalidLessonImageFileMsg,
  invalidLessonTitleMsg,
} from "../constants/errorMessage";

export const ChallengeSchema = zod.object({
  title: zod.string().min(1, invalidLessonTitleMsg),
  startDate: zod.date().optional(),
  endDate: zod.date().optional(),
  description: zod.string().optional(),
  coinFee: zod
    .number()
    .min(0, { message: "Fee must be 0 or greater." })
    .optional(),
  coinAward: zod
    .number()
    .min(0, { message: "Award must be 0 or greater." })
    .optional(),
  imageFile: zod
    .union([
      zod.string().url({ message: invalidLessonImageFileMsg }),
      zod.instanceof(File, { message: invalidLessonImageFileMsg }),
    ])
    .optional(),
  lessons: zod
    .string()
    .array()

    // zod.object({
    //   // id: zod.string(),
    //   // title: zod.string().min(1, invalidLessonTitleMsg),
    // })
    //()
    .min(1, invalidChallengeLessonMsg),
});

export type TChallengeSchema = zod.infer<typeof ChallengeSchema>;
