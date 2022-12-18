import { GitHub } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import SectionTitle from "./SectionTitle";

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
      <SectionTitle hint="a few words about us">Credits</SectionTitle>

      <Stack>
        <Typography>
          -{" "}
          <Link target="_blank" href="https://instagram.com/allia.ri">
            Taisia Leonenkova
          </Link>
          {" // Animator & Web Designer"}
        </Typography>
        <Typography>
          -{" "}
          <Link target="_blank" href="https://instagram.com/v_komarnutska">
            Viktoria Komarnutska
          </Link>
          {" // Graphical Designer"}
        </Typography>
        <Typography>
          -{" "}
          <Link target="_blank" href="https://github.com/Dominikkm">
            Dominik Małkowiak
          </Link>
          {" // Developer"}
        </Typography>
        <Typography>
          -{" "}
          <Link target="_blank" href="https://www.instagram.com/hurdygurdyyy/">
            Maryna Mamai
          </Link>
          {" // Designer & Team Leader"}
        </Typography>
        <Typography>
          -{" "}
          <Link target="_blank" href="https://www.linkedin.com/in/vrepetskyi/">
            Vadym Repetskyi
          </Link>
          {" // Tech Leader"}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center">
        <Typography variant="caption">
          Source code of the project is available on
        </Typography>
        <Link
          tabindex={-1}
          target="_blank"
          href="https://github.com/vrepetskyi/EcoTracker"
        >
          <IconButton size="small" sx={{ ml: 0.5, mb: "4px" }}>
            <GitHub sx={{ height: 24, width: 24 }} />
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
