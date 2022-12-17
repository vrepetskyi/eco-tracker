import { Container, GlobalStyles } from "@mui/material";
import Tree from './components/Tree';
import Header from "./components/Header";
import Todos from "./components/Todos";
import EpicChart from './components/Chart';
import { useSelector } from "react-redux";

const TREE_STEP = 3;


export default function App() {
  const {completed: {length: completedL}} = useSelector((state) => state.todos);
  const completed = useSelector((state) => state.todos).completed.map(task => (new Date(task.date)));

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            backgroundColor: "#E5F7D1",
          }
        }}
      />
      <Header />
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Todos />
        <Tree currentTree={Math.floor(completedL / TREE_STEP) % 3} progress={Math.round((completedL % TREE_STEP) / TREE_STEP * 100)} />
        <EpicChart completed={completed} />
      </Container>
    </>
  );
}
