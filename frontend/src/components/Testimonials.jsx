import React from "react";
import '../components/Style.css'
import ctabanner from '../images/Banner/cta-banner.png';
import profile from '../images/Profile.png'
import cat1 from '../images/Categories/cat1.png';
import cat2 from '../images/Categories/cat2.png';
import cat3 from '../images/Categories/cat3.png';
import cat4 from '../images/Categories/cat4.png';


function TESTIMONIALS() {
  return (
    <div>
      <br /><br />

      {/* TESTIMONIALS, CTA & SERVICE */}
      <div>
        <div className="container">

          <div className="testimonials-box">
            {/* TESTIMONIALS */}
            <div className="testimonial">
              <h2 className="title">Founder</h2>
              <div className="testimonial-card">
                <img
                  src={ profile }
                  alt="alan doe"
                  className="testimonial-banner"
                  width="80"
                  height="80"
                />
                <p className="testimonial-name">Vikash Kumar</p>
                <p className="testimonial-title">CEO & Founder of OmSai Embroidery</p>
                <p className="testimonial-desc">
                Om Sai Embroideries was founded with the mission to bring the art of Indian embroidery to the forefront, offering exquisite, handcrafted clothing that blends tradition with modern style.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="cta-container">
              <img
                src={ ctabanner }
                alt="Lehenga collection"
                className="cta-banner"
              />
              <a href="./product" className="cta-content">
                <p className="discount">25% Discount</p>
                <h2 className="cta-title">Lehenga collection</h2>
                <button className="cta-btn">Shop now</button>
              </a>
            </div>

            {/* SERVICE */}
            <div className="service">
              <h2 className="title">Our Services</h2>
              <div className="service-container">

                <a href="./product" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="boat-outline"></ion-icon>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Worldwide Delivery</h3>
                    <p className="service-desc">For Orders Over INR 10,000/-</p>
                  </div>
                </a>

                <a href="./product" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Next Day Delivery</h3>
                    <p className="service-desc">Indian Orders Only</p>
                  </div>
                </a>

                <a href="./product" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="call-outline"></ion-icon>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Best Online Support</h3>
                    <p className="service-desc">Hours: 8AM - 11PM</p>
                  </div>
                </a>

                <a href="./product" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="arrow-undo-outline"></ion-icon>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Return Policy</h3>
                    <p className="service-desc">Easy & Free Return</p>
                  </div>
                </a>

                <a href="./product" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="ticket-outline"></ion-icon>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">15% Money Back</h3>
                    <p className="service-desc">For Orders Over INR 20,000/-</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br /><br />

      {/* EXPLORE MORE */}
      <div>
        <div className="container">
          <h2 className="title">EXPLORE MORE</h2>
          <p>Shop Our Occasion-Ready Lehngas</p>
          <br />
          <div className="blog-container has-scrollbar">

            <div className="blog-card">
              <a href="/product">
                <img
                  src={ cat1 }
                  alt="Shop Our Occasion-Ready Lehngas"
                  width="300"
                  className="blog-banner"
                />
              </a>
            </div>

            <div className="blog-card">
              <a href={"/product"}>
                <img
                  src={ cat2 }
                  alt="Shop Our Occasion-Ready Lehngas"
                  className="blog-banner"
                  width="300"
                />
              </a>
            </div>

            <div className="blog-card">
              <a href="/product">
                <img
                  src={ cat3 }
                  alt="Shop Our Occasion-Ready Lehngas"
                  className="blog-banner"
                  width="300"
                />
              </a>
            </div>

            <div className="blog-card">
              <a href="/product">
                <img
                  src={ cat4 }
                  alt="Shop Our Occasion-Ready Lehngas"
                  className="blog-banner"
                  width="300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

const Testimonials = () => {
  return (
    <div>
      <TESTIMONIALS />
    </div>
  )
}

export default Testimonials
