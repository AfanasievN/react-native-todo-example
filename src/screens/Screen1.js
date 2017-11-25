/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { add, remove, update } from '../actions'
import store from '../store';


class Screen1 extends Component {
    static navigationOptions = {
        title: "Screen1",
        gesturesEnabled: false,
        headerLeft: null
    };

    navigate = () => {
        const navigateToScreen2 = NavigationActions.navigate({
            routeName: "screen2",
            params: { name: "Shubhnik" }
        });
        this.props.navigation.dispatch(navigateToScreen2);
    };

    constructor(props) {
        super(props);
        this.state = {
            text: null,
        };
    }

    addTodo(){
        const { text } = this.state;
        this.props.dispatch(add(text));
    }

    updateTodo(id){
        const { text } = this.state;
        this.props.dispatch(update(id, text));
    }

    removeTodo(id) {
        this.props.dispatch(remove(id));
    }

    render() {
        const { todoList } = this.props.todo;
        console.log('APP state:', this);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <TouchableOpacity
                    style={{
                        paddingVertical: 15,
                        paddingHorizontal: 40,
                        backgroundColor: "indigo"
                    }}
                    onPress={this.navigate}
                >
                    <Text style={{ fontSize: 23, fontWeight: "600", color: "white" }}>
                        Screen2
                    </Text>
                </TouchableOpacity>
                <TextInput
                    type='bordered'
                    placeholder='Add new todo'
                    style={{width: 100}}
                    onChangeText={(text) => this.setState({text})}
                    placeholderTextColor = 'rgba(0,0,0,0.4)'
                    autoCapitalize = 'none'
                    underlineColorAndroid='transparent'
                />
                <Button
                    title='Add Todo'
                    onPress={() => this.addTodo()}
                    style={{paddingBottom: 10}}
                />
                <View style={{ height: 20, width: 100}}/>
                {
                    todoList.map((entry, id) => {
                        return(
                            <View key={id} >
                                <View style={{flexDirection: 'row'}}>
                                    <Button
                                        title='='
                                        onPress={() => this.updateTodo(id)}
                                        style={styles.blueButton}
                                    />
                                    <Text style={{fontSize: 30, paddingBottom: 5, paddingTop: 5, paddingRight: 10, paddingLeft: 10}}>
                                        {entry}
                                    </Text>
                                    <Button
                                        title='X'
                                        onPress={() => this.removeTodo(id)}
                                        style={styles.redButton}
                                    />
                                </View>
                            </View>
                        )
                    } )
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state,
    }
}

function mapDispatchToProps() {
    return {
        dispatch: store.dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Screen1)
connect(mapStateToProps, mapDispatchToProps)(Button);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    redButton: {
        color: '#ff2835'
    },
    blueButton: {
    },
});