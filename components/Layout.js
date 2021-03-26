import { createGlobalStyle } from "styled-components";
import SideMenu from "../components/SideMenu";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html {
        --primaryColor: #152252;
        --secondaryColor: #39BC9D;
        --lowOpBlue: rgba(57, 188, 157, 0.53);
        --black: #393939;
        --grey: #3A3A3A;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGray);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 7px 12px 24px 0 rgba(0,0,0,0.19);
		font-size: 62.5%; 
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2
    }
    a {
        text-decoration: none;
        color: var(--black);
    }
    a:hover {
        text-decoration: underline;
    }
    button {
        font-family: 'Poppins',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <PageWrapper>
        <GlobalStyles />
        <SideMenu />
        {children}
      </PageWrapper>
    </div>
  );
};

export default Layout;
