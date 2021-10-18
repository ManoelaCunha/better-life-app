import { Route, Switch } from "react-router"
import SignUp from "../components/SignUp"
import Homepage from "../pages/Homepage/index"

const Routes = () => {

  return (
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route exact path='/login'>
        Login
      </Route>
      <Route exact path='/signup'>
        <SignUp/>
      </Route>
      <Route exact path='/dashboard'>
        Dashboard
      </Route>
      <Route exact path='/groups'>
        Grupos
      </Route>
    </Switch>
  )
}

export default Routes
