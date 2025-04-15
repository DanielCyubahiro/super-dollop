import { useArtPiecesStore } from "@/stores/artPiecesStore";

const useRandomArtPiece = () => {
  const artPieces = useArtPiecesStore((state) => state.artPieces);
  return artPieces[Math.floor(Math.random() * artPieces.length)];
};

export default useRandomArtPiece;