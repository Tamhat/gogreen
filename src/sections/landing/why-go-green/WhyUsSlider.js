"use client";

import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Grid,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { whyUsItems } from "./WhyUsItems";

import gogreenLogo from '/gogreenbooty.svg';

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import valves from "/assets/why-us/valves.jpg";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ProductCard } from "../products";
import { productItems } from "../products/ProductItem";

// import './styles/styles.module.css'

export default function WhyUsSlider() {
  const theme = useTheme();

  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {!downMd ? (
        <Card
          sx={{
            borderRadius: 8,
            overflow: "visible!important",
          }}
          className="whyUsSlider2"
        >
          <Splide
            aria-label="Why Go Green?"
            options={{
              autoplay: true,
              interval: 3000,
              type: "fade",
              rewind: true,
            }}
            className="letsTest"
          >
            {whyUsItems.map((item, index) => (
              <SplideSlide key={index} className="maingogreen">
                <CardContent sx={{ height: "100%" }} className="gogreen">
                  <Box>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        height: "100%",
                      }}
                      className="gogreencontain"
                    >
                      {/* GO Green */}
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={5}
                        lg={5}
                        xl={5}
                        className="subgocontain"
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="flex-start"
                        >
                          <img
                            src={"https://i.ibb.co/S3yqXPV/gogreenbooty.png"}
                            alt="Go-green-logo"
                            width={400}
                            height="auto"
                          />
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          className="gogreenimage"
                        >
                          <Image
                            src={item.goGreenSrc}
                            alt={item.goGreenAlt}
                            height={item?.gHeight ? item?.gHeight : 450}
                          />
                        </Box>
                        <Box>
                          <Box display="flex" justifyContent="center" mb={-2.5}>
                            <IconButton
                              sx={{
                                backgroundColor: theme.palette.success.main,
                                color: "white",
                                border: "2px solid white",
                                "&:hover": {
                                  backgroundColor: theme.palette.success.main,
                                  color: "white",
                                },
                              }}
                            >
                              <DoneIcon color="white" fontSize="small" />
                            </IconButton>
                          </Box>
                          <Card
                            sx={{
                              backgroundColor: theme.palette.primary.main,
                              color: "white",
                              py: 2,
                              px: 2,
                              borderRadius: 8,
                            }}
                            className="gogreenbtn"
                          >
                            <CardContent
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Typography
                                variant="h6"
                                color="inherit"
                                fontWeight="bold"
                                textAlign="center"
                              >
                                {item.goGreenDescription}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Box>
                      </Grid>
                      {/* Other Brands */}
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={5}
                        lg={5}
                        xl={5}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="space-between"
                        height="`100%"
                        className="subgocontain"
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height={100}
                          mt={5}
                        >
                          <Typography
                            variant="h4"
                            color="initial"
                            fontWeight="bold"
                            align="center"
                          >
                            OTHER BRANDS
                          </Typography>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height="100%"
                          className="gogreenimage"
                        >
                          <Image
                            src={item.othersSrc}
                            alt={item.othersAlt}
                            width={item?.oWidth ? item?.oWidth : "auto"}
                            height={item?.oHeight ? item?.oHeight : 350}
                          />
                        </Box>
                        <Box>
                          <Box display="flex" justifyContent="center" mb={-2.5}>
                            <IconButton
                              sx={{
                                backgroundColor: theme.palette.error.main,
                                color: "white",
                                border: "2px solid white",

                                "&:hover": {
                                  backgroundColor: theme.palette.error.main,
                                  color: "white",
                                },
                              }}
                            >
                              <CloseIcon color="white" fontSize="small" />
                            </IconButton>
                          </Box>
                          <Card
                            sx={{
                              backgroundColor: grey[300],
                              color: "white",
                              py: 2,
                              px: 3,
                              borderRadius: 8,
                              boxShadow: "none",
                            }}
                            className="gogreenbtn"
                          >
                            <CardContent
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Typography
                                variant="h6"
                                color="initial"
                                fontWeight="bold"
                                textAlign="center"
                              >
                                {item.othersDescription}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </SplideSlide>
            ))}

            <div className="splide__arrows" id="mainId">
              <Box
                component="button"
                className="splide__arrow splide__arrow--prev"
                id="sub1"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "& svg": {
                    fill: "#fff",
                  },
                }}
              >
                <NavigateNextIcon
                  color="text.secondary"
                  sx={{
                    fontSize: 14,
                    "& svg:hover": {
                      fill: theme.palette.success.main,
                    },
                  }}
                />
              </Box>
              <Box
                component="button"
                className="splide__arrow splide__arrow--next"
                id="sub2"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "& svg": {
                    fill: "#fff",
                  },
                }}
              >
                <NavigateNextIcon
                  color="text.secondary"
                  sx={{
                    fontSize: 14,
                    "& svg:hover": {
                      fill: theme.palette.success.main,
                    },
                  }}
                />
              </Box>
            </div>
          </Splide>


        </Card>
      ) : (
        <Card
          sx={{
            borderRadius: 8,
            overflow: "visible!important",
            boxShadow: "none",
          }}
          className="whyUsSlider2"
        >
          <Splide
            aria-label="Why Go Green?"
            options={{
              autoplay: true,
              interval: 3000,
              type: "fade",
              rewind: true,
            }}
            className="letsTest"
          >
            {whyUsItems.map((item, index) => (
              <SplideSlide key={index} className="maingogreen">
                <CardContent sx={{ height: "100%" }} className="gogreen">
                  <Box>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        height: "100%",
                      }}
                      className="gogreencontain"
                    >
                      {/* GO Green */}
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={5}
                        lg={5}
                        xl={5}
                        className="subgocontain"
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="flex-start"
                        >
                          <img
                            src={"https://i.ibb.co/S3yqXPV/gogreenbooty.png"}
                            alt="Go-green-logo"
                            width={250}
                            height="auto"
                          />
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          className="gogreenimage"
                        >
                          <Image
                            src={item.goGreenSrc}
                            alt={item.goGreenAlt}
                            height={item?.gHeight ? item?.gHeight : 350}
                          />
                        </Box>
                        <Box mx={5}>
                          <Box display="flex" justifyContent="center" mb={-2.5}>
                            <IconButton
                              sx={{
                                backgroundColor: theme.palette.success.main,
                                color: "white",
                                border: "2px solid white",
                                "&:hover": {
                                  backgroundColor: theme.palette.success.main,
                                  color: "white",
                                },
                              }}
                            >
                              <DoneIcon color="white" fontSize="small" />
                            </IconButton>
                          </Box>
                          <Card
                            sx={{
                              backgroundColor: theme.palette.primary.main,
                              color: "white",
                              py: 1,
                              px: 2,
                              borderRadius: 8,
                            }}
                            className="gogreenbtn"
                          >
                            <CardContent
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Typography
                                variant="h6"
                                color="inherit"
                                fontWeight="bold"
                                textAlign="center"
                                fontSize={14}
                              >
                                {item.goGreenDescription}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Box>
                      </Grid>
                      {/* Other Brands */}
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={5}
                        lg={5}
                        xl={5}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="space-between"
                        height="`100%"
                        className="subgocontain"
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height={100}
                          mt={5}
                        >
                          <Typography
                            variant="h4"
                            color="initial"
                            fontWeight="bold"
                            align="center"
                            fontSize={25}
                          >
                            OTHER BRANDS
                          </Typography>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height="100%"
                          className="gogreenimage"
                        >
                          <Image
                            src={item.othersSrc}
                            alt={item.othersAlt}
                            width={item?.oWidth ? item?.oWidth : "auto"}
                            height={item?.oHeight ? item?.oHeight : 350}
                          />
                        </Box>
                        <Box mx={5}>
                          <Box display="flex" justifyContent="center" mb={-2.5} >
                            <IconButton
                              sx={{
                                backgroundColor: theme.palette.error.main,
                                color: "white",
                                border: "2px solid white",

                                "&:hover": {
                                  backgroundColor: theme.palette.error.main,
                                  color: "white",
                                },
                              }}
                            >
                              <CloseIcon color="white" fontSize="small" />
                            </IconButton>
                          </Box>
                          <Card
                            sx={{
                              backgroundColor: grey[300],
                              color: "white",
                              py: 1,
                              px: 2,
                              borderRadius: 8,
                              boxShadow: "none",
                            }}
                            className="gogreenbtn"
                          >
                            <CardContent
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Typography
                               variant="h6"
                               color="black"
                               fontWeight="bold"
                               textAlign="center"
                               fontSize={14}
                              >
                                {item.othersDescription}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </SplideSlide>
            ))}

            <div className="splide__arrows" id="mainId">
              <Box
                component="button"
                className="splide__arrow splide__arrow--prev"
                id="sub1"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "& svg": {
                    fill: "#fff",
                  },
                }}
              >
                <NavigateNextIcon
                  color="text.secondary"
                  sx={{
                    fontSize: 14,
                    "& svg:hover": {
                      fill: theme.palette.success.main,
                    },
                  }}
                />
              </Box>
              <Box
                component="button"
                className="splide__arrow splide__arrow--next"
                id="sub2"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "& svg": {
                    fill: "#fff",
                  },
                }}
              >
                <NavigateNextIcon
                  color="text.secondary"
                  sx={{
                    fontSize: 14,
                    "& svg:hover": {
                      fill: theme.palette.success.main,
                    },
                  }}
                />
              </Box>
            </div>
          </Splide>
        </Card>
      )}
    </>
  );
}
