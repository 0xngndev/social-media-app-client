import styled from "styled-components";

export const FollowerItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--primaryColor);
  width: 400px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border-left: 20px solid var(--primaryColor);
  border-radius: 4px;

  span {
    font-size: 1.2rem;
    font-weight: 400;
    align-self: flex-start;
    color: #b4b4b4;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    p {
      margin: 0;
      cursor: pointer;
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
  }
`;
