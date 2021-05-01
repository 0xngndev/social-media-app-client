import styled from "styled-components";

export const SingleFableStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 7rem;

  .div-comments {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%;

    @media screen and (max-width: 768px) {
      width: 90%;
    }

    button {
      outline: none;
      border: none;
      border-radius: 4px;
      background-color: var(--primaryColor);
      color: #fff;
      padding: 1rem 2rem;
      margin-bottom: 3rem;
      font-weight: 600;
    }

    h1 {
      font-size: 4rem;
      margin: 0;
      padding: 0;
      line-height: 1;
    }
    p {
      margin: 0;
    }
    h2 {
      font-size: 1.4rem;
      font-weight: 400;
      margin: 0;
      padding: 0;
      align-self: flex-start;
      white-space: pre-wrap;
    }

    .div-likes-comments {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0;
      width: 100%;

      .div-metrics {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 70%;

        .div-comments-svg {
          justify-content: flex-end;
        }

        .div-likes-svg {
          justify-content: flex-start;
        }

        h3 {
          @media screen and (max-width: 768px) {
            font-size: 1.5rem;
          }
        }

        div {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;

          svg {
            padding-right: 0.5rem;
            height: 20px;
            width: 20px;
            cursor: pointer;
            color: var(--primaryColor);

            @media screen and (max-width: 768px) {
              height: 15px;
              width: 15px;
            }
          }
        }
      }
    }
  }
  .div-divider {
    height: 1px;
    background-color: #d4d4d4;
    opacity: 50%;
    width: 100%;
    padding: 0;
    margin: 3rem 0;
  }
`;
