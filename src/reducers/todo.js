import {
    ADD_TODO,
    UPDATE_TODO,
    REMOVE_TODO,
} from '../constants';
import { filter, map } from 'lodash'


const initialState = {
    todoList: [],
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todoList: [...state.todoList, action.text] ,
            }
        }
        case UPDATE_TODO: {
            return {
                ...state,
                todoList: map(state.todoList, function (v, i) {
                    return i === action.id ? action.text : v;
                })
            }
        }
        case REMOVE_TODO: {
            return {
                ...state,
                todoList: filter(state.todoList, function (n, i) {
                    return i !== action.id;
                })
            }
        }
        default:
            return state ;

    }
}