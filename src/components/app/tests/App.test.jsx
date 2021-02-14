/* eslint-disable max-len */
import React from "react";
import {
  getDefaultNormalizer,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App component", () => {
  it("renders App", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("mocks a user filling out inputs, submitting the form and updating the view", () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Name:");
    userEvent.type(nameInput, "Desert rain frog");

    const imageInput = screen.getByLabelText("Image:");
    userEvent.type(imageInput, "https://bit.ly/3jSq7r9");

    const descInput = screen.getByLabelText("Description:");
    userEvent.type(
      descInput,
      "A species of frog in the family Brevicipitidae."
    );

    const submitButton = screen.getByText("Submit");
    userEvent.click(submitButton);

    return waitFor(() => {
      expect(screen.getByText("name"));
      expect(screen.getByText("image"));
      expect(screen.getByText("description"));
    });
  });
});
