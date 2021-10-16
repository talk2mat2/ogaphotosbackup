/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Grid, InputLabel, TextField } from "@material-ui/core";
// import { Scripts } from "../../scriptNew";

import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AlertDialog from "../../components/AlertDialog";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { LOGINSUCCESS } from "../../redux/action";
import Header from "../../components/Header";
import ScrollToTop from "../../ScrollToTop";
const Container = styled.div`
  min-height: 100vh;
  background-color: #ffff;
  width: 100%;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #ffff;
  width: 100%;
  flex-wrap: wrap;
`;
const SelectContentContainer1 = styled.div`
  min-height: 400px;
  width: 35%;

  display: flex;
  //   justify-content: center;
  flex-direction: column;
  align-items: center;
  //   background-color: #ffff;
  text-align: center;

  @media (max-width: 630px) {
    width: 100vw;
  }
`;
const BigText = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: rgb(0, 162, 149);
`;
const SelectContentContainer2 = styled.div`
  background-color: #ffff;
  min-height: 400px;
  width: 60%;
  display: flex;
  //   justify-content: center;
  flex-direction: column;
  align-items: center;
  //   background-color: #ffff;
  text-align: center;

  @media (max-width: 630px) {
    display: none;
  }

  #loginImage {
    max-height: 95%;
    object-fit: contain;
    border-radius: 10px;
    margin: 4px;
  }
`;
const Margin = styled.div`
  height: 30px;
`;
const Listing = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;
  padding: 0px;
  align-items: center;

  li {
    padding: 0px;
    list-style: none;
    width: 100%;
    margin-bottom: 3px;
    text-align: left;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid grey;
  background-color: #ffff;
  height: 50px;
  color: black;
  &:focus {
    border-bottom: 1px solid blue;
    outline: none;

    border-color: #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
  }
`;
const Buttons = styled(Button)`
  && {
      border:none;
    // background-color: rgb(71, 178, 228);
    // background-color: rgb(0, 162, 149);
    //background-color: rgb(20, 27, 37);
    background-color: rgb(104, 7, 249);
    margin-top: 8px;
    outline:none;
    width: 200px;
    color: #ffff;
    margin-top:20px;
 border-radius:20px;
 &:hover {
    // color: rgb(71, 178, 228);
    // background-color: white;
    // border: 1px solid rgb(71, 178, 228);
    background-color: rgb(20, 27, 37);
    color: #ffff;
  }
`;
const LoginNew = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const handleEmailChange = (text) => {
    setEmail(text);
    console.log(email);
  };
  const handleLogin = (values) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/Login`, values)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        // setIsregistered(true)
        history.push("/");

        dispatch(LOGINSUCCESS(res.data));
        window.location.reload();
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          setErrorMessage(err.response.data.message);
          console.log(err.response.data.message);
          // err.response.data.message &&

          // err.response.data.error && setIsregistered(false)
        } else {
          setErrorMessage(
            "An error occured ,make sure you have a working network"
          );
        }
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setErrorMessage("Both fields are required");
    }

    handleLogin({ email, password });
    // dispatch(signIn(email, password));
    console.log(email, password);
  };
  const handleClose = () => {
    // setEmail("");
    // setPassword("");
    setErrorMessage("");
    // dispatch(clearLoginError())
  };
  return (
    <React.Fragment>
      <Header />

      <section 
      id="password-protected-section"
      >
        <div
          // className="password-protected-inner bg-image"
          style={{
            backgroundImage: "url(assets/img/misc/misc-5.jpg)",
            backgroundPosition: "50% 50%",
           
          }}
        >
          {" "}
          {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
          {/* Element cover */}
          <span className="cover bg-transparent-2-dark" />
          {/* Begin post password 
					========================= */}
          <div className="tt-post-password full-height-vh">
            <div className="tt-post-password-inner">
              <div className="tt-post-password-icon">
                <i className="fas fa-lock" />
              </div>
              <div className="tt-post-password-text">Login To Your Account</div>
              <form
                id="tt-post-password-form"
                // className="form-btn-inside"
              >
                <div className="form-grou">
                  <small>Email</small>
                  <br />
                  <Input
                    autoComplete="off"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    type="email"
                    required
                  />
                  <small style={{ textAlign: "left" }}>Password</small>
                  <br />
                  <Input
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                  />
                  <Buttons
                    variant="outlined"
                    color="secondary"
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <CircularProgress
                        size={24}
                        style={{
                          fontSize: 20,
                          color: "white",
                        }}
                      />
                    ) : (
                      <small> Login</small>
                    )}
                  </Buttons>
                  <Margin />
                  <div style={{ textAlign: "center" }}>
                    <small>
                      <a style={{ color: "#499f96" }} href="/Purpose">
                        Not Yet Registered ?
                      </a>
                    </small>
                  </div>
                  <Margin />
                  <div style={{ textAlign: "left" }}>
                    <h4 style={{ color: "#ffffff" }}>
                      <Link
                        style={{ color: "#499f96" ,fontWeight:"bold"}}
                        to="/PhotoGrapherLoginNew"
                      >
                        {" "}
                        Photographer's Login
                      </Link>
                    </h4>
                  </div>

                  <AlertDialog open={ErrorMessage} onClose={handleClose}>
                    {ErrorMessage}
                  </AlertDialog>
                </div>
              </form>
            </div>{" "}
            {/* /.post-password */}
          </div>
         
         {/* End post password */}
        </div>{" "}
        {/* /.about-me-inner */}
      </section >
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

export default LoginNew;
