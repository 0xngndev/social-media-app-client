import React from "react";
import RegisterForm from "./RegisterForm";
import { HeroStyles } from "./styles/HeroStyles";
import { StyledPopup } from "./styles/StyledPopup";

const Hero = () => {
  return (
    <HeroStyles>
      <div>
        <div className="div-spacer"></div>
        <h1>WELCOME TO</h1>

        <p>
          500<p>Tales</p>
        </p>

        <span>
          Share your stories in 500 words or less. Discover talented authors.
          Read enchanting tales. Dive deep into the world of short fiction.
        </span>
        <div>
          <StyledPopup trigger={<button>START HERE</button>} modal>
            <RegisterForm />
          </StyledPopup>
        </div>
        <div
          className="div-spacer"
          style={{ height: "5px", width: "50px" }}
        ></div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
