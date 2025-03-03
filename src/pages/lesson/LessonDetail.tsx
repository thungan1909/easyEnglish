import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Lesson } from "../dashboard/types";
import { exLesson } from "../dashboard/const";
import CButton from "../../components/atoms/CButton/CButton";
import {
  FaAssistiveListeningSystems,
  FaBook,
  FaCalendar,
  FaCopyright,
  FaHeadphones,
} from "react-icons/fa";
import { FaEarListen, FaUserGroup } from "react-icons/fa6";

const LessonDetail = () => {
  const { id } = useParams(); // Lấy id từ URL path, ví dụ: /lesson/:id

  return (
    <div
      className="relative grid grid-cols-1 p-8 top-24 gap-8 md:grid-cols-2"
      key={id}
    >
      <div>
        <Typography variant="h5">{exLesson.title}</Typography>
        <Typography className="line-clamp-12 !mt-4" variant="body1">
          {exLesson.description}
        </Typography>
      </div>
      <div className="flex flex-col space-y-8  justify-center items-center">
        <div className="flex gap-8">
          <CButton startIcon={<FaBook />} textTransform="capitalize">
            Listen with suggest
          </CButton>
          <CButton startIcon={<FaHeadphones />} textTransform="capitalize">
            Listen without suggest
          </CButton>
        </div>
        <div className="items-center flex flex-col">
          <img src={exLesson.image} alt={exLesson.id} className="w-80 h-80" />
          <div className="flex border-b-blue-400 text-sm space-x-8 mt-4 p-2 border-t">
            <span className="flex items-center gap-2">
              <FaUserGroup />
              <Typography variant="body1">
                {exLesson.listens} listens
              </Typography>
            </span>
            <span className="flex items-center gap-2">
              <FaCopyright />
              <Typography>{exLesson.provider}</Typography>
            </span>
            <span className="flex items-center gap-2">
              <FaCalendar />
              <Typography>{exLesson.createDate}</Typography>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
