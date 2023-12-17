"use client";

// mui
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { lighten } from "@mui/material/styles";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// components
import SectionHeading from "@/components/heading/SectionHeading";
import { FactItem } from "@/sections/facts/fact";

// sections
import { Header } from "@/sections/how-it-works/header";
import { ValuesCard } from "@/sections/about/values";
import { LearnMoreCard } from "@/sections/facts/learn-more";
import { learnMoreItems } from "@/sections/facts/learn-more/LearnMoreItems";

import { ProductCard } from "@/sections/how-it-works/products";
import { productItems } from "@/sections/how-it-works/products/ProductItems";

import { StepCard } from "@/sections/how-it-works/Steps";
import { stepItems } from "@/sections/how-it-works/Steps/StepItems";

// imgs
import fact1 from "/public/assets/facts/fact-1.png";
import fact2 from "/public/assets/facts/fact-2.png";

import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import ScrollToTop from "react-scroll-to-top";

import Image from "next/image";

import img1 from "/public/assets/how-it-works/instructions/1.png";
import img2 from "/public/assets/how-it-works/instructions/2.png";
import img3 from "/public/assets/how-it-works/instructions/3.png";
import img4 from "/public/assets/how-it-works/instructions/4.png";
import img5 from "/public/assets/how-it-works/instructions/5.png";
import img6 from "/public/assets/how-it-works/instructions/6.png";
import img7 from "/public/assets/how-it-works/instructions/7.png";
import img8 from "/public/assets/how-it-works/instructions/8.png";
import img9 from "/public/assets/how-it-works/instructions/9.png";
import img10 from "/public/assets/how-it-works/instructions/10.png";
import { VideoSection } from "@/sections/how-it-works/video-section";

export default function HowItWorks() {
  const [step, setStep] = useState(0);

  const theme = useTheme();

  const [toTopBtnColor, setToTopBtnColor] = useState(
    theme.palette.primary.main
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleAddToCard = (index) => {
    setSelectedIndex(index);
  };

  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {!downLg ? (
        <>
          <Header />
          <Container maxWidth="xl" className="subContainer3">
            <Grid container spacing={3}>
              {/* To the Top Button */}
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                mt={10}
                mx={10}
                sx={{ marginLeft: 20 }}
              >
                <ScrollToTop
                  smooth
                  top={200}
                  component={<ArrowUpwardIcon fontSize="large" color="white" />}
                  style={{
                    backgroundColor: toTopBtnColor,
                    borderRadius: "50%",
                    zIndex: 900,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "25px",
                  }}
                  onMouseEnter={() =>
                    setToTopBtnColor(theme.palette.success.main)
                  }
                  onMouseLeave={() =>
                    setToTopBtnColor(theme.palette.primary.main)
                  }
                />
              </Grid>
              {/* Heading */}
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  py: 10,
                }}
              >
                <SectionHeading
                  heading={`Easy to Install. Easy to Use Compatible with
                standard toilets`}
                  headingSx={{
                    textAlign: "center",
                    zIndex: 2000,
                    position: "relative",
                    textAlign: "center",
                    my: 1,
                  }}
                  circleColor={theme.palette.primary.main}
                  circleSx={{ width: 120, height: 120 }}
                />
              </Grid>
            </Grid>
          </Container>

          {/* Sit, Relax, Wash */}
          <Box>
            <Grid
              container
              display="flex"
              flexDirection=""
              justifyContent="center"
              alignItems="center"
              sx={{
                height: 230,
                background: `linear-gradient(45deg, ${theme.palette.success.dark}, ${theme.palette.success.main})`,
              }}
            >
              {stepItems.map((item, index) => (
                <StepCard
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  text={item.text}
                />
              ))}
            </Grid>
          </Box>

          {/* Video Section */}
          <Container maxWidth="xl" sx={{ mt: 12, px: 12 }}>
            <Grid container spacing={3} sx={{ px: 5 }}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} my={10}>
                <VideoSection />
              </Grid>

              {/* Product Cards */}
                {productItems.map((product, index) => (
                  <Grid item xs={12} sm={12} md={12} lg={4} key={index}>
                    <ProductCard
                      // isAddedToCart
                      isAddedToCart={selectedIndex === index ? true : false}
                      src={product.src}
                      alt="product-image"
                      content={product.content}
                      handleAddToCard={() => handleAddToCard(index)}
                    />
                  </Grid>
                ))}
              {/* Spacer */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={10}></Grid>

              <Grid item sm={6} md={4} lg={3}>
                <Button variant="contained" color="success">
                  Installation
                </Button>
              </Grid>
              <Grid item sm={6} md={4} lg={3}>
                <Button variant="outlined" color="success">
                  Pictures
                </Button>
              </Grid>
              <Grid item sm={6} md={4} lg={3}>
                <Button variant="outlined" color="success">
                  FAQS
                </Button>
              </Grid>
              <Grid item sm={6} md={4} lg={3}>
                <Button variant="outlined" color="success">
                  Video
                </Button>
              </Grid>

              {/* Stepper */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box sx={{ width: "100%" }}>
                  <Stepper activeStep={step}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((label) => (
                      <Step key={label}>
                        <StepLabel>{""}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Grid>

              {/* Instructions Slider */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Splide
                  aria-label="My Favorite Images"
                  hasTrack={true}
                  onMove={(newIndex, prevIndex, destIndex) => {
                    setStep(destIndex + 1);
                  }}
                  options={{
                    type: "fade",
                    autoplay: true,
                    interval: 4000,
                    arrows: false,
                    easing: "ease",
                    perPage: 1,
                    rewind: true,
                    width: "auto",
                    gap: "3px",
                  }}
                >
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img1}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img2}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img3}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img4}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img5}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img6}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img7}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img8}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img9}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img10}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                </Splide>
              </Grid>

              {/* Spacer */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={20}></Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <>
          <Header />
          <Container maxWidth="lg" sx={{ mb: 10 }}>
            <Grid container spacing={3}>
              {/* To the Top Button */}
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                mt={10}
                mb={20}
              >
                <ScrollToTop
                  smooth
                  top={200}
                  component={<ArrowUpwardIcon fontSize="large" color="white" />}
                  style={{
                    backgroundColor: toTopBtnColor,
                    borderRadius: "50%",
                    zIndex: 900,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "25px",
                  }}
                  onMouseEnter={() =>
                    setToTopBtnColor(theme.palette.success.main)
                  }
                  onMouseLeave={() =>
                    setToTopBtnColor(theme.palette.primary.main)
                  }
                />
              </Grid>

              {/* Heading */}
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                mt={-20}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SectionHeading
                  heading="Easy to Install. Easy to Use Compatible with standard toilets"
                  headingSx={{
                    textAlign: "center",
                    zIndex: 2000,
                    position: "relative",
                  }}
                  circleColor={theme.palette.primary.main}
                  circleSx={{ width: 120, height: 120 }}
                />
              </Grid>
            </Grid>
          </Container>

          {/* Sit, Relax, Wash */}
          <Box>
            <Grid
              container
              display="block"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              py={10}
              sx={{
                height: "auto",
                background: `linear-gradient(45deg, ${theme.palette.success.dark}, ${theme.palette.success.main})`,
              }}
            >
              {stepItems.map((item, index) => (
                <StepCard
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  text={item.text}
                />
              ))}
            </Grid>
          </Box>

          {/* Video Section */}
          <Container maxWidth="lg" sx={{ mt: 12 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={-5}>
                <Box sx={{ m: 5 }}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      src={"https://i.ibb.co/S3yqXPV/gogreenbooty.png"}
                      alt="Go Green Logo"
                      width={250}
                      height="auto"
                    />
                  </Box>
                  <Box>
                    <Typography variant="body1" color="initial" align="center">
                      Our Products are easy to install. We provide everything
                      you need in one box. Visit How it works page to learn how
                      each model can be easily installed.
                    </Typography>
                  </Box>
                </Box>
                <VideoSection
                  mt={5}
                  src1={
                    "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg2.9164638a.png&w=1080&q=75"
                  }
                />
              </Grid>

              {/* Product Cards */}
              {productItems.map((product, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  key={index}
                  px={15}
                  mx={8}
                  mt={4}
                >
                  <ProductCard
                    // isAddedToCart
                    isAddedToCart={selectedIndex === index ? true : false}
                    src={product.src}
                    alt="product-image"
                    content={product.content}
                    handleAddToCard={() => handleAddToCard(index)}
                  />
                </Grid>
              ))}

              {/* Spacer */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={10}></Grid>

              <Grid item sm={6} md={4} lg={3}>
                <Button variant="contained" color="success">
                  Installation
                </Button>
              </Grid>
              <Grid item sm={6} md={4} lg={3}>
                <Button variant="outlined" color="success">
                  Pictures
                </Button>
              </Grid>
              <Grid item sm={6} md={4} lg={3}>
                <Button variant="outlined" color="success">
                  FAQS
                </Button>
              </Grid>
              <Grid item sm={6} md={4} lg={3}>
                <Button variant="outlined" color="success">
                  Video
                </Button>
              </Grid>

              {/* Stepper */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box sx={{ width: "100%" }}>
                  <Stepper activeStep={step}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((label) => (
                      <Step key={label}>
                        <StepLabel>{""}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Grid>

              {/* Instructions Slider */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Splide
                  aria-label="My Favorite Images"
                  hasTrack={true}
                  onMove={(newIndex, prevIndex, destIndex) => {
                    setStep(destIndex + 1);
                  }}
                  options={{
                    type: "fade",
                    autoplay: true,
                    interval: 4000,
                    arrows: false,
                    easing: "ease",
                    perPage: 1,
                    rewind: true,
                    width: "auto",
                    gap: "3px",
                  }}
                >
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img1}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img2}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img3}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img4}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img5}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img6}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img7}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img8}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img9}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={img10}
                        alt={"image"}
                        height={300}
                        width={"auto"}
                      />
                    </Box>
                  </SplideSlide>
                </Splide>
              </Grid>

              {/* Spacer */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={20}></Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}
