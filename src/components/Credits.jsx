import { GitHub } from "@mui/icons-material";
import { Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SectionTitle from "./SectionTitle";

function TeamMemberCard({ name, role, link }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography whiteSpace="nowrap">
        -{" "}
        <Link target="_blank" href={link}>
          {name}
        </Link>
      </Typography>

      <Typography variant="caption">{"//"}</Typography>

      <Typography variant="caption">{role}</Typography>
    </Stack>
  );
}

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
        <TeamMemberCard
          name="Taisia Leonenkova"
          role="Animator & Web Designer"
          link="https://instagram.com/allia.ri"
        />

        <TeamMemberCard
          name="Viktoria Komarnutska"
          role="Graphical Designer"
          link="https://instagram.com/v_komarnutska"
        />

        <TeamMemberCard
          name="Dominik Małkowiak"
          role="Developer"
          link="https://github.com/Dominikkm"
        />

        <TeamMemberCard
          name="Maryna Mamai"
          role="Designer, Copywriter & Team Leader"
          link="https://www.instagram.com/hurdygurdyyy/"
        />

        <TeamMemberCard
          name="Vadym Repetskyi"
          role="Tech Leader"
          link="https://www.linkedin.com/in/vrepetskyi/"
        />
      </Stack>

      <Stack direction="row" alignItems="center">
        <Typography variant="caption">
          Source code of the project is available on
        </Typography>
        <Link
          tabIndex={-1}
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
