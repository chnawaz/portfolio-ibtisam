import React from "react";
import Navbar from "./Navbar";
import Home from "./About";
import Work from "./Work";
import About from "./About";
import Diabetex from "./Diabetex";
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Work />} />
        <Route path="/work" element={<Diabetex />} />
      </Routes>

      {/* <Work/> */}
      {/* <About/> */}
      {/* <Diabetex/> */}
    </>
  );
}

export default Main;
