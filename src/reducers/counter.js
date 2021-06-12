import { INCREMENT_NUM, DECREMENT_NUM, RESET_NUM, SET_SOUNTER_NUM } from "../constants/ActionTypes";

export default function reducer(state = 0, action) {
  switch (action.type) {
  case INCREMENT_NUM: 
    return state + 1;
  case DECREMENT_NUM:
    return state - 1;
  case RESET_NUM:
    return state = 0;
  case SET_SOUNTER_NUM:
    return state = parseInt(action.payload)  
  }

  return state;
}