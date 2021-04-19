import React from "react";
import history from "./history";
import { Router } from "react-router-dom";
import { store } from "./Store";
import { Provider } from "react-redux";
import { App } from "./App";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

test("App not crashing", () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  const element = screen.getAllByTestId("app-component");
  expect(element).toHaveLength(1);
});
