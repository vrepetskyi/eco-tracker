import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function Todos() {
  const { activeIds, all } = useSelector((state) => state.todos);

  return (
    <Box>
      {activeIds.map((id) => (
        <Todo key={id} {...all[id]} />
      ))}
    </Box>
  );
}
