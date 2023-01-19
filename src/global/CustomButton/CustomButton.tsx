import { Box, Button, CircularProgress } from "@mui/material";
import customButtonStyle from "./CustomButton.styles";

interface CustomProps {
  label?: string | JSX.Element;
  onClick: Function;
  loading?: boolean;
  customClasses?: any;
  icon?: JSX.Element;
  disabled?: boolean;
}
const CustomButton = (props: CustomProps) => {
  const classes = customButtonStyle;

  const processing = props.loading ? props.loading : false;
  const disabled = props.disabled ? props.disabled : false;
  return (
    <Button
      startIcon={props.icon}
      onClick={(event: any) => props.onClick(event)}
      disabled={processing || disabled}
      sx={
        props.customClasses
          ? [classes.btnStyle, props.customClasses]
          : classes.btnStyle
      }
    >
      {processing ? (
        <CircularProgress sx={classes.loadingStyle} />
      ) : (
        props.label
      )}
    </Button>
  );
};

export default CustomButton;
