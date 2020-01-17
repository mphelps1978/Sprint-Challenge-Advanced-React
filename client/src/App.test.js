import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "./App";

afterEach(rtl.cleanup);

it("renders properly without crashing", () => {
  const wrapper = rtl.render(<App />);
});

it("Shows the correct information", () => {
  const wrapper = rtl.render(<App />);
  const text = wrapper.queryByText(
    /Womens World Cup Google Searches from June - July 2019/i,
  );
  expect(text).toBeVisible();
});
