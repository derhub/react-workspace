import { call, put, takeEvery, select } from 'redux-saga/effects';
import { INCREASE, DECREASE } from '../actions/types';
import { increaseSuccess, increaseFailed, decreaseSuccess, decreaseFailed } from '../actions';
import { calculateAsync } from '../../api/counter'

let counterState = state => state.counter


// Our worker Saga: will perform the async increment task
export function* incrementAsync({ payload }) {
  try {
    let counterValue = yield select(counterState)
    let newValue = yield call(() => {
      return calculateAsync(counterValue.value, payload.value).then(res => res.value)
    })

    yield put(increaseSuccess(newValue))
  } catch (error) {
    console.warn(error)
    yield put(increaseFailed())
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(INCREASE.REQUEST, incrementAsync)
}


export function* decreaseAsync({ payload }) {
  try {
    let counterValue = yield select(counterState)
    let newValue = yield call(() => {
      return calculateAsync(counterValue.value, payload.value).then(res => res.value)
    })
    yield put(decreaseSuccess(newValue))
  } catch (error) {
    yield put(decreaseFailed())
  }
}

export function* watchDecreaseAsync() {
  yield takeEvery(DECREASE.REQUEST, decreaseAsync)
}