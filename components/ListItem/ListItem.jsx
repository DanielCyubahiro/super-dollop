import {
  ListItemContainerStyled,
  StyledImageContainer,
} from "@/components/ListItem/ListItem.styled";
import Image from "next/image";

const ListItem = ({ piece }) => {
  return (
    <ListItemContainerStyled>
      <StyledImageContainer>
        <Image
          src={piece.imageSource}
          fill
          alt={piece.name}
          priority
        />
      </StyledImageContainer>
      <p>title: {piece.name}</p>
      <p>artist: {piece.artist}</p>
      <p>year: {piece.year}</p>
      <p>genre: {piece.genre}</p>
      <p>colors: {piece.colors}</p>
    </ListItemContainerStyled>
  );
};
export default ListItem;