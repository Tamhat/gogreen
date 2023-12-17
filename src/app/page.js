"use client";

import Image from "next/image";

// mui
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  IconButton,
  Link,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// sections
import { Carousal } from "@/sections/landing/carousel";
import { ProductCard, ProductSection } from "@/sections/landing/products";
import { productItems } from "@/sections/landing/products/ProductItem";
import PrizeDraw from "@/sections/landing/draw/PrizeDraw";

import { WhyHeading, WhyUsSlider } from "@/sections/landing/why-go-green";
import { OfferSection } from "@/sections/landing/offer";
import './page.css'

// components
import SectionHeading, {
  SectionSubHeading,
} from "@/components/heading/SectionHeading";
import { Features } from "@/sections/landing/features";
import { ConvinceReason, Service } from "@/sections/landing/why-switch";

// why switch images

import src1 from "/assets/why-switch/money-active.png";

import src2 from "/assets/why-switch/water-active.png";

import src3 from "/assets/why-switch/trees-active.png";

import src4 from "/assets/why-switch/hygienic-active.png";

import src5 from "/assets/why-switch/comfort-active.png";

import src6 from "/assets/why-switch/convenience-active.png";

import moneyInactive from "/assets/why-switch/money-inactive.png";

import waterInactive from "/assets/why-switch/water-inactive.png";

import treesInactive from "/assets/why-switch/trees-inactive.png";

import hygenicInactive from "/assets/why-switch/hygienic-inactive.png";

import comfortInactive from "/assets/why-switch/comfort-inactive.png";

import convenienceInactive from "/assets/why-switch/convenience-inactive.png";

// quick install
import badge from "/assets/why-switch/badge.png";
import setup from "/assets/why-switch/setup.png";
import { AskQuestionCard } from "@/sections/landing/ask-question";
import { VideoSection } from "@/sections/landing/video-section";
import { TestimonialSlider } from "@/sections/landing/testimonials";
import "@/app/page.css";

import ScrollToTop from "react-scroll-to-top";

var quickInstallItems = [
  {
    src: setup,
    alt: "Quick self-install image",
    heading: "Quick self-install",
    description: (
      <span>
        No plumber needed <br />
        Takes less than
        <span style={{ color: "#66B82A" }}>10 minutes</span> to install <br />{" "}
        No special tools needed; we provide
        <br /> everything in one box <br /> We want to make it convenient and
        easy
        <br /> for you – we’ve done multiple tests to
        <br />
        ensure we’ve put together the perfect
        <br /> box for you{" "}
      </span>
    ),
  },
  {
    src: badge,
    alt: "Quality Assurance Image",
    heading: "Quality Assurance",
    description: (
      <span>
        We spent over <span style={{ color: "#66B82A" }}>8 months</span> working
        with
        <br /> manufactures to find the right partners. <br />
        We have every single Booty Shower
        <br /> inspected before shipping.
        <br />
        Our designs are compatible with most
        <br /> standard toilets
        <br />
        We offer the slimmest Booty Shower
        <br /> attachments, making toilet seats fit right
      </span>
    ),
  },
];
var convincelists1 = [
  {
    src: src1,
    alt: "Quick self-install image",
    heading: "Quick self-install",
    description: (
      <span>
        On Average, households can save <br /> up to $250 per year when they
        <br /> make the switch from paper to a<br /> Booty Shower or bidet
        system. 
      </span>
    ),
  },
  {
    src: src2,
    alt: "Quality Assurance Image",
    heading: "Quality Assurance",
    description: (
      <span>
        It takes 37 to 45 gallons of water to
        <br /> produce one roll of toilet paper.
        <br /> Booty Showers consume 0.1 to 0.5
        <br /> gallons of water to help you stay
        <br /> clean. 
      </span>
    ),
  },
  {
    src: src3,
    alt: "Quality Assurance Image",
    heading: "Quality Assurance",
    description: (
      <span>
        Significantly reduces paper
        <br /> consumption, 28,000 trees are
        <br /> chopped daily to make toilet paper.
        <br /> Some like to air dry, while others use
        <br /> one or two ply.
      </span>
    ),
  },
];
var convincelists2 = [
  {
    src: src4,
    alt: "Quick self-install image",
    heading: "Quick self-install",
    description: (
      <span>
        No more irritation or endless
        <br /> wiping, let the soothing stream of
        <br /> water make you clean. Beneficial
        <br /> for individuals with sensitive skin or
        <br /> medical conditions (ex:
        <br /> hemorrhoids).
      </span>
    ),
  },
  {
    src: src5,
    alt: "Quality Assurance Image",
    heading: "Quality Assurance",
    description: (
      <span>
        No more irritation or endless
        <br /> wiping, let the soothing stream of
        <br /> water make you clean. Beneficial
        <br /> for individuals with sensitive skin or
        <br /> medical conditions (ex:
        <br /> hemorrhoids).
      </span>
    ),
  },
  {
    src: src6,
    alt: "Quality Assurance Image",
    heading: "Quality Assurance",
    description: (
      <span>
        Using water is the most effective way
        <br /> to keep your booty clean. It’s perfect
        <br /> for women, keeping you always fresh
        <br /> with the front wash feature. Do you
        <br /> wash your hands and mouth after
        <br /> eating something messy? Why do we
        <br /> settle to “clean” our booty with paper?
      </span>
    ),
  },
];

// testimonials
import testimonial1 from "/assets/testimonial/testimonial-1.png";

import { useState, useRef, useEffect } from "react";
import { ContactDialog } from "@/components/dialog";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductHeading from "./productsHeading";

const customerTestimonials = [
  {
    name: "Jane Doe",
    company: "SomeCompany LLC.",
    quote: "The product was amazing & Works perfectly fine.",
    imgSrc: testimonial1,
    alt: "Testimonial Image",
  },
  {
    name: "Sarah Doe",
    company: "SomeCompany LLC.",
    quote: "Everything was upto my expectations, Definitely recommend others.",
    imgSrc: testimonial1,
    alt: "Testimonial Image",
  },
];

export default function Home() {
  const theme = useTheme();

  const [toTopBtnColor, setToTopBtnColor] = useState(
    theme.palette.primary.main
  );

  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      {!downLg ? (
        <>
        <Carousal />
          <Container maxWidth="xl" className="subContainer1">
            <Grid container spacing={3} className="subContainer">
              {/* To the Top Button */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={10}>
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

              {/* Product Section */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={10}>
                {/* <ProductSection /> */}
                <SectionHeading
                  heading="Products"
                  circleColor={theme.palette.primary.main}
                  circleSx={{ height: 100, width: 100, left: -20 }}
                  headingSx={{ textAlign: "center" }}
                  mb={3}
                />
                <Box display="flex" justifyContent="center" my={5}>
                  <Typography
                    variant="h4"
                    color="text.black"
                    fontWeight="medium"
                  >
                    Easy{" "}
                    <Box
                      component="span"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      Self Install
                    </Box>
                    . No Plumbing or Electrical Work Needed!
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box display="flex" justifyContent="flex-end">
                  <Link
                    component={Button}
                    href="https://store.gogreenbooty.com/collections/all"
                    endIcon={<ArrowForwardIcon />}
                    variant="text"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    Shop
                  </Link>
                </Box>
              </Grid>
              {/* Product Cards */}
              {productItems.map((product, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  mt={10}
                  key={index}
                  className="child-container"
                  sx={{ display: { md: "block!important" } }}
                >
                  <ProductCard
                    href={product.href}
                    src={product.src}
                    alt="product-image"
                    content={product.content}
                  />
                </Grid>
              ))}

              {/* Prize Draw */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={4}>
                <PrizeDraw className="prizedraw" />
              </Grid>

              {/* Why Go Green */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={10}>
                {/* <WhyHeading /> */}
                <SectionHeading
                  heading="Why go green booty"
                  circleColor={theme.palette.success.main}
                  headingSx={{ textAlign: "center" }}
                  circleSx={{ height: 100, width: 100, left: -20 }}
                />
              </Grid>

              {/* <Grid item sm={12} md={12} lg={12} mt={10}>
          </Grid> */}

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={10.5}
                mt={7}
                className="whyUsSlider"
                sx={{ overflow: "visible!important" }}
              >
                <WhyUsSlider
                  className="whyUsSlider1"
                  sx={{ overflow: "visible!important" }}
                />
              </Grid>

              {/* Offer Section */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={12}>
                <OfferSection />
              </Grid>

              {/* Features Section */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={12}>
                <ProductHeading
                  heading="Features"
                  headingSx={{ textAlign: "center" }}
                  circleColor={theme.palette.primary.main}
                  circleSx={{ height: 100, width: 100, left: -20 }}
                />
              </Grid>
            </Grid>
          </Container>

          <Box>
            <Grid item sm={12} md={12} lg={12} xl={12} mt={12}>
              <Features />
            </Grid>
          </Box>

          <Container maxWidth="xl" className="subContainer2">
            <Grid container spacing={3} className="subContainer">
              <Grid
                container
                className="downContainer"
                sx={{ marginTop: "10rem" }}
              >
                {/* Why you should make the switch - Section  */}
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={12}>
                  <SectionHeading
                    heading="Why you should make the switch"
                    headingSx={{ textAlign: "center" }}
                    circleColor={theme.palette.success.main}
                    circleSx={{
                      height: 100,
                      width: 100,
                      top: -25,
                      left: -20,
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={10}>
                  <ConvinceReason
                    heading={"Savings"}
                    src1Inactive={moneyInactive}
                    src1Active={src1}
                    alt1={"money-image"}
                    src2Inactive={waterInactive}
                    src2Active={src2}
                    alt2={"water-image"}
                    src3Inactive={treesInactive}
                    src3Active={src3}
                    alt3={"trees-image"}
                    descriptionObject={{
                      one: (
                        <Box
                          maxWidth="md"
                          sx={{
                            color: "black",
                            fontVariant: theme.typography.body1,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 400,
                          }}
                        >
                          On Average, households can save up to{" "}
                          <Box
                            component="span"
                            sx={{ color: theme.palette.success.main }}
                          >
                            250$ per year
                          </Box>{" "}
                          when they make the switch from paper to a Booty Shower
                          or bidet system. 
                        </Box>
                      ),
                      two: (
                        <Box
                          maxWidth="md"
                          sx={{
                            color: "black",
                            fontVariant: theme.typography.body1,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 400,
                          }}
                        >
                          It takes{" "}
                          <Box
                            component="span"
                            sx={{ color: theme.palette.success.main }}
                          >
                            37 to 45 gallons
                          </Box>{" "}
                          of water to produce one roll of toilet paper. Booty
                          Showers consume{" "}
                          <Box
                            component="span"
                            sx={{ color: theme.palette.success.main }}
                          >
                            0.1 to 0.5 gallons
                          </Box>{" "}
                          of water to help you stay clean. 
                        </Box>
                      ),
                      three: (
                        <Box
                          maxWidth="md"
                          sx={{
                            color: "black",
                            fontVariant: theme.typography.body1,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 400,
                          }}
                        >
                          Significantly reduces paper consumption,{" "}
                          <Box
                            component="span"
                            sx={{ color: theme.palette.success.main }}
                          >
                            28,000 trees
                          </Box>{" "}
                          are chopped daily to make toilet paper. Some like to
                          air dry, while others use one or two ply.{" "}
                        </Box>
                      ),
                    }}
                  />
                </Grid>
                <Grid item sm={12} md={12} lg={12} xl={12} mt={10}>
                  <ConvinceReason
                    heading={"Benefits"}
                    description={`No more irritation or endless wiping, let the soothing stream of water make you clean. Beneficial for individuals with sensitive skin or medical conditions (ex: hemorrhoids).`}
                    src1Inactive={hygenicInactive}
                    src1Active={src4}
                    alt1={"hygienic-image"}
                    src2Inactive={comfortInactive}
                    src2Active={src5}
                    alt2={"comfort-image"}
                    src3Inactive={convenienceInactive}
                    src3Active={src6}
                    alt3={"convenience-image"}
                    descriptionObject={{
                      one: (
                        <Box
                          maxWidth="md"
                          sx={{
                            color: "black",
                            fontVariant: theme.typography.body1,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 400,
                          }}
                        >
                          {" "}
                          Using water is the most effective way to keep your
                          booty clean. It’s perfect for women, keeping you
                          always fresh with the front wash feature. Do you wash
                          your hands and mouth after eating something messy? Why
                          do we settle to “clean” our booty with paper?{" "}
                        </Box>
                      ),
                      two: (
                        <Box
                          maxWidth="md"
                          sx={{
                            color: "black",
                            fontVariant: theme.typography.body1,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 400,
                          }}
                        >
                          No more irritation or endless wiping, let the soothing
                          stream of water make you clean. Beneficial for
                          individuals with sensitive skin or medical conditions
                          (ex: hemorrhoids).
                        </Box>
                      ),
                      three: (
                        <Box
                          maxWidth="md"
                          sx={{
                            color: "black",
                            fontVariant: theme.typography.body1,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 400,
                          }}
                        >
                          Suitable for all ages and helps promote good hygiene
                          habits in children. Our Booty Shower is perfect for
                          everyone, including elderly people, children, pregnant
                          women, and patients.
                        </Box>
                      ),
                    }}
                  />
                </Grid>

                <Grid item sm={12} md={12} lg={12} xl={12} mt={10}>
                  <Box display="flex" justifyContent="space-evenly">
                    {quickInstallItems.map((item, index) => (
                      <Service
                        key={index}
                        heading={item.heading}
                        description={item.description}
                        src={item.src}
                        alt={item.alt}
                      />
                    ))}
                  </Box>
                </Grid>
                {/* under one box */}
              </Grid>

              <Grid item sm={12} md={12} lg={12} xl={12} mt={12}>
                <AskQuestionCard />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={15} mb={30}>
                <VideoSection />
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <>
          <Carousal />
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {/* To the Top Button */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={10}>
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

              {/* Product Section */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={1} mb={5}>
                {/* <ProductSection /> */}
                <ProductHeading
                  heading="Products"
                  circleColor={theme.palette.primary.main}
                  circleSx={{ height: 100, width: 100, left: -20 }}
                  headingSx={{ textAlign: "center" }}
                  mb={3}
                />
                <Box display="flex" justifyContent="center" mt={4}>
                  <Typography
                    variant="h6"
                    color="text.black"
                    fontWeight="medium"
                    sx={{ textAlign: "center" }}
                  >
                    Easy{" "}
                    <Box
                      component="span"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      Self Install
                    </Box>
                    . No Plumbing or Electrical Work Needed!
                  </Typography>
                </Box>
              </Grid>

              {/* Product Cards */}
              <Grid className="product-card" marginLeft={2}>
                <Splide
                  options={{
                    perPage: 1,
                    perMove: 1,
                    drag: "free",
                    snap: true,
                    arrows: false,
                    pagination: false,
                  }}
                  className="productA"
                >
                  {productItems.map((product, index) => (
                    <SplideSlide key={index} className="productB">
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}
                        mt={1}
                        key={index}
                        mx={3}
                      >
                        <ProductCard
                          href={product.href}
                          src={product.src}
                          alt="product-image"
                          content={product.content}
                          className="productC"
                        />
                      </Grid>
                    </SplideSlide>
                  ))}
                </Splide>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box display="flex" justifyContent="center">
                  <Link
                    component={Button}
                    href="https://store.gogreenbooty.com/collections/all"
                    endIcon={<ArrowForwardIcon />}
                    variant="h6"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    Shop
                  </Link>
                </Box>
              </Grid>

              {/* Prize Draw */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={4}>
                <PrizeDraw />
              </Grid>

              {/* Why Go Green */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={10}>
                {/* <WhyHeading /> */}
                <SectionHeading
                  heading="Why go green booty"
                  circleColor={theme.palette.success.main}
                  headingSx={{ textAlign: "center", fontSize: { sm: 24 } }}
                  circleSx={{ height: 100, width: 100, left: -20 }}
                />
              </Grid>

              {/* <Grid item sm={12} md={12} lg={12} mt={10}>
            </Grid> */}

              <Grid item xs={12} sm={12} md={12} lg={12} mt={12}>
                <WhyUsSlider />
              </Grid>

              {/* Offer Section */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={12}>
                <OfferSection />
              </Grid>

              {/* Features Section */}
              <Grid item xs={12} sm={12} md={12} lg={12} mt={12}>
                <SectionHeading
                  heading="Features"
                  headingSx={{ textAlign: "center" }}
                  circleColor={theme.palette.primary.main}
                  circleSx={{ height: 100, width: 100, left: -20 }}
                />
              </Grid>
            </Grid>
          </Container>

          <Box>
            <Grid item sm={12} md={12} lg={12} xl={12} mt={12}>
              <Features />
            </Grid>
          </Box>

          <Container maxWidth="xl" className="subContainer2">
            <Grid container spacing={3} className="subContainer">
              <Grid
                container
                className="downContainer"
                sx={{
                  marginTop: "10rem",
                  width: "100vw!important",
                  marginLeft: "20px!important",
                }}
              >
                {/* Why you should make the switch - Section  */}
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={10}>
                  <SectionHeading
                    heading="Why you should make the switch"
                    headingSx={{ textAlign: "center" }}
                    circleColor={theme.palette.success.main}
                    circleSx={{
                      height: 100,
                      width: 100,
                      top: -25,
                      left: -20,
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={5}>
                  <SectionSubHeading
                    heading="Savings"
                    headingSx={{ textAlign: "center" }}
                    color={theme.palette.success.main}
                  />
                </Grid>

                <Grid
                  item
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  width="100%!important"
                >
                  <Box display="flex" justifyContent="space-around">
                    {convincelists1.map((item, index) => (
                      <ConvinceReason
                        key={index}
                        heading={item.heading}
                        description={item.description}
                        src={item.src}
                        alt={item.alt}
                      />
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={2}>
                  <SectionSubHeading
                    heading="Savings"
                    headingSx={{ textAlign: "center" }}
                    color={theme.palette.success.main}
                  />
                </Grid>

                <Grid
                  item
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  width="100%!important"
                >
                  <Box display="flex" justifyContent="space-around">
                    {convincelists1.map((item, index) => (
                      <ConvinceReason
                        key={index}
                        heading={item.heading}
                        description={item.description}
                        src={item.src}
                        alt={item.alt}
                      />
                    ))}
                  </Box>
                </Grid>

                <Grid item sm={12} md={12} lg={12} xl={12} mt={0} px={2}>
                  <Box display="flex" justifyContent="space-evenly">
                    {quickInstallItems.map((item, index) => (
                      <Service
                        key={index}
                        heading={item.heading}
                        description={item.description}
                        src={item.src}
                        alt={item.alt}
                      />
                    ))}
                  </Box>
                </Grid>

                {/* under one box */}
              </Grid>

              <Grid item sm={12} md={12} lg={12} xl={12} mt={12}>
                <AskQuestionCard />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={15}>
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
                <VideoSection mt={5} mb={30} />
              </Grid>

            </Grid>
          </Container>
        </>
      )}
    </>
  );
}
