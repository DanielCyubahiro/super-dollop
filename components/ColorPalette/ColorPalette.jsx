import {
  StyledColorPalette,
  StyledColorPaletteContainer,
} from "@/components/ColorPalette/ColorPalette.styled";

const ColorPalette = ({ colors }) => {
  return <StyledColorPaletteContainer>
    {colors.map((color, index) => <StyledColorPalette $color={color} key={index} data-testid={`color-swatch-${color}`}/>)}
  </StyledColorPaletteContainer>;
};
export default ColorPalette;