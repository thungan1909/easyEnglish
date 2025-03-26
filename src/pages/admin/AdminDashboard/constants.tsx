import { FaBook, FaFlag, FaUsers } from "react-icons/fa";
import { IAdminStatisticCard } from "./types";

export const statisticCardList: IAdminStatisticCard[] = [
  {
    title: "Lesson",
    value: "12",
    icon: <FaBook size={32} />,
  },
  {
    title: "Challenge",
    value: "12",
    icon: <FaFlag size={32} />,
  },
  {
    title: "User",
    value: "12",
    icon: <FaUsers size={32} />,
  },
];
