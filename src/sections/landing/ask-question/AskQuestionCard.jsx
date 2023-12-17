import Image from "next/image";

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Container,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import StyledButton from "@/components/button/StyledButton";

import customerIcon from "/assets/ask-question/customer-support.png";

export default function AskQuestionCard() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box display="flex" flexDirection="column" alignItems="center" className="askQuestions">
      
      <Card
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: "32px",
          width: "100%",
      
        }}
        className="askQuestions1"
      >
        <CardContent sx={{ mt: 8,}}>
          <Typography
            variant="h6"
            color="text.primary"
            fontWeight="bold"
            align="center"
          >
            Got Questions?
          </Typography>

          <Typography
            variant="h6"
            color="text.primary"
            fontWeight="bold"
            align="center"
            mt={1}
          >
            A representative will respond to your message within 24 hours
          </Typography>

          <Box display="flex" justifyContent="center" mt={4} >
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                backgroundColor: "text.primary",
                borderRadius: "12px",
                boxShadow: theme.palette.primary.main,
                "& .MuiFilledInput-root": {
                  borderRadius: "12px",
                },

                "& ::placeholder": {
                  color: "text.secondary",
                  fontWeight: "bold",
                },
                "& :not(:placeholder-shown)": {
                  color: "text.secondary",
                  fontWeight: "bold",
                },
                color: "black",
                [theme.breakpoints.up("lg")]: {
                  width: 800,
                },
                [theme.breakpoints.up("md")]: {
                  width: 600,
                },
                [theme.breakpoints.down("md")]: {
                  width: 500,
                },
                [theme.breakpoints.down("sm")]: {
                  width: 400,
                },
              }}
              variant="filled"
              color="primary"
              placeholder="Type message..."
              className="inputField"
            />
          </Box>

          <Box display="flex" justifyContent="center" mt={2}>
            {!downMd?(
              <StyledButton
              variant="outlined"
              color="primary"
              sx={{
                "&:hover": {
                  color: theme.palette.primary.main,
                },
                wordSpacing: 3,
                py: 1,
              }}
            >
              Contact a go green booty representative
            </StyledButton>
            ):(<StyledButton
              variant="outlined"
              color="primary"
              sx={{
                "&:hover": {
                  color: theme.palette.primary.main,
                },
                wordSpacing: 3,
                py: 1,
                width:'267px',
                fontSize: 9,
                padding: '11px 12px'
              }}
            >
              Contact a go green booty representative
            </StyledButton>)}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
