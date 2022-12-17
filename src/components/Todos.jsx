import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo } from "../store/todos";

export default function Todos() {
  const { completed, activeIds, all } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <Box>
      <Button onClick={() => dispatch(completeTodo(0))}>Increment</Button>
      <Button
        onClick={() =>
          alert(
            `${JSON.stringify(completed)},
            ${JSON.stringify(activeIds)},
            ${JSON.stringify(all)}`
          )
        }
      >
        GetValue
      </Button>
    </Box>
  );
}
