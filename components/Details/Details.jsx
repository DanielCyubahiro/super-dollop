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
      </StyledDetailsTable>
    </StyledDetailsContainer>
  );
};
export default Details;