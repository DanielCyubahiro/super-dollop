import {
  StyledColorPalette,
  StyledColorPaletteContainer,
} from "@/components/ColorPalette/ColorPalette.styled";

const ColorPalette = ({ colors }) => {
  return <StyledColorPaletteContainer>
    {colors.map(color => <StyledColorPalette $color={color} key={color}/>)}
  </StyledColorPaletteContainer>;
};
export default ColorPalette;