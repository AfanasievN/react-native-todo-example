import { StackNavigator } from "react-navigation";

import Screen1 from '../screens/Screen1';
import Logout from '../screens/Screen2';
import Login from '../screens/LoginScreen';


const navigator = StackNavigator({
    login: {
        screen: Login
    },
    screen1: {
        screen: Screen1
    },
    screen2: {
        screen: Logout
    }
});

export default navigator;