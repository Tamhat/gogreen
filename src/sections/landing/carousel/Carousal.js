"use client";
import Image from "next/image";

// splide
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

import carouselRect from "/assets/carousel/carousel_rect.png";
import { SlideItems } from "./SlideItem";

// mui
import { Typography, Box, Container, IconButton } from "@mui/material";
import Link from "next/link";
import { styled, useTheme, alpha } from "@mui/material/styles";

import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";

import useMediaQuery from "@mui/material/useMediaQuery";
import { ContactDialog } from "@/components/dialog";

import { useState } from "react";
import SvgPhoneIcon from "@/components/button/SvgPhoneIcon";

export default function Carousal() {
  const theme = useTheme();

  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));
  const downXs = useMediaQuery(theme.breakpoints.down("xs"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const slides = SlideItems();

  return (
    <>
      {!downMd ? (
        <>
          <ContactDialog
            open={open}
            handleClose={handleClose}
            sx={{ zIndex: "2400!important" }}
          />

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

            <Splide
              aria-label="My Favorite Images"
              hasTrack={true}
              options={{
                type: "fade",
                autoplay: true,
                interval: 3000,
                arrows: false,
                easing: "ease",
                perPage: 1,
                rewind: true,
                width: "100%",
                gap: "1px",
              }}
            >
              {slides.map((item, index) => (
                <SplideSlide key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      position: "relative",
                      flexDirection: downMd ? "column" : "row",
                      justifyContent: "space-between",
                      width: "100%",
                      height: downMd ? '87%' : "87%",
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
                              src={item.src}
                              alt={item.alt}
                              style={{
                                width: "100%",
                                height: "113%",
                              }}
                            />
                          </Box>
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box
                          display="block"
                          sx={{
                            width: "100%",
                          }}
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
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
                            width: "100%",
                          }}
                        >
                          {item.element}
                        </Box>
                      </>
                    )}
                  </Box>
                </SplideSlide>
              ))}
            </Splide>
          </Box>
        </>
      ) : (
        <>
          <ContactDialog
            open={open}
            handleClose={handleClose}
            sx={{ zIndex: "2400!important" }}
          />

          <Box maxWidth="100%">
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

            <Splide
              aria-label="My Favorite Images"
              hasTrack={true}
              options={{
                type: "fade",
                autoplay: true,
                interval: 3000,
                arrows: false,
                easing: "ease",
                perPage: 1,
                rewind: true,
                width: "100%",
                gap: "1px",
              }}
              sx={{marginTop: 100}}
            >
              {slides.map((item, index) => (
                <SplideSlide key={index} id="smController">
                  <Box
                    sx={{
                      display: "block!important",
                      position: "relative",
                      width: "100%",
                      background: `linear-gradient(45deg,  ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                      zIndex: 100,
                      overflow: "hidden",
                      textAlign: 'center',
                      fontSize: 28,
                    }}
                  >
                        <Box
                          display="block"
                          sx={{
                            width: "100%",
                          }}
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            style={{
                              width: "100%",
                              maxHeight: '521px',
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            padding: '100px 50px',
                            height: '400px!important',
                          }}
                        >
                          {item.element}
                        </Box>
                  </Box>
                </SplideSlide>
              ))}
            </Splide>
          </Box>
        </>
      )}
    </>
  );
}
