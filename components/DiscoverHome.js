import FablesHome from "./FablesHome";
import styled from "styled-components";
import { DiscoverHomeStyles } from "./styles/DiscoverHomeStyles";

const HomeWrapper = styled.article`
  display: flex;
  width: 80%;
  justify-content: center;
  align-self: center;

  @media screen and (max-width: 901px) {
    flex-direction: column;
  }
`;

const DiscoverHome = () => {
  return (
    <>
      <DiscoverHomeStyles>
        <h1>Discover Rising Tales</h1>
      </DiscoverHomeStyles>
      <HomeWrapper>
        <FablesHome />
      </HomeWrapper>
    </>
  );
};

export default DiscoverHome;
