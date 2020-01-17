import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App.js";
import Header from "./components/Header.js";

it("renders properly without crashing", () => {
  const wrapper = rtl.render(<App />);
});
