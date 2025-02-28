import { InputLabel, InputLabelOwnProps } from "@mui/material";

const CInputLabel = ({ children, ...rest }: InputLabelOwnProps) => {
  return (
    <InputLabel
      {...rest}
      sx={{
        fontFamily: "var(--font-family)",
      }}
    >
      {children}
    </InputLabel>
  );
};

export default CInputLabel;
