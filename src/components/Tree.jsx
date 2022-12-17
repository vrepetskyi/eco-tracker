import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import { useEffect, useState } from "react";
import "./tree.css";

const DIMENTIONS = {
  h: "300px",
  w: "300px",
};

let TIMER = false;

export default function Tree({ currentTree, progress }) {
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
    // First 3 work normally then it fucks up
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
    <Container id="tree" sx={{ alignItems: "center" }} maxWidth="sm">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box sx={{ height: DIMENTIONS.h, width: DIMENTIONS.w }}>
          {transition ? (
            <>
              <img
                alt="I's a tree bro"
                className="tree tree-current"
                src={`/images/tree_${currentImage}.gif`}
              />
              <img
                alt="I's a tree bro"
                className="tree tree-next"
                src={`/images/tree_${nextImage}.gif`}
              />
            </>
          ) : (
            <img
              alt="I's a tree bro"
              className="tree"
              src={`/images/tree_${currentImage}.gif`}
            />
          )}
        </Box>
        <LinearProgressWithLabel
          sx={{ height: "20px", width: DIMENTIONS.w }}
          value={progress}
        />
      </Box>
    </Container>
  );
}
