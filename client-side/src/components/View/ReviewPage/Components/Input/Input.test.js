import React from "react";
import history from "../../../../history";
import { Router } from "react-router-dom";
import { shallow } from "enzyme";
import { Input } from "./Input";
import { Provider } from "react-redux";
import { store } from "../../../../Store";

test("Check input exists", () => {
  const input = shallow(
    <Provider store={store}>
      <Router history={history}>
        <Input />
      </Router>
    </Provider>
  );
  expect(input).toHaveLength(1);
});
