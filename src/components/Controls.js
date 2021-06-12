import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Reset from './Reset'
import Decrement from './Decrement'
import Increment from './Increment'
import Slider from './Slider'
import AutoIncrement from './AutoIncrement'

class Controls extends Component {
  state = {
    incrementCount: 0,
    decrementCount: 0
  }

  onClickIncrement = () => {
    const { increment, secondDecrement } = this.props
    const { decrementCount, incrementCount } = this.state
    increment()
    secondDecrement()
    if (decrementCount === 0) {
      this.setState({ incrementCount: incrementCount + 1 })
    }
    else {
      this.setState({ incrementCount: 0 })
      this.setState({ decrementCount: 0 })
    }
  }

  onClickDecrement = () => {
    const { decrement, secondIncrement } = this.props
    const { decrementCount, incrementCount } = this.state
    decrement()
    secondIncrement()
    if (incrementCount >= 3 && incrementCount % 2 === 1) {
      this.setState({ decrementCount: decrementCount + 1 })
    }
    else {
      this.setState({ incrementCount: 0 })
      this.setState({ decrementCount: 0 })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { decrementCount, incrementCount } = this.state
    if(prevState!==this.state){
      if(decrementCount === incrementCount+1){
        console.log("done")
        alert(`you have clicked increment button ${incrementCount} times and decrement button ${decrementCount} times`)
      }
    }
  }


  render() {
    const { incrementLabel, decrementLabel, reset, resetLabel, secondReset, disabled } = this.props;

    return (
      <div className="controls">
        <Increment onClickIncrement={this.onClickIncrement} incrementLabel={incrementLabel} />
        <Decrement onClickDecrement={this.onClickDecrement} decrementLabel={decrementLabel} />
        <Reset reset={reset} resetLabel={resetLabel} secondReset={secondReset} />
        <Slider disabled={disabled} />
        <AutoIncrement disabled={disabled} />
      </div>
    );
  }
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
  secondIncrement: PropTypes.func,
  secondDecrement: PropTypes.func,
  secondReset: PropTypes.func
};

Controls.defaultProps = {
  incrementLabel: "+",
  decrementLabel: "-",
  resetLabel: "reset"
};

export default Controls;
