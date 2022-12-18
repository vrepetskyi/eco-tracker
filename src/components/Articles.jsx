import React from "react";
import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import ArticleCard from "./ArticleCard";
import Carousel from "react-material-ui-carousel";

export default function Articles() {
  const { all: articles } = useSelector((state) => state.articles);
  const articlesRef = React.useRef(null);

  React.useEffect(() => {
    const buttons = [...articlesRef.current.querySelectorAll("button")];

    buttons.forEach((button) => {
      button.setAttribute("tabindex", -1);
    });
  }, [articlesRef]);

  return (
    <Box
      ref={articlesRef}
      id="articles"
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
    >
      <Tooltip
        enterTouchDelay={0}
        tabindex={0}
        role="header"
        title="some educational articles that we've found for you"
        arrow
        placement="right"
      >
        <Typography width="fit-content" variant="h6">
          Articles
        </Typography>
      </Tooltip>

      {/* TODO replace with lazy-loading compatable one */}
      <Carousel>
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </Carousel>
    </Box>
  );
}
