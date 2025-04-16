import styled from "styled-components";

export const StyledColorPalette = styled.div`
    background: ${props => props.$color};
    width: 1rem;
`
export const StyledColorPaletteContainer = styled.div`
    display: flex;
    width: 5rem;
`