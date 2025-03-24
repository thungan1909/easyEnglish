import { FaHeart, FaList, FaPlus } from "react-icons/fa";
import ActionButton from "./ActionButton";

const LessonActions = () => (
  <>
    <ActionButton
      title="Favorite"
      onClick={(e) => e.stopPropagation()}
      icon={<FaHeart />}
    />
    <ActionButton
      title="Add to waiting list"
      onClick={(e) => e.stopPropagation()}
      icon={<FaList />}
    />
    <ActionButton
      title="Add to playlist"
      onClick={(e) => e.stopPropagation()}
      icon={<FaPlus />}
    />
  </>
);

export default LessonActions;
