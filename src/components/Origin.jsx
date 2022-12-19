import { GitHub } from "@mui/icons-material";
import { Divider, IconButton, Link, Stack, Typography } from "@mui/material";
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

const getCopyrightYearText = () => {
  let copyrightYearText = "2022";

  const currentYearText = String(new Date().getFullYear());

  if (currentYearText !== copyrightYearText) {
    copyrightYearText += `—${currentYearText}`;
  }

  return copyrightYearText;
};

export default function Origin() {
  return (
    <Stack id="origin" spacing={3}>
      <SectionTitle hint="a few words about us">Origin</SectionTitle>

      <Stack
        direction="row"
        spacing={1}
        px={2}
        justifyContent="space-between"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Typography variant="caption">16-18/12/22</Typography>
        <Typography variant="caption">HackYourFuture</Typography>
        <Typography variant="caption">CDV</Typography>
        <Typography variant="caption">Poznań</Typography>
      </Stack>

      <Stack spacing={1}>
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
          role="Tech Leader & current Maintainer"
          link="https://www.linkedin.com/in/vrepetskyi/"
        />
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="caption" mr="auto">
          v1.1.0
        </Typography>

        <Typography variant="caption" textAlign="right">
          Source code of the project is available on
        </Typography>

        <Link
          tabIndex={-1}
          target="_blank"
          href="https://github.com/vrepetskyi/EcoTracker"
        >
          <IconButton size="small" sx={{ position: "relative", top: "-2px" }}>
            <GitHub sx={{ height: 24, width: 24 }} />
          </IconButton>
        </Link>
      </Stack>

      <Typography textAlign="center" variant="caption">
        © Copyright Vadym Repetskyi {getCopyrightYearText()}
      </Typography>
    </Stack>
  );
}
