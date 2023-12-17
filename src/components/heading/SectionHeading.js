"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

export default function SectionHeading({
  heading,
  headingSx,
  circleSx,
  circleColor,
  ...others
}) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      //   width="fit-content"
    >
      <Box width={"fit-content"} position="relative" {...others}>
        <Box
          height={70}
          width={70}
          sx={{
            position: "absolute",
            top: -25,
            left: 0,
            borderRadius: "50%",
            backgroundColor: alpha(circleColor, 0.2),
            ...circleSx,
          }}
        />
        {!downMd ? (
          <Typography
            variant="h3"
            color={circleColor}
            fontWeight="bold"
            fontSize={32}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ textTransform: "uppercase" }}
            {...headingSx}
          >
            {heading}
          </Typography>
        ) : (
          <Typography
            variant="h5"
            color={circleColor}
            fontWeight="bold"
            fontSize={18}
            display="flex"
            justifyContent="center"
            alignItems="center"
            lineHeight={1.9}
            sx={{ textTransform: "uppercase" }}
            {...headingSx}
          >
            {heading}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export function SectionSubHeading({
  heading,
  headingSx,
  circleSx,
  circleColor,
  ...others
}) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      //   width="fit-content"
    >
      <Box width={"fit-content"} position="relative" {...others}>
        {!downMd ? (
          <Typography
            variant="h4"
            color={circleColor}
            fontWeight="bold"
            fontSize={32}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ textTransform: "uppercase" }}
            {...headingSx}
          >
            {heading}
          </Typography>
        ) : (
          <Typography
            variant="h4"
            color={circleColor}
            fontWeight="bold"
            fontSize={15}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ textTransform: "uppercase" }}
            {...headingSx}
          >
            {heading}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
