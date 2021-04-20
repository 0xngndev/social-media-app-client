import styled from "styled-components";

export const CommentPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid var(--primaryColor);
  border-radius: 4px;
  padding: 1rem;
  border-left: 10px solid var(--primaryColor);
  margin-bottom: 2rem;

  .div-user-date {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    h3 {
      text-align: start;
      align-self: flex-start;
      margin: 0;
      font-size: 1.5rem;
      padding-left: 1rem;
      font-weight: 600;
    }
    span {
      font-size: 1rem;
      color: #737373;
      justify-content: flex-end;
      padding-right: 1rem;
    }
  }

  .div-separator {
    display: flex;

    align-self: flex-start;
    height: 1px;
    background-color: #737373;
    margin-bottom: 1rem;
    margin-left: 1rem;
    opacity: 0.3;
    width: 40%;
  }

  p {
    font-size: 1.3rem;
    font-weight: 400;
    align-self: flex-start;
    line-height: 1;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
  }
`;
