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

export default function ProductCard({ href, src, alt, content }) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
    {!downMd ? (
      <Card sx={{ borderRadius: 5, py: 5 }}
      xs={12}
      sm={12}
      md={12}
      
      >
        <Box display="flex" justifyContent="center">
          <Image src={src} alt={alt} width={"100%"} height={"300"} />
        </Box>
  
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {content}
        </CardContent>
  
        <CardContent sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            href={href}
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: "15em",
              py: 1,
              "&:hover": {
                backgroundColor: theme.palette.success.main,
                boxShadow: "none",
              },
            }}
          >
            Add to cart
          </Button>
        </CardContent>
      </Card>
    ): (


    <Card sx={{ borderRadius: 5, py: 5,px:3 }}
      xs={12}
      sm={12}
      md={12}
      >
        <Box display="flex" justifyContent="center">
          <Image src={src} alt={alt} width={"100%"} height={"300"} />
        </Box>
  
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {content}
        </CardContent>
  
        <CardContent sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            href={href}
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: "15em",
              py: 1,
              "&:hover": {
                backgroundColor: theme.palette.success.main,
                boxShadow: "none",
              },
            }}
          >
            Add to cart
          </Button>
        </CardContent>
      </Card>)}
    </>
  );
}
