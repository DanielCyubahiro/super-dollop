import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import {
  StyledCommentTextArea,
  StyledForm,
  StyledSendButton,
} from "@/components/CommentForm/CommentForm.styled";
import { useArtPiecesStore } from "@/stores/artPiecesStore";
import { v4 as uuidv4 } from 'uuid';

const CommentForm = ({ slug }) => {
  const [commentText, setCommentText] = useState([]);
  const addComment = useArtPiecesStore(state => state.addComment);

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(slug, {
      id: uuidv4(),
      text: commentText,
      timestamp: new Date(),
    });
    setCommentText('');
  };

  return <StyledForm onSubmit={handleSubmit}>
    <StyledCommentTextArea
      value={commentText}
      onChange={(e) => setCommentText(e.target.value)}
      placeholder="Add a comment"
      rows={2}
      required={true}
    />
    <StyledSendButton type="submit"><SendHorizontal
      size={"10"} /></StyledSendButton>
  </StyledForm>;
};
export default CommentForm;