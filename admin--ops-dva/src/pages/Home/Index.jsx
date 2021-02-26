import { connect } from "dva"

export default connect(({ count }) => ({
  count,
}))(props => (
  <div>
    <h2>Home/Index {props.count}</h2>
    <button key="add" onClick={() => { props.dispatch({ type: "count/addAfter1Second" }) }}>+</button>
    <button key="minus" onClick={() => { props.dispatch({ type: "count/minus" }) }}>-</button>
  </div>
))
