import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

const theme = createTheme({
  palette: {
    text: {
      primary: "#343D25",
    },
    primary: {
      main: "#EFA16C",
    },
    secondary: {
      main: "#6C804D",
    },
  },
  typography: {
    fontFamily: "'Josefin Sans', sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
