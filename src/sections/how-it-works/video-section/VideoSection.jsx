"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import gogreenLogo from "/public/gogreenbooty.svg";
import lid from "../../../../public/assets/carousel/jif.gif";

export default function VideoSection({ src1 }) {
  const theme = useTheme();

  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {!downMd ? (
        <Card sx={{ borderRadius: "32px", mx: 5 }}>
          <Grid container display="flex">
            {/* Video */}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={7}
              xl={7}
              bgcolor={"black"}
              overflow={"hidden"}
            >
              <video
                width="100%"
                height="450"
                muted
                loop
                autoPlay
                controls
                src="https://coderboyrahmat.github.io/video-gogreen/install-animation.mp4"
                style={{ transform: "scale(1.5)" }}
              >
                <i className="fas fa-play"></i>{" "}
              </video>
            </Grid>

            {/* Other Content text & image */}
            <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                sx={{ display: downMd ? "none" : "flex" }}
              >
                <img
                  src={"https://i.ibb.co/S3yqXPV/gogreenbooty.png"}
                  alt="Go Green Logo"
                  width={300}
                  height="auto"
                />
                <Typography
                  variant="body1"
                  color="initial"
                  align="center"
                  sx={{
                    display: downMd ? "none" : "block",
                    fontSize: "16px",
                    fontWeight: "400",
                    mb:5
                  }}
                >
                  Our Products are easy to install. We provide
                  <br /> everything you need in one box. Visit How it works
                  <br /> page to learn how each model can be easily installed.
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundImage: `url(${lid.src})`,
                  backgroundSize: "cover",
                  width: "119%",
                  height: "90%",
                  borderTopRightRadius: "30px",
                  backgroundPosition: "-85px -208px",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {/* <Image 
									style={{
										position: 'relative',
										top: -10,
										overflowY: 'hidden'

									}}
									src={lid}
									alt="lid-image"
									height={100}
									width={'100%'}
								/> */}
              {/* </Box> */}
            </Grid>
          </Grid>
        </Card>
      ) : (
        <Card sx={{ borderRadius: "32px" }}>
          <Grid container display="flex">
            {/* Video */}
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} bgcolor={"black"}>
              <video width="100%" height="350" controls muted loop autoPlay>
                <source
                  src="https://coderboyrahmat.github.io/video-gogreen/install-animation.mp4"
                  type="video/mp4"
                />
              </video>
            </Grid>

            {/* Other Content text & image */}
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  backgroundImage: `url(${lid.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                  height: 150,
                }}
              />
              {/* <Image 
                style={{
                  position: 'relative',
                  top: -10,
                  overflowY: 'hidden'

                }}
                src={lid}
                alt="lid-image"
                height={100}
                width={'100%'}
              /> */}
              {/* </Box> */}
            </Grid>
          </Grid>
        </Card>
      )}
    </>
  );
}
