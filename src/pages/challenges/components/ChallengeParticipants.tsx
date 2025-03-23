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
import { FaMedal, FaPlay } from "react-icons/fa";
import { UserDTO } from "../../../types/dtos/user.dto";

export interface ChallengeParticipantsProps {
  participants: UserDTO[];
}

const ChallengeParticipants = ({
  participants,
}: ChallengeParticipantsProps) => {
  return (
    <>
      <Typography variant="h6">Lesson in this challenge</Typography>
      <TableContainer className="flex flex-col gap-4 rounded-2xl overflow-hidden shadow-lg">
        <Table className="rounded-2xl bg-white" aria-label="simple table">
          <TableHead className="bg-purple-300">
            <TableRow>
              <TableCell align="center">Fullname</TableCell>
              <TableCell align="center">User's point</TableCell>
              <TableCell align="center">Accuracy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {participants?.map((item, index) => (
              <TableRow key={item._id || index}>
                <TableCell align="center">
                  <div className="flex justify-center items-center gap-1">
                    <span>{index + 1}.</span>
                    {item.fullName}
                  </div>
                </TableCell>

                <TableCell align="center">
                  <Typography>100</Typography>
                </TableCell>
                <TableCell align="center">
                  <div className="flex justify-center items-center gap-1">
                    <Typography>100%</Typography>
                    <FaMedal className="text-yellow-500" size={18} />
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

export default ChallengeParticipants;
