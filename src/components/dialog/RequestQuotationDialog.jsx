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

import { styled, alpha , useTheme} from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

import goGreenLogo from "/gogreenbooty.svg";


export default function RequestQuotationDialog({ open, handleClose }) {

  const theme = useTheme()
  return (
    <>
      <Dialog
        onClose={handleClose}
        open={open}
        aria-labelledby="contact-chat-dialog"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "24px",
            background: `linear-gradient(to right, ${theme.palette.primary.dark},  ${theme.palette.primary.main})`,
          },
          zIndex: '2400!important'
        }}
      >
        <DialogContent>
          <Grid container spacing={3} padding="0 40px">
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
                Request a Quotation
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Business Name
              </Typography>
              <TextField fullWidth variant="outlined" placeholder="Business Name" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Location
              </Typography>
              <TextField fullWidth placeholder="Location" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Business Type
              </Typography>
              <TextField fullWidth placeholder="Business Type" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Business Website
              </Typography>
              <TextField fullWidth placeholder="Business Website" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Contact Name
              </Typography>
              <TextField fullWidth placeholder="Contact Name" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Your Position
              </Typography>
              <TextField fullWidth placeholder="Your Position" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Email
              </Typography>
              <TextField fullWidth placeholder="Email" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body1" color="inherit">
                Phone Number
              </Typography>
              <TextField fullWidth placeholder="Phone Number" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant="body1" color="inherit">
                Please include the models you are interested in, the quantity
                and delivery location
              </Typography>
              <TextField fullWidth placeholder="Business Name" required />
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
