import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";
import "./tree.css";
import { Tooltip, Typography } from "@mui/material";

const DIMENTIONS = {
  h: "300px",
  w: "300px",
};

let TIMER = false;

export default function Tree({ currentTree, progress, treesCompleted }) {
  const [currentImage, setCurrentImage] = useState(currentTree);
  const [nextImage, setNextImage] = useState(null);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    if (currentTree !== currentImage) {
      setNextImage(currentTree);
      setTransition(true);
    }
  }, [currentTree, currentImage, progress]);

  useEffect(() => {
    if (transition && !TIMER) {
      setTimeout(() => {
        setCurrentImage(nextImage);
        setNextImage(null);
        setTransition(false);

        TIMER = false;
      }, 1000);
      TIMER = true;
    }
  }, [transition, nextImage, progress]);

  console.log(
    "current",
    currentImage,
    "next",
    nextImage,
    "current tree",
    currentTree
  );

  return (
    <Container
      id="trees"
      sx={{ alignItems: "center", position: "relative" }}
      maxWidth="sm"
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box sx={{ height: DIMENTIONS.h, width: DIMENTIONS.w }}>
          {transition ? (
            <>
              <img
                alt="young tree"
                className="tree tree-current"
                src={`/images/tree-${currentImage}.gif`}
              />
              <img
                alt="growing tree"
                className="tree tree-next"
                src={`/images/tree-${nextImage}.gif`}
              />
            </>
          ) : (
            <img
              alt="grown tree"
              className="tree"
              src={`/images/tree-${currentImage}.gif`}
            />
          )}
        </Box>
        <Box>
          <ProgressBar
            sx={{ mt: 2, width: DIMENTIONS.w }}
            percentage={progress}
          />
        </Box>
      </Box>

      <Tooltip title="your full-grown trees" arrow placement="bottom-end">
        <div className="tree_completed">
          <img
            src="/images/leaf-circle.png"
            alt="completed trees counter decoration"
          />
          <Typography>{treesCompleted}</Typography>
        </div>
      </Tooltip>
    </Container>
  );
}
