import { gql, useQuery } from "@apollo/client";
import FableFeed from "./FableFeed";
import styled from "styled-components/";
import DiscoveryPost from "./DiscoveryPost";

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
  const { data, loading, error, refetch } = useQuery(QUERY_FOLLOWS_FABLES, {
    variables: {
      sortBy: "OLDEST",
      page: 1,
      limit: 3,
    },
  });

  if (loading) return "Loading...";

  const { getPostByFollows } = data;

  const handleRefetch = () => {
    if (getPostByFollows.next !== null) {
      refetch({
        sortBy: "OLDEST",
        page: 2,
        limit: 4,
      });
    }
  };

  return (
    <FableWrapper>
      {error}
      {getPostByFollows.posts?.map((fable) => {
        return <DiscoveryPost key={fable.id} fable={fable} />;
      })}
      <div className="div-load-more">
        <button type="button" onClick={handleRefetch}>
          LOAD MORE
        </button>
      </div>
    </FableWrapper>
  );
};

export default DiscoveryFeed;
