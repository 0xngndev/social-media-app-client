import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const QUERY_SINGLE_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      title
      body
      author
      createdAt
      likeCount
      commentCount
    }
  }
`;

const SingleFablePage = ({ id }) => {
  const { data, loading, error } = useQuery(QUERY_SINGLE_POST, {
    variables: {
      postId: id,
    },
  });

  if (loading) return <p>Loading...</p>;

  const { getPost } = data;

  return (
    <div>
      <h1>Hello</h1>
      <h2>{id}</h2>
      <h2>{getPost?.body}</h2>
    </div>
  );
};

export default SingleFablePage;
