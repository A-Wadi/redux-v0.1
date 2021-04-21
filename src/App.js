import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { add } from "./redux/actions/action.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.inc}>Click</button>
        <br />
        {this.props.a}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    a: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inc: () => dispatch(add()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
