import FableFeed from "./FableFeed";
import { FableWrapper } from "./styles/FableWrapperStyles";
import { gql, useMutation, useQuery } from "@apollo/client";
import { SortByButtonsStyle } from "./styles/SortByButtonStyle";
import { useState } from "react";
import { FaLeaf } from "react-icons/fa";

export const QUERY_FOLLOWS_FABLES = gql`
  query getPostByFollows($sortBy: SortByType!, $page: Int!, $limit: Int!) {
    getPostByFollows(sortBy: $sortBy, page: $page, limit: $limit) {
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

const FablesFeed = () => {
  const [queryLimit, setQueryLimit] = useState(3);
  const [queryBy, setQueryBy] = useState("NEWEST");
  const [activeButton, setActiveButton] = useState("NEWEST");

  const filterButtons = ["NEWEST", "OLDEST", "VIEWS", "HOT", "TOP"];

  const { data, loading, error, refetch } = useQuery(QUERY_FOLLOWS_FABLES, {
    variables: {
      sortBy: queryBy,
      page: 1,
      limit: queryLimit,
    },
  });

  if (loading) return "Loading...";

  const { getPostByFollows } = data;

  const handleRefetch = () => {
    if (getPostByFollows.next !== null) {
      setQueryLimit((prevState) => prevState + 3);
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
        {getPostByFollows.posts?.map((fable) => {
          return <FableFeed key={fable.id} fable={fable} />;
        })}
        <div className="div-load-more">
          <button type="button" onClick={handleRefetch}>
            {getPostByFollows.next === null
              ? "NO MORE FABLES TO FETCH"
              : "LOAD MORE"}
          </button>
        </div>
      </FableWrapper>
    </>
  );
};

export default FablesFeed;
