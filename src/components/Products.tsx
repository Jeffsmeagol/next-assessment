import { Box, Stack, Typography } from "@mui/material";
import { NavButton } from "./ui/Buttons";

export default function Products() {
  return (
    <Box textAlign="center" maxWidth={1060} m="auto" p={2} py={12}>
      <Box px={8}>
        <Typography variant="h4" color="text.secondary">
          Featured Products
        </Typography>
        <Typography variant="h3" p={2}>
          BEST SELLER PRODUCTS
        </Typography>
        <Typography color="text.secondary">
          Problems trying to resolve the conflict between{" "}
        </Typography>
      </Box>
      <Stack direction="row" flexWrap={"wrap"} py={10}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((no) => (
          <Stack
            key={no}
            p={1}
            pt={2}
            width={{ xs: "100%", sm: "initial" }}
            flexGrow={1}
          >
            <Box width="100%">
              <img src={`/product-cover${no}.png`} width="100%" />
            </Box>
            <Typography variant="h5">Graphic Design</Typography>
            <NavButton>English Department</NavButton>
            <Stack direction="row" justifyContent="center" spacing={1}>
              <Typography variant="h5" color="text.disabled">
                $16.48
              </Typography>
              <Typography variant="h5" color="secondary">
                $6.48
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
