import styled from "styled-components";

export const HeroStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;

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
      padding: 0;
      margin-bottom: 7rem;

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
        cursor: pointer;
      }
    }
  }

  .div-spacer {
    display: flex;
    width: 500px;
    padding: 0;
    align-items: center;
    justify-content: center;
    background: #000;
    margin-bottom: 1rem;
  }

  .div-right {
    padding-right: 10rem;
    width: 50%;
    padding-top: 5rem;
  }
`;
