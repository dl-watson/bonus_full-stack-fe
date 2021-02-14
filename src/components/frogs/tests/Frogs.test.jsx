import React from "react";
import { render, cleanup } from "@testing-library/react";
import Frogs from "../Frogs";

describe("Frogs component", () => {
  afterEach(() => cleanup());
  it("renders Frogs", () => {
    const { asFragment } = render(
      <Frogs name={""} image={""} description={""} handleSubmit={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
