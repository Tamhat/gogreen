import Image from "next/image";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  Button,
  useMediaQuery,
} from "@mui/material";
import theme from "@/theme/theme";
import { useTheme } from "@emotion/react";

export default function FacilityCard({ src, alt, heading, paragraph }) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {!downMd ? (
        <Card sx={{ borderRadius: 5, py: 5, p: 3, height: "388px" }}>
          <Box display="flex" justifyContent="center">
            <Image src={src} alt={alt} width={"100"} height={"100"} />
          </Box>
          <Typography variant="h6" color="success.main" align="center" mt={3}>
            {heading}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            mt={2}
            lineHeight={1.5}
          >
            {paragraph}
          </Typography>
        </Card>
      ) : (
        <Card sx={{ borderRadius: '25px 25px 0px 0!important', py: 5, p: 3, height: "388px" }}>
          <Box display="flex" justifyContent="center">
            <Image src={src} alt={alt} width={"100"} height={"100"} />
          </Box>
          <Typography variant="h6" color="success.main" align="center" mt={3}>
            {heading}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            mt={2}
            lineHeight={1.5}
            fontWeight='bold'
          >
            {paragraph}
          </Typography>
        </Card>
      )}
    </>
  );
}
