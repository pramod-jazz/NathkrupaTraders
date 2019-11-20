import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import App from "./App";
import Pamplet from "./Pamplet";

const routing = (
  <CookiesProvider>
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route
          path="/preview"
          render={props => <Pamplet {...props} isAuthed={true} />}
        ></Route>
      </div>
    </Router>
  </CookiesProvider>
);
ReactDOM.render(routing, document.getElementById("root"));
