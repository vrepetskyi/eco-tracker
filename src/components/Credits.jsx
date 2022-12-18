import { GitHub } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export default function Credits() {
  return (
    <Box
      id="credits"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Tooltip title="a few words about us" arrow placement="right">
        <Typography width="fit-content" variant="h6">
          Credits
        </Typography>
      </Tooltip>

      <Stack>
        <Typography>Taisia // Animator & Web Designer</Typography>
        <Typography>Valeria // Graphical Designer</Typography>
        <Typography>Dominik Małkowiak // Developer</Typography>
        <Typography>Maryna Mamai // Designer & Team Leader</Typography>
        <Typography>
          <Link target="_blank" href="https://www.linkedin.com/in/vrepetskyi/">
            Vadym Repetskyi
          </Link>
          {" // Tech Leader"}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center">
        <Typography>Source code of the project is available at</Typography>
        <Link target="_blank" href="https://github.com/vrepetskyi/EcoTracker">
          <IconButton sx={{ ml: 1, mb: "4px" }}>
            <GitHub />
          </IconButton>
        </Link>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Typography variant="caption">16-18/12/22</Typography>
        <Typography variant="caption">HackYourFuture</Typography>
        <Typography variant="caption">CDV</Typography>
        <Typography variant="caption">Poznań</Typography>
      </Stack>
    </Box>
  );
}
