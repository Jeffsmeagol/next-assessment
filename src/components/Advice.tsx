import { Box, Paper, Stack, Typography } from "@mui/material";
import { NavButton } from "./ui/Buttons";
import { Alarm, ArrowForwardIos, BarChart } from "@mui/icons-material";

const Card = () => (
  <Paper>
    <Box position="absolute" p={2}>
      <Typography
        variant="h6"
        bgcolor="error.main"
        borderRadius={1}
        color="#fff"
        px={1.25}
      >
        NEW
      </Typography>
    </Box>
    <Box>
      <img src="/advice/advice-image1.png" width="100%" />
    </Box>
    <Box p={2}>
      <Stack direction="row" spacing={2}>
        <Typography variant="small" color="#8EC2F2">
          Google
        </Typography>
        <Typography variant="small">Trending</Typography>
        <Typography variant="small">New</Typography>
      </Stack>
      <Typography variant="h4" py={2}>
        Loudest à la Madison #1 (L'integral)
      </Typography>
      <Typography color="text.secondary">
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </Typography>
      <Stack direction="row" justifyContent="space-between" py={2}>
        <Stack direction="row" spacing={0.6}>
          <Alarm color="primary" sx={{ fontSize: 16 }} />
          <Typography variant="small">22 April 2021</Typography>
        </Stack>
        <Stack direction="row" spacing={0.6}>
          <BarChart color="secondary" sx={{ fontSize: 16 }} />
          <Typography variant="small">10 comments</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={0.6}>
        <NavButton>Learn More</NavButton>
        <ArrowForwardIos color="primary" sx={{ fontSize: 16 }} />
      </Stack>
    </Box>
  </Paper>
);

export default function Advice() {
  return (
    <Box maxWidth={1060} m="auto" p={2} py={12}>
      <Box textAlign="center">
        <Typography variant="h6" color="primary">
          Practice Advice
        </Typography>
        <Typography variant="h2" px={4}>
          Featured Products
        </Typography>
      </Box>

      <Stack direction={{ xs: "column", md: "row" }} spacing={2} pt={4}>
        <Card />
        <Card />
        <Card />
      </Stack>
    </Box>
  );
}
