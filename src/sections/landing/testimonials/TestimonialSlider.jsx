"use client";

import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import testimonial1 from "/public/assets/testimonial/testimonial-1.png";
import "./review.css";

import Quote from "./Quote";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function TestimonialSlider({ testimonials }) {
  const theme = useTheme();

  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {!downMd ? (
        <Box className="reviewCard">
          <Splide
            options={{
              type: "fade",
              autoplay: true,
              interval: 3000,
              // arrows: false,
              easing: "ease",
              perPage: 1,
              rewind: true,
              width: "100%",
              gap: "1px",
            }}
            className="testimonial-controller"
          >
            {testimonials.length > 0
              ? testimonials.map((item, index) => {
                  const { name, company, quote, imgSrc, alt } = item;

                  return (
                    <SplideSlide key={index}>
                      <Card
                        sx={{
                          borderRadius: "32px",
                          height: downMd ? "700px" : "560px",
                        }}
                      >
                        <CardContent>
                          <Grid
                            container
                            display={"flex"}
                            justifyContent="center"
                            alignItems="center"
                            mt={23}
                          >
                            {/* Image */}
                            <Grid
                              item
                              xs={12}
                              sm={12}
                              md={6}
                              lg={6}
                              xl={6}
                              sx={{
                                // position: "relative",
                                // top: 0,
                                // left: 0,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundImage: `url(${imgSrc})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                              }}
                            >
                              <Box
                                width={"auto"}
                                height={200}
                                sx={{
                                  // borderLeft: '50px solid transparent',
                                  position: "relative",
                                  bottom: 0,
                                  left: 10,
                                  // top: 0,
                                  borderRight: "200px solid transparent",
                                  borderBottom: "170px solid white",
                                }}
                              >
                                <Box
                                  position="absolute"
                                  left={-119}
                                  bottom={-272}
                                  width={150}
                                  zIndex={1}
                                >
                                  <Typography
                                    variant="body2"
                                    color="initial"
                                    fontSize={12}
                                    fontWeight="bold"
                                  >
                                    {name}
                                  </Typography>
                                  <Typography
                                    variant="subtitle2"
                                    color="text.disabled"
                                    fontSize={12}
                                    fontWeight="medium"
                                  >
                                    {company}
                                  </Typography>
                                </Box>
                              </Box>

                              <Image
                                style={{ position: "absolute", zIndex: 0 }}
                                src={imgSrc}
                                alt={alt}
                                height={420}
                                width={"auto"}
                              />
                            </Grid>

                            {/* Quote */}
                            <Grid
                              item
                              xs={12}
                              sm={12}
                              md={6}
                              lg={6}
                              xl={6}
                              mt={downMd ? 10 : 0}
                            >
                              <Quote quoteText={quote} />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </SplideSlide>
                  );
                })
              : ""}
            <div className="splide__arrows">
              <Box
                component="button"
                className="splide__arrow splide__arrow--prev bb"
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
                className="splide__arrow splide__arrow--next ff"
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
        </Box>
      ) : (
        <Box className="reviewCard">
          <Splide
            options={{
              type: "fade",
              autoplay: true,
              interval: 3000,
              // arrows: false,
              easing: "ease",
              perPage: 1,
              rewind: true,
              width: "100%",
              gap: "1px",
            }}
            className="testimonial-controller"
          >
            {testimonials.length > 0
              ? testimonials.map((item, index) => {
                  const { name, company, quote, imgSrc, alt } = item;

                  return (
                    <SplideSlide key={index}>
                      <Card
                        sx={{
                          borderRadius: "32px",
                          height: downMd ? "700px" : "560px",
                        }}
                      >
                        <CardContent>
                          <Grid
                            container
                            display={"flex"}
                            justifyContent="center"
                            alignItems="center"
                            mt={10}
                          >
                            {/* Image */}
                            <Grid
                              item
                              xs={12}
                              sm={12}
                              md={6}
                              lg={6}
                              xl={6}
                              sx={{
                                // position: "relative",
                                // top: 0,
                                // left: 0,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundImage: `url(${imgSrc})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                              }}
                            >
                              <Box
                                width={"auto"}
                                height={200}
                                sx={{
                                  // borderLeft: '50px solid transparent',
                                  position: "relative",
                                  bottom: 0,
                                  left: 10,
                                  // top: 0,
                                  borderRight: "200px solid transparent",
                                  borderBottom: "170px solid white",
                                }}
                              >
                                <Box
                                  position="absolute"
                                  left={-58}
                                  bottom={-223}
                                  width={150}
                                  zIndex={1}
                                >
                                  <Typography
                                    variant="body2"
                                    color="initial"
                                    fontSize={12}
                                    fontWeight="bold"
                                  >
                                    {name}
                                  </Typography>
                                  <Typography
                                    variant="subtitle2"
                                    color="text.disabled"
                                    fontSize={12}
                                    fontWeight="medium"
                                  >
                                    {company}
                                  </Typography>
                                </Box>
                              </Box>

                              <Image
                                style={{ position: "absolute", zIndex: 0 }}
                                src={imgSrc}
                                alt={alt}
                                height={320}
                                width={"auto"}
                              />
                            </Grid>

                            {/* Quote */}
                            <Grid
                              item
                              xs={12}
                              sm={12}
                              md={6}
                              lg={6}
                              xl={6}
                              mt={17}
                              mx={5}
                            >
                              <Quote quoteText={quote} />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </SplideSlide>
                  );
                })
              : ""}
            <div className="splide__arrows">
              <Box
                component="button"
                className="splide__arrow splide__arrow--prev bb"
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
                className="splide__arrow splide__arrow--next ff"
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
        </Box>
      )}
    </>
  );
}
