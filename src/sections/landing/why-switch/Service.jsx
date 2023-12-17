import Image from "next/image";

import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";


export default function Service({ heading, src, alt, description }) {

  const theme = useTheme();

  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
    {!downMd?(
    <Box alignItems="center" my={5}>
      <Box mb={5} display="flex" justifyContent="center" alignItems="center">
        <Image src={src} alt={alt} height={70} width={"auto"} />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography mb={2} variant="h6" color="success.main" fontWeight="bold" sx={{ fontSize: '26.5px'}}>
          {heading}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "auto",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          fontWeight="medium"
          align="center"
          // width={"50%"}
          sx={{ lineHeight: 2.5, fontSize: '18px' }}
        >
          {description}
        </Typography>
      </Box>
    </Box>):(
    <Box alignItems="center" my={5}>
      <Box mb={5} display="flex" justifyContent="center" alignItems="center">
        <Image src={src} alt={alt} height={40} width={"auto"} />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography mb={2} variant="h6" color="success.main" fontWeight="bold" sx={{ fontSize: '15px'}}>
          {heading}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "auto",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          fontWeight="medium"
          align="center"
          // width={"50%"}
          sx={{ lineHeight: 2.5, fontSize: '8px' }}
        >
          {description}
        </Typography>
      </Box>
    </Box>)}
    </>
  );
}