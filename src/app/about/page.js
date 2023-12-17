"use client";

import { useState } from "react";
// mui
import { Container, Grid, Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { lighten } from "@mui/material/styles";

// components
import SectionHeading from "@/components/heading/SectionHeading";

// sections
import { Header } from "@/sections/about/header";
import { ValuesCard } from "@/sections/about/values";
import ScrollToTop from "react-scroll-to-top";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function About() {
  const theme = useTheme();

  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  const [toTopBtnColor, setToTopBtnColor] = useState(
    theme.palette.primary.main
  );

  return (
    <>
      {!downLg ? (
        <>
          <Header />
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {/* To the Top Button */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={10}>
                <ScrollToTop
                  smooth
                  top={200}
                  component={<ArrowUpwardIcon fontSize="large" color="white" />}
                  style={{
                    backgroundColor: toTopBtnColor,
                    borderRadius: "50%",
                    zIndex: 900,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "25px",
                  }}
                  onMouseEnter={() =>
                    setToTopBtnColor(theme.palette.success.main)
                  }
                  onMouseLeave={() =>
                    setToTopBtnColor(theme.palette.primary.main)
                  }
                />
              </Grid>
              {/* Who we are */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={12} mb={20}>
                <SectionHeading
                  heading="Who we are"
                  circleColor={theme.palette.primary.main}
                  circleSx={{ height: 100, width: 100, left: -20 }}
                  mb={4}
                />

                <Container
                  maxWidth="md"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography
                    variant="body1"
                    color="initial"
                    align="center"
                    fontWeight="medium"
                    sx={{
                      lineHeight: 2.5,
                    }}
                  >
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </Typography>
                </Container>
              </Grid>
            </Grid>
          </Container>

          {/* Why we created go green */}
          <Box mb={15}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                height: 250,
              }}
            >
              <Box
                sx={{
                  height: 600,
                  width: "100%",
                  background: `linear-gradient(45deg, ${theme.palette.success.main}, ${theme.palette.success.main})`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <SectionHeading
                    heading="Why we created go green booty"
                    headingSx={{
                      color: theme.palette.white.main,
                      textAlign: "center",
                    }}
                    circleColor={lighten(theme.palette.success.light, 0.9)}
                    circleSx={{ height: 100, width: 100, left: -20 }}
                    mb={3}
                  />
                </Box>
                <Box width={"70%"}>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    align="center"
                    mb={3}
                  >
                    We are on a mission to provide our customers with a touch of
                    luxury for their everyday routines by providing high quality
                    toiletries that contain a social and environmental element.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Values Card */}
          <Container disableGutters mt={12}>
            <Grid container spacing={3} mb={30}>
              <ValuesCard />
            </Grid>
          </Container>
        </>
      ) : (
        <>
          <Header />
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {/* To the Top Button */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={10}>
                <ScrollToTop
                  smooth
                  top={200}
                  component={<ArrowUpwardIcon fontSize="large" color="white" />}
                  style={{
                    backgroundColor: toTopBtnColor,
                    borderRadius: "50%",
                    zIndex: 900,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "25px",
                  }}
                  onMouseEnter={() =>
                    setToTopBtnColor(theme.palette.success.main)
                  }
                  onMouseLeave={() =>
                    setToTopBtnColor(theme.palette.primary.main)
                  }
                />
              </Grid>

              {/* Who we are */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={12} mb={20}>
                <SectionHeading
                  heading="Who we are"
                  circleColor={theme.palette.primary.main}
                  circleSx={{ height: 100, width: 100, left: -20 }}
                  mb={4}
                />

                <Container
                  maxWidth="md"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography
                    variant="body1"
                    color="initial"
                    align="center"
                    fontWeight="medium"
                    sx={{
                      lineHeight: 2.5,
                    }}
                  >
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </Typography>
                </Container>
              </Grid>
            </Grid>
          </Container>

          {/* Why we created go green */}
          <Box mb={15}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                height: 350,
              }}
            >
              <Box
                sx={{
                  height: 600,
                  width: "100%",
                  background: `linear-gradient(45deg, ${theme.palette.success.main}, ${theme.palette.success.main})`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <SectionHeading
                    heading="Why we created go green booty"
                    headingSx={{
                      color: theme.palette.white.main,
                      textAlign: "center",
                    }}
                    circleColor={lighten(theme.palette.success.light, 0.9)}
                    circleSx={{ height: 100, width: 100, left: -20 }}
                    mb={3}
                  />
                </Box>
                <Box width={"70%"}>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    align="center"
                    mb={3}
                  >
                    We are on a mission to provide our customers with a touch of
                    luxury for their everyday routines by providing high quality
                    toiletries that contain a social and environmental element.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Values Card */}
          <Container disableGutters mt={12}>
            <Grid container spacing={3} mb={30}>
              <ValuesCard />
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}
