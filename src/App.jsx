import {GlobalStyles } from "@mui/material";
import Tree from './components/Tree';
import Header from "./components/Header";
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
      <Header />
      <Tree currentTree={tree} progress={progress} />
      <EpicChart />
    </>
  );
}
