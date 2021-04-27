import styled from "styled-components";

export const DiscoverHomeStyles = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 4rem;
    padding: 0;
    margin: 0;
    line-height: 1.5;
    text-transform: uppercase;
    padding-top: 4.5rem;
    color: var(--primaryColor);
    padding-bottom: 4.5rem;

    @media screen and (max-width: 505px) {
      font-size: 3.5rem;
      text-align: center;
    }
  }

  span {
    padding-top: 2rem;
    font-size: 2rem;
    color: #949494;
    width: 55%;
    text-align: center;
  }

  p {
    display: flex;
    padding: 0;
    margin: 0;
    font-weight: bold;
    font-size: 8rem;
    color: var(--primaryColor);
    line-height: 1;

    p {
      color: black;
      padding: 0;
      margin: 0;
    }
  }
`;
