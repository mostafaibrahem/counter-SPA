import PropTypes from "prop-types";
import React from "react";

class Reset extends React.Component {
    render() {
        const { reset, resetLabel, secondReset } = this.props
        return (
            <div onClick={() => { reset(); secondReset(); }}>
                <span>{resetLabel}</span>
            </div>
        )
    }

}

Reset.propTypes = {
    reset: PropTypes.func,
    resetLabel: PropTypes.string,
    secondReset: PropTypes.func
};

export default Reset