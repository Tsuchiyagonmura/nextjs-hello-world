import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Home from "./page";

it("トップページに Hello, World! の見出しが表示される", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Hello, World!",
  );
});
