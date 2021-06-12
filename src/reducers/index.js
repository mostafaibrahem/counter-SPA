// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import count from "./counter";
import secondCounter from "./secondCounter";
import incrementDecrement from "./incrementDecrement";
// import secondCounter from './exampleReducer';

export default combineReducers({ count,incrementDecrement,secondCounter });

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
