import styled from "styled-components";
import Link from "next/link";

export const StyledNavigationBar = styled.nav`
    display: flex;
    justify-content: space-around;
    border-top: 1px black solid;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background: white;
    height: 3rem;
    align-items: center;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

export const StyledMainContainer = styled.main`
    flex: 1;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
`