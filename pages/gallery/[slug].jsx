import { useRouter } from "next/router";
import { useArtPiecesStore } from "@/stores/artPiecesStore";
import ListItem from "@/components/ListItem/ListItem";

const ArtPieceDetailPage = () => {

  const router = useRouter();
  const { slug } = router.query;

  const artPieces = useArtPiecesStore(state => state.artPieces);
  const isLoading = useArtPiecesStore(state => state.isLoading);

  const selectedArtPiece = artPieces.find((item) => item.slug === slug);

  if (!isLoading) {
    console.log(selectedArtPiece);
  }
  return <>
    <button onClick={() => router.back()}>
      Back
    </button>
    <ListItem piece={selectedArtPiece} />
  </>;
};

export default ArtPieceDetailPage;