import DiscoverHome from "../components/DiscoverHome";
import Hero from "../components/Hero";
import styled from "styled-components";

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <>
      <HomeStyles>
        <Hero />
        {/* <DiscoverHome /> */}
      </HomeStyles>
    </>
  );
}
