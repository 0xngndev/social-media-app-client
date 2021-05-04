import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  vertical-align: middle;
  padding: 2rem;
  border-radius: 12px 12px 6px 6px;
  box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.25);

  .div-logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    div {
      display: flex;
      flex-direction: row;
      background: var(--primaryColor);
      align-items: center;
      border-radius: 4px;
      height: 40px;
      cursor: pointer;

      span {
        color: var(--offWhite);
        display: flex;
        padding: 0 1rem;
        font-size: 2.5rem;
      }
    }

    span {
      display: flex;
      padding-left: 0.5rem;
      font-weight: bold;
      font-size: 2.5rem;
      color: var(--primaryColor);

      span {
        color: var(--black);
        padding-left: 0;
      }
    }
  }

  h2 {
    display: flex;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 2rem;
    text-align: start;
  }

  .div-divider {
    height: 1px;
    background-color: #b4b4b4;
    width: 100%;
    opacity: 50%;
    margin-bottom: 2.5rem;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    outline: none;
    padding: 0;

    label {
      font-weight: 400;
      font-size: 1.4rem;

      input {
        display: block;
        margin-bottom: 2rem;
        min-width: 500px;
        border: 1px solid #b4b4b4;
        border-radius: 2px;
        min-height: 27px;

        @media screen and (max-width: 768px) {
          min-width: 300px;
        }

        &:focus {
          outline: none;
        }
      }

      textarea {
        display: block;
        margin-bottom: 2rem;
        min-width: 500px;
        border: 1px solid #b4b4b4;
        border-radius: 2px;
        min-height: 80px;

        @media screen and (max-width: 768px) {
          min-width: 300px;
        }

        &:focus {
          outline: none;
        }
      }
    }

    button {
      border: none;
      outline: none;
      border-radius: 2px;
      background-color: var(--primaryColor);
      color: var(--offWhite);
      height: 27px;
      margin-top: 1rem;
      margin-bottom: 3rem;
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        background-color: #46a049;
        transition: 0.4s;
      }
    }
  }

  .div-register {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

    p {
      color: #b4b4b4;
      font-weight: 400;
      font-size: 1.4rem;
      margin-bottom: 1rem;
      margin-top: 0;

      span {
        font-weight: 600;
        font-size: 1.4rem;
        color: var(--primaryColor);
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .div-divider-2 {
    margin: auto;
    height: 1px;
    background-color: #b4b4b4;
    width: 60%;
    margin-bottom: 2rem;
  }

  .div-account {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    span {
      font-weight: 300;
      font-size: 1.4rem;
      span {
        color: var(--primaryColor);
        cursor: pointer;
        transition: 0.4s;

        &:hover {
          color: #46a049;
          transition: 0.4s;
        }
      }
    }
  }
`;
