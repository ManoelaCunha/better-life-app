// import { useState } from "react"
import { Route, Switch } from "react-router"
import Homepage from "../pages/Homepage/index"
const Routes = () => {
  // const [authenticated, setAuthenticated] = useState(false)

  return (
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route exact path='/login'>
        Login
      </Route>
      <Route exact path='/signup'>
        Cadastrar
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
