import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/completedTodos";

export default function Todos() {
  const { number: completedTodosNumber } = useSelector(
    (state) => state.completedTodos
  );
  const dispatch = useDispatch();

  return (
    <Box>
      <Button onClick={() => dispatch(add(1))}>Increment</Button>
      <Button onClick={() => alert(completedTodosNumber)}>GetValue</Button>
    </Box>
  );
}
