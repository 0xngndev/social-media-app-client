import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const HeroStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  padding-left: 2rem;
  width: 100%;

  .div-left {
    display: flex;
    flex-direction: column;
    width: 55%;
    padding-left: 8rem;

    h1 {
      font-size: 7rem;
      padding: 0;
      margin: 0;
      line-height: 1.5;
    }
    p {
      font-size: 2rem;
      color: #949494;
      width: 90%;
      padding-left: 0.5rem;
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
    div {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      width: 88%;

      button {
        height: 25px;
        font-size: 1.5rem;
        padding: 1rem;
        outline: none;
        border: none;
        border-radius: 4px;
        background: var(--primaryColor);
        color: #fff;
        width: 120px;
        margin-top: 5.2rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }

  .div-spacer {
    display: flex;
    width: 500px;
    height: 10px;
    align-items: center;
    justify-content: center;
    background: var(--primaryColor);
    margin-top: 5rem;
    margin-bottom: 2rem;
  }

  .div-right {
    padding-right: 10rem;
    width: 50%;
    padding-top: 5rem;
  }
`;

const Hero = () => {
  return (
    <HeroStyles>
      <div className="div-left">
        <div className="div-spacer"></div>
        <h1>WELCOME TO</h1>
        <div className="div-logo">
          <span>
            500<span>Fables</span>
          </span>
        </div>
        <p>
          Share your stories in 500 words or less. Discover talented authors.
          Read enchanting tales. Dive deep into the world of short fiction.
        </p>
        <p style={{ margin: "0", lineHeight: "0.5" }}>
          What are you waiting for?
        </p>
        <div>
          <button>LOGIN</button>
          <button>SIGN UP</button>
        </div>
      </div>
      <div className="div-right">
        <Image src="/assets/dude.png" width={500} height={400} />
        <div className="div-spacer"></div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
