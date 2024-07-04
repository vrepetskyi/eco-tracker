import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Tooltip } from "@mui/material";

export default function ProgressBar({ percentage, sx, hint }) {
  return (
    <Tooltip
      enterTouchDelay={0}
      tabIndex={0}
      title={hint}
      arrow
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Box sx={{ position: "relative" }}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            value={percentage}
            variant="determinate"
            sx={{
              ...sx,
              height: "24px",
              maxWidth: "100%",
              borderRadius: "4px",
            }}
          />
        </Box>
        <Box
          sx={{
            mt: "1px",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="body2">{percentage + "%"}</Typography>
        </Box>
      </Box>
    </Tooltip>
  );
}
