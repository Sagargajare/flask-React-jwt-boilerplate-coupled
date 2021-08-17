import React from "react";
import { HashRouter, Route, hashHistory, Switch } from "react-router-dom";
import Home from "./components/Home";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import Login from "./components/Login";
// import more components

const theme = createTheme({
  typography: {
    // "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontFamily: `"Nunito Sans", "sans-serif"`,
    fontSize: 14,
    fontWeightLight: 40,
    fontWeightRegular: 700,
    fontWeightMedium: 800,
  },
  shape: {
    borderRadius: 0,
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#005A8D",
      light: "#022E57",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#FFF5FD",
      main: "#FF96AD",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },

    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
});
export default (
  <ThemeProvider theme={theme}>
    <HashRouter history={hashHistory}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </HashRouter>
  </ThemeProvider>
);
