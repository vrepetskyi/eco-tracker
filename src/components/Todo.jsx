import { Button, ButtonBase, Link } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo } from "../store/todos";

export default function Todo({ id, objective, articleId, urlQuery }) {
  const { all: articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const article = articles.find(({ id }) => id === articleId);

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
        {article && (
          <Link
            target="_blank"
            href={article.url + urlQuery}
            onClick={detailsClicked}
          >
            details
          </Link>
        )}
      </ButtonBase>
    </Box>
  );
}
