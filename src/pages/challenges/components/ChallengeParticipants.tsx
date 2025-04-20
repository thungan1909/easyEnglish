import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ChallengeParticipantDTO } from "../../../types/dtos/challenge.dto";
import { formatNumber } from "../../../utils/numberUtils";

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
          <TableHead style={{ backgroundColor: "var(--main-color)" }}>
            <TableRow>
              <TableCell align="center">Member Name</TableCell>
              <TableCell align="center">Total Score</TableCell>
              <TableCell align="center">Average Score </TableCell>
              <TableCell align="center">Average Accuracy (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {participants?.map((item, index) => (
              <TableRow key={item?.userId || index}>
                <TableCell align="center">
                  <div className="flex justify-center items-center gap-1">
                    <span>{index + 1}.</span>
                    {item.fullName || item.username}
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Typography>{formatNumber(item.totalScore)}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>{formatNumber(item.averageScore)}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>
                    {formatNumber(item.averageAccuracy)} %
                  </Typography>
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
