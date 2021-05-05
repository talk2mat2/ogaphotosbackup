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
    <header>
      <nav className="vertical-center-row flex-space-betweeen">
        <div className="nav-img">
          <a href="/">
            <img src="/media/logo222.jpg" alt="" />
          </a>
        </div>
        <div className="nav-items vertical-center-row">
          <a href="/#home">
            <span>Home</span>
          </a>
          <a href="/#about">
            <span>About</span>
          </a>
          <a href="/#how-it-works">
            <span>How It Works</span>
          </a>
          <a href="/#portfolio">
            <span>PortFolio</span>
          </a>
          <span>Contact</span>
          <span>
            {userData ? (
              <Link style={{ color: "grey" }} to="/dashboard">{`${
                userData.fname || userData.Email
              }`}</Link>
            ) : (
              <Link to="signUp">
                <p>LogIn</p>
              </Link>
            )}
          </span>
          {/* <a href="/signup-step1.html"> <p class="Upgrade-Btn">SignUp</p></a> */}
          {/* <img class="profileAvatar" src="images/profileAvatar.JPG" alt="" /> */}
        </div>
        {/* <div class="vertical-center-row">
<p>login</p>
<p>hire a photogrpher</p>
</div> */}
        <button
          id="btn-header"
          className="btn1"
          style={{ backgroundColor: "#ffffff", color: "rgb(20, 27, 37)" }}
        >
          Hire A photogrpher Now
        </button>
        <div className="MenuIconDiv" onClick={handleOpenMenu}>
          {/* <i style={{ color: "floralwhite" }} className="fas fa-bars fa-2x" /> */}
          <MenuIcon
            fontSize={"large"}
            style={{ color: "#ffffff", fontSize: "40px" }}
          />
        </div>
        <div
          className={`Nav-items-Drop-down ${showmenu} vertical-center-row flex-space-betweeen`}
        >
          <ul className="full-width">
            <a onClick={() => setShowmenu(null)} href="/#home">
              <li>
                <p>Home</p>
              </li>
            </a>
            <a onClick={() => setShowmenu(null)} href="/#about">
              <li>
                <p>About</p>
              </li>
            </a>
            <a onClick={() => setShowmenu(null)} href="/#how-it-works">
              <li>
                <p>How it works</p>
              </li>
            </a>
            <a onClick={() => setShowmenu(null)} href="/#portfolio">
              <li>
                <p>Portfolio</p>
              </li>
            </a>
            <>
              <li onClick={() => setShowmenu(null)}>
                {userData ? (
                  <Link style={{ color: "grey" }} to="/dashboard">{`${
                    userData.fname || userData.Email
                  }`}</Link>
                ) : (
                  <Link to="signUp">
                    <p>Log In</p>
                  </Link>
                )}
              </li>
            </>
            <a href="/">
              <li>
                <img
                  className="playstore-Icon"
                  src="media/playstore.png"
                  alt=""
                />
              </li>
            </a>
          </ul>
          {/* <ul>
    <li>
      <a href="./Wallet.html"><p>My Wallet</p></a>
    </li>
    <li>
      <a><p>My Lawyers</p></a>
    </li>
    <li>
      <a><p>CrowdFunding</p></a>
    </li>

    <li>
      <a><p>Submit Compliant</p></a>
    </li>
  </ul> */}
        </div>
      </nav>
    </header>
    // <nav
    //   className="navbar transparent absolute nav-wrapper-dark inverse-text navbar-expand-lg text-uppercase "
    //   style={{ backgroundColor: "#fff" }}
    // >
    //   <div className="container">
    //     <div className="navbar-header">
    //       <div className="navbar-brand">
    //         <a href="/">
    //           {/* <img
    //             src="#"
    //             srcset="style/images/logo-light.png 1x, style/images/logo-light@2x.png 2x"
    //             alt=""
    //           /> */}

    //           <img id="LogoImg" src="media/OgaLogo.png" alt="img" />
    //         </a>
    //       </div>
    //       <div className="navbar-hamburger ml-auto d-lg-none d-xl-none">
    //         <button
    //           className="hamburger "
    //           // data-toggle="collapse"
    //           // data-target=".navbar-collapse"
    //           onClick={() => handleMenuOpen()}
    //         >
    //           <span></span>
    //         </button>
    //       </div>
    //     </div>

    //     <Div className={`collapse navbar-collapse show ${extend} `}>
    //       {/* <a className="nav-link scroll" href="/">
    //         <img id="LogoImg" src="media/OgaLogo.png" alt="img" />
    //       </a> */}

    //       <ul className="nav navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <a className="nav-link scroll" href="/" style={{ color: "grey" }}>
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             className="nav-link scroll"
    //             href="about"
    //             style={{ color: "grey" }}
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             className="nav-link scroll"
    //             href="/How_it_works"
    //             style={{ color: "grey" }}
    //           >
    //             How It Works
    //           </a>
    //         </li>
    //         <li className="nav-item ">
    //           <a
    //             className="nav-link  "
    //             href="/Portfolio"
    //             style={{ color: "grey" }}
    //           >
    //             Portfolio
    //           </a>
    //           {/* <ul className="dropdown-menu dropdown-menu-left">
    //             <li className="nav-item">
    //               <a className="dropdown-item scroll" href="#portfolio">
    //                 Portrait Portfolio
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="dropdown-item scroll" href="#portfolio2">
    //                 Advertorial Portfolio
    //               </a>
    //             </li>
    //           </ul> */}
    //         </li>

    //         <li className="nav-item">
    //           <a
    //             className="nav-link scroll"
    //             href="/contact"
    //             style={{ color: "grey" }}
    //           >
    //             Contact
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           {!CurrentUser ? (
    //             <Link
    //               className="nav-link scroll"
    //               to="/SignUp"
    //               style={{ color: "grey" }}
    //             >
    //               Login/Sign UP
    //             </Link>
    //           ) : (
    //             <Link
    //               style={{ color: "grey" }}
    //               className="nav-link scroll"
    //               to="/dashboard"
    //             >{`${userData.fname || userData.Email}`}</Link>
    //           )}
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             className="nav-link scroll"
    //             to="/signUp"
    //             style={{ color: "grey" }}
    //           >
    //             <button className="signup">Hire A Photographer</button>
    //           </Link>
    //         </li>
    //         {CurrentUser ? (
    //           <li className="nav-item">
    //             <a
    //               onClick={LogOut}
    //               className="nav-link scroll"
    //               href="/"
    //               style={{ color: "grey" }}
    //             >
    //               logout
    //             </a>
    //           </li>
    //         ) : null}
    //       </ul>
    //     </Div>
    //   </div>
    // </nav>
  );
};

export default Header;
