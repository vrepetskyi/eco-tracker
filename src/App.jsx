import { Container, GlobalStyles } from "@mui/material";
import Tree from "./components/Tree";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";
import Statistics from "./components/Statistics";

const TREE_STEP = 3;

export default function App() {
  const {
    completed: { length: completed },
  } = useSelector((state) => state.todos);

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            backgroundColor: "#E5F7D1",
          },
        }}
      />
      <Header />
      <Container
        maxWidth="sm"
        sx={{ marginTop: 4, display: "flex", flexDirection: "column", gap: 4 }}
      >
        <Tree
          currentTree={Math.floor(completed / TREE_STEP) % 3}
          progress={Math.round(((completed % TREE_STEP) / TREE_STEP) * 100)}
        />
        <Todos />
        <Statistics />
      </Container>
    </>
  );
}
