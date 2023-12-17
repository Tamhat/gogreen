"use client";

import { useState } from "react";

import ScrollToTop from "react-scroll-to-top";

// mui
import { Container, Grid, Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { lighten } from "@mui/material/styles";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// components
import SectionHeading from "@/components/heading/SectionHeading";
import { FactItem } from "@/sections/facts/fact";

// sections
import { Header } from "@/sections/facts/header";
import { ValuesCard } from "@/sections/about/values";
import { LearnMoreCard } from "@/sections/facts/learn-more";
import { learnMoreItems } from "@/sections/facts/learn-more/LearnMoreItems";

// imgs
import fact1 from "/assets/videos/8d9ecece041e3f7e4a15b1b106b5f2ba.gif";
import fact2 from "/assets/facts/fact-2.png";
import "../page.css";

export default function Facts() {
  const theme = useTheme();

  const [toTopBtnColor, setToTopBtnColor] = useState(
    theme.palette.primary.main
  );
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
   <>
   {!downLg? (<>
      <Header />
      <Container maxWidth="xl" className="subContainer6">
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
              onMouseEnter={() => setToTopBtnColor(theme.palette.success.main)}
              onMouseLeave={() => setToTopBtnColor(theme.palette.primary.main)}
            />
          </Grid>

          {/* Preserve our nature */}
          <Grid item xs={12} sm={12} md={12} lg={12} mt={2}>
            <SectionHeading
              heading="Preserve our nature"
              circleColor={theme.palette.primary.main}
              circleSx={{ height: 100, width: 100, left: -20 }}
              headingSx={{ fontWeight:900}}
            />
          </Grid>

          {/* Dynamic Section == START */}
          <Grid item xs={12} sm={12} md={12} lg={12} mt={10}>
            <FactItem
              imagePosition="right"
              src={fact1}
              alt={"Fact image"}
              heading={
                <Box>
                  Do you know how{" "}
                  <Box
                    component="span"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    paper
                  </Box>{" "}
                  is made?
                </Box>
              }
              description={`Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Corem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. Corem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. aliquet odio mattis. Corem ipsum dolor sit amet,consectetur `}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} mt={10}>
            <FactItem
              imagePosition="left"
              src={fact2}
              alt={"Fact image"}
              heading={
                <Box>
                  Why is{" "}
                  <Box
                    component="span"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    water
                  </Box>{" "}
                  the better option?
                </Box>
              }
              description={`Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Corem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. Corem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. aliquet odio mattis. Corem ipsum dolor sit amet,consectetur `}
            />
          </Grid>
          {/* Dynamic Section == END */}

          {/* Learn More */}
          <Grid item xs={12} sm={12} md={12} lg={12} mt={12} mb={8}>
            <SectionHeading
              heading="Learn More"
              circleColor={theme.palette.primary.main}
            />
          </Grid>

          {learnMoreItems.map((item, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} my={3} key={index}>
              <LearnMoreCard
                src={item.src}
                alt={item.alt}
                description={item.description}
              />
            </Grid>
          ))}

          <Grid item xs={12} sm={12} md={12} lg={12} mt={12} mb={8}></Grid>
        </Grid>
      </Container>
    </>):(
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
              onMouseEnter={() => setToTopBtnColor(theme.palette.success.main)}
              onMouseLeave={() => setToTopBtnColor(theme.palette.primary.main)}
            />
          </Grid>

          {/* Preserve our nature */}
          <Grid item xs={12} sm={12} md={12} lg={12} mt={12}>
            <SectionHeading
              heading="Preserve our nature"
              circleColor={theme.palette.primary.main}
              circleSx={{ height: 100, width: 100, left: -20 }}
            />
          </Grid>

          {/* Dynamic Section == START */}
          <Grid item xs={12} sm={12} md={12} lg={12} mt={10}>
            <FactItem
              imagePosition="right"
              src={fact1}
              alt={"Fact image"}
              heading={
                <Box>
                  Do you know how{" "}
                  <Box
                    component="span"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    paper
                  </Box>{" "}
                  is made?
                </Box>
              }
              description={`Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Corem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. Corem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. aliquet odio mattis. Corem ipsum dolor sit amet,consectetur `}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} mt={10}>
            <FactItem
              imagePosition="left"
              src={fact2}
              alt={"Fact image"}
              heading={
                <Box>
                  Why is{" "}
                  <Box
                    component="span"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    water
                  </Box>{" "}
                  the better option?
                </Box>
              }
              description={`Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Corem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. Corem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. aliquet odio mattis. Corem ipsum dolor sit amet,consectetur `}
            />
          </Grid>
          {/* Dynamic Section == END */}

          {/* Learn More */}
          <Grid item xs={12} sm={12} md={12} lg={12} mt={12} mb={8}>
            <SectionHeading
              heading="Learn More"
              circleColor={theme.palette.primary.main}
            />
          </Grid>

          {learnMoreItems.map((item, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} my={3} key={index}>
              <LearnMoreCard
                src={item.src}
                alt={item.alt}
                description={item.description}
              />
            </Grid>
          ))}

          <Grid item xs={12} sm={12} md={12} lg={12} mt={12} mb={8}></Grid>
        </Grid>
      </Container>
    </>
    )}</>
  );
}
