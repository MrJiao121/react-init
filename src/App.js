import logo from "./logo.svg";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import { Switch, Router, Redirect, Route } from "react-router-dom";
import { adminRoutes } from "./routes";
import Frame from "./components/frame/Index";

function App() {
  return (
    <Frame>
      <div className="App">
        <h1>我是app组件</h1>
        <Switch>
          {adminRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(routeProps) => <route.component {...routeProps} />}
            />
          ))}

          <Redirect to="/404" />
        </Switch>
      </div>
    </Frame>
  );
}

export default App;
