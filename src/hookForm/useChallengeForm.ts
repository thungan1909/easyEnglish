import { useEffect, useMemo, useState } from "react";
import { useGetLessonList } from "../hooks/lesson/get-lesson.hook";
import {
  ChallengeSchema,
  TChallengeSchema,
} from "../validation/challenge.schema";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { notify } from "../utils/notify";
import { validateDateRange } from "../utils/helpers/periodDateValidation";

export const useChallengeForm = (
  defaultValues: Partial<TChallengeSchema>,
  onSubmitCallback: (data: TChallengeSchema) => void
) => {
  const currentDate = dayjs().toDate();

  const initialValues = {
    startDate: currentDate,
    endDate: currentDate,
    lessons: [],
    ...defaultValues,
  };

  const { data: lessonList = [] } = useGetLessonList({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLessons, setSelectedLessons] = useState<string[]>([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const {
    control,
    setValue,
    watch,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<TChallengeSchema>({
    defaultValues: initialValues,
    mode: "onChange",
    resolver: zodResolver(ChallengeSchema),
  });

  const filteredLessons = useMemo(() => {
    return lessonList.filter((lesson) =>
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [lessonList, searchTerm]);

  const toggleLessonSelection = (lessonId: string) => {
    setSelectedLessons((prev) =>
      prev.some((lesson) => lesson === lessonId)
        ? prev.filter((lesson) => lesson !== lessonId)
        : [...prev, lessonId]
    );
  };

  const handleToggleAll = () => {
    if (isAllSelected) {
      setSelectedLessons([]);
    } else {
      setSelectedLessons(lessonList.map((lesson) => lesson._id));
    }
    setIsAllSelected(!isAllSelected);
  };

  useEffect(() => {
    setValue("lessons", selectedLessons);
  }, [selectedLessons, setValue]);

  useEffect(() => {
    setIsAllSelected(
      lessonList.length > 0 && selectedLessons.length === lessonList.length
    );
  }, [selectedLessons, lessonList]);

  const onSubmit = async (data: TChallengeSchema) => {
    console.log("das;dl;welkfp");
    const startDate = watch("startDate");
    const endDate = watch("endDate");

    if (!startDate || !endDate) {
      notify.error("Start date and end date are required.");
      return;
    }
    if (!validateDateRange(startDate, endDate)) return;
    onSubmitCallback?.(data);
  };

  useEffect(() => {
    if (defaultValues) {
      if (defaultValues && Object.keys(defaultValues).length > 0) {
        reset({
          ...defaultValues,
          lessons: defaultValues.lessons || [],
        });

        setSelectedLessons(defaultValues.lessons || []);
      }
    }
  }, [defaultValues, reset]);

  return {
    control,
    onSubmit,
    handleSubmit,
    isValid,
    searchTerm,
    setSearchTerm,
    selectedLessons,
    filteredLessons,
    toggleLessonSelection,
    handleToggleAll,
    isAllSelected,
    setValue,
    reset,
  };
};
