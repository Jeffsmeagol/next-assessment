"use client";
import Badge, { BadgeProps } from "@mui/material/Badge";
import {
  Box,
  IconButton,
  Slide,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { NavButton } from "./ui/Buttons";
import {
  ExpandLess,
  ExpandMore,
  FavoriteBorder,
  Menu,
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  fontSize: 12,
  "& .MuiBadge-badge": {
    right: -3,
    top: "50%",
    // border: `2px solid ${theme.palette.background.paper}`,
    // padding: "0 4px",
  },
}));

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        p={2}
        alignItems="center"
      >
        <Typography variant="h3">Bandage</Typography>

        <Stack display={{ xs: "none", md: "flex" }} direction="row" spacing={2}>
          <NavButton>Home</NavButton>
          <NavButton endIcon={<ExpandMore />}>Shop</NavButton>
          <NavButton>About</NavButton>
          <NavButton>Blog</NavButton>
          <NavButton>Contact</NavButton>
          <NavButton>Pages</NavButton>
        </Stack>

        <Stack display={{ xs: "none", sm: "flex" }} direction="row" spacing={2}>
          <NavButton
            sx={{ color: "primary.main" }}
            startIcon={<PersonOutlineOutlined sx={{ fontSize: 16 }} />}
          >
            Login / Register
          </NavButton>
          <IconButton color="primary">
            <Search sx={{ fontSize: 16 }} />
          </IconButton>
          <IconButton color="primary">
            <StyledBadge badgeContent={1}>
              <ShoppingCartOutlined sx={{ fontSize: 16 }} />
            </StyledBadge>
          </IconButton>
          <IconButton color="primary">
            <StyledBadge badgeContent={1}>
              <FavoriteBorder sx={{ fontSize: 16 }} />
            </StyledBadge>
          </IconButton>
        </Stack>

        <IconButton
          sx={{ display: { sm: "none" } }}
          color="primary"
          size="large"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <Menu fontSize="large" />
        </IconButton>
      </Stack>

      {/* mobile navigation */}
      <Slide direction="right" in={isOpen} mountOnEnter unmountOnExit>
        {mobileNav}
      </Slide>
    </Stack>
  );
}
const mobileNav = (
  <Stack spacing={2}>
    <NavButton>
      <Typography variant="mobileMenu">Home</Typography>
    </NavButton>
    <NavButton>
      <Typography variant="mobileMenu">Shop</Typography>
    </NavButton>
    <NavButton>
      <Typography variant="mobileMenu">About</Typography>
    </NavButton>
    <NavButton>
      <Typography variant="mobileMenu">Blog</Typography>
    </NavButton>
    <NavButton>
      <Typography variant="mobileMenu">Contact</Typography>
    </NavButton>
    <NavButton>
      <Typography variant="mobileMenu">Pages</Typography>
    </NavButton>

    <NavButton
      sx={{ color: "primary.main" }}
      startIcon={<PersonOutlineOutlined sx={{ fontSize: 4 }} />}
    >
      <Typography variant="mobileMenu">Login / Register</Typography>
    </NavButton>
    <IconButton color="primary">
      <Search sx={{ fontSize: 34 }} />
    </IconButton>
    <IconButton color="primary">
      <StyledBadge badgeContent={1}>
        <ShoppingCartOutlined sx={{ fontSize: 34 }} />
      </StyledBadge>
    </IconButton>
    <IconButton color="primary">
      <StyledBadge badgeContent={1}>
        <FavoriteBorder sx={{ fontSize: 34 }} />
      </StyledBadge>
    </IconButton>
  </Stack>
);
