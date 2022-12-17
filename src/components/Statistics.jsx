import { useSelector } from "react-redux";
import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "./Chart";

export default function Statistics() {
  const completed = useSelector((state) => state.todos).completed.map(
    (task) => new Date(task.date)
  );

  return (
    <Box
      id="statistics"
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
    >
      <Tooltip title="analyze your progress" arrow placement="right">
        <Typography width="fit-content" variant="h6">
          Statistics
        </Typography>
      </Tooltip>
      <Chart completed={completed} />
    </Box>
  );
}
