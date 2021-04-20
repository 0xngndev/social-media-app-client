import gql from "graphql-tag";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

export const QUERY_GET_USER = gql`
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
  const [token, setToken] = useState("");
  const [queryUser, { data, loading }] = useLazyQuery(QUERY_GET_USER, {
    variables: {
      token,
    },
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const decodedToken = jwtDecode(localStorage.getItem("token"));
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        return null;
      } else {
        setToken(localStorage.getItem("token"));
        queryUser();
      }
    }
  }, []);

  if (loading) return null;

  return data?.getUser;
};

export default useUser;
