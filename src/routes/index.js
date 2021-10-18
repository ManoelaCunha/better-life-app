// import { useState } from "react"
import { Route, Switch } from "react-router";
import { useState } from "react";
import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage/index";
import Login from "../pages/Login/index";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/signup">
        Cadastrar
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/groups">
        Grupos
      </Route>
    </Switch>
  );
};

export default Routes;
