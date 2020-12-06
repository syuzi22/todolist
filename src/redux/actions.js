import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from './constants';

export const addTodo = (todoText) => ({
    type: ADD_TODO,
    payload: {todoText},
    generateId: ['todoId']
});

export const removeTodo = (todoId) => ({
    type: REMOVE_TODO,
    todoId: todoId
});

export const editTodo = (todoId, todoText) => ({
    type: EDIT_TODO,
    todoId: todoId,
    payload: {todoText}
});