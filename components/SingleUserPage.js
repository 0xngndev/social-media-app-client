import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import PostByUser from "./PostByUser";

const QUERY_SINGLE_USER_ID = gql`
  query getUserById($userId: ID!) {
    getUserById(userId: $userId) {
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

const UserPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    margin-top: 5rem;

    h1 {
      font-size: 4rem;
      margin: 0;
      padding: 0;
      line-height: 1;
    }
    p {
      margin: 0;
      padding: 0;
    }
    h3 {
      margin: 0;
      padding: 0;
    }

    .div-divider {
      height: 1px;
      background-color: #d4d4d4;
      opacity: 50%;
      width: 100%;
      padding: 0;
      margin: 3rem 0;
    }
  }
`;

const SingleUserPage = ({ id }) => {
  const { data, loading, error } = useQuery(QUERY_SINGLE_USER_ID, {
    variables: {
      userId: id,
    },
  });

  if (loading) return <p>Loading...</p>;

  const { getUserById } = data;

  return (
    <UserPageStyles>
      <div>
        <h1>{getUserById.username}</h1>
        <span>{getUserById.followerCount + " Followers"}</span>
        <div className="div-divider"></div>
        <h3>Latest Posts</h3>
        {getUserById.posts.map((postId) => {
          return <PostByUser id={postId} key={postId} />;
        })}
      </div>
    </UserPageStyles>
  );
};

export default SingleUserPage;
