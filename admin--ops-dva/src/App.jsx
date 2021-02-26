import { connect } from "dva"
import { withRouter } from "dva/router"

const App = withRouter(connect(({ count }) => ({
  count,
}))(props => (
  <div>
    <h2>App</h2>
    <ul className="menus">
      {props.routes.map(route => (
        <li className="menu" key={route.path} onClick={() => props.history.push(route.path)}>{route.name}</li>
      ))}
    </ul>
    {props.children}
  </div>
)))

export default App
