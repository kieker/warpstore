import getData from './theData';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    data : getData,
})
export default allReducer;