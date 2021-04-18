import React from "react";
import history from "../../../../history";
import { Router } from "react-router-dom";
import { shallow } from "enzyme";
import { Button } from "./Button";
import { Provider } from "react-redux";
import { store } from "../../../../Store";

test("Check button exists", () => {
  const button = shallow(
    <Provider store={store}>
      <Router history={history}>
        <Button />
      </Router>
    </Provider>
  );
  expect(button).toHaveLength(1);
});
