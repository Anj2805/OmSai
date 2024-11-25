import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../images/logo.png';
import './Style.css'



const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <>
        {/* Navbar Section */}
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
            <a href="/product" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
            </a>
            </li>

            <li>
            <a href="/product" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
            </a>
            </li>

            <li>
            <a href="/product" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
            </a>
            </li>

            <li>
            <a href="/product" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            </li>
          </ul>
          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b> This Week Order Over - INR 10,000/-
            </p>
          </div>
          <div className="header-top-actions">
            <select name="currency">
              <option value="inr">Rupee ₹</option>
              <option value="usd">USD $</option>
            </select>
            <select name="language">
              <option value="en-US">English</option>
              <option value="hi-IN">Hindi</option>
            </select>
          </div>
        </div>
      </div>

      {/* Header Main Section */}
      <div className="header-main">
        <div className="container">
          <div className="header-logo"><NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
            <img src={logo} alt="OmSai logo" width="220" height="80" /></NavLink>
          </div>
          <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Enter your product name..."
            />
            <button className="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
          <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
        </div>
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="desktop-navigation-menu">
        <div className="container" id="navbarSupportedContent">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
            <NavLink className="nav-link menu-title" to="/">Home </NavLink>
            </li>
            <li className="menu-category">
            <NavLink className="nav-link menu-title" to="/product">Products</NavLink>
            </li>
            <li className="menu-category">
            <NavLink className="nav-link menu-title" to="/about">About</NavLink>
            </li>
            <li className="menu-category">
            <NavLink className="nav-link menu-title" to="/contact">Contact</NavLink>
            </li>
            <li className="menu-category">
            <NavLink className="nav-link menu-title" to="/blog">Blog</NavLink>
            </li>
            <li className="menu-category">
            <NavLink className="nav-link menu-title" to="/blog">Hot Offers</NavLink>
            </li>
      </ul>
    </div>
  </nav>

  <div className="mobile-bottom-navigation">

    <button className="action-btn" data-mobile-menu-open-btn>
      <ion-icon name="menu-outline"></ion-icon>
    </button>

    <button className="action-btn">
      <ion-icon name="bag-handle-outline"></ion-icon>

      <span className="count">0</span>
    </button>

    <button className="action-btn">
      <ion-icon name="home-outline"></ion-icon>
    </button>

    <button className="action-btn">
      <ion-icon name="heart-outline"></ion-icon>

      <span className="count">0</span>
    </button>

    <button className="action-btn" data-mobile-menu-open-btn>
      <ion-icon name="grid-outline"></ion-icon>
    </button>

  </div>

  <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

    <div className="menu-top">
      <h2 className="menu-title">Menu</h2>

      <button className="menu-close-btn" data-mobile-menu-close-btn>
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </div>

    <div className="mobile-menu-category-list">

      <li className="menu-category">
        <a href="/product" className="menu-title">Home</a>
      </li>

      <li className="menu-category">

        <button className="accordion-menu" data-accordion-btn>
          <p className="menu-title">PRODUCTS</p>

          <div>
            <ion-icon name="add-outline" className="add-icon"></ion-icon>
            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
          </div>
        </button>

        <ul className="submenu-category-list" data-accordion>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">ETHNIC WEAR</a>
          </li>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Embroidered Lehengas</a>
          </li>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Seasonal Collections</a>
          </li>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">CASUAL WEAR</a>
          </li>

        </ul>

      </li>

      <li className="menu-category">

        <button className="accordion-menu" data-accordion-btn>
          <p className="menu-title">Outfits</p>

          <div>
            <ion-icon name="add-outline" className="add-icon"></ion-icon>
            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
          </div>
        </button>

        <ul className="submenu-category-list" data-accordion>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Kurta Sets</a>
          </li>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Earrings</a>
          </li>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Necklace</a>
          </li>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Makeup Kit</a>
          </li>

        </ul>

      </li>

      <li className="menu-category">

        <button className="accordion-menu" data-accordion-btn>
          <p className="menu-title">Jewelry</p>

          <div>
            <ion-icon name="add-outline" className="add-icon"></ion-icon>
            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
          </div>
        </button>

        <ul className="submenu-category-list" data-accordion>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Earrings</a>
          </li>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Couple Rings</a>
          </li>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Necklace</a>
          </li>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Bracelets</a>
          </li>

        </ul>

      </li>

      <li className="menu-category">

        <button className="accordion-menu" data-accordion-btn>
          <p className="menu-title">Perfume</p>

          <div>
            <ion-icon name="add-outline" className="add-icon"></ion-icon>
            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
          </div>
        </button>

        <ul className="submenu-category-list" data-accordion>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Clothes Perfume</a>
          </li>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Deodorant</a>
          </li>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Flower Fragrance</a>
          </li>

          <li className="submenu-category">
            <a href="/product" className="submenu-title">Air Freshener</a>
          </li>

        </ul>

      </li>

      <li className="menu-category">
        <a href="/product" className="menu-title">Blog</a>
      </li>

      <li className="menu-category">
        <a href="/product" className="menu-title">Hot Offers</a>
      </li>

    <ul className="menu-social-container">

        <li>
          <a href="/product" className="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li>
          <a href="/product" className="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li>
          <a href="/product" className="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>

        <li>
          <a href="/product" className="social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>

      </ul>
    </div>
      </nav>
        </>
    )
}

export default Navbar