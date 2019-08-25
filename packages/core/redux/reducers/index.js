// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import counterReducer from './CounterReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});
// Exports
export { rootReducer };