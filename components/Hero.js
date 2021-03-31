import React from "react";
import { StyledPopup } from "./styles/StyledPopup";
import { HeroStyles } from "./styles/HeroStyles";
import RegisterForm from "./RegisterForm";

const Hero = () => {
  return (
    <HeroStyles>
      <div>
        <div className="div-spacer"></div>
        <h1>WELCOME TO</h1>

        <p>
          500<p>Fables</p>
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