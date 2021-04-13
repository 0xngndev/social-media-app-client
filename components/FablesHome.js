import DiscoveryPost from "./DiscoveryPost";
import { FableWrapper } from "./styles/FableWrapperStyles";
import { gql, useQuery } from "@apollo/client";
import { SortByButtonsStyle } from "./styles/SortByButtonStyle";
import Spinner from "./Spinner";

export const QUERY_ALL_FABLES = gql`
  query getPaginatedPosts($sortBy: SortByType!, $page: Int!, $limit: Int!) {
    getPaginatedPosts(sortBy: $sortBy, page: $page, limit: $limit) {
      posts {
        id
        title
        likes {
          username
        }
        body
        excerpt
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

const FablesHome = () => {
  const { data, loading, error, refetch } = useQuery(QUERY_ALL_FABLES, {
    variables: {
      sortBy: "HOT",
      page: 1,
      limit: 6,
    },
  });

  if (loading)
    return <Spinner type={"spin"} color={"#8946FF"} height={100} width={50} />;

  const { getPaginatedPosts } = data;

  return (
    <>
      <FableWrapper>
        {error}
        {getPaginatedPosts.posts?.map((fable) => {
          return <DiscoveryPost key={fable.id} fable={fable} />;
        })}
      </FableWrapper>
    </>
  );
};

export default FablesHome;
