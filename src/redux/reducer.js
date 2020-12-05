import { ADD_TODO, REMOVE_TODO } from './constants';

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
        default:
          return state;
    }
};

export default reducer;