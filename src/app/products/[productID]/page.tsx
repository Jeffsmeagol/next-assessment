import { Typography } from "@mui/material";

export default function page({ params }: { params: { productID: number } }) {
  return (
    <>
      <Typography variant={'h3'}>Furniture</Typography>
      <div>product page {params.productID}</div>
    </>
  );
}
