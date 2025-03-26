import { Card, CardContent, Typography } from "@mui/material";
import { IAdminStatisticCard } from "../types";

export interface AdminStatisticCardProps {
  statisticCard: IAdminStatisticCard;
}

const AdminStatisticCard = ({ statisticCard }: AdminStatisticCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-1">
        {statisticCard.icon}
        <Typography variant="h6">{statisticCard.title}</Typography>
        <Typography>{statisticCard.value}</Typography>
      </CardContent>
    </Card>
  );
};
export default AdminStatisticCard;
