import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function Todos() {
  const { activeIds, all } = useSelector((state) => state.todos);

  return (
    <Box id="todos" sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Tooltip title="they'll teach you how to be eco-friendly" arrow placement="right">
        <Typography width="fit-content" variant="h6">
          Todos
        </Typography>
      </Tooltip>
      {activeIds.map((id) => (
        <Todo key={id} {...all[id]} />
      ))}
    </Box>
  );
}
