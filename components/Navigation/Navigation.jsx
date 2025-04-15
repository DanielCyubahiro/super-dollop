import {
  StyledLink,
  StyledNavigationBar,
} from "@/components/Layout/Layout.styled";

const Navigation = () => {
  return (
    <StyledNavigationBar>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/gallery">Gallery</StyledLink>
      <StyledLink href="/favorites">Favorites</StyledLink>
    </StyledNavigationBar>
  );
};

export default Navigation;