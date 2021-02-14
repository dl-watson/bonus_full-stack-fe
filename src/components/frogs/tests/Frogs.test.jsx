import React from "react";
import { render, cleanup } from "@testing-library/react";
import Frogs from "../Frogs";

describe("Frogs component", () => {
  afterEach(() => cleanup());
  it("renders Frogs", () => {
    const { asFragment } = render(<Frogs />);
    expect(asFragment()).toMatchSnapshot();
  });
});
