import React from "react";
import {Logo} from '../components'
import main from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/Testing' 
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> App
          </h1>
          <p>
            I'm baby post-ironic air plant single-origin coffee, sriracha
            affogato cray subway tile keytar bespoke viral shaman snackwave
            authentic. Humblebrag organic cardigan neutra kombucha. Distillery
            bespoke banjo selfies lomo man bun chartreuse viral jianbing bicycle
            rights green juice cliche DIY.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;

