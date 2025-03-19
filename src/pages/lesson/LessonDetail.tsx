import { Chip, Divider, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CButton from "../../components/atoms/CButton/CButton";
import {
  FaBook,
  FaCalendar,
  FaCheck,
  FaCopyright,
  FaHeadphones,
} from "react-icons/fa";
import { FaRepeat, FaUserGroup } from "react-icons/fa6";
import { useGetLessonById } from "../../hooks/lesson/get-lesson.hook";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import CBreadcrumbs from "../../components/atoms/CBreadcrumbs/CBreadcrumbs";
import { generateBreadcrumbs } from "../../utils/helpers/breadcrumbs";
import { useGetCurrentUser } from "../../hooks/user/user.hook";
import { useMemo } from "react";
import CIconTextItem from "../../components/molecules/cIconTextItem/cIconTextItem";

const LessonDetail = () => {
  const currentUser = useGetCurrentUser();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: lesson } = useGetLessonById(id ?? "");

  const {
    _id,
    code,
    title,
    description,
    listenCount,
    source,
    createdAt,
    imageFile,
  } = lesson || {};

  const handleListen = (type: "hint" | "withoutHint") => {
    if (!_id) return;

    navigate({
      pathname: ROUTES_CONSTANTS.LESSON.LISTEN.TYPE.BASE.replace(":id", _id),
      search: `?type=${type}`,
    });
  };

  const handleViewResultLesson = () => {
    if (!_id) return;
    navigate({
      pathname: ROUTES_CONSTANTS.LESSON.LISTEN.RESULT.replace(":id", _id),
    });
  };

  const isListen = useMemo(
    () => currentUser?.listenedLessons?.some((item) => item.lesson === _id),
    [currentUser, _id]
  );

  return (
    <div className="flex md:flex-row flex-col my-24 mx-4 md:m-24 gap-8 justify-between">
      <div className="flex flex-col gap-4">
        <CBreadcrumbs
          menuItem={generateBreadcrumbs("lesson", {
            id: _id,
            title: title,
          })}
        />
        <Chip label={code || "Code"} variant="outlined" className="w-fit" />
        <Typography variant="h5">{title || "Title"}</Typography>
        <Typography className="line-clamp-12" variant="body1">
          {description || "No data"}
        </Typography>
      </div>

      <div className="flex flex-col space-y-8  justify-center items-center">
        <div className="flex gap-8">
          {isListen ? (
            <>
              <CButton
                startIcon={<FaCheck />}
                variant="outlined"
                textTransform="capitalize"
                className="w-[150px]"
                isRounded
                onClick={handleViewResultLesson}
              >
                View results
              </CButton>
              <CButton
                startIcon={<FaRepeat />}
                textTransform="capitalize"
                className="w-[150px]"
                isRounded
                onClick={() => handleListen("withoutHint")}
              >
                Revenge
              </CButton>
            </>
          ) : (
            <>
              <CButton
                startIcon={<FaBook />}
                variant="outlined"
                className="!px-4"
                textTransform="capitalize"
                isRounded
                onClick={() => handleListen("hint")}
              >
                Listen with hint
              </CButton>
              <CButton
                startIcon={<FaHeadphones />}
                textTransform="capitalize"
                className="!px-4"
                isRounded
                onClick={() => handleListen("withoutHint")}
              >
                Listen without hint
              </CButton>
            </>
          )}
        </div>

        <div className="flex flex-col items-center ">
          <img
            src={typeof imageFile === "string" ? imageFile : ""}
            alt={title || "Lesson Image"}
            className="w-80 h-80 rounded-2xl"
          />

          <div className="flex flex-col mt-4 text-gray-500 w-full gap-4">
            <Divider />
            <div className="flex justify-between">
              <CIconTextItem
                icon={FaUserGroup}
                value={listenCount ?? 0}
                label={listenCount && listenCount > 1 ? "listens" : "listen"}
              />
              <CIconTextItem icon={FaCopyright} value={source || "Unknown"} />
            </div>
            <CIconTextItem
              icon={FaCalendar}
              iconSize={18}
              value={
                createdAt ? new Date(createdAt).toLocaleString("vi-VN") : ""
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
