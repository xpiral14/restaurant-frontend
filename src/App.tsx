import React from "react";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/global";
import lightTheme from "./themes/light";
import DefaultLayout from "./pages/_layouts/Default";
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <DefaultLayout>
        <GlobalStyle />
        <Nav />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default App;
