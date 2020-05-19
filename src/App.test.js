import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";

test("renders RefreshButton", () => {
  const { getByTestId } = render(<App />);
  const RefreshButton = getByTestId("refresh-btn");
  expect(RefreshButton).toBeInTheDocument();
});

test("column view button is disable after click", () => {
  const { getByTestId } = render(<App />);
  const columnViewButton = getByTestId("column-view-btn");
  expect(columnViewButton).toBeInTheDocument();
  expect(columnViewButton.disabled).toBe(false);
  fireEvent(
    columnViewButton,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(columnViewButton.disabled).toBe(true);
});

test("row view button is enable after column view click", () => {
  const { getByTestId } = render(<App />);
  const columnViewButton = getByTestId("column-view-btn");
  const rowViewButton = getByTestId("row-view-btn");
  expect(columnViewButton).toBeInTheDocument();
  expect(rowViewButton.disabled).toBe(true);
  fireEvent(
    columnViewButton,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(rowViewButton.disabled).toBe(false);
});
