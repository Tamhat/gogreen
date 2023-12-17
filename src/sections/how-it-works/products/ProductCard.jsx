"use client";

import Image from "next/image";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  IconButton,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// icons
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export default function ProductCard({ src, alt, content, isAddedToCart, handleAddToCard }) {
  const theme = useTheme();

  return (
    <Card sx={{ borderRadius: 5 }}>
      <Box display="flex" justifyContent="center">
        <Image src={src} alt={alt} width={"110%"} height={"300"} />
      </Box>

      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {content}
      </CardContent>

      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            width: "155em",
            py: 1,
            "&:hover": {
              backgroundColor: theme.palette.success.main,
              boxShadow: "none",
            },
          }}
		  onClick={handleAddToCard}
        >
          Add to cart
        </Button>
      </CardContent>

      <Box
        sx={{
          backgroundColor: isAddedToCart ? theme.palette.primary.main : "",
        }}
      >
        <IconButton
          variant="contained"
          color="inherit"
          sx={{ width: "100%", borderRadius: 0 }}
        >
          {isAddedToCart ? <CheckCircleOutlinedIcon /> : <CircleOutlinedIcon color="primary" />}
        </IconButton>
      </Box>
    </Card>
  );
}
