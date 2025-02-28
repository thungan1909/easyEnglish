import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const LessonDetail = () => {
  const { id } = useParams(); // Lấy id từ URL path, ví dụ: /lesson/:id

  return (
    <div className="flex items-center p-2 space-x-5" key={id}>
      <div className="flex flex-col space-y-4">
        <Typography variant="h6">12121212121212</Typography>
        <div className="text-xs text-gray-500 space-x-4.5 font-extralight"></div>
        <p className="line-clamp-2 font-light">
          Lấy giá trị của query parameter có tên là id từ query string Lấy giá
          trị của query parameter có tên là id từ query string
        </p>
      </div>
    </div>
  );
};

export default LessonDetail;
