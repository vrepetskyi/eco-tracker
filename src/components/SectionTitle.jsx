import { Tooltip, Typography } from "@mui/material";

export default function SectionTitle({ children, hint }) {
  return (
    <Tooltip
      enterTouchDelay={0}
      tabindex={0}
      title={hint}
      arrow
      placement="right"
    >
      <Typography width="fit-content" variant="h6">
        {children}
      </Typography>
    </Tooltip>
  );
}
