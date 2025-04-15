import styled from "styled-components";
import Link from "next/link";

export const StyledMainContainer = styled.main`
  padding: 1rem;
`

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

export const StyledNavigationItem = styled(Link)`
    text-decoration: none;
    color: black;
`