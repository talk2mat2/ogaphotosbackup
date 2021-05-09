/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../actions/authactions";
import PersonIcon from "@material-ui/icons/Person";
import { LOGINOUTUSER } from "../redux/action";
import { Scripts } from "../script";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { Helmet } from "react-helmet";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

// import { useDispatch } from 'react-redux';
// import { signOut } from '../actions/authactions';
const Div = styled.div``;
const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;

  // import Sliders from "../../components/Sliders";

  const [showmenu, setShowmenu] = useState(null);
  const handleOpenMenu = () => {
    if (showmenu === null) {
      setShowmenu("openNav");
    } else {
      setShowmenu(null);
    }
  };

  const LogOut = () => {
    dispatch(LOGINOUTUSER());
  };

  // React.useEffect(() => {P
  //   const loadScript = async () => {
  //     await Scripts.forEach(async (item) => {
  //       const script = document.createElement("script");
  //       script.src = item.src;
  //       script.async = true;
  //       document.body.appendChild(script);
  //     });
  //   };
  //   setTimeout(() => {
  //     loadScript();
  //   }, 1000);
  // }, []);
  // React.useEffect(() => {
  //   window.addEventListener("load", (event) => {
  //     Scripts.forEach((item) => {
  //       const script = document.createElement("script");
  //       script.src = item.src;
  //       script.async = "";
  //       document.body.appendChild(script);
  //     });
  //   });
  // });

  return (
    <header
      id="header"
      className="header-show-hide-on-scroll menu-align-right "
    >
      {/* <header
      id="header"
      class="header-transparent header-show-hide-on-scroll menu-align-right"
    ></header> */}

      <Helmet>
        <link
          rel="stylesheet"
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        <script src="/assets/vendor/jquery.mousewheel.min.js"></script>

        <script src="/assets/vendor/ytplayer/js/jquery.mb.YTPlayer.min.js"></script>

        <script src="/assets/vendor/lightgallery/js/lightgallery-all.min.js"></script>

        <script src="/assets/js/theme.js"></script>

        <script src="/assets/demo-panel/js/demo-panel.js"></script>
        <script src="/assets/demo-panel/js/styleswitch.js"></script>
      </Helmet>
      <div className="header-inner tt-wrap">
        <div id="logo">
          <a href="/" className="logo-dark">
            <img src="media/logo-dark.png" alt="logo" />
          </a>
          <a href="/" className="logo-light">
            <img src="assets/img/logo-light.png" alt="logo" />
          </a>
          {/* for small screens */}
          <a href="/" className="logo-dark-m">
            <img src="assets/img/logo-dark-m.png" alt="logo" />
          </a>
          <a href="/" className="logo-light-m">
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
                {/* <a href="#" className="tt-clobal-search-trigger">
                  <i className="fas fa-search" />
                </a> */}
                <div className="tt-clobal-search">
                  <div className="tt-clobal-search-inner">
                    <span className="tt-clobal-search-title">Search</span>
                    <form
                      id="tt-clobal-search-form"
                      className="form-btn-inside"
                      method="get"
                      action=""
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
              <li className=" tt-dropdown-master tt-dropdown-dark tt-dropdown-right tt-tools-lang">
                <Link to="/signUp">Log In</Link>

                {/* /.tt-dropdown */}
              </li>
              {/* End tt-dropdown */}
              {/* Begin call to action button */}
              <li>
                <Link
                  to="/dashboard"
                  className="tt-tools-button"
                  target="_blank"
                >
                  Book<span className="hide-from-sm"> Now</span>!
                </Link>
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
              <li className=" tt-submenu-master ">
                <a href="/#blog-list-section">
                  <FiberManualRecordIcon fontSize="small" />
                  How It Works
                </a>

                {/* /.tt-submenu */}
              </li>{" "}
              <li className=" tt-submenu-master" style={{ lineHeight: "auto" }}>
                <a href="/#specialist">
                  <FiberManualRecordIcon fontSize="small" />
                  Specialties
                </a>
              </li>{" "}
              {"  "}
              {/* End submenu (sub-master) */}
              {/* Begin submenu (submenu master)
							==================================== */}
              <li className=" tt-submenu-master">
                <a href="/#prices-section">
                  <FiberManualRecordIcon fontSize="small" />
                  Pricing
                </a>

                {/* /.tt-submenu */}
              </li>{" "}
              {"  "}
              {/* End submenu (sub-master) */}
              {/* Begin submenu (submenu master)
							==================================== */}
              <li className=" tt-submenu-master">
                <a href="/#gallery-list-section">
                  <FiberManualRecordIcon fontSize="small" />
                  Portfolio
                </a>

                {/* /.tt-submenu */}
              </li>{" "}
              {"  "}
              {/* End submenu (sub-master) */}
              {/* Begin submenu (submenu master)
							==================================== */}
              {"  "}
              <li className=" tt-submenu-master">
                <a href="/#contact-section">
                  <FiberManualRecordIcon fontSize="small" />
                  Contact
                </a>

                {/* /.tt-submenu */}
              </li>{" "}
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
  );
};

export default Header;
