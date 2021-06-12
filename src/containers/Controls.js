import React, { Component } from "react";
import Controls from "../components/Controls";
import { connect } from "react-redux";

import { incrementNum, decrementNum, resetNum } from "../actions/counterActions";
import { secondDecrementNum, secondIncrementNum, secondResetNum } from "../actions/secondCounterActions";


export class Controller extends Component {

  render() {
    return (
      <div onKeyDown={(e) => console.log(e)} id="controls_wrapper_id">
        <Controls {...this.props} /> 
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
    secondIncrement:()=>{
      dispatch(secondIncrementNum())
    },
    secondDecrement:()=>{
      dispatch(secondDecrementNum())
    },
    secondReset: () => {
      dispatch(secondResetNum())
    },
  };
};

export default connect(null, mapDispatchToProps)(Controls);
