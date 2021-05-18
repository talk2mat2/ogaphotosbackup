/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button, Grid, InputLabel, TextField } from "@material-ui/core";
// import { Scripts } from "../../scriptNew";

import { Link, Route, Switch, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AlertDialog from "../../components/AlertDialog";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { LOGINSUCCESS } from "../../redux/action";
import Header from "../../components/Header2";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";
import Question7 from "./Question7";
import Question8 from "./Question8";
import Question9 from "./Question9";
const Container = styled.div`
  min-height: 70vh;
  background-color: rgb(246, 249, 255);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
const StepperContainer = styled.div`
  height: 3px;
  background-color: rgb(228, 231, 238);
  font-weight: bold;
  margin-bottom: 20px;

  width: 100%;
`;
const MainStepper = styled.div`
  height: 3px;
  background-color: black;
  width: ${({ width }) => width}%;
  transition: width 1s ease;
`;

const QuestionContainer = styled.div`
  min-height: 70vh;
  margin-top: 20px;
  background-color: #ffffff;
  width: 500px;
  min-height: 400px;
  display: flex;
  flex-direction: column;

  padding: 10px;
  box-sizing: border-box;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 640px) {
    width: 100vw;
  }
`;
const StepperQuestion = (props) => {
  return (
    <StepperContainer>
      <MainStepper width={props.value} />
    </StepperContainer>
  );
};
const Purpose = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [stepperLevel, setStepperLevel] = useState(0);
  const [ErrorMessage, setErrorMessage] = useState("");
  const bookingprocess = useSelector((state) => state.BookingProcessReducer);
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  const location = useLocation();
  const { match } = props;
  const handleLogin = (values) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/photographer/Login`, values)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        // setIsregistered(true)
        // history.push('/dashboard')
        dispatch(LOGINSUCCESS(res.data));
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
    setEmail("");
    setPassword("");
    setErrorMessage("");
    // dispatch(clearLoginError())
  };

  const handleNext = (Link) => {
    history.push(`${match.url}/${Link}`);
  };
  useEffect(() => {
    if (!bookingprocess.purpose) {
      history.push("/Purpose");
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);
    }
  }, [bookingprocess]);

  useEffect(() => {
    if (userData && userData.isPhotographer) {
      history.push("/dashboard");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, []);
  useEffect(() => {
    console.log(location.pathname);
    location.pathname === "/Purpose" && setStepperLevel(10);
    location.pathname === "/Purpose/category" && setStepperLevel(20);
    location.pathname === "/Purpose/location" && setStepperLevel(30);
    location.pathname === "/Purpose/Email" && setStepperLevel(50);
    location.pathname === "/Purpose/duration" && setStepperLevel(60);
    location.pathname === "/Purpose/date" && setStepperLevel(70);
    location.pathname === "/Purpose/time" && setStepperLevel(80);
    location.pathname === "/Purpose/photographerselect" && setStepperLevel(90);
    location.pathname === "/Purpose/checkout" && setStepperLevel(95);
  }, [location]);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <QuestionContainer>
          <ArrowBackIcon
            onClick={history.goBack}
            fontSize="large"
            style={{
              textAlign: "center",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          />
          <StepperQuestion value={stepperLevel} />
          <Switch>
            <Route exact path={match.url}>
              <Question1 handleNext={handleNext} />
            </Route>
            <Route path={`${match.url}/category`}>
              <Question2 handleNext={handleNext} />
            </Route>
            <Route path={`${match.url}/location`}>
              <Question3 handleNext={handleNext} />
            </Route>
            <Route path={`${match.url}/Email`}>
              <Question4 handleNext={handleNext} />
            </Route>
            <Route path={`${match.url}/duration`}>
              <Question5 handleNext={handleNext} />
            </Route>
            <Route path={`${match.url}/date`}>
              <Question6 handleNext={handleNext} />
            </Route>
            <Route path={`${match.url}/time`}>
              <Question7 handleNext={handleNext} />
            </Route>
            <Route path={`${match.url}/photographerselect`}>
              <Question8 handleNext={handleNext} />
            </Route>
            <Route path={`${match.url}/checkout`}>
              <Question9 handleNext={handleNext} />
            </Route>
          </Switch>
        </QuestionContainer>
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

export default Purpose;
