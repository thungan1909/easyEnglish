import { Tabs, Tab } from "@mui/material";

export interface ITab {
  value: any;
  onChange?: (event: React.SyntheticEvent, value: any) => void;
}

const CTab = ({ value, onChange }: ITab) => {
  return (
    <Tabs value={value} onChange={onChange} centered>
      <Tab
        label="Lesson"
        value="lesson"
        sx={{
          color: "gray",
          "&.Mui-selected": { color: "purple" },
        }}
      />
      <Tab
        label="Challenge"
        value="challenge"
        sx={{
          color: "gray",
          "&.Mui-selected": { color: "purple" },
        }}
      />
    </Tabs>
  );
};

export default CTab;
