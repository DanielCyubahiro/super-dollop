import { useArtPiecesStore } from "@/stores/artPiecesStore";
import { ListStyled, StyledMessage } from "@/components/List/List.styled";
import ListItem from "@/components/ListItem/ListItem";

const List = () => {
  const { artPieces, isLoading, error } = useArtPiecesStore(
    state => state);

  return isLoading
    ? <StyledMessage>Loading...</StyledMessage>
    : error
      ? <StyledMessage>{error}</StyledMessage>
      : <ListStyled>
        {artPieces.map(item => <ListItem key={item.slug} piece={item} />)}
      </ListStyled>;
};

export default List;