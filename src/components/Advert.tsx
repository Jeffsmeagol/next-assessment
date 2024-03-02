"use client";
import {
  EmailOutlined,
  FacebookRounded,
  Instagram,
  PhoneOutlined,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";

export default function Advert() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      bgcolor="secondary.main"
      color="#fff"
      alignItems="center"
      // maxWidth={'900px'}
      p={2}
      display={{ xs: "none", md: "flex" }}
    >
      <Stack direction="row" alignItems="center">
        <PhoneOutlined sx={{ fontSize: 16 }} />
        <Typography variant="h6" pr={2} pl={0.5}>
          (225) 555-0118
        </Typography>

        <EmailOutlined sx={{ fontSize: 16 }} />
        <Typography variant="h6" pl={0.5}>
          michelle.rivera@example.com
        </Typography>
      </Stack>
      <Typography variant="h6">
        Follow Us and get a chance to win 80% off
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="h6">Follow Us :</Typography>
        <Instagram sx={{ fontSize: 16 }} />
        <YouTube sx={{ fontSize: 16 }} />
        <FacebookRounded sx={{ fontSize: 16 }} />
        <Twitter sx={{ fontSize: 16 }} />
      </Stack>
    </Stack>
  );
}
