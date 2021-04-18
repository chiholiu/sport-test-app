import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import productData from './reducers';
import './index.css';
import { App } from './App';
import { Router } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import history from "./history";
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';

export const store = createStore(
	productData,
	applyMiddleware(thunk)
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router history={history}>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
