import { INCREASE, DECREASE } from './types'

export const increase = (value = 1) => ({
  type: INCREASE.REQUEST,
  payload: { value }
})

export const increaseSuccess = (value) => ({
  type: INCREASE.SUCCEEDED,
  payload: { value }
})

export const increaseFailed = () => ({
  type: INCREASE.FAILED
})

export const decrease = (value = -1) => ({
  type: DECREASE.REQUEST,
  payload: { value }
})

export const decreaseSuccess = (value) => ({
  type: DECREASE.SUCCEEDED,
  payload: { value }
})

export const decreaseFailed = () => ({
  type: DECREASE.FAILED
})