import { render, screen } from "@testing-library/react";
import SpotlightPage from "@/pages/index";
import * as hook from "@/hooks/useRandomArtPiece";

jest.mock("@/hooks/useRandomArtPiece");

test("renders spotlighted art piece with image and artist", () => {
  hook.default.mockReturnValue({
    slug: "spotlight-piece",
    name: "Spotlight Piece",
    imageSource: "/image.jpg",
    artist: "Artist A",
    isFavorite: false,
  });

  render(<SpotlightPage />);

  expect(screen.getByAltText("Spotlight Piece")).toBeInTheDocument();
  expect(screen.getByText(/artist: Artist A/i)).toBeInTheDocument();
});