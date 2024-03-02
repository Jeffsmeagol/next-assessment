import { Box, Button, Stack, Typography } from "@mui/material";

export default function Resolve() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{
        backgroundImage: "url('bgpic.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#191919",
        // width: "100%",
        // height: "100vh",
      }}
    >
      <Stack alignItems="center" justifyContent="center" maxWidth={600} py={10}>
        <Typography variant="h6" color="primary">
          Designing Better Experience
        </Typography>
        <Typography variant="h2" py={3.5} >
          Problems trying to resolve the conflict between{" "}
        </Typography>
        <Typography color="text.secondary">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>
        <Typography variant="h3" color="secondary" py={3.5}>
          $16.48
        </Typography>
        <Button variant="contained" sx={{color: '#fff', px:4}}>ADD YOUR CALL TO ACTION</Button>
      </Stack>
    </Stack>
  );
}
