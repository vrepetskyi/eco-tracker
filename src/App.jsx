import { GlobalStyles } from "@mui/material";
import Header from "./components/Header";

export default function App() {
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
    </>
  );
}
