import useRandomArtPiece from "@/hooks/useRandomArtPiece";
import Spotlight from "@/components/Spotlight/Spotlight";
import FavoriteButton from "@/components/Buttons/FavoriteButton/FavoriteButton";
import { Heart } from "lucide-react";
import {
  StyledSpotlightFavButtonContainer,
} from "@/components/Spotlight/Spotlight.styled";

const SpotlightPage = () => {
  const artToSpotlight = useRandomArtPiece();

  return artToSpotlight && (
    <>
      <Spotlight
        backgroundImage={artToSpotlight.imageSource}
        artistName={artToSpotlight.artist}
      />
      <StyledSpotlightFavButtonContainer>
        <FavoriteButton
          data-testid="spotlight-favorite-button"
          slug={artToSpotlight.slug}
          transparent
        >
          {artToSpotlight.isFavorite ? (
            <Heart size={"18"} fill={"white"} />
          ) : (
            <Heart size={"18"} />
          )}
        </FavoriteButton>
      </StyledSpotlightFavButtonContainer>
    </>
  )
    ;
};

export default SpotlightPage;

