import { useArtPiecesStore } from "@/stores/artPiecesStore";
import {
  StyledFavoriteButton,
} from "@/components/Buttons/FavoriteButton/FavoriteButton.styled";

const FavoriteButton = ({ slug, transparent, children }) => {
  const toggleFavorite = useArtPiecesStore(state => state.toggleFavorite);
  return <StyledFavoriteButton $transparent={transparent} onClick={() => toggleFavorite(slug)}>{children}</StyledFavoriteButton>;
};

export default FavoriteButton;