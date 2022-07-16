import React from "react";
import Navbar from "../../components/shared/navbar/Navbar";
import Banner1 from "../../components/pages/Home/Banner1";
import Cards from "../../components/pages/Home/Cards/Cards";
import Banner2 from "../../components/pages/Home/Banner2";
import Banner3 from "../../components/pages/Home/Banner3";
import Banner4 from "../../components/pages/Home/Banner4";
import Banner5 from "../../components/pages/Home/Banner5";
import Offerts from "../../components/pages/Home/Offerts/Offerts";
import Client from "../../components/pages/Home/Client/Client";
import Footer from "../../components/shared/Footer/Footer";



const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Banner1 />
      <Cards/>
      <Banner2/>
      <Banner3/>
      <Banner4/>
      <Banner5/> 
      <Offerts/> 
      <Client/>
      <Footer/>
    </div>
  );
};

export default Home;
