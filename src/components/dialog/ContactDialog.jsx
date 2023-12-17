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

import { styled, alpha } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

import goGreenLogo from "/gogreenbooty.svg";

const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop,
})(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: "#2b2b2b",
    backgroundColor: "#fff",
  },
  "& .MuiInputBase-root fieldset": {
    boxShadow: `${alpha(theme.palette.text.disabled, 0.25)} 0 2px 10px 2px`,
    borderRadius: "22px !important",
    border: "0 !important",
  },
}));

export default function ContactUsChat({ open, handleClose }) {
  return (
    <>
      <Dialog
        onClose={handleClose}
        open={open}
        aria-labelledby="contact-chat-dialog"
        sx={{ 
            "& .MuiPaper-root": {
                borderRadius: "24px",
            },
            zIndex: '2400!important',

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
              <IconButton onClick={handleClose}>
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
              justifyContent="center"
              alignItems="center"
            >
              <img
              src={"https://i.ibb.co/S3yqXPV/gogreenbooty.png"}
              alt="Go Green Logo"
              width={300}
              height="auto"
              my={2}/>

            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <StyledTextField fullWidth placeholder="Name*" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <StyledTextField
                fullWidth
                placeholder="Email*"
                type="email"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <StyledTextField
                fullWidth
                placeholder="Cell Phone #*"
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
              <StyledTextField
                fullWidth
                placeholder="Business Name"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <StyledTextField
                fullWidth
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
              <StyledTextField
                fullWidth
                placeholder="Order #*"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <StyledTextField
                fullWidth
                multiline
                rows={4}
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
        </DialogContent>
      </Dialog>
    </>
  );
}
