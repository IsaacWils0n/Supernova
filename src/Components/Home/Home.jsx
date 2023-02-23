import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import Routers from "../../Router/Routers";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <LandingPage /> */}

      <Routers />
      <Footer />
    </>
  );
};

export default Home;
