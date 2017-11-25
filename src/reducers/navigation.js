import { NavigationActions } from "react-navigation";

import AppNavigator from "../navigation/navigationStack";
import {
    LOGIN,
    LOGOUT,
} from '../constants';


const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams(
    "login"
);

const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams(
    "screen1"
);

const stateForLoggedOut = AppNavigator.router.getStateForAction(
    ActionForLoggedOut
);
const stateForLoggedIn = AppNavigator.router.getStateForAction(
    ActionForLoggedIn
);

const initialState = { stateForLoggedOut, stateForLoggedIn };

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "@@redux/INIT":
            return {
                ...state,
                stateForLoggedIn: AppNavigator.router.getStateForAction(
                    ActionForLoggedIn,
                    stateForLoggedOut
                )
            };

        case LOGIN:
            return {
                ...state,
                stateForLoggedIn: AppNavigator.router.getStateForAction(
                    ActionForLoggedIn,
                    stateForLoggedOut
                )
            };

        case LOGOUT:
            return {
                ...state,
                stateForLoggedOut: AppNavigator.router.getStateForAction(
                    NavigationActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: "login" })]
                    })
                )
            };

        default:
            return {
                ...state,
                stateForLoggedIn: AppNavigator.router.getStateForAction(
                    action,
                    state.stateForLoggedIn
                )
            };
    }
};

export default navigationReducer;