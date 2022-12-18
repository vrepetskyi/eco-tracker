import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

export default function Todos() {
  const { activeIds, all } = useSelector((state) => state.todos);

  return (
    <Box id="todos" sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Tooltip
        enterTouchDelay={0}
        title="they'll teach you how to be eco-friendly"
        arrow
        placement="right"
      >
        <Typography width="fit-content" variant="h6">
          Todos
        </Typography>
      </Tooltip>
      {activeIds.map((id) => (
        <TodoCard key={id} {...all[id]} />
      ))}
    </Box>
  );
}
