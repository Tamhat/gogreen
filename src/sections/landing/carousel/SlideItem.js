"use client";

import Image from "next/image";

import { Box, Typography, Button, Link, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

// images
import img1 from "/assets/carousel/img1.jpg";
import img2 from "/assets/carousel/img2.png";
import img3 from "/assets/carousel/img3.png";
import img4 from "/assets/carousel/img4.jpg";

// icons
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import SvgShopIcon from "./SvgShopIcon";
import { useState } from "react";
import "@/sections/landing/carousel/carousal.css";

const StyledButton = styled(Button, { shouldForwardProp: (prop) => prop })(
  ({ theme }) => ({
    color: "white",
    borderColor: "white",
    "&:hover": {
      borderColor: "white",
      backgroundColor: "white",
      color: theme.palette.primary.light,
    },
  })
);

export const SlideItems = () => {
  const [shopBagColor, setShopBagColor] = useState("#fff");
  const theme = useTheme();

  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return [
    {
      src: img1,
      alt: "Image 1",
      element: (
        <>
          {/* Top Circle */}
          <Box
            sx={{
              position: "absolute",
              top: downMd ? "250px" : "-350px",
              left: "-100px",
              height: downMd ? "250px": "350px",
              width: downMd ? "250px": "350px",
              background: theme.palette.primary.light,
              borderRadius: "50%",
              zIndex: -10,
            }}
          />
          {/* Bottom Circle */}
          <Box
            sx={{
              position: "absolute",
              bottom: "75px",
              right: downMd ? "-60px" : "-115px",
              height: downMd ? "250px": "350px",
              width: downMd ? "250px": "350px",
              background: theme.palette.primary.light,
              // backgroundColor: 'red',
              borderRadius: "50%",
              zIndex: -10,
            }}
          />
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              sx={{ mb: 4 }}
              variant={downMd ? "h4" : "h3"}
              align="center"
              color="white"
              fontWeight="bold"
              className="box1-font"
            >
              Go{" "}
              <Box
                component="span"
                sx={{ color: (theme) => theme.palette.success.light }}
              >
                Green
              </Box>{" "}
              & Keep your <br /> Booty Clean
            </Typography>
            <StyledButton
              href="https://store.gogreenbooty.com/collections/all"
              sx={{ width: "230px", py: 1.4 }}
              component={StyledButton}
              onMouseEnter={() => setShopBagColor(theme.palette.primary.main)}
              onMouseLeave={() => setShopBagColor("#fff")}
              variant="outlined"
              startIcon={<SvgShopIcon color={shopBagColor} />}
            >
              View Products
            </StyledButton>
          </Box>
        </>
      ),
    },
    {
      src: img2,
      alt: "Image 2",
      element: (
        <>
          {/* Top Circle */}
          <Box
            sx={{
              position: "absolute",
              top: downMd ? "350px" : "-450px",
              left: "45px",
              height: downMd ? "250px": "350px",
              width: downMd ? "250px": "350px",
              background: theme.palette.primary.light,
              borderRadius: "50%",
              zIndex: -10,
            }}
          />
          {/* Bottom Circle */}
          <Box
            sx={{
              position: "absolute",
              bottom: "50px",
              right: downMd ? "-60px" : "53px",
              height: downMd ? "250px": "350px",
              width: downMd ? "250px": "350px",
              background: theme.palette.primary.light,
              // backgroundColor: 'red',
              borderRadius: "50%",
              zIndex: -10,
            }}
          />
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              sx={{ mb: 4 }}
              align="center"
              variant={downMd ? "h4" : "h3"}
              color="white"
              className="box2-font"
              sm={{ fontSize: ".5rem!important" }}
            >
              Our designs are elegant and add a touch of <br /> elegance to your
              bathroom.
            </Typography>
            <StyledButton
              href="https://store.gogreenbooty.com/collections/all"
              sx={{ width: "230px", py: 1.4 }}
              component={StyledButton}
              onMouseEnter={() => setShopBagColor(theme.palette.primary.main)}
              onMouseLeave={() => setShopBagColor("#fff")}
              variant="outlined"
              startIcon={<SvgShopIcon color={shopBagColor} />}
            >
              View Products
            </StyledButton>
          </Box>
        </>
      ),
    },
    {
      src: img3,
      alt: "Image 3",
      element: (
        <>
          {/* Top Circle */}
          <Box
            sx={{
              position: "absolute",
              top: downMd ? "350px" : "-450px",
              left: "26%",
              height: downMd ? "250px": "350px",
              width: downMd ? "250px": "350px",
              background: theme.palette.primary.light,
              borderRadius: "50%",
              zIndex: -10,
            }}
          />
          {/* Bottom Circle */}
          <Box
            sx={{
              position: "absolute",
              bottom: "50px",
              right: downMd ? "-60px" : "26%",
              height: downMd ? "250px": "350px",
              width: downMd ? "250px": "350px",
              background: theme.palette.primary.light,
              // backgroundColor: 'red',
              borderRadius: "50%",
              zIndex: -10,
            }}
          />
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              sx={{ mb: 4 }}
              align="center"
              variant={downMd ? "h4" : "h2"}
              color="white"
              className="box3-font"
            >
              Its about time you start treating your <br /> booty right.
            </Typography>
            <StyledButton
              href="https://store.gogreenbooty.com/collections/all"
              sx={{ width: "230px", py: 1.4 }}
              component={StyledButton}
              onMouseEnter={() => setShopBagColor(theme.palette.primary.main)}
              onMouseLeave={() => setShopBagColor("#fff")}
              variant="outlined"
              startIcon={<SvgShopIcon color={shopBagColor} />}
            >
              View Products
            </StyledButton>
          </Box>
        </>
      ),
    },
    {
      src: img4,
      alt: "Image 4",
      element: (
        <>
          {/* Top Circle */}
          <Box
            sx={{
              position: "absolute",
              top: downMd ? "350px" : "-350px",
              right: "-100px",
              height: downMd ? "250px": "350px",
              width: downMd ? "250px": "350px",
              background: theme.palette.primary.light,
              borderRadius: "50%",
              zIndex: -10,
            }}
          />
          {/* Bottom Circle */}
          <Box
            sx={{
              position: "absolute",
              bottom: "75px",
              left: downMd ? "-60px" : "-115px",
              height: downMd ? "250px": "350px",
              width: downMd ? "250px": "350px",
              background: theme.palette.primary.light,
              // backgroundColor: 'red',
              borderRadius: "50%",
              zIndex: -10,
            }}
          />
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              sx={{ mb: 4 }}
              align="center"
              variant={downMd ? "h4" : "h3"}
              color="white"
              className="box4-font"
            >
              Water is the better option.
            </Typography>
            <StyledButton
              href="https://store.gogreenbooty.com/collections/all"
              sx={{ width: "230px", py: 1.4 }}
              component={StyledButton}
              onMouseEnter={() => setShopBagColor(theme.palette.primary.main)}
              onMouseLeave={() => setShopBagColor("#fff")}
              variant="outlined"
              startIcon={<SvgShopIcon color={shopBagColor} />}
            >
              View Products
            </StyledButton>
          </Box>
        </>
      ),
    },
  ];
};

// [
// 	{
// 		src: img1,
// 		alt: "Image 1",
// 		element: <Box display="flex" flexDirection="column" alignItems="center">
// 			<Typography sx={{ mb: 4 }} variant="h3" align="center" color="white" fontWeight="bold">
// 				Go <Box component="span" sx={{ color: (theme) => theme.palette.success.light }}>Green</Box> & Keep your Booty Clean
// 			</Typography>
// 			<StyledButton href="https://gogreenbooty.com/collections/all" sx={{width: "200px"}} component={StyledButton} variant="outlined" startIcon={<ShoppingBagOutlinedIcon />} sx={{ py: 1 }}>
// 				View Products
// 			</StyledButton>
// 		</Box>
// 	},
// 	{
// 		src: img2,
// 		alt: "Image 2",
// 		element: <Box display="flex" flexDirection="column" alignItems="center">
// 			<Typography sx={{ mb: 4 }} align="center" variant="h3" color="white">
// 				Our designs are elegant and add elegance to your bathroom.
// 			</Typography>
// 			<StyledButton href="https://gogreenbooty.com/collections/all" component={StyledButton} variant="outlined" startIcon={<ShoppingBagOutlinedIcon />} sx={{ py: 1 }}>
// 				View Products
// 			</StyledButton>
// 		</Box>
// 	},
// 	{
// 		src: img3,
// 		alt: "Image 3",
// 		element: <Box display="flex" flexDirection="column" alignItems="center">
// 		<Typography sx={{ mb: 4 }} align="center" variant="h3" color="white">
// 			Its about time you start treating your booty right.
// 		</Typography>
// 		<StyledButton href="https://gogreenbooty.com/collections/all" component={StyledButton} variant="outlined" startIcon={<ShoppingBagOutlinedIcon />} sx={{ py: 1 }}>
// 			View Products
// 		</StyledButton>
// 	</Box>
// 	},
// 	{
// 		src: img4,
// 		alt: "Image 4",
// 		element: <Box display="flex" flexDirection="column" alignItems="center">
// 		<Typography sx={{ mb: 4 }} align="center" variant="h3" color="white">
// 			Water is the better option.
// 		</Typography>
// 		<StyledButton href="https://gogreenbooty.com/collections/all" component={StyledButton} variant="outlined" startIcon={<ShoppingBagOutlinedIcon />} sx={{ py: 1 }}>
// 			View Products
// 		</StyledButton>
// 	</Box>
// 	}
// ]
