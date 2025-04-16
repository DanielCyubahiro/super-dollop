import { render, screen, fireEvent } from "@testing-library/react";
import FavoriteButton from "@/components/Buttons/FavoriteButton/FavoriteButton";
import { useArtPiecesStore } from "@/stores/artPiecesStore";

jest.mock("@/stores/artPiecesStore");

test("toggles favorite state on click", () => {
  const toggleFavorite = jest.fn();
  useArtPiecesStore.mockReturnValue(toggleFavorite);

  render(<FavoriteButton slug="art-1">Like</FavoriteButton>);

  const button = screen.getByRole("button", { name: /Like/i });
  fireEvent.click(button);
  expect(toggleFavorite).toHaveBeenCalledWith("art-1");
});