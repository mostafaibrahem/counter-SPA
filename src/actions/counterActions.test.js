import { DECREMENT_NUM, INCREMENT_NUM } from "../constants/ActionTypes";
import { decrementNum, incrementNum } from "./counterActions";

describe('actions', () => {
    it('should create an action to increment counter', () => {
        const payload = null
        const expectedAction = {
            type: INCREMENT_NUM,
            payload
        }
        expect(incrementNum(payload)).toEqual(expectedAction)
    })

    it('should create an action to decrement counter', () => {
        const payload = null
        const expectedAction = {
            type: DECREMENT_NUM,
            payload
        }
        expect(decrementNum(payload)).toEqual(expectedAction)
    })
})