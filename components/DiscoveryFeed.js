import { gql, useQuery } from "@apollo/client";
import FableFeed from "./FableFeed";
import styled from "styled-components/";
import DiscoveryPost from "./DiscoveryPost";
import { useState } from "react";

const SortByButtonsStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;

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
  }
`;

const FableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  .div-load-more {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
      background: transparent;
      outline: none;
      border: none;
      width: 140px;
      padding: 2rem;
      font-size: 1.5rem;
      border: 3px solid var(--primaryColor);
      font-weight: 600;
      color: var(--primaryColor);
      margin: 2rem;
      cursor: pointer;
    }
  }
`;

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
  const [queryLimit, setQueryLimit] = useState(3);
  const [queryBy, setQueryBy] = useState("NEWEST");
  const [activeButton, setActiveButton] = useState();

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
          return <DiscoveryPost key={fable.id} fable={fable} />;
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

export default DiscoveryFeed;
