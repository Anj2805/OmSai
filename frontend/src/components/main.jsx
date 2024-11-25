import React from "react";
import banner1 from '../images/Banner/banner1.png';
import banner2 from '../images/Banner/banner2.png';
import banner3 from '../images/Banner/banner3.png';


const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          
          <div className="slider-item">
            <img 
              src={banner1} 
              alt="women's latest fashion sale" 
              className="banner-img" 
            />
            <div className="banner-content">
              <p className="banner-subtitle">Trending item</p>
              <h2 className="banner-title">Women's latest fashion sale</h2>
              <p className="banner-text">starting at INR 1000/-</p>
              <a href="/product" className="banner-btn">Shop now</a>
            </div>
          </div>

          <div className="slider-item">
            <img 
              src={banner2} 
              alt="Discover Our Latest Designs" 
              className="banner-img" 
            />
            <div className="banner-content">
              <p className="banner-subtitle">Embroidered Kurtas</p>
              <h2 className="banner-title">Discover Our Latest Designs</h2>
              <a href="/Omsai/product" className="banner-btn">Shop now</a>
            </div>
          </div>

          <div className="slider-item">
            <img 
              src={banner3} 
              alt="Explore Stunning Collections" 
              className="banner-img" 
            />
            <div className="banner-content">
              <p className="banner-subtitle">Sale Offer</p>
              <h2 className="banner-title">Explore Stunning Collections</h2>
              <a href="/Omsai/product" className="banner-btn">Shop now</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
