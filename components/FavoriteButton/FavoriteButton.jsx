import { useArtPiecesStore } from "@/stores/artPiecesStore";

const FavoriteButton = ({slug, children}) => {
  const toggleFavorite = useArtPiecesStore(state => state.toggleFavorite);
  return <button onClick={() => toggleFavorite(slug)}>{children}</button>
}

export default FavoriteButton;