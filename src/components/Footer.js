/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
// import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{ marginBottom: "0px" }}
      className="light-wrapper inverse-text"
    >
      <div className="sub-footer">
        <div className="container inner text-center">
          {" "}
          <img
            src="#"
            srcset="style/images/logo-light.png 1x, style/images/logo-light@2x.png 2x"
            alt=""
          />
          <div className="space25"></div>
          <a
            className="section-title section-title-upper text-center "
            style={{ color: "rgb(0, 162, 149)", fontWeight: "bold" }}
          >
            © 2021 ogaphotos. All rights reserved.
          </a>
          <div className="space30"></div>
          <ul className="social social-bg social-s">
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-vimeo"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
