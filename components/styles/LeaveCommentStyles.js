import styled from "styled-components";

export const LeaveCommentStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  vertical-align: middle;
  padding: 2rem;

  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    outline: none;
    padding: 0;

    @media screen and (max-width: 768px) {
      width: 70%;
    }

    label {
      font-weight: 600;
      font-size: 1.4rem;

      textarea {
        display: block;
        margin-bottom: 2rem;
        min-width: 500px;
        border: 1px solid #b4b4b4;
        border-radius: 2px;
        min-height: 80px;

        @media screen and (max-width: 530px) {
          min-width: 250px;
        }

        @media screen and (max-width: 340px) {
          min-width: 190px;
        }

        &:focus {
          outline: none;
        }
      }
    }

    button {
      align-self: flex-end;
      border: none;
      outline: none;
      border-radius: 2px;
      background-color: var(--primaryColor);
      color: var(--offWhite);
      margin-top: 1rem;
      cursor: pointer;
      transition: 0.4s;
      width: 60px;
      margin-bottom: 0rem;

      &:hover {
        background-color: #46a049;
        transition: 0.4s;
      }
    }
  }
`;
