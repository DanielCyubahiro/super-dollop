import { render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation/Navigation";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

test("renders Spotlight, Gallery, and Favorites links", () => {
  render(<Navigation />, { wrapper: MemoryRouterProvider });

  expect(screen.getByRole("link", { name: /Spotlight/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Gallery/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Favorites/i })).toBeInTheDocument();
});