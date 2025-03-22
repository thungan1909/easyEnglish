import { Typography } from "@mui/material";
import clsx from "clsx";
import { JSX } from "react";

export interface StatisticCardProps {
  icon: JSX.Element;
  value: string;
  description?: string;
  mainColor?: "purple" | "orange" | "green" | "blue";
}

const StatisticCard = ({
  icon,
  value,
  description,
  mainColor = "blue",
}: StatisticCardProps) => {
  const bgColor = {
    purple: "bg-purple-100 text-purple-900",
    orange: "bg-orange-100 text-orange-900",
    green: "bg-green-100 text-green-900",
    blue: "bg-blue-100 text-blue-900",
  }[mainColor];

  const bgIconColor = {
    purple: "bg-purple-300",
    orange: "bg-orange-300",
    green: "bg-green-300",
    blue: "bg-blue-300",
  }[mainColor];

  return (
    <div
      className={clsx(
        "flex-1 flex items-center rounded-lg p-4 gap-4 shadow",
        bgColor
      )}
    >
      <div
        className={clsx(
          "w-14 h-14 rounded-lg flex items-center justify-center",
          bgIconColor
        )}
      >
        {icon}
      </div>
      <div>
        <Typography className="font-bold">{value}</Typography>
        {description && (
          <Typography variant="body2" className="opacity-70">
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default StatisticCard;
