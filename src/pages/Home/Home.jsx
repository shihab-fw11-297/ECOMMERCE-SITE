import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Categoris from "../../components/Categories/Categoris";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categoris />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;