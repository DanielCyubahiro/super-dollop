import { useArtPiecesStore } from "@/stores/artPiecesStore";
import { StyledList, StyledMessage } from "@/components/List/List.styled";
import ListItem from "@/components/ListItem/ListItem";
import Link from "next/link";
import { StyledLink } from "@/components/Layout/Layout.styled";

const List = () => {
  const { artPieces, isLoading, error } = useArtPiecesStore(
    state => state);

  return isLoading
    ? <StyledMessage>Loading...</StyledMessage>
    : error
      ? <StyledMessage>{error}</StyledMessage>
      : <StyledList>
        {artPieces.map(item =>
          <StyledLink key={item.slug} href={`/gallery/${item.slug}`}>
            <ListItem piece={item} />
          </StyledLink>,
        )}
      </StyledList>;
};

export default List;