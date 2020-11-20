import React from 'react';
import Landing from "../components/Landing";
import Header from "../components/Header";
import LandingContent from "../components/LandingContent";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Landing />
      <LandingContent />
      <Footer />
    </div>
  );
};

export default Home;