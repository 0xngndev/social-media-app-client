import DiscoveryPost from "./DiscoveryPost";
import { FableWrapper } from "./styles/FableWrapperStyles";
import { gql, useQuery } from "@apollo/client";
import { SortByButtonsStyle } from "./styles/SortByButtonStyle";
import { useState } from "react";
import Spinner from "./Spinner";

export const QUERY_ALL_FABLES = gql`
  query getPaginatedPosts($sortBy: SortByType!, $page: Int!, $limit: Int!) {
    getPaginatedPosts(sortBy: $sortBy, page: $page, limit: $limit) {
      previous {
        page
        limit
      }
      next {
        page
        limit
      }
      posts {
        id
        title
        likes {
          username
        }
        body
        excerpt
        author {
          id
          username
        }
        createdAt
        likeCount
        views
        comments {
          id
          username
          body
        }
        commentCount
      }
    }
  }
`;

const DiscoveryFeed = () => {
  const [queryLimit, setQueryLimit] = useState(6);
  const [queryBy, setQueryBy] = useState("NEWEST");
  const [activeButton, setActiveButton] = useState("NEWEST");

  const filterButtons = ["NEWEST", "OLDEST", "VIEWS", "HOT", "TOP"];

  const { data, loading, error, refetch } = useQuery(QUERY_ALL_FABLES, {
    variables: {
      sortBy: queryBy,
      page: 1,
      limit: queryLimit,
    },
  });

  if (loading)
    return <Spinner type={"spin"} color={"#8946FF"} height={100} width={50} />;

  const { getPaginatedPosts } = data;

  const handleRefetch = () => {
    if (getPaginatedPosts.next !== null) {
      setQueryLimit((prevState) => prevState + 6);
      refetch({
        sortBy: queryBy,
        page: 1,
        limit: queryLimit,
      });
    }
  };

  const handleButton = (queryBy) => {
    setQueryBy(queryBy);
    setActiveButton(queryBy);
  };

  return (
    <>
      <SortByButtonsStyle>
        {filterButtons.map((filterButton) => (
          <button
            className={filterButton === activeButton ? "button-selected" : ""}
            key={filterButton}
            onClick={() => handleButton(filterButton)}
          >
            {filterButton}
          </button>
        ))}
      </SortByButtonsStyle>
      <FableWrapper>
        {error}
        {getPaginatedPosts.posts?.map((fable) => {
          return <DiscoveryPost key={fable.id} fable={fable} />;
        })}
        <div className="div-load-more">
          <button type="button" onClick={handleRefetch}>
            {getPaginatedPosts.next === null ? "NO TALES REMAIN" : "LOAD MORE"}
          </button>
        </div>
      </FableWrapper>
    </>
  );
};

export default DiscoveryFeed;
