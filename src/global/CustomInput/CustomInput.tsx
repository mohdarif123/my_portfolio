import {
  Box,
  InputLabel,
  Stack,
  TextField,
  Typography,
  SxProps,
} from "@mui/material";
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
  const style = props.sx ?? classes.textField;
  const { error = null } = props;

  return (
    <Box>
      <Box mb={"5px"}>
        <Stack direction="row" spacing={1}>
          {props.required && (
            <Typography sx={classes.commentAsterisk}>*</Typography>
          )}
          <InputLabel sx={classes.nameField}>
            <Typography variant="h5">{props.label}</Typography>
          </InputLabel>
        </Stack>
      </Box>
      <TextField
        sx={style}
        variant="outlined"
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        required={props.required}
        {...(error && { error: true, helperText: error })}
        helperText={props.helperText}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    </Box>
  );
};

export default CustomInput;
