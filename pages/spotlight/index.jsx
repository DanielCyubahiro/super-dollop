import { useArtPiecesStore } from "@/stores/artPiecesStore";
import { useEffect } from "react";
import ListItem from "@/components/ListItem/ListItem";

const SpotlightPage = () => {
  const artPieces = useArtPiecesStore((state) => state.artPieces);
  const fetchArtPieces = useArtPiecesStore((state) => state.fetchArtPieces);

  useEffect(() => {
    if (!artPieces.length) {
      void fetchArtPieces();
    }
  }, [fetchArtPieces]);
  const artToSpotlight = artPieces[Math.floor(
    Math.random() * artPieces.length)];
  return artToSpotlight && (<ListItem piece={artToSpotlight} />);
};

export default SpotlightPage;