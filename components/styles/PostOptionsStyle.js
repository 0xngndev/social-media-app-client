import styled from "styled-components";

export const PostOptionsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #fff;
  width: 100%;
  border-radius: 4px;
  box-shadow: var(--bs);
  border: 1px solid var(--primaryColor);

  h1 {
    margin: auto;
    padding: 1rem;
    line-height: 1.5;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    color: var(--primaryColor);
    cursor: pointer;

    &:first-of-type {
      color: #f00;
    }
  }

  .div-separator {
    height: 1px;
    background-color: var(--primaryColor);
    width: 100%;
  }
`;
