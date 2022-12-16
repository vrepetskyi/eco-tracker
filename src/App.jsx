import { css, Global } from "@emotion/react";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header />
    </>
  );
}
