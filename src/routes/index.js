import { Route, Switch } from "react-router";
import SignUp from "../components/SignUp";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage/index";
import Groups from "../pages/Groups";
import Dashboard from "../pages/Dashboard";
import { useState, useEffect } from "react";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@BetterLife:token");
    token && setAuthenticated(true);
  }, [authenticated]);

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
        <SignUp authenticated={authenticated} />
      </Route>

      <Route exact path="/dashboard">
        <Dashboard authenticated={authenticated} />
      </Route>

      <Route exact path="/groups">
        <Groups authenticated={authenticated} />
      </Route>
    </Switch>
  );
};

export default Routes;
