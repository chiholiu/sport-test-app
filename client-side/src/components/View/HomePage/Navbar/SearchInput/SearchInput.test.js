import React from "react";
import history from "../../../../history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../../Store";
import { shallow } from "enzyme";
import { SearchInput } from "./SearchInput";

test("Check input exists and check if value is being passed", () => {
  const onSearchMock = jest.fn(() => true);
  const wrap = shallow(
    <Provider store={store}>
      <Router history={history}>
        <SearchInput onChange={onSearchMock} />
        <Logo />
      </Router>
    </Provider>
  );

  // wrap.find('input').simulate("change", );
  // expect(onSearchMock()).toBe(true);
  // expect(wrap.find("input")).toHaveLength(1);
});
