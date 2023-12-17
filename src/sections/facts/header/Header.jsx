"use client";

import Image from "next/image";
import Link from "next/link";

import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";


import SvgPhoneIcon from "@/components/button/SvgPhoneIcon";
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

// import StyledButton from "@/components/button/StyledButton";

import headerImg from "/public/assets/facts/header.png";
import { ContactDialog } from "@/components/dialog";
import { useState } from "react";

export default function Header() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      {!downLg ? (
        <>
          <ContactDialog open={open} handleClose={handleClose} />
          <Box>
          <IconButton
              onClick={() => setOpen(true)}
              sx={{
                position: "fixed",
                top: downMd ? 250 : 550,
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

            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: downMd && "column",
                justifyContent: "space-between",
                width: "100%",
                height: downMd ? 700 : 500,
                background: `linear-gradient(45deg,  ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                zIndex: 100,
                overflow: "hidden",
              }}
            >
              {/* Top Circle */}
              <Box
                sx={{
                  position: "absolute",
                  top: downMd ? "350px" : "-130px",
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
                  right: downMd ? "-60px" : "550px",
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
                      maxWidth: "100%",
                      width: downMd ? "100%" : "50%",
                    }}
                  >
                    <Image
                      src={headerImg}
                      alt="Facts Image"
                      height={400}
                      width={"100%"}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      top: { xs: -110, sm: -110, md: 500, lg: 200 },
                      // left: { sm: 120, md: 10, lg: 50 },

                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{ mb: 4 }}
                      variant="h4"
                      color="white"
                      fontWeight="bold"
                      align="center"
                    >
                      Facts
                    </Typography>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      position: "relative",
                      top: { sm: 120, md: 120, lg: 160 },
                      left: { md: 10, lg: 50 },
                      width: "40%",
                    }}
                  >
                    <Typography
                      sx={{ mb: 4 }}
                      variant="h4"
                      color="white"
                      fontWeight="bold"
                      align="center"
                      mt={10}
                    >
                      Facts
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    sx={{
                      maxWidth: "100%",
                      width: "50%",
                    }}
                  >
                    <Image
                      src={headerImg}
                      alt="Facts Image"
                      height={500}
                      width={"100%"}
                    />
                  </Box>
                </>
              )}
            </Box>
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
                height: downMd ? 700 : 400,
                background: `linear-gradient(45deg,  ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                zIndex: 100,
                overflow: "hidden",
              }}
            >
              {/* Top Circle */}
              <Box
                sx={{
                  position: "absolute",
                  top: downMd ? "350px" : "-130px",
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
                  right: downMd ? "-60px" : "550px",
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
                      maxWidth: "100%",
                      width: downMd ? "100%" : "50%",
                    }}
                  >
                    <Image
                      src={headerImg}
                      alt="Facts Image"
                      height={400}
                      width={"100%"}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      top: { xs: -110, sm: -110, md: 500, lg: 200 },
                      // left: { sm: 120, md: 10, lg: 50 },

                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{ mb: 4 }}
                      variant="h4"
                      color="white"
                      fontWeight="bold"
                      align="center"
                    >
                      Facts
                    </Typography>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      position: "relative",
                      top: { sm: 120, md: 120, lg: 160 },
                      left: { md: 10, lg: 50 },
                      width: "40%",
                    }}
                  >
                    <Typography
                      sx={{ mb: 4 }}
                      variant="h4"
                      color="white"
                      fontWeight="bold"
                      align="center"
                    >
                      Facts
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    sx={{
                      maxWidth: "100%",
                      width: "50%",
                    }}
                  >
                    <Image
                      src={headerImg}
                      alt="Facts Image"
                      height={400}
                      width={"100%"}
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
