import PropTypes from "prop-types";
import React from "react";

class Increment extends React.Component {
    render() {
        const { incrementLabel,onClickIncrement } = this.props
        return (
            <div onClick={() =>  onClickIncrement() }>
                <span>{incrementLabel}</span>
            </div>
        )
    }

}

Increment.propTypes = {
    incrementLabel: PropTypes.string,
    onClickIncrement:PropTypes.func
};

export default Increment