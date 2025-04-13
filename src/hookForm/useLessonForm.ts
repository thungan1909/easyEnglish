import { useForm } from "react-hook-form";
import { LessonSchema, TLessonSchema } from "../validation/lesson.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  exactPunctuationRegex,
  punctuationRegex,
  wordSplitterRegex,
} from "../constants/regex";

export const useLessonForm = (
  defaultValues: Partial<TLessonSchema>,
  onSubmitCallback: (data: TLessonSchema) => void
) => {
  const [lessonWords, setLessonWords] = useState<{
    withHint: string[];
    withoutHint: string[];
  }>({ withHint: [], withoutHint: [] });

  const [isHintValid, setIsHintValid] = useState(false);

  const {
    control,
    setValue,
    reset,
    watch,
    handleSubmit,
    formState: { isValid },
  } = useForm<TLessonSchema>({
    defaultValues: defaultValues,
    mode: "onChange",
    resolver: zodResolver(LessonSchema),
  });

  const lessonContent = watch("content");

  const generateWords = (withSuggestions: boolean) => {
    if (!lessonContent.trim()) return;

    const words = lessonContent
      .split(wordSplitterRegex)
      .filter((word) => word.trim() || punctuationRegex.test(word));

    const blankProbability = withSuggestions ? 0.6 : 0.9;

    const updatedWords = words.map((word) =>
      word.match(exactPunctuationRegex)
        ? word
        : Math.random() < blankProbability
        ? ""
        : word
    );
    setLessonWords((prev) => ({
      ...prev,
      [withSuggestions ? "withHint" : "withoutHint"]: updatedWords,
    }));

    setValue(
      withSuggestions ? "wordsWithHint" : "wordsWithoutHint",
      updatedWords,
      { shouldValidate: true }
    );
    setIsHintValid(true);
  };

  const onSubmit = async (data: TLessonSchema) => {
    onSubmitCallback?.(data);
  };

  useEffect(() => {
    if (lessonContent) {
      setIsHintValid(false);
    }
  }, [lessonContent]);

  const originalWords = lessonContent
    ?.split(wordSplitterRegex)
    .filter((word) => word.trim() || punctuationRegex.test(word));

  return {
    control,
    onSubmit,
    handleSubmit,
    isValid,
    setValue,
    reset,
    lessonWords,
    setLessonWords,
    isHintValid,
    generateWords,
    originalWords,
    lessonContent,
  };
};
