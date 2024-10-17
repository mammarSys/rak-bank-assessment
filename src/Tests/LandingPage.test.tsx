import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { LandingPage } from "../LandingPage";
import store from "../store";

const renderWithProvider = (component: React.ReactNode) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("LandingPage Component", () => {
  test("renders LandingPage component", () => {
    renderWithProvider(<LandingPage />);
    expect(
      screen.getByText(/Welcome to Vertical Carousel/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter Your Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  test("handles input change", () => {
    renderWithProvider(<LandingPage />);
    const inputElement = screen.getByLabelText(
      /Enter Your Name/i
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "John Doe" } });
    expect(inputElement.value).toBe("John Doe");
  });
});
