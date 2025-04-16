import {
  StyledGhostButton
} from "@/components/Buttons/GhostButton/GhostButton.styled";

const GhostButton = ({children}) => {
  return <StyledGhostButton>
    {children}
  </StyledGhostButton>;
};
export default GhostButton;