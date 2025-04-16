import {
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import NoDataSection from "../../common-pages/NoDataSection";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { FaPlay } from "react-icons/fa";
import { useGetLessonByIdList } from "../../../hooks/lesson/get-lesson.hook";
import formatNumber from "../../../utils/helpers/formatNumber";

export interface ChallengePodcastListProps {
  lessonList: string[];
}

const ChallengePodcastList = ({ lessonList }: ChallengePodcastListProps) => {
  const navigate = useNavigate();
  const { data: lessonDataList } = useGetLessonByIdList(lessonList || []);

  return (
    <>
      <Typography variant="h6">Podcasts to Complete</Typography>
      <TableContainer className="flex flex-col gap-4 rounded-2xl overflow-hidden shadow-lg">
        <Table className="rounded-2xl bg-white" aria-label="simple table">
          <TableHead className="bg-purple-300">
            <TableRow>
              <TableCell align="center">Lesson Tittle</TableCell>
              <TableCell align="center">Your Score</TableCell>
              <TableCell align="center">Listening Accuracy (%)</TableCell>
              <TableCell align="center">Completion Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lessonDataList && lessonDataList.length > 0 ? (
              lessonDataList?.map((lesson) => (
                <TableRow key={lesson.lessonId}>
                  <TableCell align="center">{lesson.title}</TableCell>
                  <TableCell align="center">
                    {lesson.userSubmission
                      ? formatNumber(lesson.userSubmission.score)
                      : "-"}
                  </TableCell>
                  <TableCell align="center">
                    {lesson.userSubmission
                      ? formatNumber(lesson.userSubmission.accuracy) + " %"
                      : "-"}
                  </TableCell>
                  <TableCell align="center">
                    {lesson.userSubmission ? (
                      <Chip label="Completed" color="success" />
                    ) : (
                      <Chip label="Not Started" color="default" />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      className="flex justify-center bg-amber-300"
                      onClick={() =>
                        navigate(
                          ROUTES_CONSTANTS.LESSON.DETAIL.replace(
                            ":id",
                            lesson.lessonId
                          )
                        )
                      }
                    >
                      <FaPlay size={16} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <NoDataSection />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ChallengePodcastList;
