import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 2px solid var(--primaryColor);
  border-radius: 3px;
  border-top: 30px solid var(--primaryColor);
  padding: 1rem;
  margin: 1rem;
  width: 27%;

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

const Fable = ({ fable }) => {
  return (
    <Wrapper>
      <p>{fable?.author}</p>
      <h3>{fable?.title}</h3>
      <h3>{fable?.body}</h3>
      <h3>{fable.likeCount}</h3>
      <h3>{fable.commentCount}</h3>
    </Wrapper>
  );
};

export default Fable;
