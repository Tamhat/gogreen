import Image from "next/image";

import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";

export default function ConvinceReason({
  heading,
  src1Inactive,
  src1Active,
  alt1,
  src2Inactive,
  src2Active,
  alt2,
  src3Inactive,
  src3Active,
  alt3,
  descriptionObject,
  src,
  alt,
  description,
}) {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const [toggleState, setToggleState] = useState(1);

  const [activeDescription, setActiveDescription] = useState(
    descriptionObject?.one
  );

  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  // toggle next every 3 seconds
  useEffect(() => {
    let toggleState = 1;
    const intervalId = setInterval(() => {
      if (toggleState === 1) {
        setActive1(true);
        setActive2(false);
        setActive3(false);
        setActiveDescription(descriptionObject?.one);
        toggleState += 1;
      } else if (toggleState === 2) {
        setActive1(false);
        setActive2(true);
        setActive3(false);
        setActiveDescription(descriptionObject?.two);
        toggleState += 1;
      } else if (toggleState === 3) {
        setActive1(false);
        setActive2(false);
        setActive3(true);
        setActiveDescription(descriptionObject?.three);
        toggleState = 1;
      }
    }, 3000);
  }, []);

  return (
    <>
      {!downMd ? (
        <Box>
          <Box mb={7}>
            <Typography
              variant="h5"
              color="success.main"
              fontWeight="bold"
              align="center"
              sx={{ textTransform: "uppercase" }}
            >
              {heading}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-evenly"
            flexWrap="wrap"
            mb={5}
          >
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setActive1(true);
                setActiveDescription(descriptionObject.one);
                setActive2(false);
                setActive3(false);
              }}
            >
              {!active1 ? (
                <Image
                  src={src1Inactive}
                  alt={alt1}
                  height={"auto"}
                  width={"204"}
                />
              ) : (
                <Image
                  src={src1Active}
                  alt={alt1}
                  height={"auto"}
                  width={"204"}
                />
              )}
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setActive1(false);
                setActive2(true);
                setActiveDescription(descriptionObject.two);
                setActive3(false);
              }}
            >
              {!active2 ? (
                <Image
                  src={src2Inactive}
                  alt={alt2}
                  height={"auto"}
                  width={"204"}
                />
              ) : (
                <Image
                  src={src2Active}
                  alt={alt2}
                  height={"auto"}
                  width={"204"}
                />
              )}
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setActive1(false);
                setActive2(false);
                setActive3(true);
                setActiveDescription(descriptionObject.three);
              }}
            >
              {!active3 ? (
                <Image
                  src={src3Inactive}
                  alt={alt3}
                  height={"auto"}
                  width={"204"}
                />
              ) : (
                <Image
                  src={src3Active}
                  alt={alt3}
                  height={"auto"}
                  width={"204"}
                />
              )}
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            align="center"
            color="inherit"
          >
            {/* <Box
          // component="div"
          // variant="body1"
          // color="initial"
          // fontWeight="medium"
          align="center"
          maxWidth="xl"
        > */}
            {activeDescription}
            {/* </Box> */}
          </Box>
        </Box>
      ) : (
        <Box alignItems="center" my={5} spacing={3}>
          <Box
            mb={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={src} alt={alt} height={40} width={"auto"} />
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography
              mb={2}
              variant="h6"
              color="success.main"
              fontWeight="bold"
              sx={{ fontSize: "8px" }}
            >
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
              sx={{ lineHeight: 2.5, fontSize: "5.5px" }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
