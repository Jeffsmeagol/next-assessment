import { Avatar, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Testimonials() {
  return (
    <Box bgcolor="#F9F9F9">
      <Stack
        direction={{ xs: "column", md: "row" }}
        p={2}
        py={12}
        maxWidth={1060}
        m="auto"
      >
        <Stack
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          width={{ xs: "100%", md: "50%" }}
          py={6}
        >
          <Typography variant="h3" pb={6}>
            What they say about us
          </Typography>
          <Avatar
            src="https://material-ui.com/static/images/avatar/1.jpg"
            alt=""
            sx={{
              width: 90,
              height: 90,
            }}
          />

          <Typography variant="h6" color="text.secondary" py={4} px={6}>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </Typography>
          <Typography color="primary">Regina Miles</Typography>
          <Typography variant="h6">Designer</Typography>
        </Stack>
        <Box
          width={{ xs: "100%", md: "50%" }}
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            // gridTemplateRows: "1fr 1fr",
            gap: 2,
            // height: "120vh",
          }}
        >
          <Box>
            <img src="/testimonial-image1.png" alt="" width="100%" />
          </Box>
          <Box>
            <img src="/testimonial-image2.png" alt="" width="100%" />
          </Box>
          <Box>
            <img src="/testimonial-image3.png" alt="" width="100%" />
          </Box>
          <Box>
            <img src="/testimonial-image4.png" alt="" width="100%" />
          </Box>
          <Box>
            <img src="/testimonial-image5.png" alt="" width="100%" />
          </Box>
          <Box>
            <img src="/testimonial-image6.png" alt="" width="100%" />
          </Box>
          <Box>
            <img src="/testimonial-image7.png" alt="" width="100%" />
          </Box>
          <Box>
            <img src="/testimonial-image8.png" alt="" width="100%" />
          </Box>
          <Box>
            <img src="/testimonial-image9.png" alt="" width="100%" />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
