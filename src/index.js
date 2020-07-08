import React from "react";
import ReactDOM from "react-dom";

import theme from "./components/utils/theme";
import GlobalStyles from "./components/utils/global";
import { ThemeProvider } from "styled-components";

import App from "./App";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <>
            <App />
            <GlobalStyles />
        </>
    </ThemeProvider>,
    document.querySelector("#root")
);