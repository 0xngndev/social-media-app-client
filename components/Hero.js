import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const HeroStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-left: 2rem;
  width: 100%;

  img {
    position: absolute;
    z-index: -1;
    top: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 7rem;
      padding: 0;
      margin: 0;
      line-height: 1.5;
    }

    span {
      padding-top: 2rem;
      font-size: 2rem;
      color: #949494;
      width: 55%;
      text-align: center;
    }

    p {
      display: flex;
      padding: 0;
      margin: 0;
      font-weight: bold;
      font-size: 8rem;
      color: var(--primaryColor);
      line-height: 1;

      p {
        color: black;
        padding: 0;
        margin: 0;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-around;
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

    align-items: center;
    justify-content: center;
    background: var(--primaryColor);
    margin-top: 10rem;
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
      <Image src="/assets/wave.svg" alt="wave" layout="fill" />
      <div>
        <div className="div-spacer"></div>
        <h1>WELCOME TO</h1>

        <p>
          500<p>Fables</p>
        </p>

        <span>
          Share your stories in 500 words or less. Discover talented authors.
          Read enchanting tales. Dive deep into the world of short fiction.
        </span>

        <div>
          <button>START HERE</button>
        </div>
        <div
          className="div-spacer"
          style={{ height: "5px", width: "50px" }}
        ></div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
