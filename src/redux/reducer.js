import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from './constants';

// {[todoId]: todoText}
const reducer = (state = {}, action) => {
    const { type, todoId, payload } = action;
    switch (type) {
        case ADD_TODO:
          return {...state, [todoId]: payload.todoText}
        case REMOVE_TODO:
          const newState = {...state};
          delete newState[todoId]
          return newState;
        case EDIT_TODO:
          const nextState = {...state};
          nextState[todoId] = payload.todoText;
          return nextState;
        default:
          return state;
    }
};

export default reducer;