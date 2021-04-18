import React from "react";
import { Router } from "react-router-dom";
import { store } from "./Store";
import { Provider } from "react-redux";
import { App } from "./App";
import { shallow } from "enzyme";
import history from "./history";

test("Router exists", () => {
	shallow(
		<Provider store={store}>
			<Router history={history}>
				<App/>
			</Router>
		</Provider>
	);
});
