import { LocalLibrary, TrendingUp } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import MyBookIcon from "./icons/MyBookIcon";

export default function Services() {
  return (
    <Box textAlign="center">
      <Box px={8}>
        <Typography variant="h4" color="text.secondary">
          Featured Products
        </Typography>
        <Typography variant="h3" p={2}>
          THE BEST SERVICES
        </Typography>
        <Typography color="text.secondary">
          Problems trying to resolve the conflict between{" "}
        </Typography>
      </Box>
      <Stack direction={{ md: "row" }} p={4} justifyContent='center'>
        <Box p={4}>
          <LocalLibrary color="primary" sx={{ fontSize: 72 }} />
          <Typography variant="h3" p={3}>
            Easy Wins
          </Typography>
          <Typography color="text.secondary">
            Get your best looking smile now!
          </Typography>
        </Box>

        <Box p={4}>
          <MyBookIcon sx={{ fontSize: 72 }} />
          <Typography variant="h3" p={3}>
            Easy Wins
          </Typography>
          <Typography color="text.secondary">
            Get your best looking smile now!
          </Typography>
        </Box>
        <Box p={4}>
          <TrendingUp color="primary" sx={{ fontSize: 72 }} />
          <Typography variant="h3" p={3}>
            Easy Wins
          </Typography>
          <Typography color="text.secondary">
            Get your best looking smile now!
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
