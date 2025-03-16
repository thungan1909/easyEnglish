import { SxProps, Theme, Typography } from "@mui/material";

const ChallengeInfoItem = ({
  icon: Icon,
  value,
  label,
  color,
}: {
  icon: React.ElementType;
  value: string | number;
  label?: string;
  color?: string;
}) => (
  <div className="flex flex-row gap-1 items-center">
    <Icon />
    <span color={color} className="text-center">
      {value}
    </span>
    {label && <span>{label}</span>}
  </div>
);

export default ChallengeInfoItem;
