import Image from "next/image";

import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../../../app/commercial-orders/com.css";

export default function Showcase({ imgLeft, src, alt, description }) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {!downMd ? (
        <Grid
          container
          display="flex"
          alignItems="center"
        >
          {imgLeft ? (
            <>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={6}
                xl={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={src} alt={alt} height={"100%"} width={"100%"} />
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={6} xl={6} mt={2} p={4}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontSize={19}
                >
                  {description}
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              {!downMd && (
                <Grid item xs={12} sm={12} md={8} lg={6} xl={6} p={4}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontSize={19}
                  >
                    {description}
                  </Typography>
                </Grid>
              )}

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={6}
                xl={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={src} alt={alt} height={"100%"} width={"100%"} />
              </Grid>

              {downMd && (
                <Grid item xs={12} sm={12} md={8} lg={6} xl={6} mt={2} p={4}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontSize={19}
                  >
                    {description}
                  </Typography>
                </Grid>
              )}
            </>
          )}
        </Grid>
      ) : (
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className="subshowcase"
        >
          {imgLeft ? (
            <>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={6}
                xl={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={src} alt={alt} height={"100%"} width={"100%"} />
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={6} xl={6} mt={2} p={4}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontSize={19}
                >
                  {description}
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              {!downMd && (
                <Grid item xs={12} sm={12} md={8} lg={6} xl={6} p={4}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontSize={19}
                  >
                    {description}
                  </Typography>
                </Grid>
              )}

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={6}
                xl={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={src} alt={alt} height={"100%"} width={"100%"} />
              </Grid>

              {downMd && (
                <Grid item xs={12} sm={12} md={8} lg={6} xl={6} mt={2} p={4}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontSize={19}
                  >
                    {description}
                  </Typography>
                </Grid>
              )}
            </>
          )}
        </Grid>
      )}
    </>
  );
}
