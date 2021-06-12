import { SECOND_DECREMENT_NUM,SECOND_INCREMENT_NUM, SECOND_RESET_NUM, SECOND_SET_SOUNTER_NUM } from "../constants/ActionTypes";

export function secondIncrementNum(payload) {
  return {
    type: SECOND_INCREMENT_NUM,
    payload: payload
  };
}

export function secondDecrementNum(payload) {
  return {
    type: SECOND_DECREMENT_NUM,
    payload: payload
  };
}

export function secondResetNum() {
  return {
    type: SECOND_RESET_NUM,
  };
}

export function secondSetCountertNum(payload) {
  return {
    type: SECOND_SET_SOUNTER_NUM,
    payload: payload
  };
}