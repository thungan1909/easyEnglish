import * as zod from "zod";
import {
  invalidChallengeLessonMsg,
  invalidLessonTitleMsg,
} from "../constants/errorMessage";

export const CreateChallengeSchema = zod.object({
  title: zod.string().min(1, invalidLessonTitleMsg),
  startDate: zod.date(),
  endDate: zod.date(),
  description: zod.string().optional(),
  lessons: zod
    .array(
      zod.object({
        id: zod.string(),
        title: zod.string().min(1, invalidLessonTitleMsg),
      })
    )
    .min(1, invalidChallengeLessonMsg),
});

export type TCreateChallengeSchema = zod.infer<typeof CreateChallengeSchema>;
