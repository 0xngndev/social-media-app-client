import React from "react";
import styled from "styled-components";

export const CommentPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 3px solid var(--primaryColor);
  width: 80%;
  border-radius: 4px;
  padding: 1rem;
  border-left: 30px solid var(--primaryColor);
  margin-bottom: 2rem;

  h3 {
    display: flex;
    width: 100%;
    align-self: flex-start;
    margin: 0;
    padding-left: 1rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    align-self: flex-start;
    line-height: 1;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
  }
`;

const CommentPage = ({ comment }) => {
  const { id, username, body } = comment;

  return (
    <CommentPageStyles>
      <h3>{comment.username}</h3>
      <p>{comment.body}</p>
    </CommentPageStyles>
  );
};

export default CommentPage;
