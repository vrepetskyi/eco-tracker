import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ActivityChart from "./ActivityChart";
import { arrayDifference, mapIds } from "../helpers";
import SectionTitle from "./SectionTitle";

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
      <SectionTitle hint="analyze your progress">Statistics</SectionTitle>

      <Typography>
        Completed todos / all todos = {Math.floor(completedProportion * 100)}%
      </Typography>
      <ActivityChart />
    </Box>
  );
}
