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
import Header from "../../components/Header";
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
    background-color: rgb(20, 27, 37);
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
  const handleLogin = (values) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/Login`, values)
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
  return (
    <React.Fragment>
      <Header />
      <Container>
        <SelectContainer>
          <SelectContentContainer2>
            <Margin />
            <Margin />
            <img loginImage src="media/about4.jpg" alt="img" />
          </SelectContentContainer2>
          <SelectContentContainer1>
            <Margin />
            <Margin />
            <Margin />
            <Margin />
            <p className="midText11">Log in</p>
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
                    <small> Login</small>
                  )}
                </Buttons>
              </li>
              <li style={{ textAlign: "center" }}>
                <small style={{ color: "rgb(71, 178, 228)" }}>
                  <Link to="/ClientRegister"> Not Yet Registered ?</Link>
                </small>
              </li>
              <li style={{ textAlign: "left" }}>
                <p style={{ color: "grey" }}>
                  <Link to="/PhotoGrapherLoginNew"> Photographer's Login</Link>
                </p>
              </li>
            </Listing>
            <AlertDialog open={ErrorMessage} onClose={handleClose}>
              {ErrorMessage}
            </AlertDialog>
          </SelectContentContainer1>
        </SelectContainer>
      </Container>
    </React.Fragment>
  );
};

export default LoginNew;
