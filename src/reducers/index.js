import { combineReducers } from 'redux';

//importing reducers
import todo from './todo';
import NavigationReducer from './navigation';
import LoginReducer from './login';

//Define application reducers
const rootReducer = {
    todo,
    NavigationReducer,
    LoginReducer
};

export default combineReducers(rootReducer);