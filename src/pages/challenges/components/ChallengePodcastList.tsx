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
import { LessonDTO } from "../../../types/dtos/lesson.dto";
import { FaPlay } from "react-icons/fa";
import NoDataSection from "../../common-pages/NoDataSection";
import { useEffect, useState } from "react";
import { LessonSubmissionResponse } from "../../../types/dtos/submission.dto";
import { getLessonResultById } from "../../../apis/lesson.api";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../routers/constants";

export interface ChallengePodcastListProps {
  lessonList: LessonDTO[];
}

const ChallengePodcastList = ({ lessonList }: ChallengePodcastListProps) => {
  const navigate = useNavigate();
  const [lessonResults, setLessonResults] = useState<
    Record<string, LessonSubmissionResponse>
  >({});

  useEffect(() => {
    const fetchLessonResults = async () => {
      const results: Record<string, LessonSubmissionResponse> = {};
      await Promise.all(
        lessonList.map(async (lesson) => {
          try {
            const result = await getLessonResultById.fn(lesson._id);
            results[lesson._id] = result;
          } catch (error) {
            console.error(
              `Error fetching lesson result for ${lesson._id}`,
              error
            );
          }
        })
      );
      setLessonResults(results);
    };

    if (lessonList.length > 0) {
      fetchLessonResults();
    }
  }, [lessonList]);

  return (
    <>
      <Typography variant="h6">Podcasts to Complete</Typography>
      <TableContainer className="flex flex-col gap-4 rounded-2xl overflow-hidden shadow-lg">
        <Table className="rounded-2xl bg-white" aria-label="simple table">
          <TableHead className="bg-purple-300">
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Your point</TableCell>
              <TableCell align="center">Accuracy</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Play</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lessonList.length > 0 ? (
              lessonList.map((lesson) => {
                const lessonResult = lessonResults[lesson._id];

                return (
                  <TableRow key={lesson._id}>
                    <TableCell align="center">{lesson.title}</TableCell>
                    <TableCell align="center">
                      {lessonResult ? lessonResult.score : "-"}
                    </TableCell>
                    <TableCell align="center">
                      {lessonResult ? `${lessonResult.accuracy}%` : "-"}
                    </TableCell>
                    <TableCell align="center">
                      {lessonResult ? (
                        <Chip label="Completed" color="success" />
                      ) : (
                        <Chip label="Not Started" color="default" />
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        className="flex justify-center bg-amber-300"
                        onClick={() => {
                          navigate(
                            ROUTES_CONSTANTS.LESSON.DETAIL.replace(
                              ":id",
                              lesson._id
                            )
                          );
                        }}
                      >
                        <FaPlay size={16} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })
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
