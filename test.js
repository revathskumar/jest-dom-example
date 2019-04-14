import "jest-dom/extend-expect";

import { render } from "react-testing-library";
import React from "react";

import App from "./";

describe("App", () => {
  it("have attribute", () => {
    const { container, getByText } = render(<App />);
    expect(getByText("Link")).toHaveAttribute("href", "");
  });
});
