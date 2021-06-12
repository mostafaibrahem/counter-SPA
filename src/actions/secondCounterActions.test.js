import { SECOND_DECREMENT_NUM, SECOND_INCREMENT_NUM } from "../constants/ActionTypes"
import { secondDecrementNum, secondIncrementNum } from "./secondCounterActions"

describe('actions', () => {
    it('should create an action to increment secondCounter', () => {
        const payload = null
        const expectedAction = {
            type: SECOND_INCREMENT_NUM,
            payload
        }
        expect(secondIncrementNum(payload)).toEqual(expectedAction)
    })

    it('should create an action to decrement secondCounter', () => {
        const payload = null
        const expectedAction = {
            type: SECOND_DECREMENT_NUM,
            payload
        }
        expect(secondDecrementNum(payload)).toEqual(expectedAction)
    })
})