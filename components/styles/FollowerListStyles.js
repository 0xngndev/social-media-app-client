import styled from "styled-components";

export const FollowerListStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  max-height: 500px;
  overflow-y: auto;

  h3 {
    font-weight: 500;
    margin: 0;
    color: var(--primaryColor);
  }

  .div-divider {
    height: 1px;
    background-color: var(--primaryColor);
    opacity: 0.3;
    width: 40%;
    margin-bottom: 2rem;
  }
`;
