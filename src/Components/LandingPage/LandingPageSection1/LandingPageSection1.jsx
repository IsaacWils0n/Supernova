import React from "react";
import "./LandingPageSection1.css";
import Bgvideo from "../../../assets/video/videoSection1/facility walkthrough hq.mp4";

const LandingPageSection1 = () => {
  return (
    <div className="banner">
      <video autoPlay muted loop>
        <source src={Bgvideo} type="video/mp4" />
      </video>
      <h1 className="lps1-text">supernova</h1>
      <span className="lps1-tagline">Illuminating your Brand</span>
    </div>
  );
};

export default LandingPageSection1;
