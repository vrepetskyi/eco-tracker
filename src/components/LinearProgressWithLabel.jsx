import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Tooltip } from "@mui/material";

export default function LinearProgressWithLabel(props) {
  return (
    <Tooltip
      title="complete todos to grow trees"
      arrow
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Box>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography variant="body2" color="#ffffff">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </Tooltip>
  );
}
