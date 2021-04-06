import DiscoveryFeed from "./DiscoveryFeed";
import { FeedMainWrapper } from "./styles/FeedMainWrapperStyles";

const Discovery = () => {
  return (
    <FeedMainWrapper>
      <div className="div-feed">
        <h1>FEED</h1>
        <div className="div-divider"></div>
        <div>
          <DiscoveryFeed />
        </div>
      </div>
    </FeedMainWrapper>
  );
};

export default Discovery;
