import { Button, ButtonBase } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { completeTodo } from "../store/todos";

export default function Todo({ id, objective, details, hash }) {
  const dispatch = useDispatch();

  const todoClicked = () => {
    dispatch(completeTodo(id));
  };

  const detailsClicked = (e) => {
    e.stopPropagation();
  };

  return (
    <Box>
      <ButtonBase onClick={todoClicked}>
        {objective}
        <Button onClick={detailsClicked}>details</Button>
      </ButtonBase>
    </Box>
  );
}
