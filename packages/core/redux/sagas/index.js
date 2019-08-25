// Imports: Dependencies
import { all } from 'redux-saga/effects';

// Imports: Redux Sagas
import { watchIncrementAsync, watchDecreaseAsync } from './CounterSaga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    watchDecreaseAsync(),
    watchIncrementAsync()
  ]);
};