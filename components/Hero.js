import React from "react";
import Image from "next/image";
import { StyledPopup } from "./styles/StyledPopup";
import { HeroStyles, ImageWrap, StyledImage } from "./styles/HeroStyles";

const Hero = () => {
  return (
    <HeroStyles>
      <img src="/assets/wave.svg" alt="wave" />
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
          <button>START HERE</button>
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
