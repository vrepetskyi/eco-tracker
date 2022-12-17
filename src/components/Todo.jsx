import React from "react";
import {
  ButtonBase,
  Card,
  Checkbox,
  Fade,
  Grow,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { completeTodo } from "../store/todos";

export default function Todo({ id, objective, articleId, urlQuery = "" }) {
  const { all: articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  const [complete, setComplete] = React.useState(false);
  const [fadeOut, setFadeOut] = React.useState(false);

  const article = articles.find(({ id }) => id === articleId);

  const todoClicked = () => {
    setComplete(true);

    window.setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    window.setTimeout(() => {
      dispatch(completeTodo(id));
    }, 1500);
  };

  const detailsClicked = (e) => {
    e.stopPropagation();
  };

  return (
    <Card>
      <Fade in={!fadeOut} timeout={500}>
        <ButtonBase
          sx={{
            display: "flex",
            width: "100%",
            px: 3,
            py: 1,
            justifyContent: "flex-start",
          }}
          onClick={todoClicked}
        >
          <Tooltip
            title="have you really done it?"
            arrow
            placement="bottom-start"
          >
            <Box>
              <Checkbox
                checked={complete}
                icon={<img height="18" src="rectangle.png" alt="checkbox" />}
                checkedIcon={
                  <img height="18" src="rectangle.png" alt="checkbox" />
                }
              />
              <Grow
                in={complete}
                timeout={1000}
                style={{
                  transformOrigin: "bottom center",
                  position: "absolute",
                  left: 36,
                }}
              >
                <img src="leaf.svg" alt="checkbox-tick" height="24" />
              </Grow>
            </Box>
          </Tooltip>
          <Typography align="left" sx={{ mx: 2, position: "relative" }}>
            {objective}
            <Grow
              in={complete}
              timeout={1000}
              style={{ transformOrigin: "left center" }}
            >
              <span
                style={{
                  position: "absolute",
                  width: "100%",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: 2,
                  backgroundColor: "#6C804D",
                }}
              />
            </Grow>
          </Typography>
          {article && (
            <Link
              ml="auto"
              target="_blank"
              href={article.url + urlQuery}
              onClick={detailsClicked}
            >
              <Tooltip
                title="we've found an article for you"
                arrow
                placement="bottom-end"
              >
                <Typography>how?</Typography>
              </Tooltip>
            </Link>
          )}
        </ButtonBase>
      </Fade>
    </Card>
  );
}
