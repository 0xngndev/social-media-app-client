import styled from "styled-components";

export const PostByUserStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid var(--primaryColor);
  border-radius: 4px;
  border-left: 30px solid var(--primaryColor);
  padding: 1.5rem;
  box-shadow: var(--bs);
  margin-bottom: 2rem;

  .div-title-settings {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    .button-popup {
      padding: 0;
      border: 0;
      background: transparent;
      color: #000;

      &:hover {
        background: transparent;
      }

      svg {
        cursor: pointer;
        padding-left: 1rem;
      }
    }

    h3 {
      display: flex;
      align-self: flex-start;
      margin: 0;
      padding: 0;
      justify-content: flex-start;
      line-height: 2;
      cursor: pointer;
    }
  }

  p {
    align-self: flex-start;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: #949494;
    white-space: normal;
    justify-self: flex-start;
  }

  .div-sep {
    margin-top: 1.5rem;

    background-color: #949494;
    height: 1px;
  }

  .div-comment {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 1.5rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      span {
        padding-right: 2rem;
        &:hover {
          text-decoration: none;
        }
        cursor: text;
      }

      svg {
        padding-right: 0.5rem;
        height: 20px;
        width: 20px;
        cursor: pointer;
        color: var(--primaryColor);
      }
    }

    .span-last {
      padding-right: 0rem;
    }
  }
`;
