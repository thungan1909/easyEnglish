import {
  Chip,
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

export interface ChallengePodcastListProps {
  lessonList: LessonDTO[];
}

const ChallengePodcastList = ({ lessonList }: ChallengePodcastListProps) => {
  return (
    <>
      <Typography variant="h6">Lesson in this challenge</Typography>
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
            {lessonList?.map((item) => (
              <TableRow>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.progress || "-"}</TableCell>
                <TableCell align="center">{"100%"}</TableCell>
                <TableCell align="center">
                  <Chip label="Completed" color="success"></Chip>
                </TableCell>
                <TableCell align="center">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <FaPlay />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ChallengePodcastList;
