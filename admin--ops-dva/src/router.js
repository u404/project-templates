
import { Router, Route, Switch } from "dva/router"

import App from "./App"

import getRoutes from "./routes"

export default ({ history, app }) => {
  const routes = getRoutes(app)
  return (
    <Router history={history} >
      <App routes={routes}>
        <Switch>
          {routes.map(route => (
            <Route {...route} key={route.path} />
          ))}
        </Switch>
      </App>
    </Router>
  )
}
