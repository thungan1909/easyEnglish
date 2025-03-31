import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FaMedal } from "react-icons/fa";
import { ChallengeParticipantDTO } from "../../../types/dtos/challenge.dto";
import formatNumber from "../../../utils/helpers/formatNumber";

export interface ChallengeParticipantsProps {
  participants: ChallengeParticipantDTO[];
}

const ChallengeParticipants = ({
  participants,
}: ChallengeParticipantsProps) => {
  return (
    <>
      <Typography variant="h6">Members Joined</Typography>
      <TableContainer className="flex flex-col gap-4 rounded-2xl overflow-hidden shadow-lg">
        <Table className="rounded-2xl bg-white" aria-label="simple table">
          <TableHead className="bg-purple-300">
            <TableRow>
              <TableCell align="center">Fullname</TableCell>
              <TableCell align="center">Average accuracy</TableCell>
              <TableCell align="center">Average point</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {participants?.map((item, index) => (
              <TableRow key={item.user._id || index}>
                <TableCell align="center">
                  <div className="flex justify-center items-center gap-1">
                    <span>{index + 1}.</span>
                    {item.user.fullName || item.user.username}
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Typography>
                    {formatNumber(item.averageAccuracy)} %
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <div className="flex justify-center items-center gap-1">
                    <Typography>{formatNumber(item.averageScore)}</Typography>
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
