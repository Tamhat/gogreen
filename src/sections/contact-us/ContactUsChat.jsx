"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Typography,
  Checkbox,
  Radio,
  RadioGroup,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

import goGreenLogo from "/gogreenbooty.svg";

export default function ContactUsChat() {
  return (
    <Card sx={{ borderRadius: "32px", mx: 5, p: 5, mb: 20 }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={"https://i.ibb.co/S3yqXPV/gogreenbooty.png"}
              alt="Go Green Logo"
              width={300}
              height="auto"
              my={2}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "#2b2b2b",
                  backgroundColor: "#fff",
                },
              }}
              label="Name"
              placeholder="Name"
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              sx={{
                "& .MuiInputBase-input": {
                  color: "#2b2b2b",
                  backgroundColor: "#fff",
                },
              }}
              fullWidth
              label="Email"
              placeholder="Email"
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "#2b2b2b",
                  backgroundColor: "#fff",
                },
              }}
              label="Cell Phone #"
              placeholder="Cell Phone #"
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
            <Typography sx={{ mb: 2 }} variant="body1" color="text.secondary">
              Are you affiliated with a business?
            </Typography>
            <Button sx={{ mr: 2 }} variant="outlined" color="primary">
              Yes
            </Button>
            <Button variant="outlined" color="primary">
              No
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "#2b2b2b",
                  backgroundColor: "#fff",
                },
              }}
              label="Business Name"
              placeholder="Business Name"
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "#2b2b2b",
                  backgroundColor: "#fff",
                },
              }}
              label="Website"
              placeholder="Website"
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <RadioGroup row name="use-radio-group" defaultValue="first">
              <FormControlLabel
                value="inquiry"
                label="Inquiry"
                sx={{ color: "black" }}
                control={<Radio />}
              />
              <FormControlLabel
                value="suggestion"
                label="Suggestion"
                sx={{ color: "black" }}
                control={<Radio />}
              />
              <FormControlLabel
                value="help-existing-order"
                label="Help with an existing order"
                sx={{ color: "black" }}
                control={<Radio />}
              />
            </RadioGroup>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "#2b2b2b",
                  backgroundColor: "#fff",
                },
              }}
              label="Order #"
              placeholder="Order #"
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "#2b2b2b",
                  backgroundColor: "#fff",
                },
              }}
              multiline
              rows={4}
              label="How can we help?"
              placeholder="How can we help?"
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <FormGroup>
              <FormControlLabel
                sx={{ color: "black" }}
                required
                control={<Checkbox />}
                label="Sign up to receive email updates,and more"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button
              fullWidth
              size="large"
              sx={{ py: 1.5 }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
