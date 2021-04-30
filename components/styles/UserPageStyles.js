import styled from "styled-components";

export const UserPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .div-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    margin-top: 5rem;

    .div-follow-direction {
      display: flex;
      flex-direction: row;
    }

    .div-followers {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      padding-top: 1rem;

      svg {
        width: 30px;
        height: 30px;
        color: var(--primaryColor);
        align-self: center;
        justify-content: center;
        margin-top: 1rem;
      }

      span {
        align-self: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    h1 {
      font-size: 4rem;
      margin: 0;
      padding: 0;
      line-height: 1;
    }
    p {
      margin: 0;
      padding: 0;
    }
    h3 {
      margin: 0;
      padding: 0;
      padding-bottom: 1rem;
    }

    .div-divider {
      height: 1px;
      background-color: #d4d4d4;
      opacity: 50%;
      width: 100%;
      padding: 0;
      margin: 3rem 0;
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
      padding: 0.5rem 3rem;
      width: fit-content;
      font-size: 1.2rem;
      margin: 0;
      margin-top: 1rem;
      transition: 0.3s;

      &:hover {
        transition: 0.3s;
        background: var(--secondaryColor);
      }
    }
  }
`;
