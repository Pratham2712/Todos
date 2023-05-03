import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { todosReducers } from './reducer/todosReducers';

const rootReducer = combineReducers({
	todos:todosReducers
});

const composeEnchaner = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnchaner(applyMiddleware(thunk)))

export default store   