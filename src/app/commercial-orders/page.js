"use client";

// mui
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Link,
  useMediaQuery,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// components
import StyledButton from "@/components/button/StyledButton";

// sections
import SectionHeading from "@/components/heading/SectionHeading";
import { Header } from "@/sections/commercial-orders/header";

import { CatalogCard } from "@/sections/commercial-orders/catalog";
import { catalogItems } from "@/sections/commercial-orders/catalog/CatalogItems";

import { BenefitCard } from "@/sections/commercial-orders/benefits";

import { FacilityCard } from "@/sections/commercial-orders/facilities";
import { faciltyItems } from "@/sections/commercial-orders/facilities/FacilityItems";

import { Showcase } from "@/sections/commercial-orders/description-showcase";

// img
import officeBg from "/assets/commercial-orders/office.png";

import earthOnHand from "/assets/commercial-orders/earth-on-hand.png";
import performacePractices from "/assets/commercial-orders/performance-practices.png";
import monitaryBenefits from "/assets/commercial-orders/monitary-benefits.png";

import rectPlaceholder from "/assets/commercial-orders/rect.jpg";
import "./com.css";
import "./../page.css";

import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import {
  RequestQuotationDialog,
  RequestReportDialog,
} from "@/components/dialog";
import { ProductCard } from "@/sections/landing/products";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CommercialHeading from "./CommercialHeading";

export default function CommercialOrders() {
  const theme = useTheme();

  const [toTopBtnColor, setToTopBtnColor] = useState(
    theme.palette.primary.main
  );

  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const [openQuotation, setOpenQuotation] = useState(false);
  const [openReport, setOpenReport] = useState(false);

  const handleRequestQuotationClose = () => setOpenQuotation(false);
  const handleRequestReportClose = () => setOpenReport(false);

  const descrip = (
    <Typography
      variant="body1"
      sx={{
        lineHeight: 1.8,
        fontWeight: "medium",
        fontSize: { md: 14, xl: 19 },
      }}
    >
      Over{" "}
      <span
        style={{
          color: theme.palette.primary.main,
          fontWeight: "bolder", 
        }}
      >
        28,000 trees
      </span>{" "}
      are wasted per day to <br /> make toilet paper.
      <br /> 
      <br /> 
      On average, one tree can produce
      <span
        style={{
          color: theme.palette.primary.main,
          fontWeight: "bolder", 
        }}
      >
        1500
        <br />
      </span>{" "}
      rolls of toilet paper.
      <br /> 
      <br /> 
      The pulping process consumes{" "}
      <span
        style={{
          color: theme.palette.primary.main,
          fontWeight: "bolder", 
        }}
      >
        37 to 45
        <br /> gallons
      </span>{" "}
      of water per toilet roll.
      <br />
      <br />
       A booty Shower only uses{" "}
      <span
        style={{
          color: theme.palette.primary.main,
          fontWeight: "bolder", 
        }}
      >
        0.1 to 0.5 <br /> Gallons
      </span>{" "}
      of water per wash
    </Typography>
  );
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      {!downLg ? (
        <>
          <RequestQuotationDialog
            open={openQuotation}
            handleClose={handleRequestQuotationClose}
          />
          <RequestReportDialog
            open={openReport}
            handleClose={handleRequestReportClose}
          />

          <Header />
          <Container maxWidth="xl" className="subContainer3" mt={12}>
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

              <Grid item xs={12} sm={12} md={12} lg={12} mt={12}>
                <SectionHeading
                  heading="Catalog"
                  circleColor={theme.palette.primary.main}
                  circleSx={{ height: 100, width: 100, left: -15 }}
                />
              </Grid>

              {/* Catalog Cards */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={12}>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    variant="text"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    View Catalog
                  </Button>
                </Box>
              </Grid>

              {catalogItems.map((product, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  mt={10}
                  key={index}
                  className="child-container"
                >
                  <CatalogCard
                    href={product.href}
                    src={product.src}
                    alt="product-image"
                    content={product.content}
                  />
                </Grid>
              ))}

              {/* Request a demo */}
              <Grid item sm={12} md={12} lg={12} mt={10} mb={12}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Link href="#" color="text.secondary" mb={3}>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      fontWeight="bold"
                      align="center"
                      sx={{ fontSize: 32 }}
                    >
                      Models available for commercial orders only
                    </Typography>
                  </Link>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    sx={{
                      py: 1.4,
                      px: 6,
                      "&:hover": {
                        backgroundColor: theme.palette.success.main,
                        boxShadow: "none",
                      },
                      width: "40%",
                      height: 75,
                      fontSize: 24,
                      borderRadius: "19px!important",
                    }}
                    onClick={() => setOpenQuotation(true)}
                  >
                    Request a Quotation
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>

          {/* Why should your business take the pledge and make the switch? */}
          <Box mb={20}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                backgroundImage: `url(${officeBg.src})`,
                height: 300,
                backgroundSize: "cover", // Adjust as needed
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: alpha(theme.palette.primary.main, 0.8),
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 10,
                }}
              >
                <Typography
                  variant="h3"
                  color="text.primary"
                  // fontWeight="medium"
                  align="center"
                  sx={{ fontSize: 36 }}
                >
                  Why should your business take the pledge <br /> and make the
                  switch?
                </Typography>
              </Box>
            </Box>
          </Box>

          <Container maxWidth="xl" sx={{ mb: 20 }} className="subContainer4">
            <Grid container spacing={3}>
              {/* Benefit Cards */}
              <Grid item sm={12} md={4} lg={4}>
                <BenefitCard
                  src={earthOnHand}
                  alt={"Earth on hand"}
                  heading={"Support Your Environmental Initiatives"}
                  paragraph={descrip}
                />
              </Grid>

              <Grid item sm={12} md={4} lg={4}>
                <BenefitCard
                  src={monitaryBenefits}
                  alt={"Cost Savings"}
                  heading={"Cost Savings"}
                  paragraph={
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.8,
                        fontWeight: "medium",
                        fontSize: { md: 14, xl: 19 },
                        mt: 10,
                      }}
                    >
                      "Save money, your Booty Shower water consumption should
                      cost less than your toilet paper expenses.
                      <br />
                      <br />
                      We can help you calculate your 
                      potential <br />savings. "
                    </Typography>
                  }
                />
              </Grid>

              <Grid item sm={12} md={4} lg={4}>
                <BenefitCard
                  src={performacePractices}
                  alt={"Performance Practices"}
                  heading={"Support Better Hygiene Practices"}
                  paragraph={
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 2.5,
                        fontWeight: "medium",
                        fontSize: { md: 14, xl: 19 },
                      }}
                    >
                      "Help keep your family, customers, <br /> tenants, and
                      employees healthier and <br /> safer by introducing the
                      right way to <br /> wash the booty."
                    </Typography>
                  }
                />
              </Grid>

              {/* Learn More */}
              {/* <Grid item sm={12} md={12} lg={12} mt={12}>
            <Typography
              variant="h5"
              color="text.secondary"
              fontWeight="medium"
              align="center"
            >
              Interested in learning more about the environmental impact of
              toilet paper visit our{" "}
              <Box>
                <Link href="#">Facts page</Link>
              </Box>
            </Typography>
          </Grid> */}
            </Grid>
          </Container>

          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: 10,
              mt: -5,
              mb: 10,
            }}
          >
            <Typography
              variant="h3"
              // fontWeight="medium"
              align="center"
              sx={{ fontSize: 30, color: "black" }}
            >
              Interested in learning more about the environmental impact of
              toilet paper
              <br /> visit our{" "}
              <span
                style={{
                  color: theme.palette.primary.main,
                  fontWeight: "bolder",
                }}
              >
                Facts Page
              </span>{" "}
            </Typography>
          </Box>

          {/* Which businesses & establishments should make the switch?  */}
          <Box mb={20}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                backgroundImage: `url(${officeBg.src})`,
                height: 300,
                backgroundSize: "cover", // Adjust as needed
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: alpha(theme.palette.success.main, 0.8),
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  color="text.primary"
                  fontWeight="normal"
                  align="center"
                  fontSize="36px"
                >
                  Which businesses & establishments should <br />
                  make the switch?
                </Typography>
              </Box>
            </Box>
          </Box>

          <Container
            maxWidth="xl"
            sx={{ mb: 20, px: "80px" }}
            className="subContainer4"
          >
            <Grid container spacing={3} padding="0 70px">
              {/* Facility Cards */}
              {faciltyItems.map((item, index) => (
                <Grid item sm={12} md={4} lg={4} key={index} padding="10px">
                  <FacilityCard
                    src={item.src}
                    alt={item.alt}
                    heading={item.heading}
                    paragraph={item.paragraph}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>

          {/* Request Custom Report  */}
          <Box mb={35}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                height: 382,
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  position: "relative",
                  background: `linear-gradient(45deg, ${theme.palette.success.main}, ${theme.palette.success.main})`,
                  overflow: "hidden",
                  zIndex: 5,
                }}
              >
                {/* Top Circle */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "-130px",
                    left: "-80px",
                    height: "250px",
                    width: "250px",
                    background: alpha(theme.palette.success.light, 0.25),
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
                    // right: downMd ? "-60px" : "450px",
                    right: "-50px",
                    height: "250px",
                    width: "250px",
                    background: alpha(theme.palette.success.light, 0.25),
                    // backgroundColor: 'red',
                    borderRadius: "50%",
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 15,
                    height: "100%",
                  }}
                >
                  <Box width={"60%"}>
                    <Typography
                      variant="h5"
                      // color="black"
                      fontSize="32px"
                      align="center"
                      mb={3}
                    >
                      We can provide a complimentary custom report to analyze
                      your savings and environmental impact.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="white"
                    sx={{
                      color: theme.palette.success.main,
                      // backgroundColor: "#62BC1D",
                      py: 1.4,
                      px: 5,
                      width: "40%",
                      height: 75,
                      fontSize: 20,
                      fontWeight: "bold",
                      borderRadius: "19px!important",
                    }}
                    onClick={() => setOpenReport(true)}
                  >
                    Request a Free Report - Quick & Easy
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Showcase ? */}
          {/* <Container
            maxWidth="xl"
            sx={{ mb: 30, px: 24 }}
            className="subContainer5"
          >
            <Grid container spacing={2}>
              <Grid item sm={12} md={12} lg={12} mb={5}>
                <Showcase
                  imgLeft
                  src={rectPlaceholder}
                  alt={"Showcase Image"}
                  description={`Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`}
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <Showcase
                  src={rectPlaceholder}
                  alt={"Showcase Image"}
                  description={`Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`}
                />
              </Grid>
            </Grid>
          </Container> */}
        </>
      ) : (
        <>
          <RequestQuotationDialog
            open={openQuotation}
            handleClose={handleRequestQuotationClose}
          />
          <RequestReportDialog
            open={openReport}
            handleClose={handleRequestReportClose}
          />

          <Header />
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

              <Grid item xs={12} sm={12} md={12} lg={12} mb={12}>
                <CommercialHeading
                  heading="Catalog"
                  circleColor={theme.palette.primary.main}
                  circleSx={{ height: 100, width: 100, left: -15 }}
                  className="product_head"
                />
              </Grid>

              {/* Catalog Cards */}

              <Grid className="product-card" marginLeft={-2}>
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
                  {catalogItems.map((product, index) => (
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
                        <CatalogCard
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

              <Grid item xs={12} sm={12} md={12} lg={12} mt={5}>
                <Box display="flex" justifyContent="center">
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    variant="h6"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    View Catalog
                  </Button>
                </Box>
              </Grid>

              {/* Request a demo */}
              <Grid item sm={12} md={12} lg={12} mt={5} mb={12} mx={7}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Link href="#" color="text.secondary" mb={3}>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      fontWeight="normal"
                      align="center"
                    >
                      Models available for commercial
                      <br /> orders only
                    </Typography>
                  </Link>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    sx={{
                      py: 1.4,
                      px: 6,
                      "&:hover": {
                        backgroundColor: theme.palette.success.main,
                        boxShadow: "none",
                      },
                    }}
                    onClick={() => setOpenQuotation(true)}
                  >
                    Request a Quotation
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>

          {/* Why should your business take the pledge and make the switch? */}
          <Box mb={20}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                backgroundImage: `url(${officeBg.src})`,
                height: 300,
                backgroundSize: "cover", // Adjust as needed
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: alpha(theme.palette.primary.main, 0.8),
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 7,
                }}
              >
                <Typography
                  variant="h3"
                  color="text.primary"
                  // fontWeight="medium"
                  align="center"
                  fontSize="22px"
                  lineHeight="40px"
                >
                  Why should your business take the pledge and make the switch?
                </Typography>
              </Box>
            </Box>
          </Box>

          <Container maxWidth="lg" sx={{ mb: 20, px: 10 }}>
            <Grid container spacing={3}>
              {/* Benefit Cards */}
              <Grid item sm={12} md={4} lg={4}>
                <BenefitCard
                  src={earthOnHand}
                  alt={"Earth on hand"}
                  heading={"Support Your Environmental Initiatives"}
                  paragraph={descrip}
                />
              </Grid>

              <Grid item sm={12} md={4} lg={4}>
                <BenefitCard
                  src={monitaryBenefits}
                  alt={"Cost Savings"}
                  heading={"Cost Savings"}
                  paragraph={`Save money, your Booty Shower water consumption should cost less than your toilet paper expenses. We can help you calculate your potential savings. `}
                />
              </Grid>

              <Grid item sm={12} md={4} lg={4}>
                <BenefitCard
                  src={performacePractices}
                  alt={"Performance Practices"}
                  heading={"Support Better Hygiene Practices"}
                  paragraph={`Help keep your family, customers, tenants, and employees healthier and safer by introducing the right way to wash the booty.`}
                />
              </Grid>

              {/* Learn More */}
              {/* <Grid item sm={12} md={12} lg={12} mt={12}>
            <Typography
              variant="h5"
              color="text.secondary"
              fontWeight="medium"
              align="center"
            >
              Interested in learning more about the environmental impact of
              toilet paper visit our{" "}
              <Box>
                <Link href="#">Facts page</Link>
              </Box>
            </Typography>
          </Grid> */}
            </Grid>
          </Container>

          {/* Which businesses & establishments should make the switch?  */}
          <Box mb={20}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                backgroundImage: `url(${officeBg.src})`,
                height: 300,
                backgroundSize: "cover", // Adjust as needed
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: alpha(theme.palette.success.main, 0.8),
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h3"
                  color="text.primary"
                  // fontWeight="medium"
                  align="center"
                  fontSize="22px"
                  lineHeight="40px"
                  px={7}
                >
                  Which businesses & establishments should make the switch?
                </Typography>
              </Box>
            </Box>
          </Box>

          <Container maxWidth="lg" sx={{ mb: 20 }} px={10}>
            <Grid container spacing={3} px={7}>
              {/* Facility Cards */}
              {faciltyItems.map((item, index) => (
                <Grid item sm={12} md={4} lg={4} key={index}>
                  <FacilityCard
                    src={item.src}
                    alt={item.alt}
                    heading={item.heading}
                    paragraph={item.paragraph}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>

          {/* Request Custom Report  */}
          <Box mb={35}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                height: 400,
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  position: "relative",
                  background: `linear-gradient(45deg, ${theme.palette.success.main}, ${theme.palette.success.main})`,
                  overflow: "hidden",
                  zIndex: 5,
                }}
              >
                {/* Top Circle */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "-130px",
                    left: "-80px",
                    height: "250px",
                    width: "250px",
                    background: alpha(theme.palette.success.light, 0.25),
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
                    // right: downMd ? "-60px" : "450px",
                    right: "-50px",
                    height: "250px",
                    width: "250px",
                    background: alpha(theme.palette.success.light, 0.25),
                    // backgroundColor: 'red',
                    borderRadius: "50%",
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 15,
                    height: "100%",
                  }}
                >
                  <Box width={"70%"}>
                    <Typography
                      variant="h6"
                      // color="black"
                      fontWeight="normal"
                      align="center"
                      mb={3}
                      fontSize={18}
                    >
                      We can provide a complimentary custom report to analyze
                      your savings and environmental impact.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="white"
                    sx={{
                      color: theme.palette.success.main,
                      // backgroundColor: "#62BC1D",
                      py: 1.4,
                      px: 5,
                      borderRadius: "19px!important",
                      fontSize: 14,
                    }}
                    onClick={() => setOpenReport(true)}
                  >
                    Request a Free Report - Quick & Easy
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Showcase ? */}
        </>
      )}
    </>
  );
}
