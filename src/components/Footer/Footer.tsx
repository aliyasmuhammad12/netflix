import { Box, Typography } from "@mui/material";
import React from "react";
import { FB, Instagram, Twitter, Youtube } from "@/utils/icons";
function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#141414",
        color: "rgba(255,255,255,0.5)",
        padding: "0 5rem 3rem,5rem",
      }}
    >
      <Box
        sx={{
          display: { sm: "flex" },
          color: "white",
          flexDirection: { md: 'row' },
          gap: "3rem",
          marginBottom: "1rem",
        }}
      >
        <FB
          style={{
            fontSize: "2rem",
          }}
        />
        <Instagram
          style={{
            fontSize: '2rem',
          }}
        />
        <Twitter
          style={{
            fontSize: '2rem',
          }}
        />
        <Youtube
          style={{
            fontSize: "2rem",
          }}
        />
      </Box>
      <Box
        sx={{
          sm: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography>Audio Description</Typography>
          <Typography>Inverstor Relationship</Typography>
          <Typography>Policy</Typography>
          <Typography>Contact Us</Typography>
        </Box>
        <Box>
          <Typography>Help center</Typography>
          <Typography>Jobs</Typography>
          <Typography>Leagal Notices</Typography>
          <Typography>Ad CHoices</Typography>
        </Box>
        <Box>
          <Typography>Gift Card</Typography>
          <Typography>Netflix Shop</Typography>
          <Typography>Cookies Preference</Typography>
        </Box>
        <Box>
          <Typography>Media Center</Typography>
          <Typography>Terms of Use</Typography>
          <Typography>Impressum</Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            border: "1px solid rgba(255,255,255,0.5)",
            padding: '.2rem,.4rem',
            my: '2rem',
            width: '7rem',
          }}
        >
          Service Code
        </Typography>
      </Box>
      <Box>@ 1990-2025 Netflix, Inc.</Box>
    </Box>
  );
}

export default Footer;
