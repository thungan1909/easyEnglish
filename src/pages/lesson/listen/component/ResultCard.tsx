import { Typography } from "@mui/material";
import { JSX } from "react";

const ResultCard = ({
  icon,
  title,
  content,
}: {
  icon: JSX.Element;
  title: string;
  content?: string[];
}) => (
  <div className="p-4 rounded-2xl shadow bg-white">
    <Typography variant="h6" className="flex items-center gap-2">
      {icon}
      <span>{title}</span>
    </Typography>
    <div className="mt-4">{content?.join(" ")}</div>
  </div>
);

export default ResultCard;
