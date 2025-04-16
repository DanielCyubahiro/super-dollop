import { useArtPiecesStore } from "@/stores/artPiecesStore";
import {
  StyledFavoriteButton,
} from "@/components/Buttons/FavoriteButton/FavoriteButton.styled";

const FavoriteButton = ({ slug, children }) => {
  const toggleFavorite = useArtPiecesStore(state => state.toggleFavorite);
  return <StyledFavoriteButton onClick={() => toggleFavorite(slug)}>{children}</StyledFavoriteButton>;
};

export default FavoriteButton;