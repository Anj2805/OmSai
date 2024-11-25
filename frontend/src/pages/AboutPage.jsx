import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
      <div class="container mt-5">
            <h1 class="text-center mb-4">About Us</h1>
            <p class="text-muted text-justify">
                Welcome to <strong>Ohm Sai Embroideries</strong>, where tradition meets innovation in the world of embroidered fashion. With a rich heritage in crafting exquisite embroidered clothing, we are dedicated to delivering unmatched quality and timeless designs.
            </p>
            <p class="text-muted text-justify">
                For years, we have specialized in creating unique embroidery pieces that reflect the artistry and precision of skilled craftsmanship. From delicate patterns to bold, intricate designs, each piece is a testament to our passion for embroidery and commitment to excellence.
            </p>
            <p class="text-muted text-justify">
                What started as a humble venture catering to B2B exports has now evolved into a mission to bring our premium embroidered garments directly to you, our valued customers. Our new online platform allows us to connect with fashion enthusiasts worldwide, making it easier for you to explore and shop our collections from the comfort of your home.
            </p>
            <p class="text-muted text-justify">
                At Ohm Sai Embroideries, we believe in more than just selling clothes—we aim to celebrate individuality and style. Whether you’re looking for a statement piece or timeless elegance, our collections are designed to elevate your wardrobe and leave a lasting impression.
            </p>

            <div class="values mt-4">
                <h2 class="h5 text-primary mb-3">Our Values</h2>
                <ul class="list-unstyled">
                    <li><i class="bi bi-check-circle-fill text-success"></i> <strong>Quality</strong>: Exceptional craftsmanship in every stitch.</li>
                    <li><i class="bi bi-check-circle-fill text-success"></i> <strong>Innovation</strong>: Fusing traditional designs with modern aesthetics.</li>
                    <li><i class="bi bi-check-circle-fill text-success"></i> <strong>Customer Satisfaction</strong>: Creating a seamless shopping experience.</li>
                </ul>
            </div>
            <p class="text-muted mt-4">
                Thank you for choosing Ohm Sai Embroideries, where every thread tells a story. Explore our collection and join us in celebrating the beauty of embroidered fashion.
            </p>
        </div>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.ibb.co/grd0jfP/p1.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Heritage Collection</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.ibb.co/9gSVKpz/p2.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Modern Embroidery Wear</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.ibb.co/x1DNqC6/p3.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Custom Embroidery Designs</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.ibb.co/6NMH5gK/p4.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Export-Quality Apparel</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage


{/* <a href="https://ibb.co/hgcG74Z"><img src="https://i.ibb.co/grd0jfP/p1.jpg" alt="p1" border="0"></a>
<a href="https://ibb.co/2hHsVFm"><img src="https://i.ibb.co/9gSVKpz/p2.jpg" alt="p2" border="0"></a>
<a href="https://ibb.co/0CcxyDr"><img src="https://i.ibb.co/x1DNqC6/p3.jpg" alt="p3" border="0"></a>
<a href="https://ibb.co/d7TPyGN"><img src="https://i.ibb.co/6NMH5gK/p4.jpg" alt="p4" border="0"></a> */}