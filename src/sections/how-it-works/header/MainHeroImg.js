"use client";

import Image from "next/image";

import { Box, Typography, Button, Link, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

// icons
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useState } from "react";
import "@/sections/how-it-works/header/header.css";

export const MainHeroImg = () => {
  const [shopBagColor, setShopBagColor] = useState("#fff");
  const theme = useTheme();

  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return [
    {
      element: (
        <>
          {/* Top Circle */}
          <Box
            sx={{
              position: "absolute",
              top: downMd ? "350px" : "-350px",
              left: "-100px",
              height: "350px",
              width: "350px",
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
              height: "350px",
              width: "350px",
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
              how it works
            </Typography>
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
