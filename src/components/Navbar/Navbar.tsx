import { AppBar, Container, Toolbar } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Navbar() {
  const router = useRouter();
  const [nachorElNav, SetAachorElNav] = useState<null | HTMLElement>(null);
  const [searchQuery, SetSearchQuery] = useState<string>("");
  const [showClearIcon, setShowCLearIcon] = useState<string>("none");
  return(
    <AppBar>
      <Container>
        <Toolbar>
          <Image width={100} height={50} src={} alt=""/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
