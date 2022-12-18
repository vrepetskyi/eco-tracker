import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import ArticleCard from "./ArticleCard";
import Carousel from "react-material-ui-carousel";

export default function Articles() {
  const { all: articles } = useSelector((state) => state.articles);

  return (
    <Box
      id="articles"
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
    >
      <Tooltip
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
