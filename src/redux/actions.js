import { ADD_TODO, REMOVE_TODO } from './constants';

export const addTodo = (todoText) => ({
    type: ADD_TODO,
    payload: {todoText},
    generateId: ['todoId']
});

export const removeTodo = (todoId) => ({
    type: REMOVE_TODO,
    todoId: todoId
});