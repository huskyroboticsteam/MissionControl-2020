import { combineReducers } from 'redux';
import nominalReducer from './reducers/nominalReducer';
import sensorsReducer from './reducers/sensorsReducer';

export default function createReducer() {
  return combineReducers({
    nominal: nominalReducer,
    sensors: sensorsReducer,
  });
}
