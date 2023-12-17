"use client";

import SvgPhoneIcon from "@/components/button/SvgPhoneIcon";
import { ContactDialog } from "@/components/dialog";
import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { useState } from "react";
import { MainHeroImg } from "./MainHeroImg";
import headerImg from "/assets/how-it-works/header.png";

export default function Carousal() {
  const theme = useTheme();

  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const slides = MainHeroImg();

  return (
    <>
      {!downLg ? (
        <>
          <ContactDialog open={open} handleClose={handleClose} />

          <Box maxWidth="100%">
          <IconButton
              onClick={() => setOpen(true)}
              sx={{
                position: "fixed",
                bottom: '110px',
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                right: 30,
                zIndex: 10,
                color: "inherit",
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.success.main,
                },
                zIndex: 2399,
              }}
              size="small"
            >
              <SvgPhoneIcon
                style={{
                  position: "relative",
                  left: 7,
                  top: 4,
                }}
              />
            </IconButton>
            
            {slides.map((item, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                    flexDirection: downMd ? "column" : "row",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "72vh",
                    background: `linear-gradient(45deg,  ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                    zIndex: 100,
                    overflow: "hidden",
                  }}
                >
                  {!downMd ? (
                    <>
                      <Box
                        display="flex"
                        justifyContent="center"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            width: "50vw",
                            height: "100%",
                          }}
                          className="box1-main"
                        >
                          {item.element}
                        </Box>
                        <Box
                          sx={{
                            maxWidth: "50vw",
                            maxHeight: "100%",
                          }}
                        >
                          <Image
                            src={headerImg}
                            alt={"alt"}
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </Box>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box
                        display="flex"
                        justifyContent="center"
                        sx={{
                          width: "55%",
                        }}
                      >
                        <Image
                          src={headerImg}
                          alt={"alt"}
                          style={{
                            width: "100%",
                            maxHeight: 500,
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "relative",
                          top: {
                            xs: "-70px",
                            sm: "-80px",
                            md: "30%",
                            lg: "40%",
                            xl: "40%",
                          },
                          width: "50%",
                        }}
                      >
                        {item.element}
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <>
          <ContactDialog open={open} handleClose={handleClose} />
          <Box>
          <IconButton
              onClick={() => setOpen(true)}
              sx={{
                position: "fixed",
                top: 550,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                right:35,
                zIndex: 10,
                color: "inherit",
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.success.main,
                },
                zIndex: 2399,
              }}
              size="small"
            >
              <SvgPhoneIcon
                style={{
                  position: "relative",
                  left: 7,
                  top: 4,
                }}
              />
            </IconButton>

            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: downMd && "column",
                justifyContent: "space-between",
                width: "100%",
                background: `linear-gradient(45deg,  ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                zIndex: 100,
                overflow: "hidden",
              }}
            >
              {/* Top Circle */}
              <Box
                sx={{
                  position: "absolute",
                  top: downMd ? "280px" : "-130px",
                  left: "-80px",
                  height: "250px",
                  width: "250px",
                  background: theme.palette.primary.light,
                  // backgroundColor: 'red',
                  borderRadius: "50%",
                  zIndex: -10,
                }}
              />

              {/* Bottom Circle */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-150px",
                  right: downMd ? "-60px" : "650px",
                  height: "250px",
                  width: "250px",
                  background: theme.palette.primary.light,
                  borderRadius: "50%",
                  zIndex: -10,
                }}
              />
              {downMd ? (
                <>
                  <Box
                    display="flex"
                    justifyContent="center"
                    sx={{
                      maxWidth: downMd ? "100%" : "70%",
                      width: downMd ? "100%" : "50%",
                      backgroundColor: theme.palette.white.light,
                    }}
                  >
                    <Image
                      src={headerImg}
                      alt="commercial offer"
                      height={"auto"}
                      width={downMd ? 483 : 300}
                    />
                  </Box>
                  <Box
                    sx={{
                      // position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      top: { xs: 0, sm: 0, md: 120, lg: 120 },
                      left: { xs: "40vw", sm: 60, md: "40vw", lg: 50 },
                      width: downMd ? "100%" : "40%",
                      padding: "150px 0 150px 0",
                      mt: -4,
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "25px", lineHeight: "40px!important" }}
                      variant="h4"
                      color="white"
                      fontWeight="bold"
                      align={"center"}
                      width={downMd && "70%"}
                    >
                      How it works
                    </Typography>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      position: "relative",
                      top: { sm: 120, md: 150, lg: 150 },
                      // left: { md: 10, lg: 40 },
                      width: "55%",
                    }}
                  >
                    <Typography
                      sx={{ mx: 4 }}
                      variant="h4"
                      color="white"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      We offer wholesale prices for large orders
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    sx={{
                      maxWidth: "70%",
                      width: "50%",
                      backgroundColor: theme.palette.white.light,
                    }}
                  >
                    <Image
                      src={headerImg}
                      alt="commercial offer"
                      height={"auto"}
                      width={300}
                    />
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
