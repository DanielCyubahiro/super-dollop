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

    &::before {
        content: attr(data-before-text);
        font-size: 1rem;
        font-style: italic;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
`

export const StyledSpotlightFavButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: 18rem
`
