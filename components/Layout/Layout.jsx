import Navigation from "@/components/Navigation/Navigation";
import {
  StyledMainContainer,
} from "@/components/Layout/Layout.styled";

const Layout = ({ children }) => {
  return (
    <>
      <StyledMainContainer>{children}</StyledMainContainer>
      <Navigation />
    </>
  );
};

export default Layout;