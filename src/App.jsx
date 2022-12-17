import { Container, GlobalStyles } from "@mui/material";
import { Box } from "@mui/system";
import Header from "./components/Header";
import Todos from "./components/Todos";

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
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Todos />
      </Container>
    </>
  );
}
