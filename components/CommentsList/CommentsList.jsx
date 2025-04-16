import {
  StyledCommentsDateTime,
  StyledCommentsList,
  StyledCommentsText,
} from "@/components/CommentsList/CommentsList.styled";
import { formatRelativeTime } from "@/utils/utils";
import { useArtPiecesStore } from "@/stores/artPiecesStore";

const CommentsList = ({ slug }) => {
  const comments = useArtPiecesStore(state => state.artPieces).
    find((item) => item.slug === slug).comments;

  console.log(comments);
  return comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).
    map((comment) =>
      <StyledCommentsList key={comment.id}>
        <StyledCommentsText>{comment.text}</StyledCommentsText>
        <StyledCommentsDateTime>{formatRelativeTime(
          new Date(comment.timestamp))}</StyledCommentsDateTime>
      </StyledCommentsList>,
    );
};

export default CommentsList;