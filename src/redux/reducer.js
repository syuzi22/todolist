import { ADD_TODO } from './constants';

// {[todoId]: todoText}
const reducer = (state = {}, action) => {
    const { type, todoId, payload } = action;
    switch (type) {
        case ADD_TODO:
          return {...state, [todoId]: payload.todoText}
        default:
          return state;
    }
};

export default reducer;