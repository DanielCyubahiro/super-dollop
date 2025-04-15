import { useArtPiecesStore } from "@/stores/artPiecesStore";
import { StyledList, StyledMessage } from "@/components/List/List.styled";
import ListItem from "@/components/ListItem/ListItem";

const List = ({ onlyFavorites = false }) => {
  const artPieces = useArtPiecesStore(state => state.artPieces);
  const isLoading = useArtPiecesStore(state => state.isLoading);
  const error = useArtPiecesStore(state => state.error);

  const piecesToDisplay = onlyFavorites ? artPieces.filter(
    piece => piece.isFavorite) : artPieces;

  return isLoading
    ? <StyledMessage>Loading...</StyledMessage>
    : error
      ? <StyledMessage>{error}</StyledMessage>
      : <StyledList>
        {piecesToDisplay.map(piece => <ListItem key={piece.slug} piece={piece} />)}
      </StyledList>;
};

export default List;