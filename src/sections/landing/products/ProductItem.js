import Image from "next/image";

import img1 from "/assets/updated-images/img1.png";
import img2 from "/assets/updated-images/img2.png";
import img3 from "/assets/updated-images/img3.png";

import { Box, Typography } from "@mui/material";

export const productItems = [
  {
    src: img1,
    alt: "product-img",
    href: "https://store.gogreenbooty.com/products/revolution-plus",
    content: (
      <Box>
        <Typography
          mb={0.5}
          align="center"
          variant="h6"
          color="initial"
          fontWeight="bold"
        >
          Hygienic Pro+
        </Typography>
        <Typography
          mb={2}
          align="center"
          variant="body1"
          color="initial"
          fontWeight="light"
        >
          PRESSURE CONTROL
        </Typography>
        <Typography
          align="center"
          variant="h5"
          color="initial"
          fontWeight="bold"
        >
          200$
        </Typography>
        <Typography
          align="center"
          variant="body2"
          color="initial"
          fontWeight="medium"
        >
          (Shipping Included)
        </Typography>
      </Box>
    ),
  },
  {
    src: img2,
    alt: "product-img",
    href: "https://store.gogreenbooty.com/products/rec",
    content: (
      <Box>
        <Typography
          mb={0.5}
          align="center"
          variant="h6"
          color="initial"
          fontWeight="bold"
        >
          Hygienic Pro
        </Typography>
        <Typography
          mb={2}
          align="center"
          variant="body1"
          color="initial"
          fontWeight="light"
        >
          SIMPLE OPERATION
        </Typography>
        <Typography
          align="center"
          variant="h5"
          color="initial"
          fontWeight="bold"
        >
          200$
        </Typography>
        <Typography
          align="center"
          variant="body2"
          color="initial"
          fontWeight="medium"
        >
          (Shipping Included)
        </Typography>
      </Box>
    ),
  },
  {
    src: img3,
    alt: "product-img",
    href: "https://store.gogreenbooty.com/products/the-traveler",
    content: (
      <Box>
        <Typography
          mb={0.5}
          align="center"
          variant="h6"
          color="initial"
          fontWeight="bold"
        >
          Hygienics Slim
        </Typography>
        <Typography
          mb={2}
          align="center"
          variant="body1"
          color="initial"
          fontWeight="light"
        >
          SOOTHING SHOWER
        </Typography>
        <Typography
          align="center"
          variant="h5"
          color="initial"
          fontWeight="bold"
        >
          200$
        </Typography>
        <Typography
          align="center"
          variant="body2"
          color="initial"
          fontWeight="medium"
        >
          (Shipping Included)
        </Typography>
      </Box>
    ),
  },
];
