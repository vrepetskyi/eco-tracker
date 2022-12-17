import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import Article from "./Article";
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
      <Carousel>
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </Carousel>
    </Box>
  );
}
