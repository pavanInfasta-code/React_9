import React from "react";

import Slider from "./components/Section3/Slider";
import Hero from "./components/Hero/Hero";
import Mail from "./components/Mail/Mail";
import Review from "./components/Review/Review";
import Cards from "./components/Cards-section/Cards";
import Result from "./components/Result/Result";
import Post from "./components/PostPilot/Post";
import Obvi from "./components/Obvi/Obvi";
import Orange from "./components/Orange/Orange";
import Latest from "./components/Latest/Latest";
import Footer from "./components/Footer1/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <Slider />
      <Mail/>
      <Review/>
      <Cards/>
      <Result/>
      <Post/>

      <Obvi/>
      <Orange/>
      <Latest/>
      <Footer/>


        {/* <Cards/> */}
    </>
  );
};

export default Home;
