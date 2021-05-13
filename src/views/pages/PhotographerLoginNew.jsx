/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Grid, InputLabel, TextField } from "@material-ui/core";
// import { Scripts } from "../../scriptNew";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AlertDialog from "../../components/AlertDialog";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { LOGINSUCCESS } from "../../redux/action";
import Header from "../../components/Header2";
const Container = styled.div`
  min-height: 100vh;
  background-color: #ffff;
  width: 100%;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
    background-color: rgb(0, 162, 149);
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
    background-color: rgb(0, 162, 149);
    color: #ffff;
  }
`;
const PhotoGrapherLoginNew = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const handleLogin = (values) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/photographer/Login`, values)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        // setIsregistered(true)
        // history.push('/dashboard')
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
    setPassword("");
    setErrorMessage("");
    // dispatch(clearLoginError())
  };
  return (
    <React.Fragment>
      {/* <Header /> */}
      <Container>
        <SelectContainer>
          <SelectContentContainer2>
            <img
              style={{
                borderRadius: "10px",
                width: 100 + "%",
                height: 100 + "%",
                objectFit: "cover",
              }}
              loginImage
              src="/assets/img/intro/intro-8.jpg"
              alt="img"
            />
          </SelectContentContainer2>
          <SelectContentContainer1>
            <Margin />
            <a href="/">
              <img
                style={{
                  height: "40px",

                  objectFit: "cover",
                }}
                loginImage
                src="/assets/img/logo-dark.png"
                alt="img"
              />
            </a>
            <Margin />
            <BigText> Photographer Log in</BigText>
            <Listing>
              <li>
                <small>Email</small>
                <br />
                <Input
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                />
              </li>
              <li>
                <small style={{ textAlign: "left" }}>Password</small>
                <br />
                <Input
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                />
              </li>
              <li style={{ textAlign: "center" }}>
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
                    " Login"
                  )}
                </Buttons>
              </li>
              <li style={{ textAlign: "center" }}>
                <small style={{ color: "rgb(71, 178, 228)" }}>
                  <Link to="/PhotographersRegister"> Not Yet Registered ?</Link>
                </small>
              </li>
              <li style={{ textAlign: "left" }}>
                <p style={{ color: "grey" }}>
                  <Link to="/SignUp"> Login as a client</Link>
                </p>
              </li>
            </Listing>
            <AlertDialog open={ErrorMessage} onClose={handleClose}>
              {ErrorMessage}
            </AlertDialog>
          </SelectContentContainer1>
        </SelectContainer>
      </Container>
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

export default PhotoGrapherLoginNew;
