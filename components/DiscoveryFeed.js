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
  const { data, loading, error } = useQuery(QUERY_FOLLOWS_FABLES, {
    variables: {
      sortBy: "OLDEST",
      page: 1,
      limit: 10,
    },
  });

  if (loading) return "Loading...";

  console.log(data);

  const { getPostByFollows } = data;

  return (
    <FableWrapper>
      {error}
      {getPostByFollows.posts?.map((fable) => {
        return <DiscoveryPost key={fable.id} fable={fable} />;
      })}
    </FableWrapper>
  );
};

export default DiscoveryFeed;
