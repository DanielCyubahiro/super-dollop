import ListItem from "@/components/ListItem/ListItem";
import useRandomArtPiece from "@/hooks/useRandomArtPiece";

const SpotlightPage = () => {
  const artToSpotlight = useRandomArtPiece();
  return artToSpotlight && (<ListItem piece={artToSpotlight} forSpotlight/>);
};

export default SpotlightPage;

