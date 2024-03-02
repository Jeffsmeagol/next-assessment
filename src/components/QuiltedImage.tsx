import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";
import img from "../../public/product-cover9.svg";

export default function QuiltedImage() {
  return (
    <>
      <Box
        p={2}
        py={12}
        maxWidth={1060}
        m="auto"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "auto", md: "4fr 3fr 3fr" },
          gridTemplateRows: { xs: "repeat(4, 1fr)", md: "1fr 1fr" },
          gap: 2,
          height: { xs: "200vh", md: "120vh" },
        }}
      >
        <Box
          gridRow={{ xs: "1 / span 1", md: "1 / span 2" }}
          position="relative"
          p={2}
        >
          <Image
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product 1"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{ width: "100%", objectFit: "cover" }}
          />
          <Box position="absolute">
            <Typography variant="h6" color="success.main">
              5 Items
            </Typography>
            <Typography variant="h3" textTransform="uppercase">
              Furniture
            </Typography>
            <Typography variant="h6" textTransform="capitalize">
              Read more
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn={{ xs: "1 / span 1", md: "2 / span 2" }}
          position="relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww"
            alt="product 1"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box position="relative">
          <Image
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww"
            alt="product 1"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box position="relative">
          <Image
            src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="product 1"
            fill
            priority
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>
        {/* <Image src={img} alt="product 1" sizes="" /> */}
      </Box>
    </>
  );
}
