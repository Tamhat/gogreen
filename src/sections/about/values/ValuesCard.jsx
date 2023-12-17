import { useEffect, useState } from "react";

// next
import Image from "next/image";

// mui
import {
  Box,
  Container,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

// assets

import trustInactive from "/public/assets/about/Trust inactive.png";
import trustActive from "/public/assets/about/Trust Active.png";

import customerInactive from "/public/assets/about/Customers inactive.png";
import customerActive from "/public/assets/about/Customers Active.png";

import qualityInactive from "/public/assets/about/Quality InActive.png";
import qualityActive from "/public/assets/about/Quality Active.png";

import environmentActive from "/public/assets/about/Environment Active.png";
import environmentInactive from "/public/assets/about/Environment inactive.png";

import humanityInactive from "/public/assets/about/Humanity inactive.png";
import humanityActive from "/public/assets/about/Humanity Active.png";
import SectionHeading from "@/components/heading/SectionHeading";
import { useTheme } from "@emotion/react";

const descriptionOne = [
  `We believe that trust is the only way to build a successful enterprise. To build trust with our customers, we need to deliver on our promise. That is why we are very tenacious about how we do business, and our partners must meet our high standards.`,
  `Without happy customers our business would not thrive. We believe in prompt responses to our customers and ensured satisfaction.`,
  `We pledge to sell the top quality - we won’t sell you something we wouldn’t have our families and loved ones use.`,
];

const descriptionTwo = [
  `We follow our moto: if we can do it while helping our environment, then we should do it.`,
  `We believe in helping others and we make it a core principle to give an annual percentage of our profits to support clean water initiatives for under privileged communities in the US and around the world.`,
];

export default function ValuesCard() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);

  const [description1, setDescription1] = useState(descriptionOne[0]);

  const [description2, setDescription2] = useState(descriptionTwo[0]);

  // toggle next every 3 seconds
  useEffect(() => {
    let toggleState1 = 1;
    let toggleState2 = 1;
    const intervalId = setInterval(() => {
      if (toggleState1 === 1) {
        setActive1(true);
        setActive2(false);
        setActive3(false);
        setDescription1(descriptionOne[0]);
        toggleState1 += 1;
      } else if (toggleState1 === 2) {
        setActive1(false);
        setActive2(true);
        setActive3(false);
        setDescription2(descriptionOne[1]);
        toggleState1 += 1;
      } else if (toggleState1 === 3) {
        setActive1(false);
        setActive2(false);
        setActive3(true);
        setDescription1(descriptionOne[2]);
        toggleState1 = 1;
      }

      if (toggleState2 === 1) {
        setActive4(true);
        setActive5(false);
        setDescription2(descriptionTwo[0]);
        toggleState2 += 1;
      } else if (toggleState2 === 2) {
        setActive4(false);
        setActive5(true);
        setDescription2(descriptionTwo[1]);
        toggleState2 = 1;
      }
    }, 3000);
  }, []);
  const theme = useTheme();

  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {!downMd ? (
        <Card sx={{ borderRadius: "32px" }}>
          <CardContent>
            <SectionHeading
              heading="Who we are"
              circleColor={theme.palette.primary.main}
              circleSx={{ height: 100, width: 100, left: -20 }}
              my={10}
            />
            <Grid container padding={"74px!important"}>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  my={3}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setActive1(true);
                    setActive2(false);
                    setActive3(false);
                    setActive4(false);
                    setActive5(false);
                    setDescription1(descriptionOne[0]);
                  }}
                >
                  {active1 ? (
                    <Image
                      src={trustActive}
                      alt={"Trust Image"}
                      height={170}
                      width={"auto"}
                    />
                  ) : (
                    <Image
                      src={trustInactive}
                      alt={"Trust Image"}
                      height={170}
                      width={"auto"}
                    />
                  )}
                  <Typography
                    variant="h6"
                    color="primary"
                    align="center"
                    fontWeight="bold"
                    mt={3}
                  >
                    Trust
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  my={3}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setActive1(false);
                    setActive2(true);
                    setActive3(false);
                    setActive4(false);
                    setActive5(false);
                    setDescription1(descriptionOne[1]);
                  }}
                >
                  {active2 ? (
                    <Image
                      src={customerActive}
                      alt={"Trust Image"}
                      height={170}
                      width={"auto"}
                    />
                  ) : (
                    <Image
                      src={customerInactive}
                      alt={"Trust Image"}
                      height={170}
                      width={"auto"}
                    />
                  )}
                  <Typography
                    variant="h6"
                    color="primary"
                    align="center"
                    fontWeight="bold"
                    mt={3}
                  >
                    Customers
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  my={3}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setActive1(false);
                    setActive2(false);
                    setActive3(true);
                    setActive4(false);
                    setActive5(false);
                    setDescription1(descriptionOne[2]);
                  }}
                >
                  {active3 ? (
                    <Image
                      src={qualityActive}
                      alt={"Trust Image"}
                      height={170}
                      width={"auto"}
                    />
                  ) : (
                    <Image
                      src={qualityInactive}
                      alt={"Trust Image"}
                      height={170}
                      width={"auto"}
                    />
                  )}
                  <Typography
                    variant="h6"
                    color="primary"
                    align="center"
                    fontWeight="bold"
                    mt={3}
                  >
                    Quality
                  </Typography>
                </Box>
              </Grid>
              {/* Text */}
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Container maxWidth="md">
                  <Typography
                    variant="body1"
                    color="initial"
                    align="center"
                    fontWeight="medium"
                  >
                    {description1}
                  </Typography>
                </Container>
              </Grid>

              {/* Environment, Humanity */}
              <Container maxWidth="md" sx={{ mt: 4 }}>
                <Grid container mt={8}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      my={3}
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setActive4(true);
                        setActive5(false);
                        setDescription2(descriptionTwo[0]);
                      }}
                    >
                      {active4 ? (
                        <Image
                          src={environmentActive}
                          alt={"Trust Image"}
                          height={170}
                          width={"auto"}
                        />
                      ) : (
                        <Image
                          src={environmentInactive}
                          alt={"Trust Image"}
                          height={170}
                          width={"auto"}
                        />
                      )}
                      <Typography
                        variant="h6"
                        color="primary"
                        align="center"
                        fontWeight="bold"
                        mt={3}
                      >
                        Environment
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      my={3}
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setActive4(false);
                        setActive5(true);
                        setDescription2(descriptionTwo[1]);
                      }}
                    >
                      {active5 ? (
                        <Image
                          src={humanityActive}
                          alt={"Trust Image"}
                          height={170}
                          width={"auto"}
                        />
                      ) : (
                        <Image
                          src={humanityInactive}
                          alt={"Trust Image"}
                          height={170}
                          width={"auto"}
                        />
                      )}
                      <Typography
                        variant="h6"
                        color="primary"
                        align="center"
                        fontWeight="bold"
                        mt={3}
                      >
                        Humanity
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Container maxWidth="md">
                      <Typography
                        variant="body1"
                        color="initial"
                        align="center"
                        fontWeight="medium"
                      >
                        {description2}
                      </Typography>
                    </Container>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ borderRadius: "32px" }}>
          <CardContent>
            <SectionHeading
              heading="Who we are"
              circleColor={theme.palette.primary.main}
              circleSx={{ height: 100, width: 100, left: -20 }}
              my={10}
            />
            <Grid container padding={"74px!important"}>
              <Grid item xs={4} sm={12} md={6} lg={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  my={3}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setActive1(true);
                    setActive2(false);
                    setActive3(false);
                    setActive4(false);
                    setActive5(false);
                    setDescription1(descriptionOne[0]);
                  }}
                >
                  {active1 ? (
                    <Image
                      src={trustActive}
                      alt={"Trust Image"}
                      height={70}
                      width={"auto"}
                    />
                  ) : (
                    <Image
                      src={trustInactive}
                      alt={"Trust Image"}
                      height={70}
                      width={"auto"}
                    />
                  )}
                  <Typography
                    variant="h6"
                    color="primary"
                    align="center"
                    fontWeight="bold"
                    mt={3}
                  >
                    Trust
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} sm={12} md={6} lg={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  my={3}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setActive1(false);
                    setActive2(true);
                    setActive3(false);
                    setActive4(false);
                    setActive5(false);
                    setDescription1(descriptionOne[1]);
                  }}
                >
                  {active2 ? (
                    <Image
                      src={customerActive}
                      alt={"Trust Image"}
                      height={70}
                      width={"auto"}
                    />
                  ) : (
                    <Image
                      src={customerInactive}
                      alt={"Trust Image"}
                      height={70}
                      width={"auto"}
                    />
                  )}
                  <Typography
                    variant="h6"
                    color="primary"
                    align="center"
                    fontWeight="bold"
                    mt={3}
                  >
                    Customers
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} sm={12} md={6} lg={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  my={3}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setActive1(false);
                    setActive2(false);
                    setActive3(true);
                    setActive4(false);
                    setActive5(false);
                    setDescription1(descriptionOne[2]);
                  }}
                >
                  {active3 ? (
                    <Image
                      src={qualityActive}
                      alt={"Trust Image"}
                      height={70}
                      width={"auto"}
                    />
                  ) : (
                    <Image
                      src={qualityInactive}
                      alt={"Trust Image"}
                      height={70}
                      width={"auto"}
                    />
                  )}
                  <Typography
                    variant="h6"
                    color="primary"
                    align="center"
                    fontWeight="bold"
                    mt={3}
                  >
                    Quality
                  </Typography>
                </Box>
              </Grid>
              {/* Text */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={4}>
                <Container maxWidth="md">
                  <Typography
                    variant="body1"
                    color="initial"
                    align="center"
                    fontWeight="medium"
                  >
                    {description1}
                  </Typography>
                </Container>
              </Grid>

              {/* Environment, Humanity */}
              <Container maxWidth="md" sx={{ mt: 4 }}>
                <Grid container mt={8}>
                  <Grid item xs={6} sm={12} md={6} lg={6}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      my={3}
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setActive4(true);
                        setActive5(false);
                        setDescription2(descriptionTwo[0]);
                      }}
                    >
                      {active4 ? (
                        <Image
                          src={environmentActive}
                          alt={"Trust Image"}
                          height={70}
                          width={"auto"}
                        />
                      ) : (
                        <Image
                          src={environmentInactive}
                          alt={"Trust Image"}
                          height={70}
                          width={"auto"}
                        />
                      )}
                      <Typography
                        variant="h6"
                        color="primary"
                        align="center"
                        fontWeight="bold"
                        mt={3}
                      >
                        Environment
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={12} md={6} lg={6}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      my={3}
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setActive4(false);
                        setActive5(true);
                        setDescription2(descriptionTwo[1]);
                      }}
                    >
                      {active5 ? (
                        <Image
                          src={humanityActive}
                          alt={"Trust Image"}
                          height={70}
                          width={"auto"}
                        />
                      ) : (
                        <Image
                          src={humanityInactive}
                          alt={"Trust Image"}
                          height={70}
                          width={"auto"}
                        />
                      )}
                      <Typography
                        variant="h6"
                        color="primary"
                        align="center"
                        fontWeight="bold"
                        mt={3}
                      >
                        Humanity
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Container maxWidth="md">
                      <Typography
                        variant="body1"
                        color="initial"
                        align="center"
                        fontWeight="medium"
                      >
                        {description2}
                      </Typography>
                    </Container>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
}
