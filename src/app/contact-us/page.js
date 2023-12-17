// mui
import { Container, Grid, Box, Typography } from "@mui/material";

// sections
import { ContactUsChat } from "@/sections/contact-us";

export default function Facts() {
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={3} mt={8}>
          <ContactUsChat />

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={20}></Grid>
        </Grid>
      </Container>
    </>
  );
}
