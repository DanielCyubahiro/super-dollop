import Navigation from "@/components/Navigation/Navigation";
import Header from "@/components/Header/Header";
import { StyledMainContainer } from "@/components/Layout/Layout.styled";

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <StyledMainContainer>{children}</StyledMainContainer>
      <Navigation />
    </>
  );
};

export default Layout;