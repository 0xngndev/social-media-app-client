import { gql, useQuery } from "@apollo/client";
import FableFeed from "./FableFeed";
import styled from "styled-components/";

const FableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const QUERY_ALL_FABLES = gql`
  query getPosts {
    getPosts {
      id
      body
      title
      author {
        username
        id
      }
      commentCount
      likeCount
      createdAt
      excerpt
      likes {
        username
      }
    }
  }
`;

const Fables = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_FABLES);

  if (loading) return "Loading...";

  console.log(data);

  const { getPosts } = data;

  return (
    <FableWrapper>
      {error}
      {getPosts?.map((fable) => {
        return <FableFeed key={fable.id} fable={fable} />;
      })}
    </FableWrapper>
  );
};

export default Fables;
