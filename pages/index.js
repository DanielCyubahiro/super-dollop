import ListItem from "@/components/ListItem/ListItem";
import useRandomArtPiece from "@/hooks/useRandomArtPieace";

const SpotlightPage = () => {
  const artToSpotlight = useRandomArtPiece();
  return artToSpotlight && (<ListItem piece={artToSpotlight} />);
};

export default SpotlightPage;