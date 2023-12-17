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
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";

import { styled, alpha, useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

import goGreenLogo from "/public/gogreenbooty.svg";

export default function RequestReportDialog({ open, handleClose }) {
  const theme = useTheme();
  const themed = {
    // borderRadius: "50px", // Adjust the value to control the border radius
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
      borderColor: "rgba(255, 255, 255, 0.7)", // Softened white border color
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.9)", // Softened white border color on hover
    },
    "& .MuiOutlinedInput-input": {
      color: theme.palette.common.white, // Set text color
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.7)", // Softened white label color
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.success.dark, // Set outer border color when focused
    },
  };
  return (
    <>
      <Dialog
        onClose={handleClose}
        open={open}
        aria-labelledby="contact-chat-dialog"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "24px",
            background: `linear-gradient(to right, ${theme.palette.success.dark},  ${theme.palette.success.main})`,
          },
          zIndex: '2400!important'
        }}
      >
        <DialogContent>
          <Grid container spacing={3} padding="0 30px">
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <IconButton color="inherit" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Typography variant="h5" color="inherit" fontWeight="bold">
                Request a free report
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Business Name
              </Typography>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Business Name"
                required
                sx={themed}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Location
              </Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="Location"
                required
                sx={themed}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Business Type
              </Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="Business Type"
                required
                sx={themed}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Business Website
              </Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="Business Website"
                required
                sx={themed}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Contact Name
              </Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="Contact Name"
                required
                sx={themed}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Your Position
              </Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="Your Position"
                required
                sx={themed}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Email
              </Typography>
              <TextField
                size="small"
                fullWidth
                type="email"
                placeholder="Email"
                required
                sx={themed}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Phone Number
              </Typography>
              <TextField
                size="small"
                sx={themed}
                fullWidth
                type="number"
                placeholder="Phone Number"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                How much you pay for  Toilet Paper per month?
              </Typography>
              <TextField
                size="small"
                fullWidth
                type="number"
                placeholder="$USD"
                required
                sx={themed}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                How many toilet paper rolls are consumed per month?
              </Typography>
              <TextField
                size="small"
                sx={themed}
                fullWidth
                type="number"
                placeholder="# of rolls"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Do you know the weight of each roll?
              </Typography>
              <TextField
                size="small"
                fullWidth
                type="number"
                placeholder="lbs"
                required
                sx={themed}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Estimated number of people who use your toilets?
              </Typography>
              <TextField
                size="small"
                sx={themed}
                fullWidth
                type="number"
                placeholder="# of People"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                How many toilets your business has?
              </Typography>
              <TextField
                size="small"
                sx={themed}
                fullWidth
                type="number"
                placeholder="# of toilets"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Would you like to let us know anything else?
              </Typography>
              <TextField
                size="small"
                sx={themed}
                fullWidth
                placeholder="Lorem ipsum"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Button variant="outlined" color="inherit">
                Submit Request
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
