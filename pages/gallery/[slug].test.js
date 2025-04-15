import { render, screen } from "@testing-library/react";
import ArtPieceDetailPage from "@/pages/gallery/[slug]";
import { useRouter } from "next/router";
import { useArtPiecesStore } from "@/stores/artPiecesStore";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/stores/artPiecesStore");

test("renders details of selected art piece", () => {
  useRouter.mockReturnValue({ query: { slug: "art-1" }, back: jest.fn() });

  useArtPiecesStore.mockImplementation((selector) =>
    selector({
      artPieces: [
        {
          slug: "art-1",
          name: "Art 1",
          artist: "Artist 1",
          imageSource: "/img1.jpg",
          year: 2021,
          genre: "Abstract",
          colors: ["#fff"],
          isFavorite: true,
        },
      ],
      isLoading: false,
    })
  );

  render(<ArtPieceDetailPage />);

  expect(screen.getByAltText("Art 1")).toBeInTheDocument();
  expect(screen.getByText(/title: Art 1/i)).toBeInTheDocument();
  expect(screen.getByText(/artist: Artist 1/i)).toBeInTheDocument();
  expect(screen.getByText(/year: 2021/i)).toBeInTheDocument();
  expect(screen.getByText(/genre: Abstract/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Back/i })).toBeInTheDocument();
});