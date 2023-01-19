import { Box, TextField } from "@mui/material";
import customInputStyle from "./CustomInput.styles";

interface CustomInputProps {
  id?: string;
  label?: string;
  type?: string;
  name?: string;
  onChange?: any;
  value?: string;
  onKeyPress?: any;
  InputProps?: any;
  error?: any;
  required?: boolean;
  helperText?: string;
  sx?: any;
  placeholder?: string;
  disabled?: boolean;
}
const CustomInput = (props: CustomInputProps) => {
  const classes = customInputStyle;

  return (
    <Box>
      <TextField
        sx={props.sx ? props.sx : classes.textField}
        variant="filled"
        id={props.id}
        type={props.type}
        label={props.label}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        required={props.required}
        error={props.error}
        helperText={props.helperText}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    </Box>
  );
};

export default CustomInput;
