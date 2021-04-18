//TODO: ABSTRACT THE QUERIES

import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import Swal from "sweetalert2";
import { QUERY_ALL_FABLES } from "./DiscoveryFeed";
import { QUERY_FOLLOWS_FABLES } from "./FablesFeed";
import { QUERY_SINGLE_USER_ID } from "./SingleUserPage";

const PostOptionsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #fff;

  border-radius: 4px;
  box-shadow: var(--bs);
  border: 1px solid var(--primaryColor);

  h1 {
    margin: auto;
    padding: 1rem;
    line-height: 1.5;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    color: var(--primaryColor);
    cursor: pointer;

    &:first-of-type {
      color: #f00;
    }
  }

  .div-separator {
    height: 1px;
    background-color: var(--primaryColor);
    width: 100%;
  }
`;

const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

const PostOptions = ({
  fableId,
  userPage,
  discoveryPage,
  userId,
  feedPage,
}) => {
  const [deletePostUserPage] = useMutation(DELETE_POST_MUTATION, {
    variables: {
      postId: fableId,
    },
    refetchQueries: [
      {
        query: QUERY_SINGLE_USER_ID,
        variables: {
          userId,
        },
      },
    ],
  });

  const [deletePostDiscovery] = useMutation(DELETE_POST_MUTATION, {
    variables: {
      postId: fableId,
    },
    refetchQueries: [
      {
        query: QUERY_ALL_FABLES,
        variables: {
          sortBy: "NEWEST",
          page: 1,
          limit: 3,
        },
      },
    ],
  });

  const [deletePostFeed] = useMutation(DELETE_POST_MUTATION, {
    variables: {
      postId: fableId,
    },
    refetchQueries: [
      {
        query: QUERY_FOLLOWS_FABLES,
        variables: {
          sortBy: "NEWEST",
          page: 1,
          limit: 3,
        },
      },
    ],
  });

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          if (discoveryPage) {
            deletePostDiscovery();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
          if (userPage) {
            deletePostUserPage();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
          if (feedPage) {
            deletePostFeed();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        } catch (error) {
          throw new Error(error);
        }
      }
    });
  };

  return (
    <PostOptionsStyle>
      <h1 onClick={handleDelete}>DELETE</h1>
      <div className="div-separator"></div>
      <h1>EDIT</h1>
    </PostOptionsStyle>
  );
};

export default PostOptions;
