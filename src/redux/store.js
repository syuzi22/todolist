import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import generateId from './middleware/generateId';
import reducer from './reducer';

const enhancer = applyMiddleware(generateId);

export default createStore(reducer, composeWithDevTools(enhancer));