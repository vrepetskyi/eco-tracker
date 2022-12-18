import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ActivityChart from "./ActivityChart";

export default function Statistics() {
  return (
    <Box
      id="statistics"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Tooltip title="analyze your progress" arrow placement="right">
        <Typography width="fit-content" variant="h6">
          Statistics
        </Typography>
      </Tooltip>
      {/* <ActivityChart /> */}
    </Box>
  );
}
