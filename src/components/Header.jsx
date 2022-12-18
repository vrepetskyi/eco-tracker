import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Box } from "@mui/system";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollTo = (id) => {
    handleCloseNavMenu();
    window.setTimeout(() => {
      document
        .getElementById(id)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }, 0);
  };

  return (
    <AppBar
      id="header"
      position="sticky"
      sx={{
        color: "#ffffff",
        backgroundColor: "secondary.main",
      }}
    >
      <Container maxWidth="sm">
        <Toolbar disableGutters>
          <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            disableScrollLock={true}
          >
            <MenuItem onClick={() => scrollTo("trees")}>
              <Typography>Trees</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollTo("todos")}>
              <Typography>Todos</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollTo("articles")}>
              <Typography>Articles</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollTo("statistics")}>
              <Typography>Statistics</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollTo("credits")}>
              <Typography>Credits</Typography>
            </MenuItem>
          </Menu>
          <Tooltip
            enterTouchDelay={0}
            tabIndex={0}
            title="your guide to environmental responsibility"
            arrow
            m="auto"
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img height="32" src="logo192.png" alt="EcoTracker logo" />
              <Typography variant="h5" sx={{ ml: 2, mt: 1 }}>
                EcoTracker
              </Typography>
            </Box>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
