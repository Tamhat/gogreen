// ImageCarousel.js
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { whyUsItems } from "./WhyUsItems";
import Image from "next/image";

const ImageCarousel = ({ reasons }) => {
  const images = whyUsItems;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ width: "100%", height: "auto" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10px", // Adjust the left position as needed
          transform: "translateY(-50%)",
          borderRadius: "50%",
          backgroundColor: "#2196F3", // Button background color
          width: "90px",
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={handlePrevious}
      >
        <NavigateNextIcon style={{ color: "white" }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10px", // Adjust the right position as needed
          transform: "translateY(-50%)",
          borderRadius: "50%",
          backgroundColor: "#2196F3", // Button background color
          width: "90px",
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={handleNext}
      >
        <NavigateNextIcon
          style={{ color: "white", transform: "rotate(180deg)" }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h4">Why Choose Us</Typography>
        <Typography variant="body1">{reasons[currentIndex]}</Typography>
      </div>
    </div>
  );
};

export default ImageCarousel;
