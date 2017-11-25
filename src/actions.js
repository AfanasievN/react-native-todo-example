import {
    ADD_TODO,
    UPDATE_TODO,
    REMOVE_TODO,
    LOGIN,
    LOGOUT,
} from './constants';

export function add(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function update(id, text) {
    return {
        type: UPDATE_TODO,
        id, text
    }
}

export function remove(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

// login and logout actions

export function login() {
    return {
        type: LOGIN
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}
