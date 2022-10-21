import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

type Props = {
  name: string;
  label: string;
  required: boolean;
  type: string;
};

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#27AE60",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#27AE60",
    },
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    fontSize: 16,
    padding: "10px 12px",
  },
  label: {
    fontWeight: "bold",
  },
});

function StyledTextInput({ name, label, required, type }: Props) {
  return (
    <StyledTextField
      name={name}
      label={label}
      required={required}
      type={type}
      variant="standard"
    />
  );
}
export default StyledTextInput;
