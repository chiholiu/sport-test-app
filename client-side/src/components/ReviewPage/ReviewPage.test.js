import React from 'react';
import history from '../../history';
import { ReviewPage } from './ReviewPage';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../../Store';

test('ReviewPage found', () => {
	const reviewPageComponent = shallow(
		<Provider store={store}>
			<Router history={history}>
				<ReviewPage/>
			</Router>
		</Provider>
	);

	expect(reviewPageComponent).toHaveLength(1);
});