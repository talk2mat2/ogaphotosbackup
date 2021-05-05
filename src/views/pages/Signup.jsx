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

const SignUp = (props) => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const { match } = props;
  const history = useHistory();

  const handleSignUpPage = () => {
    history.push(`${match.url}/signup`);
  };
  const handleLoginPage = () => {
    history.push(match.url);
  };
  return <LoginNew />;
};

export default SignUp;
