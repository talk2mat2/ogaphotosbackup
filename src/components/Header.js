/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../actions/authactions";
import PersonIcon from "@material-ui/icons/Person";
import { LOGINOUTUSER } from "../redux/action";
import { Scripts } from "../script";

// import { useDispatch } from 'react-redux';
// import { signOut } from '../actions/authactions';

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;

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
  React.useEffect(() => {
    window.addEventListener("load", (event) => {
      Scripts.forEach((item) => {
        const script = document.createElement("script");
        script.src = item.src;
        script.async = "";
        document.body.appendChild(script);
      });
    });
  });
  return (
    <nav
      className="navbar transparent absolute nav-wrapper-dark inverse-text navbar-expand-lg text-uppercase"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className="navbar-header">
          <div className="navbar-brand">
            <a href="index.html">
              {/* <img
                src="#"
                srcset="style/images/logo-light.png 1x, style/images/logo-light@2x.png 2x"
                alt=""
              /> */}

              <img id="LogoImg" src="media/OgaLogo.png" alt="img" />
            </a>
          </div>
          <div className="navbar-hamburger ml-auto d-lg-none d-xl-none">
            <button
              className="hamburger animate"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span></span>
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse">
          {/* <a className="nav-link scroll" href="/">
            <img id="LogoImg" src="media/OgaLogo.png" alt="img" />
          </a> */}

          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link scroll" href="/" style={{ color: "grey" }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scroll"
                href="about"
                style={{ color: "grey" }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scroll"
                href="/How_it_works"
                style={{ color: "grey" }}
              >
                How It Works
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link  "
                href="/Portfolio"
                style={{ color: "grey" }}
              >
                Portfolio
              </a>
              {/* <ul className="dropdown-menu dropdown-menu-left">
                <li className="nav-item">
                  <a className="dropdown-item scroll" href="#portfolio">
                    Portrait Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="dropdown-item scroll" href="#portfolio2">
                    Advertorial Portfolio
                  </a>
                </li>
              </ul> */}
            </li>

            <li className="nav-item">
              <a
                className="nav-link scroll"
                href="/contact"
                style={{ color: "grey" }}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              {!CurrentUser ? (
                <Link
                  className="nav-link scroll"
                  to="/SignUp"
                  style={{ color: "grey" }}
                >
                  Login/Sign UP
                </Link>
              ) : (
                <Link
                  style={{ color: "grey" }}
                  className="nav-link scroll"
                  to="/dashboard"
                >{`${userData.fname || userData.Email}`}</Link>
              )}
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scroll"
                to="/signUp"
                style={{ color: "grey" }}
              >
                <button className="signup">Hire A Photographer</button>
              </Link>
            </li>
            {CurrentUser ? (
              <li className="nav-item">
                <a
                  onClick={LogOut}
                  className="nav-link scroll"
                  href="/"
                  style={{ color: "grey" }}
                >
                  logout
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
