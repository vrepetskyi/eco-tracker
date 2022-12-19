import { Tooltip, Typography } from "@mui/material";

export default function SectionTitle({ children, hint, ...props }) {
  return (
    <Tooltip
      enterTouchDelay={0}
      tabIndex={0}
      title={hint}
      arrow
      placement="right"
      {...props}
    >
      <Typography width="fit-content" variant="h6">
        {children}
      </Typography>
    </Tooltip>
  );
}
