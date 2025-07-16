import React from 'react'
import { NavLink } from 'react-router-dom';
import { MobileMenu } from './App';

const NavBar = ({ handleDonateNavClick }) => {
  return (
      <header>
    <div className="header-area ">
      <div className="header-top_area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-md-12 col-lg-8">
              <div className="short_contact_list">
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-phone" /> +1 (454) 556-5656
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-envelope" />
                      Yourmail@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-lg-4">
              <div className="social_media_links d-none d-lg-block">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-pinterest-p" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Restore the main-header-area div to its original place, not wrapped in StickyBox */}
      <div id="sticky-header" className="main-header-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 d-flex align-items-center justify-content-between">
              <div className="logo">
                <a href="index.html">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
              <MobileMenu />
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="main-menu">
                <nav>
                  <ul id="navigation">
                    <li>
                      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
                    </li>
                    <li>
                      <a href="#">
                        blog <i className="ti-angle-down" /></a>
                      <ul className="submenu">
                        <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>blog</NavLink></li>
                        <li><NavLink to="/single-blog" className={({ isActive }) => isActive ? 'active' : ''}>single-blog</NavLink></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        pages <i className="ti-angle-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <NavLink to="/element" className={({ isActive }) => isActive ? 'active' : ''}>Elements</NavLink>
                        </li>
                        <li>
                          <NavLink to="/cause" className={({ isActive }) => isActive ? 'active' : ''}>Cause</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="Appointment">
                  <div className="book_btn d-none d-lg-block">
                    <a onClick={handleDonateNavClick} href="#">
                      Make a Donate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default NavBar