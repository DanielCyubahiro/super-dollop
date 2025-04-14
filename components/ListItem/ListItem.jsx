import { ListItemContainerStyled } from "@/components/ListItem/ListItem.styled";
import Image from "next/image";
const ListItem = ({piece}) => {
  return (
    <ListItemContainerStyled>
      <Image src={piece.imageSource} width={800} height={500} ty />
      <p>Name: {piece.name}</p>
      <p>artist: {piece.artist}</p>
      <p>year: {piece.year}</p>
      <p>genre: {piece.genre}</p>
      <p>colors: {piece.colors}</p>
    </ListItemContainerStyled>
  )
}
export default ListItem;