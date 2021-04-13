//TODO:
//ADD SVG AT THE BOTTOM

import LoginForm from "./LoginForm";
import CreatePost from "./CreatePost";
import Logout from "./Logout";
import useUser from "./User";
import RegisterForm from "./RegisterForm";
import { SideMenuWrapper } from "./styles/SideMenuStyles";
import { StyledPopup } from "./styles/StyledPopup";
import { useRouter } from "next/router";

const SideMenu = () => {
  const router = useRouter();
  const user = useUser();

  return (
    <>
      <SideMenuWrapper>
        <div className="div-sidemenu-wrap">
          <div className="div-logo">
            <h1 onClick={() => router.push(`/`)}>F</h1>
          </div>
          <div className="div-list">
            <ul>
              <li>
                {user && <h3 onClick={() => router.push(`/feed`)}>FEED</h3>}
                <h3 onClick={() => router.push(`/discovery`)}>DISCOVERY</h3>
                {user && (
                  <>
                    <StyledPopup trigger={<h3>CREATE</h3>} modal>
                      {(close) => <CreatePost close={close} />}
                    </StyledPopup>
                  </>
                )}
                {user ? (
                  <Logout />
                ) : (
                  <>
                    <StyledPopup trigger={<h3>LOGIN</h3>} modal>
                      {(close) => <LoginForm close={close} />}
                    </StyledPopup>

                    <StyledPopup trigger={<h3>SIGN UP</h3>} modal>
                      {(close) => <RegisterForm close={close} />}
                    </StyledPopup>
                  </>
                )}
              </li>
            </ul>
          </div>
          {"Logged in as " + user?.username}
        </div>
      </SideMenuWrapper>
    </>
  );
};

export default SideMenu;
