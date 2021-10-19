import { Route, Switch } from "react-router";
import SignUp from "../components/SignUp";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage/index";
import Groups from "../pages/Groups";
import Dashboard from "../pages/Dashboard";
import Welcome from "../pages/Welcome";
import { useState } from "react";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>

      <Route exact path='/login'>
        <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      <Route path = "/welcome" >
        <Welcome />
      </Route>

      <Route exact path='/signup'>
        <SignUp />
      </Route>

      <Route exact path='/dashboard'>
        <Dashboard />
      </Route>

      <Route exact path='/groups'>
        <Groups />
      </Route>
    </Switch>
  );
};

export default Routes;
