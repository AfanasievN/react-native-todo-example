import {
    LOGIN,
    LOGOUT,
} from '../constants';

const initialState = {
    isLoggedIn: false
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isLoggedIn: true
            };
        }
        case LOGOUT: {
            return {
                ...state,
                isLoggedIn: false
            };
        }
        default:
            return state;
    }
}