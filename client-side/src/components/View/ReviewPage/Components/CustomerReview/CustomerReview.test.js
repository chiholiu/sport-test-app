import React from "react";
import history from "../../../../history";
import { Router } from "react-router-dom";
import { shallow } from "enzyme";
import { CustomerReview } from "./CustomerReview";
import { Provider } from "react-redux";
import { store } from "../../../../Store";

test("Check if component CustomerReview exists", () => {
  const customerReview = shallow(
    <Provider store={store}>
      <Router history={history}>
        <CustomerReview />
      </Router>
    </Provider>
  );
  expect(customerReview).toHaveLength(1);
});
