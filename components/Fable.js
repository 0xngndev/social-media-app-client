import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 3px solid var(--primaryColor);
  border-radius: 3px;
  border-top: 50px solid var(--primaryColor);
  padding: 2rem;

  margin-bottom: 4rem;
  width: 25%;

  box-shadow: var(--bs);
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    transform: translateY(-10px);
    border: 3px solid var(--lowOpBlue);
    border-top: 50px solid var(--lowOpBlue);
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    font-weight: 500;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: #949494;
  }

  .div-author {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
  }

  .div-divider-small {
    height: 1px;
    background-color: #b4b4b4;
    opacity: 50%;
    width: 100%;
    margin: 1rem 0;
  }

  .div-divider-short {
    height: 1px;
    background-color: #b4b4b4;
    opacity: 30%;
    width: 30%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .div-likes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

const Fable = ({ fable }) => {
  return (
    <Wrapper>
      <div className="div-author">
        <h3>{fable?.author}</h3>
        <p>Follow +</p>
      </div>
      <p>321 Followers</p>
      <div className="div-divider-short"></div>
      <h2>{fable?.title}</h2>
      <div className="div-divider-small"></div>
      <p>{fable?.body}</p>
      <div className="div-likes">
        <h3>{fable?.likeCount + " Likes"}</h3>
        <h3>{fable?.commentCount + " Comments"}</h3>
      </div>
    </Wrapper>
  );
};

export default Fable;
