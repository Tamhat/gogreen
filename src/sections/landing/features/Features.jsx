import Image from "next/image";

import { Container, Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

import clean from "/assets/features/clean.png";
import nozzle from "/assets/features/nozzle.png";
import toggleSwitch from "/assets/features/toggleSwitch.png";
import wash from "/assets/features/wash.png";

import featureImg from "/assets/carousel/img2.png";

import '@/sections/landing/features/feature.css';

export default function Features() {
  const theme = useTheme();

  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        backgroundImage: `url(${featureImg.src})`,
        height: downMd ? 800 : 600,
        backgroundSize: "cover", // Adjust as needed
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // backgroundColor: 'rgb(57, 167, 255, 0.5)'
      }}
    >
      {/* <Container> */}
      <Box
        sx={{
          // backgroundImage: `url('/public/logo/gogreenbooty.png')`,
          // backgroundSize: 'cover', // Adjust as needed
          // backgroundRepeat: 'no-repeat',
          height: "100%",
          width: "100%",

          // backdropFilter: `blur(10px)`,
          display: "flex",
          alignItems: "space-evenly",
          justifyContent: "center",
          backgroundColor: alpha(theme.palette.primary.main, 0.8),

          // // backgroundColor: 'red'
        }}
      >
        {/* <Container> */}
        <Grid container className="features">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box mr={3}>
                <Image
                  src={wash}
                  alt="Feature Image"
                  height={"116px"}
                  width={"77.33px"}
                />
              </Box>

              <Box>
                <Typography mb={1} variant="h6" color="text" fontWeight="bold">
                  Booty Washing
                </Typography>
                <Typography
                  variant="body1"
                  color="text"
                  fontWeight="medium"
                  width={"335px"}
                  height={"72px"}
                >
                  keep your booty clean & odor free
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box mr={3}>
                <Image
                  src={clean}
                  alt="Feature Image"
                  height={"116px"}
                  width={"77.33px"}
                />
              </Box>

              <Box>
                <Typography mb={1} variant="h6" color="text" fontWeight="bold">
                  Front Washing
                </Typography>
                <Typography
                  variant="body1"
                  color="text"
                  fontWeight="medium"
                  width={"335px"}
                  height={"72px"}
                >
                  Perfect for women, convenient for menstruation & pregnancy
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box mr={3}>
                <Image
                  src={toggleSwitch}
                  alt="Feature Image"
                  height={"116px"}
                  width={"77.33px"}
                />
              </Box>

              <Box>
                <Typography mb={1} variant="h6" color="text" fontWeight="bold">
                  Pressure Control
                </Typography>
                <Typography
                  variant="body1"
                  color="text"
                  fontWeight="medium"
                  width={"335px"}
                  height={"72px"}
                >
                  Select the setting that works for you
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box mr={3}>
                <Image
                  src={nozzle}
                  alt="Feature Image"
                  height={"116px"}
                  width={"77.33px"}
                />
              </Box>

              <Box>
                <Typography mb={1} variant="h6" color="text" fontWeight="bold">
                  Nozzle Cleaning
                </Typography>
                <Typography
                  variant="body1"
                  color="text"
                  fontWeight="medium"
                  width={"335px"}
                  height={"72px"}
                >
                  Sanitize Booty Shower between uses
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* </Container> */}
      </Box>
      {/* </Container> */}
    </div>
  );
}
