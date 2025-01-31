"use client";

import {
  AppBar,
  Avatar,
  Box,
  Container,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  "Home",
  "TV Shows",
  "Movie",
  "New & Popular",
  "My List",
  "Browse By Languages",
];

function Navbar() {
  const router = useRouter();
  const [anchorElNav, SetAachorElNav] = useState<null | HTMLElement>(null);
  const [searchQuery, SetSearchQuery] = useState<string>("");
  const [showClearIcon, setShowCLearIcon] = useState<string>("none");

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    SetAachorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    SetAachorElNav(null);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    SetSearchQuery(value);
    setShowCLearIcon(value ? "block" : "none");
  };
  const handleClick = () => {
    SetSearchQuery("");
    setShowCLearIcon("none");
  };
  const handleSearchKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && searchQuery.trim()) {
      event.preventDefault();
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(0,0,0,.65)",
        top: "0",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#000",
          opacity: 1,
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            width={100}
            height={50}
            src={"/assets/logo.png"}
            alt="logo"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          />
          <Box>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(handleCloseNavMenu)}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography>
                    <Link
                      href={
                        page === "Home"
                          ? "/"
                          : page === "My List"
                          ? "/my_list"
                          : "#"
                      }
                    >
                      <Box
                        sx={{
                          opacity: 0.9,
                          cursor: "pointer",
                          padding: ".6rem .9rem",
                          "&:hover": {
                            borderColor: "#fff",
                          },
                        }}
                      >
                        {page}
                      </Box>
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {pages.map((page) => (
              <Link
              key={page}
                href={
                  page === "Home" ? "/" : page === "My List" ? "/my_list" : "#"
                }
              >
                <Box
                  sx={{
                    opacity: 0.9,
                    cursor: "pointer",
                    padding: ".6rem .9rem",
                    "&:hover": {
                      fontWeight:500,
                      borderColor: "#fff",
                    },
                  }}
                >
                  {page}
                </Box>
              </Link>
            ))}
          </Box>
          <FormControl>
            
          </FormControl>
          <Box sx={{
            flexGrow:0,

          }}>
            <Tooltip title="Open Settings">
              <IconButton>
                <Avatar src="/assets/avatar.png" alt="User Avatar" sx={{
                  borderRadius:"5px", width:40, height:40,
                }}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
