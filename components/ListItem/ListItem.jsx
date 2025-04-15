import {
  ListItemContainerStyled,
  StyledImageContainer,
} from "@/components/ListItem/ListItem.styled";
import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import { StyledLink } from "@/components/Layout/Layout.styled";

const ListItem = ({ piece }) => {
  return (
    <ListItemContainerStyled>
      <FavoriteButton slug={piece.slug}>
        {piece.isFavorite ? "Unlike" : "Like"}
      </FavoriteButton>
      <StyledLink key={piece.slug} href={`/gallery/${piece.slug}`}>

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
      </StyledLink>
    </ListItemContainerStyled>
  );
};
export default ListItem;