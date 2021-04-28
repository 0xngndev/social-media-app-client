import styled from "styled-components";

export const SortByButtonsStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 901px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    outline: none;
    border: none;
    background: transparent;
    width: 70px;
    padding: 1.5rem;
    font-size: 1.3rem;
    border: 3px solid var(--primaryColor);
    font-weight: 600;
    color: var(--primaryColor);
    margin: 1rem;
    margin-left: 0;
    margin-bottom: 4rem;
    cursor: pointer;

    @media screen and (max-width: 901px) {
      margin-bottom: 2rem;
      padding: 1rem;
      width: 50px;
    }
  }

  .button-selected {
    outline: none;
    border: none;
    background: var(--primaryColor);
    width: 70px;
    padding: 1.5rem;
    font-size: 1.3rem;
    border: 3px solid var(--primaryColor);
    font-weight: 600;
    color: #fff;
    margin: 1rem;
    margin-left: 0;
    margin-bottom: 4rem;
    cursor: pointer;

    @media screen and (max-width: 901px) {
      margin-bottom: 2rem;
      padding: 1rem;
      width: 50px;
    }
  }
`;
