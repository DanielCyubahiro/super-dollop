import {
  StyledSpotlightBackground,
} from "@/components/Spotlight/Spotlight.styled";

const Spotlight = ({ backgroundImage, artistName }) => {
  return (
    <StyledSpotlightBackground
      data-testid="spotlight-bg"
      $backgroundImage={backgroundImage}
      data-before-text={ 'Artist: ' + artistName}
    />
  );
};
export default Spotlight;