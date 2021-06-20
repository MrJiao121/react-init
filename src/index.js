import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
/* import Login from "./pages/Login";
import List from "./pages/products/List"; */
import { mainRoutes } from "./routes";
/* 
switch表示只适配依次

*/
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={(routeProps) => <App {...routeProps} />} />
      {mainRoutes.map((item) => (
        <Route key={item.path} {...item} />
      ))}

      <Redirect to="/404" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* 
创建目录结构



*/
