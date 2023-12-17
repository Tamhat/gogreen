"use client";

import Image from "next/image";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Link,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import gogreenLogo from "/gogreen-footer-logo.png";

import facebook from "/socials/facebook.png";
import tiktok from "/socials/tiktok.png";
import instagram from "/socials/instagram.png";
import youtube from "/socials/youtube.png";
import StyledButton from "../button/StyledButton";

export default function Footer() {
  const theme = useTheme();

  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="footer"
      mt={20}
      sx={{
        position: "absolute",
        zIndex: 100,
        backgroundColor: "#62BC1D",
        width: "100%",
        // height: "424px",

        py: "100px",
        color: "#fff",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid container>
          {/* Left Side */}
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              {/* Your Company Logo */}
              <Image
                src={gogreenLogo}
                alt="Go Green Logo"
                height={70}
                width={270}
              />
              {/* Social Links */}
              <Box
                sx={{
                  marginRight: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: 180,
                  mb: 3,
                }}
              >
                <a
                  href="https://www.facebook.com/people/Go-Green-Booty/100094389833645/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={facebook}
                    alt="Facebook Logo"
                    height={30}
                    width={30}
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@gogreenbooty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={tiktok}
                    alt="Tiktok Logo"
                    height={30}
                    width={30}
                  />
                </a>

                <a
                  href="https://www.instagram.com/gogreenb00ty/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={instagram}
                    alt="Instagram Logo"
                    height={30}
                    width={30}
                  />
                </a>
                <a
                  href="https://www.youtube.com/@GoGreenBooty"
                  target="_blank"
                  rel="noopener noreferrer"
                  mt={-5}
                >
                  <Image
                    src={youtube}
                    alt="youtube Logo"
                    height={35}
                    width={35}
                  />
                </a>
              </Box>

              {!downMd && (
                <>
                  {/* Privacy Policy Links or other links */}
                  <Box
                    variant="body2"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Link href="/privacy-policy" color="inherit" mr={2}>
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms-conditions-warranty"
                      color="inherit"
                      mr={2}
                    >
                      Terms, Conditions & Warranty
                    </Link>
                  </Box>
                </>
              )}
            </Box>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            {/* Subscribe Section */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems={downMd ? "flex-start" : "flex-end"}
            >
              <Typography variant="body2" color="inherit" mb={1}>
                Subscribe
              </Typography>
              <Box display="flex">
                <TextField
                  variant="filled"
                  color="success"
                  label="Subscribe with Email"
                  placeholder="Enter your email"
                  sx={{
                    marginRight: "8px",
                    mb: 1,
                    borderRadius: "9px",
                    backgroundColor: theme.palette.white.light,
                  }}
                />
                <StyledButton
                  variant="outlined"
                  sx={{
                    mb: 1,
                    "&:hover": { color: theme.palette.success.main },
                  }}
                >
                  Subscribe
                </StyledButton>
              </Box>

              {downMd && (
                <>
                  {/* Privacy Policy Links or other links */}
                  <Box
                    variant="body2"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Link href="/privacy-policy" color="inherit" mr={2}>
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms-conditions-warranty"
                      color="inherit"
                      mr={2}
                    >
                      Terms, Conditions & Warranty
                    </Link>
                  </Box>
                </>
              )}

              {/* Copyright Section */}
              <Typography variant="body2" align="right" mt={4}>
                &copy; {new Date().getFullYear()} Your Company. All rights
                reserved.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
