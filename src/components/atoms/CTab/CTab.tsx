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
          backgroundColor: "var(--main-color)",
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
              color: "var(--main-color)",
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default CTab;
