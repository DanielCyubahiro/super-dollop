import { render, screen } from "@testing-library/react";
import List from "@/components/List/List";
import { useArtPiecesStore } from "@/stores/artPiecesStore";

// Mock Zustand store
jest.mock("@/stores/artPiecesStore", () => ({
  useArtPiecesStore: jest.fn(),
}));


test("displays art pieces with image, title, artist", () => {
  useArtPiecesStore.mockImplementation((selector) =>
    selector({
      artPieces: [
        {
          slug: "art-1",
          name: "Art 1",
          artist: "Artist 1",
          imageSource: "/img1.jpg",
          isFavorite: false,
        },
      ],
      isLoading: false,
      error: null,
    })
  );

  render(<List />);

  expect(screen.getByAltText("Art 1")).toBeInTheDocument();
  expect(screen.getByText(/title: Art 1/i)).toBeInTheDocument();
  expect(screen.getByText(/artist: Artist 1/i)).toBeInTheDocument();
});