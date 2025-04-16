import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 85% 15%;
    gap: 0.5rem;
    margin-top: 1rem;
    place-items: center;
`
export const StyledCommentTextArea = styled.textarea`
    width: 100%;
    padding: 0.5rem;
`

export const StyledSendButton = styled.button`
    background: black;
    border: none;
    color: lightgray;
    width: 2.2rem;       
    height: 2.2rem;      
    border-radius: 0.8rem;
    padding: 0;        
`