import { combineReducers } from 'redux';

//importing reducers
import todo from './todo'

//Define application reducers
const rootReducer = {
        todo,
};

export default combineReducers(rootReducer);