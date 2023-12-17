// mui
import { Container, Grid, Box, Typography } from "@mui/material";

// sections
import { FAQS } from "@/sections/faqs";

export default function Facts() {
  return (
    <>
      <Container maxWidth="md">
        <Box
          sx={{
            mt: 10,
            mb: 20,
            mx: 5,
          }}
        >
          <Grid container spacing={3} mt={5}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={4}>
              <Typography variant="h5" color="primary" fontWeight="bold">
                Frequently Asked Questions
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <FAQS />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={20}></Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
