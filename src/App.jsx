import { Container, GlobalStyles } from "@mui/material";
import Tree from './components/Tree';
import Header from "./components/Header";
import Todos from "./components/Todos";
import EpicChart from './components/Chart';
import { useSelector } from "react-redux";

const TREE_STEP = 3;


export default function App() {
  const {completed: {length: completed}} = useSelector((state) => state.todos);

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
        <Tree currentTree={Math.floor(completed / TREE_STEP) % 3} progress={Math.round((completed % TREE_STEP) / TREE_STEP * 100)} />
        <EpicChart />
      </Container>
    </>
  );
}
