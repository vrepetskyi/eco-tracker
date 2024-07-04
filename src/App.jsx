import React from "react";
import { Alert, Container, Fade, GlobalStyles } from "@mui/material";
import Trees from "./components/Trees";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";
import Statistics from "./components/Statistics";
import Articles from "./components/Articles";
import { pickRandomElement } from "./helpers";
import Origin from "./components/Origin";

let previousCompletedTodosNumber = null;
export default function App() {
  const {
    completed: { length: completedTodosNumber },
    DISPLAY_QUANTITY,
  } = useSelector((state) => state.todos);
  const { treeGrown: treeGrownMessages } = useSelector(
    (state) => state.messages
  );
  const [isMessageDisplayed, setIsMessageDisplayed] = React.useState(false);
  const [messageToDisplay, setMessageToDisplay] = React.useState(null);

  React.useEffect(() => {
    if (previousCompletedTodosNumber === null) {
      previousCompletedTodosNumber = completedTodosNumber;
    }

    if (
      completedTodosNumber === previousCompletedTodosNumber ||
      completedTodosNumber % DISPLAY_QUANTITY !== 0
    ) {
      return;
    }

    previousCompletedTodosNumber = completedTodosNumber;

    setMessageToDisplay(pickRandomElement(treeGrownMessages));
    setIsMessageDisplayed(true);

    window.setTimeout(() => {
      setIsMessageDisplayed(false);
    }, 3000);
  }, [completedTodosNumber]);

  return (
    <>
      <GlobalStyles
        styles={{
          "*": {
            fontFamily: "'Josefin Sans', sans-serif",
          },
          body: {
            margin: 0,
            backgroundColor: "#E5F7D1",
          },
          "::-webkit-scrollbar": {
            width: "10px",
            height: "10px",
          },
          "::-webkit-scrollbar-track": {
            backgroundColor: "#9cb287",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "#7b946d",
          },
          "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#77934d",
          },
        }}
      />
      <Header />
      <Container
        maxWidth="sm"
        sx={{ my: 4, display: "flex", flexDirection: "column", gap: 4 }}
      >
        <Trees
          currentTree={completedTodosNumber % 3}
          progress={Math.floor(
            ((completedTodosNumber % DISPLAY_QUANTITY) / DISPLAY_QUANTITY) * 100
          )}
          treesCompleted={Math.floor(completedTodosNumber / DISPLAY_QUANTITY)}
        />
        <Todos />
        <Articles />
        <Statistics />
        <Origin />

        <Fade in={isMessageDisplayed} timeout={1000}>
          <Alert
            severity="success"
            sx={{
              position: "fixed",
              zIndex: 1,
            }}
          >
            {messageToDisplay}
          </Alert>
        </Fade>
      </Container>
    </>
  );
}
