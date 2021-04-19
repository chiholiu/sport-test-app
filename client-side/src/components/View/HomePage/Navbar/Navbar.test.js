import React from "react";
import history from ".../../../../history";
import { Navbar } from "./Navbar";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import { store } from ".../../../../Store";

test("Navbar found", () => {
  const navbarComponent = shallow(
    <Provider store={store}>
      <Router history={history}>
        <Navbar />
      </Router>
    </Provider>
  );

  expect(navbarComponent).toHaveLength(1);
});
