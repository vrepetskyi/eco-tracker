import { ButtonBase, Card, Link, Tooltip, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo } from "../store/todos";

export default function Todo({ id, objective, articleId, urlQuery }) {
  const { all: articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const article = articles.find(({ id }) => id === articleId);

  const todoClicked = () => {
    window.setTimeout(() => {
      dispatch(completeTodo(id));
    }, 500);
  };

  const detailsClicked = (e) => {
    e.stopPropagation();
  };

  return (
    <Card>
      <ButtonBase
        sx={{ display: "flex", width: "100%", px: 3, py: 2 }}
        onClick={todoClicked}
      >
        <Typography align="left" sx={{ flex: 1 }}>
          {objective}
        </Typography>
        {article && (
          <Link
            target="_blank"
            href={article.url + urlQuery}
            onClick={detailsClicked}
          >
            <Tooltip title="we've found an article for you" arrow>
              <Typography>how?</Typography>
            </Tooltip>
          </Link>
        )}
      </ButtonBase>
    </Card>
  );
}
