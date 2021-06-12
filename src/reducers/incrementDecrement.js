import { INCREMENT_NUM, DECREMENT_NUM, RESET_NUM } from "../constants/ActionTypes";

export default function reducer(state = [], action) {
    switch (action.type) {
        case INCREMENT_NUM:
            return state.concat("increment");
        case DECREMENT_NUM:
            return state.concat("decrement");
        case RESET_NUM:
            return state = [];
    }

    return state;
}