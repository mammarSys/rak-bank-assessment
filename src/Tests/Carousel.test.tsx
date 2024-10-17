import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import Carousel from "../Carousel";
import store from "../store";

const renderWithProvider = (component: React.ReactNode) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("Carousel Component", () => {
  test("renders Carousel component", () => {
    renderWithProvider(<Carousel />);
    expect(
      screen.getByText(/Hi, How was your week overall\?/i)
    ).toBeInTheDocument();
  });

  test("renders options for the first slide", () => {
    renderWithProvider(<Carousel />);
    expect(screen.getByText(/Good/i)).toBeInTheDocument();
    expect(screen.getByText(/Best/i)).toBeInTheDocument();
    expect(screen.getByText(/Exhauted/i)).toBeInTheDocument();
  });

  test("changes slide on option click", () => {
    renderWithProvider(<Carousel />);
    fireEvent.click(screen.getByText(/Good/i));
    expect(
      screen.getByText(/what is your favourite Color\?/i)
    ).toBeInTheDocument();
  });
});
