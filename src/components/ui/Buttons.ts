'use client'
import { styled } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";

export const NavButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 700,
  padding: 1,
  // paddingRight: 8,
  minWidth: 5,
  textTransform: 'capitalize',
  // textAlign: 'left'
}));
