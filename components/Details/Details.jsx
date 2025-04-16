import Image from "next/image";
import {
  StyledImageContainer,
  StyledText,
} from "@/components/ListItem/ListItem.styled";
import {
  StyledDetailsContainer,
  StyledDetailsData,
  StyledDetailsTable,
} from "@/components/Details/Details.styled";
import { Heart } from "lucide-react";
import FavoriteButton from "@/components/Buttons/FavoriteButton/FavoriteButton";
import ColorPalette from "@/components/ColorPalette/ColorPalette";
import CommentsList from "@/components/CommentsList/CommentsList";
import CommentForm from "@/components/CommentForm/CommentForm";

const Details = ({ piece }) => {
  return (
    <StyledDetailsContainer>
      <StyledImageContainer $dimensions={piece.dimensions}>
        <Image
          src={piece.imageSource}
          fill
          alt={piece.name}
          priority
        />
      </StyledImageContainer>
      <StyledText>{piece.name}</StyledText>
      <StyledDetailsTable>
        <StyledDetailsData>
          <strong>Artist:</strong>
          {piece.artist}
        </StyledDetailsData>
        <StyledDetailsData>
          <strong>Genre:</strong>
          {piece.genre}
        </StyledDetailsData>
        <StyledDetailsData>
          <strong>Year:</strong>
          {piece.year}
        </StyledDetailsData>
        <StyledDetailsData>
          <strong>Color Palette:</strong>
          <ColorPalette colors={piece.colors} />
        </StyledDetailsData>
      </StyledDetailsTable>
      <FavoriteButton slug={piece.slug}>
        {piece.isFavorite ? <><Heart size={'18'} fill={'white'}/>Remove from Favorites</> : <><Heart size={'18'} />Add to Favorites</> }
      </FavoriteButton>
      <br/>
      <hr/>
      <br/>
      Comments
      <CommentForm slug={piece.slug}/>
      <CommentsList slug={piece.slug}/>
    </StyledDetailsContainer>
  );
};
export default Details;