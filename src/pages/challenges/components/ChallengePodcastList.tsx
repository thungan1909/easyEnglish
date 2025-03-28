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
import { useEffect, useState } from "react";
import { LessonSubmissionResponse } from "../../../types/dtos/submission.dto";
import {
  getLessonByIdQuery,
  getLessonResultById,
} from "../../../apis/lesson.api";
import { useNavigate } from "react-router-dom";
import { LessonDTO } from "../../../types/dtos/lesson.dto";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { FaPlay } from "react-icons/fa";

export interface ChallengePodcastListProps {
  lessonList: string[]; //contains lessonID
}

const ChallengePodcastList = ({ lessonList }: ChallengePodcastListProps) => {
  const navigate = useNavigate();
  const [lessonResults, setLessonResults] = useState<
    Record<string, LessonSubmissionResponse>
  >({});
  const [lessonDetails, setLessonDetails] = useState<Record<string, LessonDTO>>(
    {}
  );

  const fetchLessonData = async () => {
    const results: Record<string, LessonSubmissionResponse> = {};
    const details: Record<string, LessonDTO> = {};

    await Promise.all(
      lessonList.map(async (lessonID) => {
        try {
          const lessonDetail = await getLessonByIdQuery.fn(lessonID);
          details[lessonID] = lessonDetail;
          const result = await getLessonResultById.fn(lessonID);
          results[lessonID] = result;
        } catch (error) {
          console.error(`Error fetching lesson result for ${lessonID}`, error);
        }
      })
    );
    setLessonResults(results);
    setLessonDetails(details);
  };
  useEffect(() => {
    if (lessonList?.length > 0) {
      fetchLessonData();
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
            {lessonList?.length > 0 ? (
              lessonList.map((lessonID) => {
                const lessonResult = lessonResults[lessonID];
                const lessonDetail = lessonDetails[lessonID];
                console.log(lessonDetail);
                return (
                  <TableRow key={lessonID}>
                    <TableCell align="center">
                      {lessonDetail ? lessonDetail.title : "-"}
                    </TableCell>
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
                              lessonDetail._id
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
