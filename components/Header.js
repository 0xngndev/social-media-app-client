import { HeaderStyles } from "./styles/HeaderStyles";

const Header = () => {
  return (
    <HeaderStyles>
      <div className="div-logo">
        <div>
          <span>F</span>
        </div>
        <span>500Fables</span>
      </div>
      <div className="div-navbar">
        <ul>
          <li>
            <h1>HOME</h1>
            <h1>CREATE</h1>
            <h1>PROFILE</h1>
          </li>
        </ul>
      </div>
    </HeaderStyles>
  );
};

export default Header;
