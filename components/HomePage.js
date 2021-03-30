import React from "react";
import styled from "styled-components";

const HomePageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 7rem;
    padding: 0;
    margin: 0;
    line-height: 1.5;
  }
  p {
    font-size: 2rem;
    color: #949494;
  }

  .div-logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    span {
      display: flex;
      padding: 0;
      margin: 0;
      font-weight: bold;
      font-size: 7rem;
      color: var(--primaryColor);
      line-height: 1;

      span {
        color: black;
        padding: 0;
        margin: 0;
      }
    }
  }

  .div-spacer {
    display: flex;
    width: 500px;
    height: 20px;
    align-items: center;
    justify-content: center;
    background: var(--primaryColor);
    margin-top: 5rem;
    margin-bottom: 2rem;
  }
`;

const HomePage = () => {
  return (
    <HomePageStyles>
      <div className="div-spacer"></div>
      <h1>WELCOME TO</h1>
      <div className="div-logo">
        <span>
          500<span>Fables</span>
        </span>
      </div>
      <p>
        Share your stories in 500 words. Discover talented authors. Read
        wonderful tales.
      </p>
      <div className="div-spacer" style={{ marginTop: "2rem" }}></div>
    </HomePageStyles>
  );
};

export default HomePage;
