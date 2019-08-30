import React from "react";
import { render, fireEvent, within } from "react-testing-library";
import Radio from "./Radio";
import assert from "assert";

describe.skip("Generic DataStatus component", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("should return a function", () => {
    const StatelessRadio = Radio(React);
    const actual = typeof StatelessRadio;
    const expected = "function";

    assert.equal(
      actual,
      expected,
      "statelessRadio factory returns stateless component constructor"
    );
  });
});
