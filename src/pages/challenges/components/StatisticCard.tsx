import { Typography } from "@mui/material";
import clsx from "clsx";
import { JSX } from "react";
import formatNumber from "../../../utils/helpers/formatNumber";

export interface StatisticCardProps {
  icon: JSX.Element;
  value: number;
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
        "flex-1 flex items-center rounded-lg p-2 gap-2 shadow",
        bgColor
      )}
    >
      <div
        className={clsx(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          bgIconColor
        )}
      >
        {icon}
      </div>
      <div>
        <Typography
          sx={{
            typography: { xs: "body2", md: "body1" },
          }}
        >
          {formatNumber(value)}
        </Typography>
        {description && (
          <Typography
            sx={{
              typography: { xs: "caption", md: "body2" },
            }}
          >
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default StatisticCard;
