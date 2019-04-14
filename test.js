import "jest-dom/extend-expect";

import { render } from "react-testing-library";
import React from "react";

import App from "./";

describe("App", () => {
  it("have attribute", () => {
    const { container, getByText } = render(<App />);
    expect(getByText("Link 1")).toHaveAttribute(
      "href",
      expect.stringContaining("abc"),
    );
    expect(getByText("Link")).toHaveAttribute(
      "href",
      expect.stringMatching(/type=ab/),
    );
    expect(getByText("Link 2")).toHaveAttribute("href", expect.anything());
  });
});
