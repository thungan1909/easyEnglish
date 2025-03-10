import { useLocation, useParams } from "react-router-dom";

const ListenLesson = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type"); // "hint" or "withoutHint"
  console.log("lessonIdlessonId", id, type);
  return (
    <div>
      Listening Page - ID: {id}, Type: {type}
    </div>
  );
};

export default ListenLesson;
