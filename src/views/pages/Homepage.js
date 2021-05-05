/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import Sliders from "../../components/Sliders";
import MenuIcon from "@material-ui/icons/Menu";
import { Helmet } from "react-helmet";

const Homepage = () => {
  const [showmenu, setShowmenu] = useState(null);
  const handleOpenMenu = () => {
    if (showmenu === null) {
      setShowmenu("openNav");
    } else {
      setShowmenu(null);
    }
  };
  return (
    <div>
      {/* <Header /> */}
      <Helmet>
        <script src="/assets/vendor/jquery.mousewheel.min.js"></script>

        <script src="/assets/vendor/ytplayer/js/jquery.mb.YTPlayer.min.js"></script>

        <script src="/assets/vendor/lightgallery/js/lightgallery-all.min.js"></script>

        <script src="/assets/js/theme.js"></script>

        <script src="/assets/demo-panel/js/demo-panel.js"></script>
        <script src="/assets/demo-panel/js/styleswitch.js"></script>
      </Helmet>
      <div>
        {/* BEGIN DEMO PANEL (FOR DEMO SITE ONLY!) */}
        <div className="demo-panel">
          <div className="demo-panel-trigger">
            <span className="dpt-icon" />
            <span className="dpt-close" />
          </div>
          <div className="demo-panel-inner">
            <div className="demo-panel-header">Demo Panel</div>
            <div className="demo-panel-content">
              <div className="demo-panel-block light-sw-block">
                <h2 className="dp-heading">Light Switcher:</h2>
                <div className="light-switcher">
                  <div className="lsw-btn light-lsw-btn" title="Day Mode" />
                  <div className="lsw-btn dark-lsw-btn" title="Night Mode" />
                </div>
              </div>
              <div className="demo-panel-block rtl-sw-block">
                <h2 className="dp-heading">Round Style:</h2>
                <div className="round-switcher">
                  <div
                    className="roundsw-btn ltr-roundsw-btn"
                    title="Round style OFF"
                  >
                    OFF
                  </div>
                  <div
                    className="roundsw-btn round-roundsw-btn"
                    title="Round style ON"
                  >
                    ON
                  </div>
                </div>
              </div>
              <div className="demo-panel-block rtl-sw-block">
                <h2 className="dp-heading">RTL Mode:</h2>
                <div className="rtl-switcher">
                  <div
                    className="rtlsw-btn ltr-rtlsw-btn"
                    title="Left to right mode"
                  >
                    LTR
                  </div>
                  <div
                    className="rtlsw-btn rtl-rtlsw-btn"
                    title="Right to left mode"
                  >
                    RTL
                  </div>
                </div>
              </div>
              <div className="demo-panel-block">
                <h2 className="dp-heading">Color Switcher:</h2>
                <div className="skin-switcher">
                  <a
                    className="sksw-btn sksw-btn-default"
                    href="javascript:chooseStyle('none', 60)"
                    title="Default Skin"
                  />
                  <a
                    className="sksw-btn sksw-btn-red"
                    href="javascript:chooseStyle('skin-red', 60)"
                    data-class="tt-skin-red"
                    title="Red Skin"
                  />
                  <a
                    className="sksw-btn sksw-btn-green"
                    href="javascript:chooseStyle('skin-green', 60)"
                    data-class="tt-skin-green"
                    title="Green Skin"
                  />
                  <a
                    className="sksw-btn sksw-btn-blue"
                    href="javascript:chooseStyle('skin-blue', 60)"
                    data-class="tt-skin-blue"
                    title="Blue Skin"
                  />
                  <a
                    className="sksw-btn sksw-btn-orange"
                    href="javascript:chooseStyle('skin-orange', 60)"
                    data-class="tt-skin-orange"
                    title="Orange Skin"
                  />
                  <a
                    className="sksw-btn sksw-btn-purple"
                    href="javascript:chooseStyle('skin-purple', 60)"
                    data-class="tt-skin-purple"
                    title="Purple Skin"
                  />
                  <a
                    className="sksw-btn sksw-btn-pink"
                    href="javascript:chooseStyle('skin-pink', 60)"
                    data-class="tt-skin-pink"
                    title="Pink Skin"
                  />
                  <a
                    className="sksw-btn sksw-btn-brown"
                    href="javascript:chooseStyle('skin-brown', 60)"
                    data-class="tt-skin-brown"
                    title="Brown Skin"
                  />
                </div>
              </div>
              <a
                className="demo-panel-btn"
                href="https://themeforest.net/item/sepia-photography-portfolio-html-website-template/20195226?ref=Themetorium"
                target="_blank"
                title="Buy This Theme Now!"
              >
                Buy Now!
              </a>
            </div>
          </div>
        </div>

        <header
          id="header"
          className="header-show-hide-on-scroll menu-align-right"
        >
          <div className="header-inner tt-wrap">
            <div id="logo">
              <a href="index.html" className="logo-dark">
                <img src="media/logo-dark.png" alt="logo" />
              </a>
              <a href="index.html" className="logo-light">
                <img src="assets/img/logo-light.png" alt="logo" />
              </a>
              {/* for small screens */}
              <a href="index.html" className="logo-dark-m">
                <img src="assets/img/logo-dark-m.png" alt="logo" />
              </a>
              <a href="index.html" className="logo-light-m">
                <img src="assets/img/logo-light-m.png" alt="logo" />
              </a>
            </div>
            {/* End logo */}
            {/* ====================
				//// Begin main menu ////
				===================== */}
            <nav className="tt-main-menu">
              {/* Begin mobile menu toggle button */}
              <div id="tt-m-menu-toggle-btn">
                <span />
              </div>
              {/* End mobile menu toggle button */}
              {/* Begin menu tools 
					====================== */}
              <div className="tt-menu-tools">
                <ul>
                  {/* Begin search */}
                  <li>
                    <a href="#" className="tt-clobal-search-trigger">
                      <i className="fas fa-search" />
                    </a>
                    <div className="tt-clobal-search">
                      <div className="tt-clobal-search-inner">
                        <span className="tt-clobal-search-title">Search</span>
                        <form
                          id="tt-clobal-search-form"
                          className="form-btn-inside"
                          method="get"
                          action="https://demo.themetorium.net/html/sepia/search-results.html"
                        >
                          <input
                            type="text"
                            id="tt-clobal-search-input"
                            name="search"
                            placeholder="Type your keywords ..."
                          />
                          <button type="submit">
                            <i className="fas fa-search" />
                          </button>
                        </form>
                      </div>
                      {/* /.tt-clobal-search-inner */}
                      <div className="tt-clobal-search-close">
                        <i className="tt-close-btn tt-close-light" />
                      </div>
                    </div>
                    {/* /.tt-clobal-search */}
                  </li>
                  {/* End search */}
                  {/* Begin tt-dropdown (languages) 
							===================================
							* Use class "tt-dropdown-dark" to enable dropdown dark style.
							*/}
                  <li className="tt-dropdown-wrap tt-dropdown-master tt-dropdown-dark tt-dropdown-right tt-tools-lang">
                    <a href="#0">
                      <img src="assets/img/flags/gb.png" alt="English" /> EN
                    </a>
                    <ul className="tt-dropdown">
                      <li>
                        <a href="#" title="English">
                          <img src="assets/img/flags/gb.png" alt="English" /> EN
                        </a>
                      </li>
                      <li>
                        <a href="#" title="French">
                          <img src="assets/img/flags/fr.png" alt="French" /> FR
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Deutsch">
                          <img src="assets/img/flags/de.png" alt="Deutsch" /> DE
                        </a>
                      </li>
                    </ul>
                    {/* /.tt-dropdown */}
                  </li>
                  {/* End tt-dropdown */}
                  {/* Begin call to action button */}
                  <li>
                    <a
                      href="https://themeforest.net/item/sepia-photography-portfolio-html-website-template/20195226?ref=Themetorium"
                      className="tt-tools-button"
                      target="_blank"
                    >
                      Hire<span className="hide-from-sm"> A Photographer</span>!
                    </a>
                  </li>
                  {/* End call to action button */}
                </ul>
              </div>
              {/* End menu tools */}
              {/* Collect the nav links for toggling 
					========================================
					* Use class "tt-submenu-dark" to enable submenu dark style.
					*/}
              <div className="tt-menu-collapse tt-submenu-dark">
                <ul className="tt-menu-nav">
                  {/* Begin submenu (submenu master)
							==================================== */}
                  <li className="tt-submenu-wrap tt-submenu-master">
                    <a href="#0">Home</a>
                    <ul className="tt-submenu">
                      <li>
                        <a href="home-landing.html">Home Landing</a>
                      </li>
                      <li>
                        <a href="home-intro-slideshow.html">Slideshow</a>
                      </li>
                      <li>
                        <a href="albums-slideshow.html">Slideshow + Thumb.</a>
                      </li>
                      <li>
                        <a href="home-intro-full-screen.html">
                          Full Screen Slideshow
                        </a>
                      </li>
                      <li>
                        <a href="categories-carousel.html">
                          Categories Carousel
                        </a>
                      </li>
                      <li>
                        <a href="home-intro-image.html">Static Image Intro</a>
                      </li>
                      <li>
                        <a href="home-intro-video.html">Video Intro</a>
                      </li>
                      <li>
                        <a href="home-intro-video-full-screen.html">
                          Full Screen Video Intro
                        </a>
                      </li>
                    </ul>
                    {/* /.tt-submenu */}
                  </li>
                  {/* End submenu (sub-master) */}
                  {/* Begin submenu (submenu master)
							==================================== */}
                  <li className="tt-submenu-wrap tt-submenu-master">
                    <a href="/#about-me-section">About</a>
                    <ul className="tt-submenu">
                      <li>
                        <a href="about-me.html">About Me</a>
                      </li>
                      <li>
                        <a href="about-me-fluid.html">About Me Fluid</a>
                      </li>
                      <li>
                        <a href="about-me-2.html">About Me 2</a>
                      </li>
                      <li>
                        <a href="about-me-2-fluid.html">About Me 2 Fluid</a>
                      </li>
                    </ul>
                    {/* /.tt-submenu */}
                  </li>
                  {/* End submenu (sub-master) */}
                  {/* Begin submenu (submenu master)
							==================================== */}
                  <li className="tt-submenu-wrap tt-submenu-master">
                    <a href="/#gallery-list-section">Portfolio</a>
                    <ul className="tt-submenu">
                      {/* Begin submenu
									=================== */}
                      <li className="tt-submenu-wrap">
                        <a href="#0">Albums</a>
                        <ul className="tt-submenu">
                          {/* Begin submenu
											=================== */}
                          <li className="tt-submenu-wrap">
                            <a href="#0">Grid</a>
                            <ul className="tt-submenu">
                              <li>
                                <a href="albums-grid.html">Grid Default</a>
                              </li>
                              <li>
                                <a href="albums-grid-2.html">Grid 2</a>
                              </li>
                              <li>
                                <a href="albums-grid-fluid.html">Grid Fluid</a>
                              </li>
                              <li>
                                <a href="albums-grid-fluid-2.html">
                                  Grid Fluid 2
                                </a>
                              </li>
                              <li>
                                <a href="albums-grid-fluid-3.html">
                                  Grid Fluid 3
                                </a>
                              </li>
                              <li>
                                <a href="albums-grid-fluid-4.html">
                                  Grid Fluid 4
                                </a>
                              </li>
                              <li>
                                <a href="albums-grid-no-crop.html">
                                  Grid No Crop
                                </a>
                              </li>
                              <li>
                                <a href="albums-grid-simple.html">
                                  Grid Simple
                                </a>
                              </li>
                              <li>
                                <a href="albums-grid-styles.html">
                                  Grid Item Styles
                                </a>
                              </li>
                            </ul>
                            {/* /.tt-submenu */}
                          </li>
                          {/* End submenu */}
                          {/* Begin submenu
											=================== */}
                          <li className="tt-submenu-wrap">
                            <a href="#0">Carousel</a>
                            <ul className="tt-submenu">
                              <li>
                                <a href="albums-carousel.html">
                                  Albums Carousel
                                </a>
                              </li>
                              <li>
                                <a href="albums-carousel-no-crop.html">
                                  Carousel No Crop
                                </a>
                              </li>
                              <li>
                                <a href="albums-carousel-split.html">
                                  Carousel Split
                                </a>
                              </li>
                            </ul>
                            {/* /.tt-submenu */}
                          </li>
                          {/* End submenu */}
                          {/* Begin submenu
											=================== */}
                          <li className="tt-submenu-wrap">
                            <a href="#0">Archive</a>
                            <ul className="tt-submenu">
                              <li>
                                <a href="albums-archive.html">
                                  Archive Default
                                </a>
                              </li>
                              <li>
                                <a href="albums-archive-fluid.html">
                                  Archive Fluid
                                </a>
                              </li>
                              <li>
                                <a href="albums-archive-fluid-2.html">
                                  Archive Fluid 2
                                </a>
                              </li>
                            </ul>
                            {/* /.tt-submenu */}
                          </li>
                          {/* End submenu */}
                          <li>
                            <a href="albums-one-column.html">One Column</a>
                          </li>
                          <li>
                            <a href="albums-one-column-fluid.html">
                              One Column Fluid
                            </a>
                          </li>
                          <li>
                            <a href="albums-slideshow.html">
                              Slideshow + Thumb.
                            </a>
                          </li>
                          <li>
                            <a href="albums-thumbnails-list.html">
                              Thumbnails List
                            </a>
                          </li>
                        </ul>
                        {/* /.tt-submenu */}
                      </li>
                      {/* End submenu */}
                      {/* Begin submenu
									=================== */}
                      <li className="tt-submenu-wrap">
                        <a href="#0">Gallery</a>
                        <ul className="tt-submenu">
                          {/* Begin submenu
											=================== */}
                          <li className="tt-submenu-wrap">
                            <a href="#0">Gallery Carousel</a>
                            <ul className="tt-submenu">
                              <li>
                                <a href="gallery-single-carousel.html">
                                  Carousel Default
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-carousel-2.html">
                                  Carousel + Info
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-carousel-center.html">
                                  Carousel Center
                                </a>
                              </li>
                            </ul>
                            {/* /.tt-submenu */}
                          </li>
                          {/* End submenu */}
                          {/* Begin submenu
											=================== */}
                          <li className="tt-submenu-wrap">
                            <a href="#0">Gallery Grid</a>
                            <ul className="tt-submenu">
                              <li>
                                <a href="gallery-single-grid.html">
                                  Grid Default
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-grid-2.html">Grid 2</a>
                              </li>
                              <li>
                                <a href="gallery-single-grid-cropped.html">
                                  Grid Cropped
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-grid-fluid.html">
                                  Grid Fluid
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-grid-fluid-2.html">
                                  Grid Fluid 2
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-grid-fluid-2-cropped.html">
                                  Grid Fluid 2 Cropped
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-grid-fluid-3.html">
                                  Grid Fluid 3
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-grid-fluid-3-cropped.html">
                                  Grid Fluid 3 Cropped
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-grid-simple.html">
                                  Grid Simple
                                </a>
                              </li>
                            </ul>
                            {/* /.tt-submenu */}
                          </li>
                          {/* End submenu */}
                          {/* Begin submenu
											=================== */}
                          <li className="tt-submenu-wrap">
                            <a href="#0">Gallery + Sidebar</a>
                            <ul className="tt-submenu">
                              <li>
                                <a href="gallery-single-sidebar-left.html">
                                  Sidebar Left
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-sidebar-left-simple.html">
                                  Sidebar Left Simple
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-sidebar-right.html">
                                  Sidebar Right
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-sidebar-right-simple.html">
                                  Sidebar Right Simple
                                </a>
                              </li>
                            </ul>
                            {/* /.tt-submenu */}
                          </li>
                          {/* End submenu */}
                          {/* Begin submenu
											=================== */}
                          <li className="tt-submenu-wrap">
                            <a href="#0">Gallery Styles</a>
                            <ul className="tt-submenu">
                              <li>
                                <a href="gallery-single-grid-style-default.html">
                                  Default
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-grid-style-colored.html">
                                  Colored
                                </a>
                              </li>
                              <li>
                                <a href="gallery-single-grid-style-zoom-only.html">
                                  Zoom Only
                                </a>
                              </li>
                            </ul>
                            {/* /.tt-submenu */}
                          </li>
                          {/* End submenu */}
                        </ul>
                        {/* /.tt-submenu */}
                      </li>
                      {/* End submenu */}
                      {/* Begin submenu
									=================== */}
                      <li className="tt-submenu-wrap">
                        <a href="#0">Categories</a>
                        <ul className="tt-submenu">
                          <li>
                            <a href="categories-carousel.html">Carousel</a>
                          </li>
                          <li>
                            <a href="categories-grid.html">Grid</a>
                          </li>
                          <li>
                            <a href="categories-grid-fluid.html">Grid Fluid</a>
                          </li>
                          <li>
                            <a href="categories-grid-fluid-2.html">
                              Grid Fluid 2
                            </a>
                          </li>
                          <li>
                            <a href="categories-grid-fluid-3.html">
                              Grid Fluid 3
                            </a>
                          </li>
                        </ul>
                        {/* /.tt-submenu */}
                      </li>
                      {/* End submenu */}
                    </ul>
                    {/* /.tt-submenu */}
                  </li>
                  {/* End submenu (sub-master) */}
                  {/* Begin submenu (submenu master)
							==================================== */}
                  <li className="tt-submenu-wrap tt-submenu-master">
                    <a href="#0">Blog</a>
                    <ul className="tt-submenu">
                      {/* Begin submenu
									=================== */}
                      <li className="tt-submenu-wrap">
                        <a href="#0">Blog List</a>
                        <ul className="tt-submenu">
                          <li>
                            <a href="blog-list-classic.html">Classic</a>
                          </li>
                          <li>
                            <a href="blog-list-simple.html">Classic Simple</a>
                          </li>
                          <li>
                            <a href="blog-list-grid.html">Grid</a>
                          </li>
                          <li>
                            <a href="blog-list-grid-fluid.html">Grid Fluid</a>
                          </li>
                          <li>
                            <a href="blog-list-grid-no-sidebar.html">
                              Grid No Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="tt-submenu-wrap">
                        <a href="#0">Blog Single Post</a>
                        <ul className="tt-submenu">
                          <li>
                            <a href="blog-single.html">Default</a>
                          </li>
                          <li>
                            <a href="blog-single-alter.html">Alternate</a>
                          </li>
                          <li>
                            <a href="blog-single-simple.html">Simple</a>
                          </li>
                        </ul>
                        {/* /.tt-submenu */}
                      </li>
                      {/* End submenu */}
                      {/* Begin submenu
									=================== */}
                      <li className="tt-submenu-wrap">
                        <a href="#0">Blog Archive</a>
                        <ul className="tt-submenu">
                          <li>
                            <a href="blog-archive.html">Archive Default</a>
                          </li>
                          <li>
                            <a href="blog-archive-2.html">Archive Classic</a>
                          </li>
                          <li>
                            <a href="blog-archive-3.html">Archive Grid</a>
                          </li>
                        </ul>
                        {/* /.tt-submenu */}
                      </li>
                      {/* End submenu */}
                    </ul>
                    {/* /.tt-submenu */}
                  </li>

                  <li className="tt-submenu-wrap tt-submenu-master">
                    <a href="#0">Contact</a>
                    <ul className="tt-submenu">
                      <li>
                        <a href="contact.html">Contact Default</a>
                      </li>
                      <li>
                        <a href="contact-fluid.html">Contact Fluid</a>
                      </li>
                      <li>
                        <a href="contact-simple.html">Contact Simple</a>
                      </li>
                    </ul>
                    {/* /.tt-submenu */}
                  </li>

                  <li className="tt-submenu-wrap tt-submenu-master">
                    <a href="#0">More</a>
                    <ul className="tt-submenu">
                      {/* Begin submenu
									=================== */}
                      <li className="tt-submenu-wrap">
                        <a href="#0">Dummy Pages</a>
                        <ul className="tt-submenu">
                          <li>
                            <a href="page-dummy-classic.html">No Sidebar</a>
                          </li>
                          <li>
                            <a href="page-dummy-classic-sidebar-left.html">
                              Sidebar Left
                            </a>
                          </li>
                          <li>
                            <a href="page-dummy-classic-sidebar-right.html">
                              Sidebar Right
                            </a>
                          </li>
                          <li>
                            <a href="page-dummy-modern.html">Modern</a>
                          </li>
                        </ul>
                        {/* /.tt-submenu */}
                      </li>
                      {/* End submenu */}
                      <li>
                        <a href="page-404.html">404 Error</a>
                      </li>
                      <li>
                        <a href="page-404-2.html">404 Error 2</a>
                      </li>
                      <li>
                        <a href="page-faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="page-pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="search-results.html">Search Results</a>
                      </li>
                      <li>
                        <a href="page-password.html">Password Protected</a>
                      </li>
                      <li>
                        <a href="footer-styles.html">Footer Styles</a>
                      </li>
                    </ul>
                    {/* /.tt-submenu */}
                  </li>
                  {/* End submenu (sub-master) */}
                </ul>
                {/* /.tt-menu-nav */}
              </div>
              {/* /.tt-menu-collapse */}
            </nav>
            {/* End main menu */}
          </div>
          {/* End header inner */}
        </header>

        <div id="body-content">
          <section id="tt-intro" className="slideshow-intro">
            <div className="tt-intro-inner">
              <div className="gl-carousel-wrap no-padding">
                <div
                  className="owl-carousel cc-height-5 cursor-grab dots-right bg-dark"
                  data-items={1}
                  data-loop="true"
                  data-nav="true"
                  data-nav-speed={500}
                  data-dots-speed={500}
                  data-autoplay="true"
                  data-autoplay-timeout={8000}
                  data-autoplay-speed={500}
                  data-autoplay-hover-pause="true"
                >
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Element cover */}
                    <span className="cover bg-transparent-3-dark" />
                    {/* cc image */}
                    <div
                      className="cc-image bg-image"
                      style={{
                        backgroundImage: "url(assets/img/intro/intro-10.jpg)",
                        backgroundPosition: "50% 50%",
                      }}
                    />

                    <div className="intro-caption caption-animate intro-caption-xxlg center-left">
                      <h1 className="intro-title">Ogaphoto</h1>
                      <h2 className="intro-subtitle">
                        Photography Portfolio Theme
                      </h2>
                      <p className="intro-description max-width-650">
                        Made for photographers, photo studios, design agencies.
                        <br />
                        Create your own unique and beautiful photography
                        website!
                      </p>
                      <div className="margin-top-30">
                        <a
                          href="https://themeforest.net/item/sepia-photography-portfolio-html-website-template/20195226?ref=Themetorium"
                          className="btn btn-primary margin-top-5 margin-right-10"
                          target="_blank"
                        >
                          Book Now!
                        </a>
                        <a
                          href="albums-grid-fluid-2.html"
                          className="btn btn-white-bordered margin-top-5"
                        >
                          Discover More
                        </a>
                      </div>
                    </div>
                    {/* End intro caption */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Element cover */}
                    <span className="cover bg-transparent-3-dark" />
                    {/* cc image */}
                    <div
                      className="cc-image bg-image"
                      style={{
                        backgroundImage: "url(assets/img/intro/intro-11.jpg)",
                        backgroundPosition: "50% 50%",
                      }}
                    />

                    <div className="intro-caption caption-animate intro-caption-xxlg center-left">
                      <h1 className="intro-title">Creative</h1>
                      <h2 className="intro-subtitle">
                        Photography Portfolio Theme
                      </h2>
                      <p className="intro-description max-width-650">
                        Made for photographers, photo studios, design agencies.
                        <br />
                        Create your own unique and beautiful photography
                        website!
                      </p>
                      <div className="margin-top-30">
                        <a
                          href="https://themeforest.net/item/sepia-photography-portfolio-html-website-template/20195226?ref=Themetorium"
                          className="btn btn-primary margin-top-5 margin-right-10"
                          target="_blank"
                        >
                          Buy It Now!
                        </a>
                        <a
                          href="albums-grid-fluid-2.html"
                          className="btn btn-white-bordered margin-top-5"
                        >
                          Discover More
                        </a>
                      </div>
                    </div>
                    {/* End intro caption */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Element cover */}
                    <span className="cover bg-transparent-3-dark" />
                    {/* cc image */}
                    <div
                      className="cc-image bg-image"
                      style={{
                        backgroundImage: "url(assets/img/intro/intro-12.jpg)",
                        backgroundPosition: "50% 50%",
                      }}
                    />

                    <div className="intro-caption caption-animate intro-caption-xxlg center-left">
                      <h1 className="intro-title">Powerful</h1>
                      <h2 className="intro-subtitle">
                        Photography Portfolio Theme
                      </h2>
                      <p className="intro-description max-width-650">
                        Made for photographers, photo studios, design agencies.
                        <br />
                        Create your own unique and beautiful photography
                        website!
                      </p>
                      <div className="margin-top-30">
                        <a
                          href="https://themeforest.net/item/sepia-photography-portfolio-html-website-template/20195226?ref=Themetorium"
                          className="btn btn-primary margin-top-5 margin-right-10"
                          target="_blank"
                        >
                          Buy It Now!
                        </a>
                        <a
                          href="albums-grid-fluid-2.html"
                          className="btn btn-white-bordered margin-top-5"
                        >
                          Discover More
                        </a>
                      </div>
                    </div>
                    {/* End intro caption */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Element cover */}
                    <span className="cover bg-transparent-3-dark" />
                    {/* cc image */}
                    <div
                      className="cc-image bg-image"
                      style={{
                        backgroundImage: "url(assets/img/intro/intro-13.jpg)",
                        backgroundPosition: "50% 50%",
                      }}
                    />

                    <div className="intro-caption caption-animate intro-caption-xxlg center-left">
                      <h1 className="intro-title">Perfect</h1>
                      <h2 className="intro-subtitle">
                        Photography Portfolio Theme
                      </h2>
                      <p className="intro-description max-width-650">
                        Made for photographers, photo studios, design agencies.
                        <br />
                        Create your own unique and beautiful photography
                        website!
                      </p>
                      <div className="margin-top-30">
                        <a
                          href="https://themeforest.net/item/sepia-photography-portfolio-html-website-template/20195226?ref=Themetorium"
                          className="btn btn-primary margin-top-5 margin-right-10"
                          target="_blank"
                        >
                          Buy It Now!
                        </a>
                        <a
                          href="albums-grid-fluid-2.html"
                          className="btn btn-white-bordered margin-top-5"
                        >
                          Discover More
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* End carousel item */}
                </div>
                {/* End content carousel */}
              </div>
              {/* /.gl-carousel-wrap */}
            </div>
            {/* /.tt-intro-inner */}
          </section>

          <section id="about-me-section">
            <div className="about-me-inner">
              <div className="split-box about-me">
                <div className="container-fluid">
                  <div className="row">
                    <div className="row-lg-height">
                      <div
                        className="col-lg-5 col-lg-height split-box-image no-padding bg-image"
                        style={{
                          backgroundImage: "url(assets/img/misc/me-2.jpg)",
                          backgroundPosition: "50% 50%",
                        }}
                      >
                        <div className="sbi-height padding-height-80" />
                      </div>

                      <div className="col-lg-7 col-lg-height col-lg-middle no-padding">
                        <div
                          className="full-cover for-light-style bg-gray-3 bg-image"
                          style={{
                            backgroundImage:
                              "url(assets/img/pattern/bg-pattern-1-light.png)",
                            backgroundPosition: "50% 50%",
                          }}
                        />
                        <div
                          className="full-cover for-dark-style bg-gray-3 bg-image"
                          style={{
                            backgroundImage:
                              "url(assets/img/pattern/bg-pattern-1-dark.png)",
                            backgroundPosition: "50% 50%",
                          }}
                        />

                        <div className="split-box-content sb-content-right">
                          <div className="tt-heading">
                            <div className="tt-heading-inner">
                              <h1 className="tt-heading-title">About</h1>
                              <div className="tt-heading-subtitle">
                                Who I am and what I do
                              </div>
                              <hr className="hr-short" />
                            </div>
                            {/* /.tt-heading-inner */}
                          </div>
                          {/* End tt-heading */}
                          <div className="margin-top-30">
                            <p>
                              Hi, my name is <strong>Martin Vegas</strong>. I am
                              an artist and photographer. Nemo enim ipsam
                              voluptatem quia voluptas aspernatur aut odit aut
                              fugit. Vivamus at nibh tincidunt, bibendum ligula
                              id. Nemo enim ipsam voluptatem quiatotam rem
                              aperiam, eaque ipsa quae ab illo inventore
                              veritatis et quasi architecto beatae vitae dicta
                              sunt explicabo. Nemo enim ipsam voluptatem.
                            </p>
                          </div>
                          <a
                            href="about-me-fluid.html"
                            className="btn btn-primary margin-top-20"
                          >
                            Read More
                          </a>
                          <a
                            href="contact.html"
                            className="btn btn-dark margin-top-20"
                          >
                            Hire Me!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="gallery-list-section">
            <div className="tt-heading tt-heading-lg padding-on text-center">
              <div className="tt-heading-inner tt-wrap">
                {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
                <h1 className="tt-heading-title">Latest Works</h1>
                <div className="tt-heading-subtitle">
                  My latest photo projects /
                  <a href="categories-grid.html">View All</a>
                </div>
                <hr className="hr-short" />
              </div>
              {/* /.tt-heading-inner */}
            </div>
            {/* End tt-heading */}
            <div className="isotope-wrap">
              <div className="isotope col-4">
                <div className="isotope-items-wrap gli-colored gli-alter-4">
                  <div className="grid-sizer" />

                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a
                          href="gallery-single-grid.html"
                          className="gl-item-image-inner"
                        >
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage:
                                "url(assets/img/gallery/gallery-list/gallery-list-1.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">49</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="gallery-single-grid.html">
                              The Old Man Dreams
                            </a>
                          </h2>
                          <span className="gl-item-category">
                            <a href="albums-archive.html">Outdoor</a>
                          </span>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a
                          href="gallery-single-grid.html"
                          className="gl-item-image-inner"
                        >
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage:
                                "url(assets/img/gallery/gallery-list/gallery-list-2.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          {/* <li>
												<div class="img-count" title="Image count"><i class="fas fa-camera"></i> 32</div>
											</li> */}
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">85</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="gallery-single-grid.html">
                              These Wonderful Freckles
                            </a>
                          </h2>
                          <span className="gl-item-category">
                            <a href="albums-archive.html">Black &amp; White</a>
                          </span>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a
                          href="gallery-single-grid.html"
                          className="gl-item-image-inner"
                        >
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage:
                                "url(assets/img/gallery/gallery-list/gallery-list-3.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          {/* <li>
												<div class="img-count" title="Image count"><i class="fas fa-camera"></i> 32</div>
											</li> */}
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">7</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="gallery-single-grid.html">
                              Paris Fashion Week
                            </a>
                          </h2>
                          <span className="gl-item-category">
                            <a href="albums-archive.html">Fashion</a>
                          </span>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a
                          href="gallery-single-grid.html"
                          className="gl-item-image-inner"
                        >
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage:
                                "url(assets/img/gallery/gallery-list/gallery-list-4.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          {/* <li>
												<div class="img-count" title="Image count"><i class="fas fa-camera"></i> 32</div>
											</li> */}
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">12</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="gallery-single-grid.html">
                              Afternoon Photoshoot
                            </a>
                          </h2>
                          <span className="gl-item-category">
                            <a href="albums-archive.html">Outdoor</a>
                          </span>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a
                          href="gallery-single-grid.html"
                          className="gl-item-image-inner"
                        >
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage:
                                "url(assets/img/gallery/gallery-list/gallery-list-5.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          {/* <li>
												<div class="img-count" title="Image count"><i class="fas fa-camera"></i> 32</div>
											</li> */}
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">96</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="gallery-single-grid.html">
                              Sit Back and Relax
                            </a>
                          </h2>
                          <span className="gl-item-category">
                            <a href="albums-archive.html">Portraits</a>
                          </span>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a
                          href="gallery-single-grid.html"
                          className="gl-item-image-inner"
                        >
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage:
                                "url(assets/img/gallery/gallery-list/gallery-list-6.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          {/* <li>
												<div class="img-count" title="Image count"><i class="fas fa-camera"></i> 32</div>
											</li> */}
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">56</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="gallery-single-grid.html">
                              Something In The Water vol.2
                            </a>
                          </h2>
                          <span className="gl-item-category">
                            <a href="albums-archive.html">Fashion</a>,
                            <a href="albums-archive.html">Outdoor</a>
                          </span>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a
                          href="gallery-single-grid.html"
                          className="gl-item-image-inner"
                        >
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage:
                                "url(assets/img/gallery/gallery-list/gallery-list-7.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          {/* <li>
												<div class="img-count" title="Image count"><i class="fas fa-camera"></i> 32</div>
											</li> */}
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">53</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="gallery-single-grid.html">Autumn Nights</a>
                          </h2>
                          <span className="gl-item-category">
                            <a href="albums-archive.html">Outdoor</a>
                          </span>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a
                          href="gallery-single-grid.html"
                          className="gl-item-image-inner"
                        >
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage:
                                "url(assets/img/gallery/gallery-list/gallery-list-8.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          {/* <li>
												<div class="img-count" title="Image count"><i class="fas fa-camera"></i> 32</div>
											</li> */}
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">71</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="gallery-single-grid.html">
                              Beauty &amp; Fashion
                            </a>
                          </h2>
                          <span className="gl-item-category">
                            <a href="albums-archive.html">Fashion</a>
                          </span>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a
                          href="gallery-single-grid.html"
                          className="gl-item-image-inner"
                        >
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage:
                                "url(assets/img/gallery/gallery-list/gallery-list-9.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          {/* <li>
												<div class="img-count" title="Image count"><i class="fas fa-camera"></i> 32</div>
											</li> */}
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">68</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="gallery-single-grid.html">
                              No Colors This Time
                            </a>
                          </h2>
                          <span className="gl-item-category">
                            <a href="albums-archive.html">Black &amp; White</a>
                          </span>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a
                          href="gallery-single-grid.html"
                          className="gl-item-image-inner"
                        >
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage:
                                "url(assets/img/gallery/gallery-list/gallery-list-10.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          {/* <li>
												<div class="img-count" title="Image count"><i class="fas fa-camera"></i> 32</div>
											</li> */}
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">32</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="gallery-single-grid.html">
                              Monday's Monochromes
                            </a>
                          </h2>
                          <span className="gl-item-category">
                            <a href="albums-archive.html">Outdoor</a>
                          </span>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a
                          href="gallery-single-grid.html"
                          className="gl-item-image-inner"
                        >
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage:
                                "url(assets/img/gallery/gallery-list/gallery-list-11.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          {/* <li>
												<div class="img-count" title="Image count"><i class="fas fa-camera"></i> 32</div>
											</li> */}
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">13</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="gallery-single-grid.html">
                              Something In The Water
                            </a>
                          </h2>
                          <span className="gl-item-category">
                            <a href="albums-archive.html">Fashion</a>,
                            <a href="albums-archive.html">Portraits</a>
                          </span>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a
                          href="gallery-single-grid.html"
                          className="gl-item-image-inner"
                        >
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage:
                                "url(assets/img/gallery/gallery-list/gallery-list-12.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          {/* <li>
												<div class="img-count" title="Image count"><i class="fas fa-camera"></i> 32</div>
											</li> */}
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">11</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="gallery-single-grid.html">
                              Beautiful Bride
                            </a>
                          </h2>
                          <span className="gl-item-category">
                            <a href="albums-archive.html">Outdoor</a>,
                            <a href="albums-archive.html">Fashion</a>
                          </span>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                </div>
                {/* End isotope items wrap */}
                {/* Begin isotope pagination 
						============================== */}
                {/* <div class="isotope-pagination">
							<div class="iso-load-more">
								<a class="btn btn-dark-bordered btn-lg" href="">View More <i class="fas fa-refresh"></i></a>
							</div>
						</div> */}
                {/* End isotope pagination */}
              </div>
              {/* End isotope */}
            </div>
            {/* /.isotope-wrap */}
          </section>
          {/* End gallery list section */}
          {/* ===========================
			///// Begin prices section /////
			============================ */}
          <section id="prices-section">
            {/* Begin tt-heading 
				====================== 
				* Use class "padding-on" to enable heading paddings (useful if you use tt-heading as stand alone element).
				* Use class "text-center" or "text-right" to align tt-heading.
				* Use classes "tt-heading-xs", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set tt-heading size.
				*/}
            <div className="tt-heading tt-heading-lg padding-on">
              <div className="tt-heading-inner tt-wrap">
                {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
                <div className="row">
                  <div className="col-md-4">
                    <h1 className="tt-heading-title">Services &amp; Pricing</h1>
                    <div className="tt-heading-subtitle">
                      Please choose your package
                    </div>
                    <hr className="hr-short" />
                  </div>
                  {/* /.col */}
                  <div className="col-md-8">
                    <p>
                      Nunc euismod ipsum vel metus rhoncus, a accumsan sapien
                      mollis. Donec malesuada lacus rhoncus ipsum dignissim, sed
                      fringilla orci faucibus. Proin non odio dui. Donec ut
                      tristique dolor, at interdum sem. Quisque finibus viverra
                      lectus vitae pulvinar.
                    </p>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.tt-heading-inner */}
            </div>
            {/* End tt-heading */}
            <div className="prices-section-inner tt-wrap">
              {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
              {/* Begin price boxes container 
					================================= */}
              <div className="price-boxes-container margin-bottom-80">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    {/* Begin price box */}
                    <div className="price-box">
                      <div
                        className="pr-box price-heading bg-image"
                        style={{
                          backgroundImage:
                            "url(assets/img/misc/price-box-1.jpg)",
                        }}
                      >
                        <div className="price-heading-inner">
                          <i className="fas fa-umbrella" />
                          <h3 className="price-title">Studio</h3>
                          <div className="price-heading-text">
                            Studio Photo Session
                          </div>
                        </div>
                      </div>
                      <div className="pr-box price-box-price">
                        <div className="price">
                          <span className="price-currency">$</span>59
                        </div>
                        {/* <div class="price-tenure">Per 1 Month</div> */}
                      </div>
                      <div className="pr-box price-features">
                        <ul className="list-unstyled">
                          <li>Ascimo Ellan Tareck</li>
                          <li>Fitrim Namzeck</li>
                          <li>Fartimo antera Maunos</li>
                        </ul>
                      </div>
                      <div className="pr-box">
                        <a
                          href="contact.html"
                          className="btn btn-price-box btn-dark btn-lg"
                        >
                          Purchase Now
                        </a>
                        <a
                          href="page-dummy-classic-sidebar-right.html"
                          className="btn btn-link btn-lg btn-block"
                        >
                          or Read More...
                        </a>
                      </div>
                    </div>
                    {/* End price box */}
                  </div>
                  {/* /.col */}
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    {/* Begin price box (featured) */}
                    <div className="price-box price-box-featured">
                      <div
                        className="pr-box price-heading bg-image"
                        style={{
                          backgroundImage:
                            "url(assets/img/misc/price-box-2.jpg)",
                        }}
                      >
                        <div className="price-heading-inner">
                          <i className="fas fa-tree" />
                          <h3 className="price-title">Outdoor</h3>
                          <div className="price-heading-text">
                            Outdoor Photo Session
                          </div>
                        </div>
                      </div>
                      <div className="pr-box price-box-price">
                        <div className="price">
                          <span className="price-currency">$</span>89
                        </div>
                        {/* <div class="price-tenure">Per 6 Month</div> */}
                      </div>
                      <div className="pr-box price-features">
                        <ul className="list-unstyled">
                          <li>Cunning Fuziness</li>
                          <li>Lartem Sainter Omna</li>
                          <li>Bullerti Naiten</li>
                        </ul>
                      </div>
                      <div className="pr-box">
                        <a
                          href="contact.html"
                          className="btn btn-price-box btn-dark btn-lg"
                        >
                          Purchase Now
                        </a>
                        <a
                          href="page-dummy-classic-sidebar-right.html"
                          className="btn btn-link btn-lg btn-block"
                        >
                          or Read More...
                        </a>
                      </div>
                    </div>
                    {/* End price box */}
                  </div>
                  {/* /.col */}
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    {/* Begin price box */}
                    <div className="price-box">
                      <div
                        className="pr-box price-heading bg-image"
                        style={{
                          backgroundImage:
                            "url(assets/img/misc/price-box-3.jpg)",
                        }}
                      >
                        <div className="price-heading-inner">
                          <i className="fas fa-user" />
                          <h3 className="price-title">Personal</h3>
                          <div className="price-heading-text">
                            Personal Photo Session
                          </div>
                        </div>
                      </div>
                      <div className="pr-box price-box-price">
                        <div className="price">
                          <span className="price-currency">$</span>129
                        </div>
                        {/* <div class="price-tenure">Per 1 Year</div> */}
                      </div>
                      <div className="pr-box price-features">
                        <ul className="list-unstyled">
                          <li>Artemize Naice Femme</li>
                          <li>
                            <strong>Putras Torrim</strong>
                          </li>
                          <li>10 Voites Trante</li>
                        </ul>
                      </div>
                      <div className="pr-box">
                        <a
                          href="contact.html"
                          className="btn btn-price-box btn-dark btn-lg"
                        >
                          Purchase Now
                        </a>
                        <a
                          href="page-dummy-classic-sidebar-right.html"
                          className="btn btn-link btn-lg btn-block"
                        >
                          or Read More...
                        </a>
                      </div>
                    </div>
                    {/* End price box */}
                  </div>
                  {/* /.col */}
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    {/* Begin price box */}
                    <div className="price-box">
                      <div
                        className="pr-box price-heading bg-image"
                        style={{
                          backgroundImage:
                            "url(assets/img/misc/price-box-4.jpg)",
                        }}
                      >
                        <div className="price-heading-inner">
                          <i className="fas fa-gem" />
                          <h3 className="price-title">Wedding</h3>
                          <div className="price-heading-text">
                            Wedding Photo Session
                          </div>
                        </div>
                      </div>
                      <div className="pr-box price-box-price">
                        <div className="price">
                          <span className="price-currency">$</span>299
                        </div>
                        {/* <div class="price-tenure">Per 1 Year</div> */}
                      </div>
                      <div className="pr-box price-features">
                        <ul className="list-unstyled">
                          <li>Mollimo Namis Ferra</li>
                          <li>
                            <strong>Oppera Tulpas</strong>
                          </li>
                          <li>
                            <strong>Verrum Daster Hunza</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="pr-box">
                        <a
                          href="contact.html"
                          className="btn btn-price-box btn-dark btn-lg"
                        >
                          Purchase Now
                        </a>
                        <a
                          href="page-dummy-classic-sidebar-right.html"
                          className="btn btn-link btn-lg btn-block"
                        >
                          or Read More...
                        </a>
                      </div>
                    </div>
                    {/* End price box */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
                <div className="row margin-top-70 margin-auto max-width-800">
                  <div className="col-md-12 text-center">
                    <p>
                      Duis mattis quam quis quam cursus, a rutrum ante luctus.
                      Phasellus porta ornare enim ac euismod. Nulla fringilla
                      lectus ac tincidunt viverra a accumsan{" "}
                      <a href="#">sapien mollis</a>.
                    </p>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* End price boxes container */}
            </div>
            {/* /.prices-section-inner */}
          </section>
          {/* End prices section */}
          {/* =================================
			///// Begin testimonials section /////
			================================== */}
          <section
            id="testimonials-section"
            className="bg-dark bg-image-fixed"
            style={{
              backgroundImage: "url(assets/img/misc/misc-4.jpg)",
              backgroundPosition: "50% 50%",
            }}
          >
            {/* Element cover */}
            <span className="cover bg-transparent-7-dark" />
            <div className="testimonials-section-inner tt-wrap">
              {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
              {/* Begin testimonials carousel
					=================================
					* Use class "tm-hide-image" to hide testimonial image.
					* Use class "tm-center" or "tm-right" to align testimonials.
					*/}
              <div className="testimonials-carousel tm-center">
                {/* Begin tt-heading 
						====================== 
						* Use class "padding-on" to enable heading paddings (useful if you use tt-heading as stand alone element).
						* Use class "text-center" or "text-right" to align tt-heading.
						* Use classes "tt-heading-xs", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set tt-heading size.
						*/}
                {/* <div class="tt-heading tt-heading-lg text-center">
							<div class="tt-heading-inner tt-wrap">
								<h1 class="tt-heading-title text-white">Testimonials</h1>
								<div class="tt-heading-subtitle text-gray-3">What customers say</div>
								<hr class="hr-short">
							</div>
						</div> */}
                {/* End tt-heading */}
                {/* Begin content carousel (https://owlcarousel2.github.io/OwlCarousel2/)
						====================================================================
						* Use class "nav-outside" for outside nav (requires boxed layout).
						* Use class "nav-outside-top" for outside top nav (requires enough space at the top of the carousel).
						* Use class "nav-bottom-right" for bottom right nav.
						* Use class "nav-rounded" for rounded nav.
						* Use class "nav-light" to enable nav light style.
						* Use class "dots-outside" for outside dots (requires enough space at the bottom of the carousel).
						* Use class "dots-left", "dots-right" or "dots-center-right" to align dots.
						* Use class "dots-rounded" for rounded dots.
						* Use class "owl-mousewheel" to enable mousewheel support.
						* Use class "cursor-grab" to enable cursor grab icon (no effect on links!).
						* Use class "cc-hover-light", "cc-hover-dark" or "cc-hover-zoom" to enable carousel items hover effect.
						* Use class "cc-height-1", "cc-height-2", "cc-height-3", "cc-height-4", "cc-height-5", "cc-height-6" or "cc-height-full" to set carousel height (do not use with data-autoheight="true"!!!).
						* Use class "cc-height-m" to set full height for small screens (do not use with data-autoheight="true"!!!).
						================================================================
						* Available carousel data attributes:
								data-items="5".......................(items visible on desktop)
								data-tablet-landscape="4"............(items visible on mobiles)
								data-tablet-portrait="3".............(items visible on mobiles)
								data-mobile-landscape="2"............(items visible on tablets)
								data-mobile-portrait="1".............(items visible on tablets)
								data-loop="true".....................(true/false)
								data-margin="10".....................(space between items)
								data-center="true"...................(true/false)
								data-start-position="0"..............(item start position)
								data-animate-in="fadeIn".............(more animations: http://daneden.github.io/animate.css/)
								data-animate-out="fadeOut"...........(more animations: http://daneden.github.io/animate.css/)
								data-mouse-drag="false"..............(true/false)
								data-touch-drag="false"..............(true/false)
								data-autoheight="true"...............(true/false)
								data-autoplay="true".................(true/false)
								data-autoplay-timeout="5000".........(milliseconds)
								data-autoplay-hover-pause="true".....(true/false)
								data-autoplay-speed="800"............(milliseconds)
								data-drag-end-speed="800"............(milliseconds)
								data-nav="true"......................(true/false)
								data-nav-speed="800".................(milliseconds)
								data-dots="false"....................(true/false)
								data-dots-speed="800"................(milliseconds)
						*/}
                <div
                  className="owl-carousel cursor-grab nav-outside dots-outside"
                  data-items={1}
                  data-loop="true"
                  data-autoheight="true"
                  data-nav="true"
                  data-nav-speed={500}
                  data-dots-speed={500}
                  data-autoplay="true"
                  data-autoplay-timeout={8000}
                  data-autoplay-speed={500}
                  data-autoplay-hover-pause="true"
                >
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Begin testimonial item */}
                    <div className="testimonial-item text-white">
                      <div
                        className="tm-image bg-image"
                        style={{
                          backgroundImage:
                            "url(assets/img/blog/small/avatar/avatar-2.jpg)",
                          backgroundPosition: "50% 50%",
                        }}
                      />
                      <blockquote>
                        <p>
                          "Duis vel ligula non neque varius eleifend quis id
                          elit. Interdum et malesuada fames ac ante ipsum primis
                          in faucibus. Suspendisse lacus dui, pellentesque ut
                          porta et, consequat sit amet."
                        </p>
                        <small>Anna Clarkson</small>
                      </blockquote>
                    </div>
                    {/* End testimonial item */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Begin testimonial item */}
                    <div className="testimonial-item text-white">
                      <div
                        className="tm-image bg-image"
                        style={{
                          backgroundImage:
                            "url(assets/img/blog/small/avatar/avatar-3.jpg)",
                          backgroundPosition: "50% 50%",
                        }}
                      />
                      <blockquote>
                        <p>
                          "Maecenas sit amet diam iaculis, lobortis tortor sed,
                          bibendum quam. Nam mauris odio, sodales interdum
                          facilisis in, dignissim et massa. In suscipit quam
                          nisi."
                        </p>
                        <small>John Smith</small>
                      </blockquote>
                    </div>
                    {/* End testimonial item */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Begin testimonial item */}
                    <div className="testimonial-item text-white">
                      <div
                        className="tm-image bg-image"
                        style={{
                          backgroundImage:
                            "url(assets/img/blog/small/avatar/avatar-4.jpg)",
                          backgroundPosition: "50% 50%",
                        }}
                      />
                      <blockquote>
                        <p>
                          "Proin at tincidunt leo. Morbi ut metus sit amet purus
                          molestie sollicitudin. Maecenas convallis est vitae
                          neque feugiat, in accumsan odio vestibulum.
                          Pellentesque sodales fermentum porttitor."
                        </p>
                        <small>Jack Paterson</small>
                      </blockquote>
                    </div>
                    {/* End testimonial item */}
                  </div>
                  {/* End carousel item */}
                </div>
                {/* End content carousel */}
              </div>
              {/* End testimonials carousel */}
            </div>
            {/* /.tt-intro-inner */}
          </section>
          {/* End testimonials section */}
          {/* ================================
			///// Begin latest news section /////
			================================= */}
          <section id="latest-news-section">
            {/* Begin tt-heading 
				====================== 
				* Use class "padding-on" to enable heading paddings (useful if you use tt-heading as stand alone element).
				* Use class "text-center" or "text-right" to align tt-heading.
				* Use classes "tt-heading-xs", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set tt-heading size.
				*/}
            <div className="tt-heading tt-heading-lg padding-on text-center">
              <div className="tt-heading-inner tt-wrap">
                <h1 className="tt-heading-title">Latest From Blog</h1>
                <div className="tt-heading-subtitle">
                  News, Reviews, Tips &amp; Tricks
                </div>
                <hr className="hr-short" />
              </div>
            </div>
            {/* End tt-heading */}
            <div className="latest-news-section-inner tt-wrap">
              {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
              {/* Begin latest news carousel
					================================ */}
              <div className="latest-news-carousel">
                {/* Begin content carousel (https://owlcarousel2.github.io/OwlCarousel2/)
						====================================================================
						* Use class "nav-outside" for outside nav (requires boxed layout).
						* Use class "nav-outside-top" for outside top nav (requires enough space at the top of the carousel).
						* Use class "nav-bottom-right" for bottom right nav.
						* Use class "nav-rounded" for rounded nav.
						* Use class "nav-light" to enable nav light style.
						* Use class "dots-outside" for outside dots (requires enough space at the bottom of the carousel).
						* Use class "dots-left", "dots-right" or "dots-center-right" to align dots.
						* Use class "dots-rounded" for rounded dots.
						* Use class "owl-mousewheel" to enable mousewheel support.
						* Use class "cursor-grab" to enable cursor grab icon (no effect on links!).
						* Use class "cc-hover-light", "cc-hover-dark" or "cc-hover-zoom" to enable carousel items hover effect.
						* Use class "cc-height-1", "cc-height-2", "cc-height-3", "cc-height-4", "cc-height-5", "cc-height-6" or "cc-height-full" to set carousel height (do not use with data-autoheight="true"!!!).
						* Use class "cc-height-m" to set full height for small screens (do not use with data-autoheight="true"!!!).
						================================================================
						* Available carousel data attributes:
								data-items="5".......................(items visible on desktop)
								data-tablet-landscape="4"............(items visible on mobiles)
								data-tablet-portrait="3".............(items visible on mobiles)
								data-mobile-landscape="2"............(items visible on tablets)
								data-mobile-portrait="1".............(items visible on tablets)
								data-loop="true".....................(true/false)
								data-margin="10".....................(space between items)
								data-center="true"...................(true/false)
								data-start-position="0"..............(item start position)
								data-animate-in="fadeIn".............(more animations: http://daneden.github.io/animate.css/)
								data-animate-out="fadeOut"...........(more animations: http://daneden.github.io/animate.css/)
								data-mouse-drag="false"..............(true/false)
								data-touch-drag="false"..............(true/false)
								data-autoheight="true"...............(true/false)
								data-autoplay="true".................(true/false)
								data-autoplay-timeout="5000".........(milliseconds)
								data-autoplay-hover-pause="true".....(true/false)
								data-autoplay-speed="800"............(milliseconds)
								data-drag-end-speed="800"............(milliseconds)
								data-nav="true"......................(true/false)
								data-nav-speed="800".................(milliseconds)
								data-dots="false"....................(true/false)
								data-dots-speed="800"................(milliseconds)
						*/}
                <div
                  className="owl-carousel cursor-grab nav-outside-top"
                  data-items={3}
                  data-margin={30}
                  data-loop="true"
                  data-dots="false"
                  data-nav="true"
                  data-nav-speed={500}
                  data-autoplay="true"
                  data-autoplay-timeout={5000}
                  data-autoplay-speed={500}
                  data-autoplay-hover-pause="true"
                  data-tablet-landscape={3}
                  data-tablet-portrait={2}
                  data-mobile-landscape={1}
                  data-mobile-portrait={1}
                >
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Begin blog list item */}
                    <article className="blog-list-item">
                      {/* Blog list item image */}
                      <a href="blog-single.html" className="bl-item-image">
                        <img
                          src="assets/img/blog/list/blog-1.jpg"
                          alt="image"
                        />
                      </a>
                      {/* Begin blog list item info */}
                      <div className="bl-item-info">
                        <div className="bl-item-category">
                          <a href="blog-archive.html">Photography</a>
                        </div>
                        <a href="blog-single.html" className="bl-item-title">
                          <h2>
                            5 Reasons You Should Fall In Love With Photography
                          </h2>
                        </a>
                        <div className="bl-item-meta">
                          <span className="published">May 26, 2017</span>
                          <span className="posted-by">
                            - by
                            <a href="#" title="View all posts by Martin Vegas">
                              Martin Vegas
                            </a>
                          </span>
                        </div>
                        {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                        <div className="bl-item-desc" data-max-words={14}>
                          Suspendisse imperdiet ante at tortor consequat
                          consectetur. Quisque rhoncus blandit justo praesen
                          congue convallis artula ellis.
                        </div>
                        <a
                          href="blog-single.html"
                          className="bl-item-read-more"
                          title="Read More"
                        >
                          <span />
                        </a>
                        {/* Begin blog list item attributes */}
                        <ul className="bl-item-attr">
                          <li>
                            {/* Begin comments count */}
                            <a
                              href="blog-single.html#blog-post-comments"
                              className="bl-item-comments-count"
                              title="Read the comments"
                            >
                              <i className="far fa-comment" /> 10
                            </a>
                            {/* End comments count */}
                          </li>
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn active">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">48</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End blog list item attributes */}
                      </div>
                      {/* End blog list item info */}
                    </article>
                    {/* End blog list item */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Begin blog list item */}
                    <article className="blog-list-item">
                      {/* Blog list item image */}
                      <a href="blog-single.html" className="bl-item-image">
                        <img
                          src="assets/img/blog/list/blog-2.jpg"
                          alt="image"
                        />
                      </a>
                      {/* Begin blog list item info */}
                      <div className="bl-item-info">
                        <div className="bl-item-category">
                          <a href="blog-archive.html">Equipment</a>
                        </div>
                        <a href="blog-single.html" className="bl-item-title">
                          <h2>10 Top Choices for Aerial Photography</h2>
                        </a>
                        <div className="bl-item-meta">
                          <span className="published">May 26, 2017</span>
                          <span className="posted-by">
                            - by
                            <a href="#" title="View all posts by Martin Vegas">
                              John Young
                            </a>
                          </span>
                        </div>
                        {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                        <div className="bl-item-desc" data-max-words={14}>
                          Suspendisse imperdiet ante at tortor consequat
                          consectetur. Quisque rhoncus blandit justo praesen
                          congue convallis artula ellis.
                        </div>
                        <a
                          href="blog-single.html"
                          className="bl-item-read-more"
                          title="Read More"
                        >
                          <span />
                        </a>
                        {/* Begin blog list item attributes */}
                        <ul className="bl-item-attr">
                          <li>
                            {/* Begin comments count */}
                            <a
                              href="blog-single.html#blog-post-comments"
                              className="bl-item-comments-count"
                              title="Read the comments"
                            >
                              <i className="far fa-comment" /> 66
                            </a>
                            {/* End comments count */}
                          </li>
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">98</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End blog list item attributes */}
                      </div>
                      {/* End blog list item info */}
                    </article>
                    {/* End blog list item */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Begin blog list item */}
                    <article className="blog-list-item">
                      {/* Blog list item image */}
                      <a href="blog-single.html" className="bl-item-image">
                        <img
                          src="assets/img/blog/list/blog-3.jpg"
                          alt="image"
                        />
                      </a>
                      {/* Begin blog list item info */}
                      <div className="bl-item-info">
                        <div className="bl-item-category">
                          <a href="blog-archive.html">Travel</a>
                        </div>
                        <a href="blog-single.html" className="bl-item-title">
                          <h2>How to Take Professional Travel Photos</h2>
                        </a>
                        <div className="bl-item-meta">
                          <span className="published">May 26, 2017</span>
                          <span className="posted-by">
                            - by
                            <a href="#" title="View all posts by Martin Vegas">
                              Anna Vernik
                            </a>
                          </span>
                        </div>
                        {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                        <div className="bl-item-desc" data-max-words={14}>
                          Suspendisse imperdiet ante at tortor consequat
                          consectetur. Quisque rhoncus blandit justo praesen
                          congue convallis artula ellis.
                        </div>
                        <a
                          href="blog-single.html"
                          className="bl-item-read-more"
                          title="Read More"
                        >
                          <span />
                        </a>
                        {/* Begin blog list item attributes */}
                        <ul className="bl-item-attr">
                          <li>
                            {/* Begin comments count */}
                            <a
                              href="blog-single.html#blog-post-comments"
                              className="bl-item-comments-count"
                              title="Read the comments"
                            >
                              <i className="far fa-comment" /> 3
                            </a>
                            {/* End comments count */}
                          </li>
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn active">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">54</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End blog list item attributes */}
                      </div>
                      {/* End blog list item info */}
                    </article>
                    {/* End blog list item */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Begin blog list item */}
                    <article className="blog-list-item">
                      {/* Blog list item image */}
                      <a href="blog-single.html" className="bl-item-image">
                        <img
                          src="assets/img/blog/list/blog-4.jpg"
                          alt="image"
                        />
                      </a>
                      {/* Begin blog list item info */}
                      <div className="bl-item-info">
                        <div className="bl-item-category">
                          <a href="blog-archive.html">Photography</a>
                        </div>
                        <a href="blog-single.html" className="bl-item-title">
                          <h2>
                            5 Tips Your Camera Manual Never Told You About
                            Portrait Photography
                          </h2>
                        </a>
                        <div className="bl-item-meta">
                          <span className="published">May 26, 2017</span>
                          <span className="posted-by">
                            - by
                            <a href="#" title="View all posts by Martin Vegas">
                              Julia Beck
                            </a>
                          </span>
                        </div>
                        {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                        <div className="bl-item-desc" data-max-words={14}>
                          Suspendisse imperdiet ante at tortor consequat
                          consectetur. Quisque rhoncus blandit justo praesen
                          congue convallis artula ellis.
                        </div>
                        <a
                          href="blog-single.html"
                          className="bl-item-read-more"
                          title="Read More"
                        >
                          <span />
                        </a>
                        {/* Begin blog list item attributes */}
                        <ul className="bl-item-attr">
                          <li>
                            {/* Begin comments count */}
                            <a
                              href="blog-single.html#blog-post-comments"
                              className="bl-item-comments-count"
                              title="Read the comments"
                            >
                              <i className="far fa-comment" /> 0
                            </a>
                            {/* End comments count */}
                          </li>
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">3</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End blog list item attributes */}
                      </div>
                      {/* End blog list item info */}
                    </article>
                    {/* End blog list item */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Begin blog list item */}
                    <article className="blog-list-item">
                      {/* Blog list item image */}
                      <a href="blog-single.html" className="bl-item-image">
                        <img
                          src="assets/img/blog/list/blog-5.jpg"
                          alt="image"
                        />
                      </a>
                      {/* Begin blog list item info */}
                      <div className="bl-item-info">
                        <div className="bl-item-category">
                          <a href="blog-archive.html">Photography</a>
                        </div>
                        <a href="blog-single.html" className="bl-item-title">
                          <h2>
                            Most Common Wedding Photography Mistakes Every
                            Beginner Will Make
                          </h2>
                        </a>
                        <div className="bl-item-meta">
                          <span className="published">May 26, 2017</span>
                          <span className="posted-by">
                            - by
                            <a href="#" title="View all posts by Martin Vegas">
                              Martin Vegas
                            </a>
                          </span>
                        </div>
                        {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                        <div className="bl-item-desc" data-max-words={14}>
                          Suspendisse imperdiet ante at tortor consequat
                          consectetur. Quisque rhoncus blandit justo praesen
                          congue convallis artula ellis.
                        </div>
                        <a
                          href="blog-single.html"
                          className="bl-item-read-more"
                          title="Read More"
                        >
                          <span />
                        </a>
                        {/* Begin blog list item attributes */}
                        <ul className="bl-item-attr">
                          <li>
                            {/* Begin comments count */}
                            <a
                              href="blog-single.html#blog-post-comments"
                              className="bl-item-comments-count"
                              title="Read the comments"
                            >
                              <i className="far fa-comment" /> 8
                            </a>
                            {/* End comments count */}
                          </li>
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">71</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End blog list item attributes */}
                      </div>
                      {/* End blog list item info */}
                    </article>
                    {/* End blog list item */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Begin blog list item */}
                    <article className="blog-list-item">
                      {/* Blog list item image */}
                      <a href="blog-single.html" className="bl-item-image">
                        <img
                          src="assets/img/blog/list/blog-6.jpg"
                          alt="image"
                        />
                      </a>
                      {/* Begin blog list item info */}
                      <div className="bl-item-info">
                        <div className="bl-item-category">
                          <a href="blog-archive.html">Food</a>
                          <a href="#">Photography</a>
                        </div>
                        <a href="blog-single.html" className="bl-item-title">
                          <h2>The Serious Eats Guide to Food Photography</h2>
                        </a>
                        <div className="bl-item-meta">
                          <span className="published">May 26, 2017</span>
                          <span className="posted-by">
                            - by
                            <a href="#" title="View all posts by Martin Vegas">
                              Martin Vegas
                            </a>
                          </span>
                        </div>
                        {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                        <div className="bl-item-desc" data-max-words={14}>
                          Suspendisse imperdiet ante at tortor consequat
                          consectetur. Quisque rhoncus blandit justo praesen
                          congue convallis artula ellis.
                        </div>
                        <a
                          href="blog-single.html"
                          className="bl-item-read-more"
                          title="Read More"
                        >
                          <span />
                        </a>
                        {/* Begin blog list item attributes */}
                        <ul className="bl-item-attr">
                          <li>
                            {/* Begin comments count */}
                            <a
                              href="blog-single.html#blog-post-comments"
                              className="bl-item-comments-count"
                              title="Read the comments"
                            >
                              <i className="far fa-comment" /> 28
                            </a>
                            {/* End comments count */}
                          </li>
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">65</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End blog list item attributes */}
                      </div>
                      {/* End blog list item info */}
                    </article>
                    {/* End blog list item */}
                  </div>
                  {/* End carousel item */}
                </div>
                {/* End content carousel */}
              </div>
              {/* End latest news carousel */}
            </div>
            {/* /.latest-news-section-inner */}
          </section>
          {/* End latest news section */}
          {/* ===================================
			///// Begin call to action section /////
			==================================== */}
          <section className="call-to-action-section bg-gray-3 margin-top-60">
            <div
              className="full-cover for-light-style bg-image"
              style={{
                backgroundImage:
                  "url(assets/img/pattern/bg-pattern-2-light.png)",
                backgroundPosition: "50% 50%",
              }}
            />
            <div
              className="full-cover for-dark-style bg-image"
              style={{
                backgroundImage:
                  "url(assets/img/pattern/bg-pattern-2-dark.png)",
                backgroundPosition: "50% 50%",
              }}
            />
            <div className="call-to-action-inner tt-wrap">
              {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
              <div className="row">
                <div className="col-md-12 text-center">
                  {/* Begin tt-heading 
							====================== 
							* Use class "padding-on" to enable heading paddings (useful if you use tt-heading as stand alone element).
							* Use class "text-center" or "text-right" to align tt-heading.
							* Use classes "tt-heading-xs", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set tt-heading size.
							*/}
                  <div className="tt-heading tt-heading-lg text-center">
                    <div className="tt-heading-inner tt-wrap">
                      <h1 className="tt-heading-title">What Next?</h1>
                      <div className="tt-heading-subtitle">
                        Interested in working with me?
                      </div>
                      <hr className="hr-short" />
                    </div>
                  </div>
                  {/* End tt-heading */}
                  <div className="margin-top-30 max-width-1000 margin-auto">
                    <p>
                      Fusce et velit sed augue rhoncus tempor. Sed ac lacinia
                      augue, nec lacinia felis. Sed sit amet diam leo. Praesent
                      vel malesuada arcu. Donec mattis, arcu vel vehicula
                      feugiat, sem turpis dignissim ex, eu sollicitudin neque.
                    </p>
                    <div className="margin-top-30">
                      <a
                        href="page-dummy-modern.html"
                        className="btn btn-dark margin-top-5 margin-right-5"
                      >
                        Read More
                      </a>
                      <a
                        href="contact.html"
                        className="btn btn-primary margin-top-5"
                      >
                        Let's Work Together!
                      </a>
                    </div>
                  </div>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.call-to-action-inner */}
          </section>
          {/* End call to action section */}
          {/* ===========================
			///// Begin footer section /////
			================================
			* Use class "footer-dark" to enable dark footer.
			* Use class "no-margin-top" if needed. 
			*/}

          {/* pasted here */}
          <div id="body-content">
            {/* ========================
			///// Begin page header /////
			=============================
			* Use classes "ph-xs", "ph-sm", "ph-lg" or "ph-xlg" to set page header size.
			* Use class "ph-center" or "ph-right" to align page header caption.
			*/}
            <section id="page-header" className="ph-sm">
              {/* Begin page header image 
				============================= 
				* Use class "parallax-bg-1" up to "parallax-bg-6" to enable background image parallax effect.
				* Use class "fade-out-scroll-3" to enable fade out effect if page scroll.
				* Use class "hide-ph-image" to hide page header image without removing the code.
				*/}
              <div
                className="page-header-image parallax-bg-3 bg-image"
                style={{
                  backgroundImage: "url(assets/img/misc/page-header-bg-5.jpg)",
                }}
              >
                {/* Element cover 
					===================
					* You can use prepared background transparent classes depends on brightness of your page header image. More info: file "helper.css".
					*/}
                <div className="cover bg-transparent-5-dark" />
              </div>
              {/* End page header image */}
              {/* Begin page header inner */}
              <div className="page-header-inner tt-wrap">
                {/* Begin page header caption 
					===============================
					* Use classes "ph-caption-xs", "ph-caption-sm", "ph-caption-lg" or "ph-caption-xlg" to set page header size.
					* Use class "parallax-1" up to "parallax-6" to enable parallax effect.
					* Use class "fade-out-scroll-1" up to "fade-out-scroll-6" to enable fade out effect if page scroll.
					*/}
                <div className="page-header-caption ph-caption-lg parallax-4 fade-out-scroll-3">
                  <h1 className="page-header-title">Contact</h1>
                  <hr className="hr-short" />
                  {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                  <div className="page-header-description" data-max-words={40}>
                    <p>
                      Fusce imperdiet, arcu non tempor aliquam, justo tortor
                      cursus est, sed facilisis eros purus et felis. Sed eros
                      sapien, iaculis eget gravida euismod, dapibus vitae
                      turpis. Pellentesque men egestas odio mi, vitae egestas
                      massa elementum.
                    </p>
                  </div>
                </div>
                {/* End page header caption */}
              </div>
              {/* End page header inner */}
            </section>
            {/* End page header */}
            {/* ============================
			///// Begin contact section /////
			============================= */}
            <section id="contact-section">
              <div className="contact-section-inner tt-wrap">
                {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
                {/* ======================
					///// Begin split box /////
					based on: http://www.minimit.com/articles/solutions-tutorials/bootstrap-3-responsive-columns-of-same-height
					======================= */}
                <div className="split-box">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="row-lg-height full-height-vh">
                        {/* Column */}
                        <div
                          className="col-lg-6 col-lg-height col-lg-middle bg-image"
                          style={{
                            backgroundImage:
                              "url(assets/img/misc/contact-bg.jpg)",
                            backgroundPosition: "50% 50%",
                          }}
                        >
                          {/* Element cover */}
                          <div className="cover" />
                          {/* Begin split box content */}
                          <div className="split-box-content text-left no-padding-left no-padding-right">
                            {/* Begin contact info */}
                            <div className="contact-info-wrap">
                              <div className="contact-info">
                                <p>
                                  <i className="fas fa-home" /> address: 121
                                  King Street, Melbourne, Australia
                                </p>
                                <p>
                                  <i className="fas fa-phone" /> phone: +123 456
                                  789 000
                                </p>
                                <p>
                                  <i className="fas fa-envelope" /> email:
                                  <a
                                    href="mailto:company@email.com"
                                    target="_blank"
                                  >
                                    company@email.com
                                  </a>
                                </p>
                              </div>
                              {/* Begin social buttons */}
                              <div className="social-buttons margin-top-20">
                                <ul>
                                  <li>
                                    <a
                                      href="https://www.facebook.com/themetorium"
                                      className="btn btn-social-min btn-default btn-rounded-full"
                                      title="Follow me on Facebook"
                                      target="_blank"
                                    >
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://twitter.com/Themetorium"
                                      className="btn btn-social-min btn-default btn-rounded-full"
                                      title="Follow me on Twitter"
                                      target="_blank"
                                    >
                                      <i className="fab fa-twitter" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://plus.google.com/+SiiliOnu"
                                      className="btn btn-social-min btn-default btn-rounded-full"
                                      title="Follow me on Google+"
                                      target="_blank"
                                    >
                                      <i className="fab fa-google-plus-g" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.pinterest.com/themetorium"
                                      className="btn btn-social-min btn-default btn-rounded-full"
                                      title="Follow me on Pinterest"
                                      target="_blank"
                                    >
                                      <i className="fab fa-pinterest-p" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://dribbble.com/Themetorium"
                                      className="btn btn-social-min btn-default btn-rounded-full"
                                      title="Follow me on Dribbble"
                                      target="_blank"
                                    >
                                      <i className="fab fa-dribbble" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End social buttons */}
                            </div>
                            {/* End contact info */}
                          </div>
                          {/* End split box content */}
                        </div>
                        {/* /.col */}
                        {/* Column */}
                        <div className="col-lg-6 col-lg-height col-lg-middle no-padding">
                          {/* Begin split box content */}
                          <div className="split-box-content">
                            {/* Begin contact form 
											========================= */}
                            <form id="contact-form">
                              <div className="contact-form-inner text-left">
                                <div className="contact-form-info">
                                  {/* Begin tt-heading 
														====================== 
														* Use class "padding-on" to enable heading paddings (useful if you use tt-heading as stand alone element).
														* Use class "text-center" or "text-right" to align tt-heading.
														* Use classes "tt-heading-xs", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set tt-heading size.
														*/}
                                  <div className="tt-heading">
                                    <div className="tt-heading-inner">
                                      <h1 className="tt-heading-title">
                                        Drop Me a Line
                                      </h1>
                                      {/* <div class="tt-heading-subtitle">Subtitle Here</div> */}
                                      <hr className="hr-short" />
                                    </div>
                                    {/* /.tt-heading-inner */}
                                  </div>
                                  {/* End tt-heading */}
                                  <div className="margin-top-30">
                                    <p>
                                      Nemo enim ipsam voluptatem quiatotam rem
                                      aperiam, eaque ipsa quae ab illo inventore
                                      veritatis et quasi architecto beatae.
                                    </p>
                                  </div>
                                </div>
                                {/* /.contact-form-info */}
                                {/* Begin hidden required fields (https://github.com/agragregra/uniMail) */}
                                <input
                                  type="hidden"
                                  name="project_name"
                                  defaultValue="yourwebsiteaddress.com"
                                />
                                {/* Change value to your site name */}
                                <input
                                  type="hidden"
                                  name="admin_email"
                                  defaultValue="your@email.com"
                                />
                                {/* Change value to your valid email address (where a message will be sent) */}
                                <input
                                  type="hidden"
                                  name="form_subject"
                                  defaultValue="Message from yourwebsiteaddress.com"
                                />
                                {/* Change value to your own message subject */}
                                {/* End Hidden Required Fields */}
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <select
                                        className="form-control"
                                        name="option"
                                        required
                                      >
                                        <option value disabled selected>
                                          Select an option
                                        </option>
                                        <option value="Say Hello">
                                          Say hello
                                        </option>
                                        <option value="New Project">
                                          New project
                                        </option>
                                        <option value="Feedback">
                                          Feedback
                                        </option>
                                        <option value="Other">Other</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <textarea
                                        className="form-control"
                                        name="message"
                                        rows={4}
                                        placeholder="Your Message"
                                        required
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="small text-gray">
                                  <em>* All fields are required!</em>
                                </div>
                              </div>
                              {/* /.contact-form-inner */}
                              <div className="row">
                                <div className="col-lg-12">
                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-lg margin-top-40"
                                  >
                                    Send Message
                                  </button>
                                </div>
                              </div>
                            </form>
                            {/* End contact form */}
                          </div>
                          {/* End split box content */}
                        </div>
                        {/* /.col */}
                      </div>
                      {/* /.row-height */}
                    </div>
                    {/* /.row */}
                    <div className="row">
                      
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.container */}
                </div>
                {/* End split box */}
              </div>
              {/* /.contact-section-inner */}
            </section>
            {/* End contact section */}
            {/* ===========================
			///// Begin footer section /////
			================================
			* Use class "footer-dark" to enable dark footer.
			* Use class "no-margin-top" if needed. 
			*/}
            
          </div>

          {/* pasted here ends */}

          <section id="footer" className="footer-dark no-margin-top">
            <div className="footer-inner">
              <div className="footer-container tt-wrap">
                <div className="row">
                  <div className="col-md-3">
                    {/* Begin footer logo */}
                    <div id="footer-logo">
                      <a href="index.html" className="logo-dark">
                        <img src="assets/img/logo-dark.png" alt="logo" />
                      </a>
                      <a href="index.html" className="logo-light">
                        <img src="assets/img/logo-light.png" alt="logo" />
                      </a>
                      {/* for small screens */}
                      <a href="index.html" className="logo-dark-m">
                        <img src="assets/img/logo-dark-m.png" alt="logo" />
                      </a>
                      <a href="index.html" className="logo-light-m">
                        <img src="assets/img/logo-light-m.png" alt="logo" />
                      </a>
                    </div>
                    {/* End footer logo */}
                  </div>
                  {/* /.col */}
                  <div className="col-md-5">
                    {/* Begin footer text */}
                    <div className="footer-text">
                      <h4>- Creative Photo Studio</h4>
                      Sed non auctor magna. Nunc eu ultrices orci. Donec commodo
                      ligula in massa ultricies volutpat. Fusce vel cursus
                      lectus. Cras commodo odio mi, eu cursus nibh iaculis ut.
                    </div>
                    {/* End footer text */}
                  </div>
                  {/* /.col */}
                  <div className="col-md-4">
                    {/* Begin social buttons */}
                    <div className="social-buttons">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com/themetorium"
                            className="btn btn-social-min btn-default btn-rounded-full"
                            title="Follow me on Facebook"
                            target="_blank"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/Themetorium"
                            className="btn btn-social-min btn-default btn-rounded-full"
                            title="Follow me on Twitter"
                            target="_blank"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://plus.google.com/+SiiliOnu"
                            className="btn btn-social-min btn-default btn-rounded-full"
                            title="Follow me on Google+"
                            target="_blank"
                          >
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.pinterest.com/themetorium"
                            className="btn btn-social-min btn-default btn-rounded-full"
                            title="Follow me on Pinterest"
                            target="_blank"
                          >
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://dribbble.com/Themetorium"
                            className="btn btn-social-min btn-default btn-rounded-full"
                            title="Follow me on Dribbble"
                            target="_blank"
                          >
                            <i className="fab fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="contact.html"
                            className="btn btn-social-min btn-default btn-rounded-full"
                            title="Drop me a line"
                            target="_blank"
                          >
                            <i className="fas fa-envelope" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* End social buttons */}
                    {/* Begin footer subscribe form */}
                    <form
                      id="footer-subscribe-form"
                      className="form-btn-inside"
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control no-bg"
                          id="footer-subscribe"
                          name="subscribe"
                          placeholder="Subscribe. Enter your email address..."
                          required
                        />
                        <button type="submit">
                          <i className="fas fa-paper-plane" />
                        </button>
                      </div>
                    </form>
                    {/* End footer subscribe form */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.footer-container */}
              <div className="footer-bottom">
                <div className="footer-container tt-wrap">
                  <div className="row">
                    <div className="col-md-6 col-md-push-6">
                      {/* Begin footer menu */}
                      <ul className="footer-menu">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about-me.html">About</a>
                        </li>
                        <li>
                          <a href="albums-grid-fluid-2.html">Portfolio</a>
                        </li>
                        <li>
                          <a href="blog-list-grid.html">Blog</a>
                        </li>
                        <li>
                          <a href="page-faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                      {/* End footer menu */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-6 col-md-pull-6">
                      {/* Begin footer copyright */}
                      <div className="footer-copyright">
                        <p>© Sepia 2017 / All rights reserved</p>
                        <p>
                          Design by:
                          <a
                            href="https://themeforest.net/item/sepia-photography-portfolio-html-website-template/20195226?ref=Themetorium"
                            target="_blank"
                          >
                            Themetorium
                          </a>
                        </p>
                      </div>
                      {/* End footer copyright */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.footer-container */}
              </div>
              {/* /.footer-bottom */}
            </div>
            {/* /.footer-inner */}
            {/* Scroll to top button */}
            <a
              href="#body"
              className="scrolltotop sm-scroll"
              title="Scroll to top"
            >
              <i className="fas fa-chevron-up" />
            </a>
          </section>
          {/* End footer section */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
