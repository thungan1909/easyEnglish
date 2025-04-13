import { FaHeart, FaList, FaPlus } from "react-icons/fa";
import CActionButton from "../../../components/molecules/cActionButton/cActionButton";

const LessonActions = () => (
  <>
    <CActionButton
      title="Favorite"
      onClick={(e) => e.stopPropagation()}
      icon={<FaHeart />}
    />
    <CActionButton
      title="Add to waiting list"
      onClick={(e) => e.stopPropagation()}
      icon={<FaList />}
    />
    <CActionButton
      title="Add to playlist"
      onClick={(e) => e.stopPropagation()}
      icon={<FaPlus />}
    />
  </>
);

export default LessonActions;
