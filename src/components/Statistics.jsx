import { useSelector } from "react-redux";
import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ActivityChart from "./ActivityChart";
import { arrayDifference, mapIds } from "../helpers";

export default function Statistics() {
  const { completed, all } = useSelector((state) => state.todos);

  const completedProportion =
    (all.length - arrayDifference(mapIds(all), mapIds(completed)).length) /
    all.length;

  return (
    <Box
      id="statistics"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Tooltip
        enterTouchDelay={0}
        title="analyze your progress"
        arrow
        placement="right"
      >
        <Typography width="fit-content" variant="h6">
          Statistics
        </Typography>
      </Tooltip>
      <Typography>
        Completed todos / all todos = {Math.floor(completedProportion * 100)}%
      </Typography>
      <ActivityChart />
    </Box>
  );
}
