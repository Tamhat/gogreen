import Image from "next/image";

import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function BenefitCard({ src, alt, heading, paragraph }) {
	const theme = useTheme();
	const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {!downMd ? (
        <Box>
          {/* Image */}
          <Box display="flex" justifyContent="center">
            <Image src={src} alt={alt} height={100} width={100} />
          </Box>
          {/* Heading */}
          <Typography
            variant="h6"
            color="primary"
            fontWeight="bold"
            align="center"
            mt={4}
            sx={{ fontSize: 26 }}
          >
            {heading}
          </Typography>

          {/* Paragraph */}
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            mt={5}
            fontWeight="medium"
            lineHeight={2}
            sx={{ fontSize: 17 }}
          >
            {paragraph}
          </Typography>
        </Box>
      ) : (
        <Box>
          {/* Image */}
          <Box display="flex" justifyContent="center">
            <Image src={src} alt={alt} height={100} width={100} />
          </Box>
          {/* Heading */}
          <Typography
            variant="h6"
            color="primary"
            fontWeight="bold"
            align="center"
            mt={4}
            sx={{ fontSize: 18 }}
          >
            {heading}
          </Typography>

          {/* Paragraph */}
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            mt={5}
            fontWeight="medium"
            lineHeight={2}
            sx={{ fontSize: '14px!important' }}
          >
            {paragraph}
          </Typography>
		  <p></p>
        </Box>
      )}
    </>
  );
}
