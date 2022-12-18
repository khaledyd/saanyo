import React from "react";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import HeroTwo from "../components/home/HeroTwo";
import Nav from "../components/home/Nav";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Services />
      <HeroTwo />
      <Footer />
    </div>
  );
};

export default Home;
