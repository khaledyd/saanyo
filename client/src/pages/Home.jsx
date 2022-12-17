import React from "react";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import HeroTwo from "../components/home/HeroTwo";
import Nav from "../components/home/Nav";
import Services from "../components/home/Services";
import { useSelector } from "react-redux";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

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
