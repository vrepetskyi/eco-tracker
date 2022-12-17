import {GlobalStyles } from "@mui/material";
import { Box } from "@mui/system";
import Tree from './components/Tree';
import Header from "./components/Header";
import Todos from "./components/Todos";
import EpicChart from './components/Chart';

export default function App() {
  const tree = 0;
  const progress = 165;


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
      <Box>
        <Header />
        <Todos />
      </Box>
      <Tree currentTree={tree} progress={progress} />
      <EpicChart />
    </>
  );
}
