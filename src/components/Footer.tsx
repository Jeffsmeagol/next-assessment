"use client";

import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { NavButton } from "./ui/Buttons";

const Item = () => (
  <Stack alignItems="start" sx={{ "& button": { mt: 2 } }}>
    <Typography variant="h5" pb={1}>
      Company Info
    </Typography>
    <NavButton>About Us</NavButton>
    <NavButton>Carrier</NavButton>
    <NavButton>We are hiring</NavButton>
    <NavButton>Blog</NavButton>
  </Stack>
);

export default function Footer() {
  return (
    <>
      <Box bgcolor="#F9F9F9">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={3}
          maxWidth={1060}
          m="auto"
          px={2}
          py={4}
          borderBottom="1px #E6E6E6 solid"
        >
          <Typography variant="h3">Bandage</Typography>
          <Stack direction="row">
            <IconButton color="primary">
              <FacebookRounded />
            </IconButton>
            <IconButton color="primary">
              <Instagram />
            </IconButton>
            <IconButton color="primary">
              <Twitter />
            </IconButton>
          </Stack>
        </Stack>
      </Box>

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        // alignItems="space-between"
        spacing={4}
        py={6}
        maxWidth={1060}
        m="auto"
        px={2}
      >
        <Item />
        <Item />
        <Item />
        <Item />
        <Stack alignItems="start">
          <Typography variant="h5">Get In Touch</Typography>
          <Box
            component="form"
            // sx={{
            //   "& .MuiTextField-root": { m: 1, width: "25ch" },
            // }}
            noValidate
            autoComplete="off"
            pt={3}
          >
            <TextField
              label="Your Email"
              sx={{
                "& .MuiInputBase-root": {
                  py: 0.5,
                  textAlign: "center",
                  bgcolor: "#F9F9F9",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                },
              }}
            />
            <Button
              type="submit"
              sx={{
                py: 2,
                pb: 2.5,
                color: "#fff",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                boxShadow: "none",
              }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Box>
        </Stack>
      </Stack>

      <Box bgcolor="#F9F9F9" py={3}>
        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth={1060}
          m="auto"
          px={2}
        >
          Made With Love By Finland All Right Reserved{" "}
        </Typography>
      </Box>
    </>
  );
}
