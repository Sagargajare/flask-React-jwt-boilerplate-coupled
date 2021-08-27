import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  hashHistory,
  Switch,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import Login from "./components/Login";
import { PrivateRoute, PublicRoute } from "./routerControllers";

const theme = createTheme({
  typography: {
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
      main: "#005A8D",
      light: "#022E57",
    },
    secondary: {
      light: "#FFF5FD",
      main: "#FF96AD",
      contrastText: "#ffcc00",
    },

    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
});
export default (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <PublicRoute exact path="/" restricted={true} component={Login} />
              <PrivateRoute
                restricted={true}
                component={Dashboard}
                path="/dashboard"
              />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
