import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { incrementNum, setCountertNum } from "../actions/counterActions";
import { secondIncrementNum } from "../actions/secondCounterActions";
var auto = null;
class AutoIncrement extends React.Component {
    
    timer=(checked)=>{
        let {incrementNum,secondIncrement}=this.props
        if(checked) {
            auto=setInterval(function () {
                incrementNum()
                secondIncrement()                
            },1000);
        }
        else{
            clearInterval(auto);
        }
    };
    render() {
        return (
            <label className="switch">
                <input type="checkbox" onChange={(e) => this.timer(e.target.checked)} />
                <span className="slider round"></span>
            </label>
        )
    }

}

export const mapStateToProps = store => {
    return {
        count: store.count,

    };
};

export const mapDispatchToProps = dispatch => {
    return {
        incrementNum: () => {
            dispatch(incrementNum());
        },
        secondIncrement:()=>{
            dispatch(secondIncrementNum())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoIncrement)

