"use client";

import Image from "next/image";

import {
  Typography,
  Card,
  CardContent,
  Box,
  useMediaQuery,
  Grid,
  Link,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { green } from "@mui/material/colors";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SvgShopIcon from "../carousel/SvgShopIcon";

import StyledButton from "@/components/button/StyledButton";

import offerImg from "/public/assets/offer/offer.png";
import { useState } from "react";

export default function OfferSection() {
  const [shopBagColor, setShopBagColor] = useState("#fff");
  const theme = useTheme();

  const downMd = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        borderRadius: "32px",
        // height: 1000,
        zIndex: 40,
        background: `linear-gradient(45deg, ${theme.palette.success.main}, ${theme.palette.success.main})`,
      }}
    >
      <Grid container sx={{ position: "relative" }}>
        {/* Top Circle */}
        <Box
          sx={{
            position: "absolute",
            top: "-70px",
            // top: downMd ? "350px" : "-130px",
            right: "470px",
            height: "150px",
            width: "150px",
            background: alpha(theme.palette.success.light, 0.2),
            // backgroundColor: 'red',
            borderRadius: "50%",
            zIndex: 70,
          }}
        />
        {/* Bottom Circle */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-70px",
            // top: downMd ? "350px" : "-130px",
            left: "-50px",
            height: "150px",
            width: "150px",
            background: alpha(theme.palette.success.light, 0.2),
            // backgroundColor: 'red',
            borderRadius: "50%",
            zIndex: 70,
          }}
        />
        {downMd ? (
          <>
            <Grid
              // sx={{ zIndex: 100 }}
              item
              xs={12}
              sm={12}
              md={12}
              lg={5}
              xl={5}
            >
              {/* Image */}
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  alignItems: "center",
                  width: "100%",
                  borderRadius: "32px",
                  zIndex: 100,
                }}
              >
                <Image
                  src={offerImg}
                  alt="offer-image"
                  height={350}
                  width={"100%"}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7} 
              py={3} pb={5}>
              {/* Content */}
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  width="70%"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Typography
                    mb={2}
                    variant="h6"
                    color="white"
                    fontWeight="medium"
                    align="center"
                  >
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      Save 10%
                    </Box>{" "}
                    at checkout by signing up & sharing Go Green Booty
                  </Typography>
                  <StyledButton
                    href="https://store.gogreenbooty.com/collections/all"
                    sx={{
                      width: "230px",
                      py: 1.4,
                      "&:hover": { color: theme.palette.success.main },
                    }}
                    component={StyledButton}
                    onMouseEnter={() =>
                      setShopBagColor(theme.palette.success.main)
                    }
                    onMouseLeave={() => setShopBagColor("#fff")}
                    variant="outlined"
                    startIcon={<SvgShopIcon color={shopBagColor} />}
                  >
                    View Products
                  </StyledButton>
                </Box>
              </CardContent>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
              {/* Content */}
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  width="50%"
                  display="flex"
                  mt={10}
                  flexDirection="column"
                  alignItems="center"
                >
                  <Typography
                    mb={2}
                    variant="h5"
                    color="white"
                    // fontWeight="medium"
                    align="center"
                  >
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      Save 10%
                    </Box>{" "}
                    at checkout by signing up & sharing Go Green Booty
                  </Typography>
                  <StyledButton
                    href="https://store.gogreenbooty.com/collections/all"
                    sx={{
                      width: "230px",
                      py: 1.4,
                      "&:hover": { color: theme.palette.success.main },
                    }}
                    component={StyledButton}
                    onMouseEnter={() =>
                      setShopBagColor(theme.palette.success.main)
                    }
                    onMouseLeave={() => setShopBagColor("#fff")}
                    variant="outlined"
                    startIcon={<SvgShopIcon color={shopBagColor} />}
                  >
                    View Products
                  </StyledButton>
                </Box>
              </CardContent>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
              {/* Image */}
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  alignItems: "center",
                  width: "100%",
                  borderRadius: "32px",
                  zIndex: 100,
                }}
              >
                <Image
                  src={offerImg}
                  alt="offer-image"
                  height={350}
                  width={"100%"}
                />
              </Card>
            </Grid>
          </>
        )}
      </Grid>
    </Card>
  );
}
