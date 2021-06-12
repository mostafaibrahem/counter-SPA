import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";
class Counter extends Component {

  render() {
    const { count, disabled, secondCounter } = this.props;
    let dataSource = disabled ? secondCounter : count
    let counterClasses = dataSource === 0 ? " counter-number" : dataSource < 0 ? "counter-number green" : "counter-number red"
    return (
      <div className="counter" style={{ pointerEvents: disabled ? "none" : "unset", cursor: disabled ? "no-drop" : "unset" }}>
        <div className={counterClasses}>{dataSource}</div>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          controls
        </button>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <Controls disabled={disabled} />
          </div>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  secondCounter: PropTypes.number,
  disabled: PropTypes.bool
};

export default Counter;
