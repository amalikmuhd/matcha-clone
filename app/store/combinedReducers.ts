import {combineReducers} from 'redux';
import {fromTokenSelect, toTokenSelect} from './reducers/generalReducer';
export default combineReducers({
  fromTokenSelect,
  toTokenSelect,
});
