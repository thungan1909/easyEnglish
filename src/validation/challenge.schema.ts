import * as zod from "zod";
import {
  coinAwardChallengeMsg,
  coinFeeChallengeMsg,
  invalidChallengeLessonMsg,
  invalidChallengeTitleMsg,
  invalidLessonImageFileMsg,
} from "../constants/message/validationMsg";

export const ChallengeSchema = zod.object({
  title: zod.string().min(1, invalidChallengeTitleMsg),
  startDate: zod.date().optional(),
  endDate: zod.date().optional(),
  description: zod.string().optional(),
  coinFee: zod.number().min(0, coinFeeChallengeMsg).optional(),
  coinAward: zod.number().min(0, coinAwardChallengeMsg).optional(),
  imageFile: zod
    .union([
      zod.string().url({ message: invalidLessonImageFileMsg }),
      zod.instanceof(File, { message: invalidLessonImageFileMsg }),
    ])
    .optional(),
  lessons: zod.string().array().min(1, invalidChallengeLessonMsg),
});

export type TChallengeSchema = zod.infer<typeof ChallengeSchema>;
