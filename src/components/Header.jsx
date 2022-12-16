import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#6C804D",
      }}
    >
      <Container maxWidth="sm">
        <Toolbar sx={{ justifyContent: "center" }} disableGutters>
          <Typography variant="h6">EcoTracker</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
