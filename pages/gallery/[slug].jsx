import { useRouter } from "next/router";
import { useArtPiecesStore } from "@/stores/artPiecesStore";
import ListItem from "@/components/ListItem/ListItem";
import { ChevronLeft } from 'lucide-react';
import GhostButton from "@/components/Buttons/GhostButton/GhostButton";

const ArtPieceDetailPage = () => {

  const router = useRouter();
  const { slug } = router.query;

  const artPieces = useArtPiecesStore(state => state.artPieces);
  const isLoading = useArtPiecesStore(state => state.isLoading);

  const selectedArtPiece = artPieces.find((item) => item.slug === slug);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!selectedArtPiece) {
    return <div>Art piece not found</div>;
  }
  return <>
    <GhostButton onClick={() => router.back()}>
      <ChevronLeft size={30} color="#000000" strokeWidth={3} /> Back
    </GhostButton>
    <ListItem piece={selectedArtPiece} />
  </>;
};

export default ArtPieceDetailPage;