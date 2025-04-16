import useRandomArtPiece from "@/hooks/useRandomArtPiece";
import Spotlight from "@/components/Spotlight/Spotlight";

const SpotlightPage = () => {
  const artToSpotlight = useRandomArtPiece();

  return artToSpotlight && (
    <Spotlight
      backgroundImage={artToSpotlight.imageSource}
      artistName={artToSpotlight.artist}
    />
  )
    ;
};

export default SpotlightPage;

