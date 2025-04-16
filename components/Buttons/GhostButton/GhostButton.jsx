import {
  StyledGhostButton
} from "@/components/Buttons/GhostButton/GhostButton.styled";

const GhostButton = ({children, onClick}) => {
  return <StyledGhostButton onClick={onClick}>
    {children}
  </StyledGhostButton>;
};
export default GhostButton;