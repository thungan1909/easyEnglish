import { FaHeart, FaList, FaPlus } from "react-icons/fa";
import CButton from "../../components/atoms/CButton/CButton";
import { exampleLessons } from "../dashboard/const";
import { Divider, Typography } from "@mui/material";
import LessonItem from "./LessonItem";

const LessonList = () => {
  return (
    <div className="relative w-[800px] top-32 left-20">
      <ul className="flex space-x-6 mb-8">
        <li className="text-purple-500 cursor-pointer ">All Lessons</li>
        <li>My Uploads</li>
        <li>Ongoing Lessons</li>
        <li>Completed Lessons</li>
      </ul>
      <div className="grid gap-3">
        {exampleLessons.map((lesson) => (
          <LessonItem lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default LessonList;
