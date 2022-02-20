import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { messageReducer } from './messageReducer';

const rootReducer = combineReducers({
	messages: messageReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
