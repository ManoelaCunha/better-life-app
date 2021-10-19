import { Route, Switch } from "react-router";
import SignUp from "../components/SignUp";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage/index";
import Groups from "../pages/Groups";
import Dashboard from "../pages/Dashboard";
import { useState } from "react";
import GroupDetails from "../pages/GroupDetails";

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

      <Route exact path='/signup'>
        <SignUp />
      </Route>

      <Route exact path='/dashboard'>
        <Dashboard />
      </Route>

      <Route exact path='/groups'>
        <Groups />
      </Route>
      <Route exact path='/groups/:idGroup'>
        <GroupDetails />
      </Route>


    </Switch>
  );
};

export default Routes;
