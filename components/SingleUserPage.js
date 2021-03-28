import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const QUERY_SINGLE_USER = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      id
      posts
      email
      username
      email
      createdAt
      followers {
        username
      }
      followerCount
    }
  }
`;

const SingleUserPage = ({ id }) => {
  const { data, loading, error } = useQuery(QUERY_SINGLE_USER, {
    variables: {
      userId: id,
    },
  });

  if (loading) return <p>Loading...</p>;

  const { getUser } = data;

  return (
    <div>
      <h1>Hello</h1>
      <h2>{id}</h2>
      <h2>{getUser?.body}</h2>
    </div>
  );
};

export default SingleUserPage;
