import React from "react";
import FablesFeed from "./FablesFeed";
import { FeedMainWrapper } from "./styles/FeedMainWrapperStyles";

const Feed = () => {
  return (
    <FeedMainWrapper>
      <div className="div-feed">
        <h1>FEED</h1>
        <div className="div-divider"></div>
        <div>
          <FablesFeed />
        </div>
      </div>
    </FeedMainWrapper>
  );
};

export default Feed;
