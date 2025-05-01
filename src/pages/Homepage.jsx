import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import StaffCart from "../components/StaffCart";
import Cart from "../components/Cart";
import Percentage from "../components/Percentage";
import LeaderCart from "../components/LeaderCart";


const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="flex">
        <Percentage />
      </div>
      <div className="flex">
        <Cart 
        image="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1019/LogoECSPublishingGroup1-removebg-preview-1-e1721125158123.png"
        text1="10% list growth" 
        text2="& sales spike in tough niche" 
        text3="it's nice that with GetResponse, we" 
        text4="have the tools and integration we" 
        text5="need within our budget."
        select="Read case study" />

        <Cart 
        image="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1022/living_vision-removebg-preview-e1721125329100.png"
        text1="75% of all public" 
        text2="sales from autoresponders" 
        text3="Together with GetResponse, we've" 
        text4="been able to convince customers of" 
        text5="need, culminating in compelling sales."
        select="Read case study" />

        <Cart 
        image="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1025/red-hot-logo1_-removebg-preview-e1721125532901.png"
        text1="Up to $1,000" 
        text2="for every 1,000 emails sent" 
        text3="Regarding revenue contribution, the" 
        text4="email marketing channel is like free" 
        text5="money for us."
        select="Read case study" />
      </div>

      <div className="flex">
        <StaffCart
        name="Owolabi"
        position="CEO"
        department="Founder"
        image="https://randomuser.me/api/portraits/men/32.jpg" />
        <StaffCart
        name="Linda"
        position="Hr"
        department="Human Resource"
        image="https://randomuser.me/api/portraits/women/44.jpg" />
        <StaffCart
        name="Anuoluwapo"
        position="Engineer"
        department="developer"
        image="https://randomuser.me/api/portraits/men/22.jpg" />
      </div>

      <div className="flex">
        <LeaderCart />
      </div>


      <Footer />
    </div>
  );
};

export default Homepage;
