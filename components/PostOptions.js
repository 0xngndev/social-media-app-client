//TODO: ABSTRACT THE QUERIES

import gql from "graphql-tag";
import Swal from "sweetalert2";
import UpdatePost from "./UpdatePost";
import { QUERY_ALL_FABLES } from "./DiscoveryFeed";
import { QUERY_FOLLOWS_FABLES } from "./FablesFeed";
import { QUERY_SINGLE_USER_ID } from "./SingleUserPage";
import { StyledPopup } from "./styles/StyledPopup";
import { PostOptionsStyle } from "./styles/PostOptionsStyle";
import { useMutation } from "@apollo/client";

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
  open,
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

  const deletedSuccessfully = () => {
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
  };

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
            deletedSuccessfully();
          }
          if (userPage) {
            deletePostUserPage();
            deletedSuccessfully();
          }
          if (feedPage) {
            deletePostFeed();
            deletedSuccessfully();
          }
        } catch (error) {
          throw new Error(error);
        }
      }
    });
  };

  return (
    <>
      <PostOptionsStyle>
        <h1 onClick={handleDelete}>DELETE</h1>
        <div className="div-separator"></div>
        <StyledPopup trigger={<h1>EDIT</h1>} modal>
          {(close) => (
            <UpdatePost
              postId={fableId}
              close={close}
              userId={userId}
              userPage={userPage}
              discoveryPage={discoveryPage}
              feedPage={feedPage}
            />
          )}
        </StyledPopup>
      </PostOptionsStyle>
    </>
  );
};

export default PostOptions;
