import { Lesson } from "./types";

interface LessonItemProps {
    lesson: Lesson;
  }

const LessonItem= ({lesson} : LessonItemProps) => {
    return(
        <div>
        <h3>{lesson.title}</h3>
        </div>
    )
}

export default LessonItem;