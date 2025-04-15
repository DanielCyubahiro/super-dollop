import { useRouter } from "next/router";
import { useArtPiecesStore } from "@/stores/artPiecesStore";
import ListItem from "@/components/ListItem/ListItem";
import Link from "next/link";

const ArtPieceDetailPage = () => {

  const router = useRouter();
  const { slug } = router.query;

  const artPieces = useArtPiecesStore(state => state.artPieces);
  const selectedArtPiece = artPieces.find((item) => item.slug === slug);

  return <>
    <button onClick={() => router.back()}>
      Back
    </button>
    <ListItem piece={selectedArtPiece} />
  </>;
};

export default ArtPieceDetailPage;