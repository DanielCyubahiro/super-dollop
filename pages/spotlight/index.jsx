import { useArtPiecesStore } from "@/stores/artPiecesStore";
import ListItem from "@/components/ListItem/ListItem";

const SpotlightPage = () => {
  const artPieces = useArtPiecesStore((state) => state.artPieces);

  const artToSpotlight = artPieces[Math.floor(
    Math.random() * artPieces.length)];
  return artToSpotlight && (<ListItem piece={artToSpotlight} />);
};

export default SpotlightPage;