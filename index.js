import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { Provider } from 'react-redux';
import store from './src/store'


console.log('Redux store', store.getState());
const Application = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent('todoapp', () => Application);
