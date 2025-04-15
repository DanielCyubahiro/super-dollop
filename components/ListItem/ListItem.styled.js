import styled from "styled-components";
import Link from "next/link";

export const ListItemContainerStyled = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
`;

export const StyledImageContainer = styled.div`
    position: relative;
    padding-bottom: ${props => props.$dimensions
            ? `${(props.$dimensions.height / props.$dimensions.width) * 100}%`
            : "56.25%"};
    border: 12px solid black;
    
    /* Inner shadow effect */
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.9),
            inset -2px -2px 5px rgba(0, 0, 0, 0.9), 
            0 0 0 1px rgba(0, 0, 0, 0.1);
    z-index: -1;
    img {
        border: 1px solid black;
        object-fit: cover;
        padding: 1rem;
    }
`;

export const StyledImageLink = styled(Link)`
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
`

export const StyledText = styled.p`
    margin-top: 0.5rem;
    color: dimgrey;
    font-size: 0.8rem;
    font-style: italic;
`

export const StyledName = styled.p`
    color: dimgrey;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
`