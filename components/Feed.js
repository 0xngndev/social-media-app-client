import React from "react";
import styled from "styled-components";
import Fables from "./Fables";

export const FeedMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .div-feed {
    width: 85%;
    h1 {
      color: var(--primaryColor);
      font-size: 3rem;
      margin-bottom: 0;
    }
  }

  .div-divider {
    height: 1px;
    background-color: #b4b4b4;
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;

const Feed = () => {
  return (
    <FeedMainWrapper>
      <div className="div-feed">
        <h1>FEED</h1>
        <div className="div-divider"></div>
        <div>
          <Fables />
        </div>
      </div>
    </FeedMainWrapper>
  );
};

export default Feed;
