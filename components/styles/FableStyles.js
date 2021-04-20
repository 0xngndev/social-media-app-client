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

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    font-weight: 500;
    cursor: pointer;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s;

    &:visited {
      text-decoration: #e7e7e7;
      color: #e7e7e7;
    }

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

    white-space: normal;
  }

  .div-followers-menu {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    .button-popup {
      padding: 0;
      border: 0;
      background: transparent;
      color: #000;
      svg {
        cursor: pointer;
        padding-left: 1rem;
      }
    }
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
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      background: var(--secondaryColor);
    }
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

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      svg {
        padding-right: 0.5rem;
        height: 20px;
        width: 20px;
        cursor: pointer;
        color: var(--primaryColor);
      }
    }
  }

  button {
    outline: none;
    border: none;
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
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      background: var(--secondaryColor);
    }
  }
`;
