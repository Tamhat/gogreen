import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button, { shouldForwardProp: (prop) => prop })(
  ({ theme }) => ({
    color: "white",
    borderColor: "white",
    "&:hover": {
      borderColor: "white",
      backgroundColor: "white",
      color: "transparent",
    },
  })
);

export default StyledButton;
