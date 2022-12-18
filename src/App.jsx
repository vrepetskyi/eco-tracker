import { Container, GlobalStyles } from "@mui/material";
import Trees from "./components/Trees";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";
import Statistics from "./components/Statistics";
import Articles from "./components/Articles";

const TREE_STEP = 3;

export default function App() {
  const {
    completed: { length: completedL },
    ...rest
  } = useSelector((state) => state.todos);
  console.log(rest);

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
            backgroundColor: "#BBBBBB",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "#999999",
          },
          "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#77934d",
          },
        }}
      />
      <Header />
      <Container
        maxWidth="sm"
        sx={{ marginTop: 4, display: "flex", flexDirection: "column", gap: 4 }}
      >
        <Trees
          currentTree={Math.floor(completedL / TREE_STEP) % 3}
          progress={Math.round(((completedL % TREE_STEP) / TREE_STEP) * 100)}
          treesCompleted={Math.floor(completedL / TREE_STEP)}
        />
        <Todos />
        <Articles />
        <Statistics />
      </Container>
    </>
  );
}
