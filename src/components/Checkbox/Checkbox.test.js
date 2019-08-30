import React from "react";
import Checkbox from "./Checkbox";
import { render, fireEvent, within } from "@testing-library/react";

describe("Generic Slick component", () => {
  it("should return a input type checkbox ", async () => {
    const onClick = jest.fn();
    const { getByLabelText, getByText } = render(
      <Checkbox
        onClick={onClick}
        text="Bond Implied"
        value="bond"
        name="bond"
      />
    );
    console.log(getByLabelText);
    console.log(getByText);
    fireEvent.click(getByText(/bondw/i));
    // expect(onClick).toHaveBeenCalled();
  });
});
