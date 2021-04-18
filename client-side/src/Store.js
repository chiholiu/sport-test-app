import { createStore, applyMiddleware } from 'redux';
import productData from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(
	productData,
	applyMiddleware(thunk)
);