"use client";
import Image from "next/image";

import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function FactItem({
  src,
  alt,
  imagePosition,
  heading,
  description,
}) {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      {imagePosition === "left" && (
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          display="flex"
          justifyContent="center"
        >
          <Image src={src} alt={alt} height={350} width={"auto"} />
        </Grid>
      )}

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box
          sx={{
            fontVariant: theme.typography.h5,
            typography: "h5",
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeightBold,
          }}
          color="initial"
          mb={2}
          //   color="initial"
        >
          {heading}
        </Box>
        <Typography
          variant="body1"
          color="initial"
          fontWeight="medium"
          sx={{
            lineHeight: 2.0,
          }}
        >
          {description}
        </Typography>
      </Grid>

      {imagePosition === "right" && (
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={6}
          xl={6}
          display="flex"
          justifyContent="center"
        >
          <Image src={src} alt={alt} height={350} width={"auto"} />
        </Grid>
      )}
    </Grid>
  );
}
