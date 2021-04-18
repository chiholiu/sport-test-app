import React from 'react';
import history from '../../history';
import { HomePage } from './HomePage';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../../Store';

test('HomePage found', () => {
	const homePageComponent = shallow(
		<Provider store={store}>
			<Router history={history}>
				<HomePage/>
			</Router>
		</Provider>
	);

	expect(homePageComponent).toHaveLength(1);
});