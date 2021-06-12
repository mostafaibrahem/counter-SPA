import PropTypes from "prop-types";
import React from "react";

class Decrement extends React.Component {
    render() {
        const {  decrementLabel,onClickDecrement } = this.props
        return (
            <div onClick={() => { onClickDecrement(); }}>
                <span>{decrementLabel}</span>
            </div>
        )
    }

}

Decrement.propTypes = {
    onClickDecrement: PropTypes.func,
    decrementLabel: PropTypes.string,
};

export default Decrement