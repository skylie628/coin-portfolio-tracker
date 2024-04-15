import * as React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Stats from "@/components/ui/Stats";

describe("Stats Component", () => {
  test("renders stats components", () => {
    render(<Stats title="holding" value={120} />);
    const statsName = screen.getByText(/holding/i);
    expect(statsName).toBeInTheDocument();
  });
});
