import React from "react";
import styled from "styled-components";
import { Router, useRouter } from "next/router";

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

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transition: 0.3s;

      border-radius: 4px;
      padding: 0 1.5rem;
      background-color: var(--primaryColor);
      color: #fff;
    }
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      transform: translateY(-5px);
    }
  }

  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: #949494;
  }

  span {
    display: flex;
    cursor: pointer;
    background: var(--primaryColor);
    color: #fff;
    border-radius: 4px;
    margin: 0;
    padding: 0.5rem 1rem;
    width: fit-content;
    font-size: 1.2rem;
    margin: 0;
  }

  .div-author {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
    align-items: center;
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
  const router = useRouter();

  const handleRouting = (folder, id) => {
    router.push(`/${folder}/${id}`);
  };

  return (
    <Wrapper>
      <div className="div-author">
        <h3>{fable?.author}</h3>
        <span>Follow +</span>
      </div>
      <p style={{ cursor: "pointer" }}>321 Followers</p>
      <div className="div-divider-short"></div>
      <h2 onClick={() => handleRouting("fables", fable.id)}>{fable?.title}</h2>
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
