import React from "react";
import styled from "styled-components";

const DiscoverHomeStyles = styled.div`
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

const DiscoverHome = () => {
  return (
    <DiscoverHomeStyles>
      <h1>Discover Rising Tales</h1>
    </DiscoverHomeStyles>
  );
};

export default DiscoverHome;
