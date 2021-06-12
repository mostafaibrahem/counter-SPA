import { INCREMENT_NUM, DECREMENT_NUM, RESET_NUM, SET_SOUNTER_NUM } from "../constants/ActionTypes";

export function incrementNum(payload) {
  return {
    type: INCREMENT_NUM,
    payload: payload
  };
}

export function decrementNum(payload) {
  return {
    type: DECREMENT_NUM,
    payload: payload
  };
}

export function resetNum() {
  return {
    type: RESET_NUM,
  };
}

export function setCountertNum(payload) {
  return {
    type: SET_SOUNTER_NUM,
    payload: payload
  };
}