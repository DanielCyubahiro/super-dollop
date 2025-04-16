import styled from "styled-components";

export const StyledFavoriteButton = styled.button`
    background: ${props => props.$transparent ? "transparent" : "#1b1b1b"};
    border: ${props => props.$transparent ? "none" : "1px solid black"};
    color: white;
    padding: 0.8rem;
    border-radius: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`