/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigation from './navigation';


export default class App extends Component {
    render() {
        console.log('APP state:', this);
        return (
            <Provider store={store}>
                <AppNavigation/>
            </Provider>
        );
    }
}



