import { SECOND_INCREMENT_NUM, SECOND_DECREMENT_NUM, SECOND_SET_SOUNTER_NUM, SECOND_RESET_NUM } from "../constants/ActionTypes";

export default function reducer(state = 0, action) {
  switch (action.type) {
  case SECOND_INCREMENT_NUM: 
    return state + 1;
  case SECOND_DECREMENT_NUM:
    return state - 1;
    case SECOND_RESET_NUM:
      return state = 0;
      case SECOND_SET_SOUNTER_NUM:
        return state = parseInt(action.payload)  
  }
  return state;
}