import {
  StyledNavigationBar,
  StyledNavigationItem,
} from "@/components/Layout/Layout.styled";

const Navigation = () => {
  return (
    <StyledNavigationBar>
      <StyledNavigationItem href="/">Spotlight</StyledNavigationItem>
      <StyledNavigationItem href="/gallery">Gallery</StyledNavigationItem>
      <StyledNavigationItem href="/favorites">Favorites</StyledNavigationItem>
    </StyledNavigationBar>
  );
};

export default Navigation;