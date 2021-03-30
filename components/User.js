import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const QUERY_GET_USER = gql`
  query getUser($token: String!) {
    getUser(token: $token) {
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

export const useUser = () => {
  const token = localStorage.getItem("token");

  const { data, loading, error } = useQuery(QUERY_GET_USER, {
    variables: {
      token,
    },
  });
  if (loading) return null;

  return data?.getUser;
};

export default useUser;
