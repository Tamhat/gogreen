"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  SvgIcon,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

import SvgRollerWheel from "./SvgRollerWheel";
import StyledButton from "@/components/button/StyledButton";

export default function PrizeDraw() {
  const theme = useTheme();

  const [buttonColor, setButtonColor] = useState("#fff");

  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 5,
        py: 3,
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0px",
          left: "-60px",
          height: "150px",
          width: "150px",
          background: alpha(theme.palette.primary.light, 0.55),
          borderRadius: "50%",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "0px",
          right: "-60px",
          height: "150px",
          width: "150px",
          background: alpha(theme.palette.primary.light, 0.55),
          borderRadius: "50%",
          zIndex: -1,
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          mb={2}
          variant="h6"
          color="white"
          fontWeight="light"
          align="center"
          fontSize={{sm:24, xl:33}}
        >
          Make the switch and enter a drawing<br/> to win{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            $1000
          </Box>
        </Typography>
        <StyledButton
          sx={{
            width: "15em",
            py: 1,
            "&:hover": { color: theme.palette.primary.main },
          }}
          startIcon={<SvgRollerWheel color={buttonColor} />}
          variant="outlined"
          // color="primary"
          onMouseEnter={() => setButtonColor(theme.palette.primary.main)}
          onMouseLeave={() => setButtonColor("#fff")}
          size="large"
          align="center"
        >
          Enter Draw
        </StyledButton>
      </CardContent>
    </Card>
  );
}
