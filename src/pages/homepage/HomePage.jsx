import React from "react";
// import ProductCard from '../ProductCard';
import LandingPage from "./LandingPage";
import MostViewedItems from "./MostViewedItems";
import Trending from "./Trending";
import Samsung from "./Samsung";
import AboutPage from "../../components/AboutPage";
import ContactUs from "../../components/ContactUs";

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <MostViewedItems />
      <Trending />
      <Samsung />
       <AboutPage/>
       <ContactUs/>
    
    </div>
  );
};

export default HomePage;
