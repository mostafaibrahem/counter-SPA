import React, { Component } from "react";
import { connect } from "react-redux";
import { decrementNum, incrementNum } from "./actions/counterActions";
import { secondDecrementNum, secondIncrementNum } from "./actions/secondCounterActions";
import Counter from "./containers/Counter";



class App extends Component {

  componentDidMount() {
    document.addEventListener("keydown", (e) => this.handelKeyDown(e))
  }

  handelKeyDown = (event) => {
    const { increment, decrement, secondDecrement, secondIncrement } = this.props
    if (event.ctrlKey && event.keyCode === 39) {
      increment()
      secondDecrement()
    }

    if (event.ctrlKey && event.keyCode == 37) {
      decrement()
      secondIncrement()
    }
  }


  render() {
    return (
      <div className="counters-wrapper">
        <Counter />
        <Counter disabled={true} />

      </div>
    );
  }
}
export const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(incrementNum());
    },
    decrement: () => {
      dispatch(decrementNum());
    },
    reset: () => {
      dispatch(resetNum())
    },
    secondIncrement: () => {
      dispatch(secondIncrementNum())
    },
    secondDecrement: () => {
      dispatch(secondDecrementNum())
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
