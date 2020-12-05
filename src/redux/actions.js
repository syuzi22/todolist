import { ADD_TODO } from './constants';

export const addTodo = (todoText) => ({
    type: ADD_TODO,
    payload: {todoText},
    generateId: ['todoId']
});