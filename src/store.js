import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { Alert } from 'react-native';

function textAlert({ getState }) {
    return next => action => {
        if(action.text.toLowerCase().match(/alert/)) {
            Alert.alert(action.text);
        }
        let returnValue = next(action);

        return returnValue;
    }
}

function makeUpperText({ getState }) {
    return next => action => {
        if( action.text.match(/!$/) ) {
            action.text = action.text.toUpperCase();
        }
        let returnValue = next(action);

        return returnValue;
    }
}

const store = createStore(rootReducer, applyMiddleware(textAlert, makeUpperText, thunk));

export default store;