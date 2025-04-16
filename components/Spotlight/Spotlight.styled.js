import styled from "styled-components";

export const StyledSpotlightBackground = styled.div`
    background-image: url(${props => props.$backgroundImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`