// Initial State
import { INCREASE, DECREASE } from '../actions'

const initialState = {
  value: 0,
  loading: false,
  failed: false,
}

// Redux: Counter Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE.REQUEST: {
      return {
        ...state,
        loading: true,
        failed: false,
      }
    }
    case INCREASE.SUCCEEDED: {
      return {
        value: action.payload.value,
        loading: false,
        failed: false,
      }
    }
    case INCREASE.FAILED: {
      return {
        value: state.value,
        loading: false,
        failed: true,
      }
    }
    case DECREASE.REQUEST: {
      return {
        ...state,
        loading: true,
        failed: false,
      }
    }
    case DECREASE.SUCCEEDED: {
      return {
        value: action.payload.value,
        loading: false,
        failed: false,
      }
    }
    case DECREASE.FAILED: {
      return {
        value: state.value,
        loading: false,
        failed: true,
      }
    }
    default: {
      return state;
    }
  }
}