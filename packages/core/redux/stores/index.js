// Imports: Dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Imports: Redux Root Reducer
import { rootReducer } from '../reducers';
// Imports: Redux Root Saga
import { rootSaga } from '../sagas';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const store = createStore(
  rootReducer,
  enhancer
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export {
  store
}