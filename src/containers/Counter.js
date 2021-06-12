import React, { Component } from "react";
import Controls from "../components/Counter";
import { connect } from "react-redux";
let incrementCondition = ["increment", "increment", "increment", "decrement", "decrement", "decrement", "decrement"]

export class Controller extends Component {
  componentDidUpdate(){
    if(incrementDecrement.includes(incrementCondition)){
      console.log("done")
    }
  }

  render() {
    return (
      <Controls {...this.props}/>
    );
  }
};

export const mapStateToProps = store => {
  return {
    count: store.count,
    secondCounter:store.secondCounter,
    incrementDecrement:store.incrementDecrement

  };
};

export default connect(mapStateToProps, null)(Controls);
