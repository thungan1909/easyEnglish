import { Typography } from "@mui/material";

const ProgressBarSection = () => {
  return (
    <div className="rounded-2xl shadow flex flex-col p-4 bg-white">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Typography className="text-amber-400" variant="h6">
            0.21
          </Typography>
          <Typography variant="body2">Points</Typography>
        </div>
        <div className="flex flex-col">
          <Typography className="text-green-400" variant="h6">
            100%
          </Typography>
          <Typography variant="body2">Accuracy</Typography>
        </div>
      </div>
      <div className="md:w-full bg-gray-400 rounded-full h-2.5 mt-2">
        <div
          className="bg-green-400 h-2.5 rounded-full"
          style={{ width: `${90}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBarSection;
