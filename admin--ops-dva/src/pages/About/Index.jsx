import { connect } from "dva"

export default connect(({ count }) => ({
  count,
}))(props => (
  <div>
    <h2>About/Index {props.count}</h2>
  </div>
))
