import { Typography } from "@mui/material";

export interface IPageTitle {
  title?: string;
  titleDescription?: string;
}

const CPageTitle = ({ title, titleDescription }: IPageTitle) => {
  return (
    <div>
      <Typography variant="h6" textTransform="uppercase">
        {title}
      </Typography>
      <Typography variant="caption" className="text-gray-400">
        {titleDescription}
      </Typography>
    </div>
  );
};

export default CPageTitle;
