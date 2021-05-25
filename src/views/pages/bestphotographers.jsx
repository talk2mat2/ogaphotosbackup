/* eslint-disable no-use-before-define */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { Scripts } from "../../script";
import Loginpage from "./LoginPage";
import Singuppage from "./SignUppage";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import "./SignupStyle.css";
import { Route, Switch, Link } from "react-router-dom";
import LoginNew from "./LoginNew";
import Header from "../../components/Header";
import axios from "axios";

const Bestphotographers = (props) => {
  const [PageData, setPageData] = React.useState("");
  const [
    searchPhotographersResult,
    setsearchPhotographersResult,
  ] = React.useState([]);
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const {
    match,
    location: {
      state: { Data },
    },
  } = props;

  // we search localphotographers by state
  const SearchPhotographersApi = async (search) => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/PhotographersBylocality?search=${Data}`
      )
      .then((res) => {
        console.log(res.data.userData);
        setsearchPhotographersResult(res.data.userData);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };

  useEffect(() => {
    Data && setPageData(Data);
    Data && SearchPhotographersApi(Data);
  }, [Data]);
  const history = useHistory();

  const handleSignUpPage = () => {
    history.push(`${match.url}/signup`);
  };
  const handleLoginPage = () => {
    history.push(match.url);
  };

  const MapsearchResult = () => {
    return (
      searchPhotographersResult.length > 0 &&
      searchPhotographersResult.map((xxx) => {
        return (
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            {/* Begin price box */}
            <div className="price-box">
              <div
                className="pr-box price-heading bg-image"
                style={{
                  backgroundImage: `url(${xxx.profileImage})`,
                }}
              >
                <div className="price-heading-inner">
                  <div
                    style={{ height: "120px" }}
                    className="price-heading-inner"
                  ></div>
                </div>
              </div>
              <div className="pr-box price-box-price">
                <h3>
                  {xxx.fname} {xxx.lname}
                </h3>
              </div>
              <div className="pr-box price-box-price">
                <p> loves {xxx.favouriteShoots} photography</p>
              </div>
              <div className="pr-box price-features">
                <ul className="list-unstyled">{xxx.aboutMe}</ul>
              </div>
              <div className="pr-box">
                <a
                  href="/Purpose"
                  className="btn btn-price-box btn-dark btn-lg"
                >
                  Check Availability
                </a>
                <a
                  href="/dashboard"
                  className="btn btn-link btn-lg btn-block"
                ></a>
              </div>
            </div>
            {/* End price box */}
          </div>
        );
      })
    );
  };
  return (
    <React.Fragment>
      <Header />

      <section id="password-protected-section">
        <div
          className="password-protected-inner bg-image"
          style={{
            backgroundImage: "url(assets/img/misc/me-1.jpg)",
            backgroundPosition: "50% 50%",
            minHeight: "600px",
            paddingTop: "350px",
          }}
        >
          {" "}
          {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
          {/* Element cover */}
          <span className="cover bg-transparent-1-dark" />
          {/* Begin post password 
        ========================= */}
          <section
            style={{
              backgroundColor: "rgb(255,255,255)",
            }}
            id="prices-section"
          >
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
                    <h1 className="tt-heading-title">
                      {PageData} Photographers
                    </h1>
                    <div className="tt-heading-subtitle">
                      Ogaphoto connects you to pre-vetted photographers in{" "}
                      {PageData}. It's never been easier or more affordable.
                    </div>
                    <hr className="hr-short" />
                  </div>
                  {/* /.col */}
                  {/* <div className="col-md-8">
                    <div className="price-title">
                      Ogaphoto connects you to pre-vetted photographers in .
                      It's never been easier or more affordable.
                    </div>
                  </div> */}
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
                <div
                  style={{ display: "flex", flexWrap: "wrap" }}
                  className="row"
                >
                  {/* /.col */}
                  {MapsearchResult()}
                </div>
                {/* /.row */}
                <div className="row margin-top-70 margin-auto max-width-800">
                  <div className="col-md-12 text-center">
                    <p>
                      We also provide after shoot support and access to storage
                      till you are ready to receive them.
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
          <div className="tt-post-password full-height-vh">
            <div className="tt-post-password-inner"></div>{" "}
            {/* /.post-password */}
          </div>
          {/* End post password */}
        </div>{" "}
        {/* /.about-me-inner */}
      </section>
      <section
        id="footer"
        className="footer-minimal no-margin-top bg-transparent"
      >
        <div className="footer-inner">
          <div className="footer-container tt-wrap">
            <div className="row">
              <div className="col-md-6 col-md-push-6">
                {/* Begin social buttons */}
                <div className="social-buttons">
                  <ul>
                    <li>
                      <a
                        href="/#"
                        className="btn btn-social-min btn-default btn-link"
                        title="Follow me on Facebook"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="btn btn-social-min btn-default btn-link"
                        title="Follow me on Twitter"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="btn btn-social-min btn-default btn-link"
                        title="Follow me on Google+"
                        target="_blank"
                      >
                        <i className="fab fa-google-plus-g" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="btn btn-social-min btn-default btn-link"
                        title="Follow me on Pinterest"
                        target="_blank"
                      >
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="btn btn-social-min btn-default btn-link"
                        title=""
                        target="_blank"
                      >
                        <i className="fab fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="btn btn-social-min btn-default btn-link"
                        title="Drop me a line"
                        target="_blank"
                      >
                        <i className="fas fa-envelope" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End social buttons */}
              </div>{" "}
              {/* /.col */}
              <div className="col-md-6 col-md-pull-6">
                {/* Begin footer copyright */}
                <div className="footer-copyright">
                  <p>© Ogaphoto 2021 </p>
                  <p>All rights reserved</p>
                </div>
                {/* End footer copyright */}
              </div>{" "}
              {/* /.col */}
            </div>{" "}
            {/* /.row */}
          </div>{" "}
          {/* /.footer-container */}
        </div>{" "}
        {/* /.footer-inner */}
        {/* Scroll to top button */}
        <a href="#body" className="scrolltotop sm-scroll" title="Scroll to top">
          <i className="fas fa-chevron-up" />
        </a>
      </section>
    </React.Fragment>
  );
};

export default Bestphotographers;
