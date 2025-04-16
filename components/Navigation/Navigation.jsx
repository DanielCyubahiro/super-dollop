import {
  StyledLink,
  StyledNavigationBar,
} from "@/components/Layout/Layout.styled";

const Navigation = () => {
  return (
    <StyledNavigationBar>
      <StyledLink href="/spotlight">Spotlight</StyledLink>
      <StyledLink href="/">Gallery</StyledLink>
      <StyledLink href="/favorites">Favorites</StyledLink>
    </StyledNavigationBar>
  );
};

export default Navigation;