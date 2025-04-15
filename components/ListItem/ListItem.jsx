import {
  ListItemContainerStyled,
  StyledImageContainer,
} from "@/components/ListItem/ListItem.styled";
import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import { StyledLink } from "@/components/Layout/Layout.styled";

const ListItem = ({ piece, forSpotlight = false }) => {
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
        {!forSpotlight && <p>title: {piece.name}</p>}
        <p>artist: {piece.artist}</p>
        {!forSpotlight && <p>year: {piece.year}</p>}
        {!forSpotlight && <p>genre: {piece.genre}</p>}
        {!forSpotlight && <p>colors: {piece.colors}</p>}
      </StyledLink>
    </ListItemContainerStyled>
  );
};
export default ListItem;