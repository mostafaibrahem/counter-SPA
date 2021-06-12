import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { setCountertNum } from "../actions/counterActions";
import { secondSetCountertNum } from "../actions/secondCounterActions";

class Slider extends React.Component {

    render() {
        const { count, setNum, secondSetNum, secondCounter, disabled } = this.props
        const dataSource = disabled ? secondCounter : count
        return (
            <input
                type="range"
                min="1"
                max="100"
                value={dataSource}
                className="min-max-slider"
                id="myRange"
                onChange={(e) => {
                    setNum(e.target.value)
                    secondSetNum(e.target.value)
                }} />
        )
    }

}

export const mapStateToProps = store => {
    return {
        count: store.count,
        secondCounter: store.secondCounter

    };
};

export const mapDispatchToProps = dispatch => {
    return {
        setNum: (value) => {
            dispatch(setCountertNum(value));
        },
        secondSetNum: (value) => {
            dispatch(secondSetCountertNum(value));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider)

