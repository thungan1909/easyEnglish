import { Typography } from "@mui/material";
import { FaQuestionCircle } from "react-icons/fa";

const NoDataSection = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-gray-500 min-h-[240px] gap-2">
      <FaQuestionCircle size={48} />
      <Typography variant="h6">No lesson found</Typography>
    </div>
  );
};
export default NoDataSection;
