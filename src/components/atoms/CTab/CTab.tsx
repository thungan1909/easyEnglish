import { Tabs, Tab } from "@mui/material";

export interface ITabOption {
  label?: string;
  value?: string;
}

export interface ITab {
  value: string;
  onChange?: (event: React.SyntheticEvent, value: string) => void;
  tabOptions?: ITabOption[];
}

const CTab = ({ value, onChange, tabOptions }: ITab) => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      centered
      sx={{
        "& .MuiTabs-indicator": {
          backgroundColor: "purple",
        },
      }}
    >
      {tabOptions?.map((tab) => (
        <Tab
          key={tab.value}
          label={tab.label}
          value={tab.value}
          sx={{
            "&.Mui-selected": {
              color: "purple",
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default CTab;
