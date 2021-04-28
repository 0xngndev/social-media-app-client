import styled from "styled-components";

export const FableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 901px) {
    flex-direction: column;
  }

  .div-load-more {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
      background: transparent;
      outline: none;
      border: none;
      width: 140px;
      padding: 2rem;
      font-size: 1.5rem;
      border: 3px solid var(--primaryColor);
      font-weight: 600;
      color: var(--primaryColor);
      margin: 2rem;
      cursor: pointer;
    }
  }
`;
