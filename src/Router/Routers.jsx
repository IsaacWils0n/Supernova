import React from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Services from "../Pages/Services";
import OurWork from "../Pages/Our Work/OurWork";
import Contact from "../Pages/Contact/Contact";

const Routers = () => {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);

  return routes;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourWork" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Routers;
