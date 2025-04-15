import {
  ListItemContainerStyled,
  StyledImageContainer,
  StyledImageLink, StyledName, StyledText,
} from "@/components/ListItem/ListItem.styled";
import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

const ListItem = ({ piece }) => {
  return (
    <ListItemContainerStyled>
      <StyledImageLink key={piece.slug} href={`/gallery/${piece.slug}`}>
        <StyledImageContainer $dimensions={piece.dimensions}>
          <Image
            src={piece.imageSource}
            fill
            alt={piece.name}
            priority
          />
        </StyledImageContainer>
        <StyledText>{piece.name}</StyledText>
        <StyledName>{piece.artist}</StyledName>
      </StyledImageLink>
      <FavoriteButton slug={piece.slug}>
        {piece.isFavorite ? "Unlike" : "Like"}
      </FavoriteButton>
    </ListItemContainerStyled>
  );
};
export default ListItem;