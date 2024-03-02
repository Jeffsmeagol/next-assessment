import Advice from "@/components/Advice";
import Products from "@/components/Products";
import QuiltedImage from "@/components/QuiltedImage";
import Resolve from "@/components/Resolve";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <QuiltedImage />
      <Products />
      <Services />
      <Advice />
      <Testimonials />
      <Resolve />
    </>
  );
}
