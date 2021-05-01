import { formatDistanceToNow } from "date-fns";
import { CommentPageStyles } from "./styles/CommentPageStyles";

const CommentPage = ({ comment }) => {
  const { username, body, createdAt } = comment;

  let postedAtDate = formatDistanceToNow(new Date(createdAt));

  return (
    <CommentPageStyles>
      <div className="div-user-date">
        <h3>{username}</h3>
        <span>{`${postedAtDate} ago`}</span>
      </div>
      <div className="div-separator"></div>
      <p>{body}</p>
    </CommentPageStyles>
  );
};

export default CommentPage;
