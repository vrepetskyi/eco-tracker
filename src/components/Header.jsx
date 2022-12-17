import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import React from "react";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#6C804D",
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
          >
            <MenuItem onClick={() => scrollTo("tree")}>
              <Typography>Tree</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollTo("todos")}>
              <Typography>Todos</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollTo("statistics")}>
              <Typography>Statistics</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollTo("events")}>
              <Typography>Events</Typography>
            </MenuItem>
          </Menu>
          <Box sx={{ margin: "auto" }}>
            <Typography variant="h5">Eco Tracker</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
