/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Grid, InputLabel, TextField } from "@material-ui/core";
// import { Scripts } from "../../scriptNew";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AlertDialog from "../../components/AlertDialog";
import CircularProgress from "@material-ui/core/CircularProgress";
import NaijaStates from "naija-state-local-government";
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
  //color: rgb(0, 162, 149);
  color: rgb(104, 7, 249);
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

  li,
  select {
    padding: 0px;
    list-style: none;
    width: 100%;
    margin-bottom: 3px;
    text-align: left;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 8px;
  border: 1px solid grey;
  background-color: #ffff;
  height: 50px;

  &:focus {
    border-bottom: 1px solid blue;
    outline: none;
  }
`;
const Buttons = styled(Button)`
  && {
      border:none;
    // background-color: rgb(71, 178, 228);
    //background-color: rgb(0, 162, 149);
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
    background-color: rgb(0, 162, 149);
    color: #ffff;
  }
`;
const PhotographersRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Mystate, setMystate] = useState("");
  const [Mylga, setMylga] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [confpass, setConfPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");

  // const handleEmailChange = (e) => setEmail(e.target.value);

  // const handleFnameChange = (e) => setFname(e.target.value);
  // const handleLnameChange = (e) => setLname(e.target.value);
  // const handleMobileChange = (e) => setMobile(e.target.value);

  // const handlePasswordChange = (e) => setPassword(e.target.value);
  // const handleConfPasswordChange = (e) => setConfPassword(e.target.value);
  const handleSignup = (values) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/photographer/Register`, values)
      .then((res) => {
        setLoading(false);
        console.log(res.data);

        dispatch(LOGINSUCCESS(res.data));
        history.push("/dashboard");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          console.log(err.response.data.message);
          err.response.data.message &&
            setErrorMessage(err.response.data.message);
        }
        console.log(err);
        setErrorMessage(
          "An error occured ,make sure you have a working network"
        );
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confpass) {
      return setErrorMessage("Both password dont match");
    }
    if (
      !email ||
      !password ||
      !fname ||
      !lname ||
      !mobile ||
      !Mystate ||
      !Mylga
    ) {
      return setErrorMessage("Error, all fields are required");
    }
    // dispatch(signUp(email, password, mobile, fname, lname));handle
    handleSignup({ email, password, fname, lname, mobile, Mylga, Mystate });
  };

  const handleClose = () => {
    // setEmail("");
    // setPassword("");
    // setConfPassword("");
    // setFname("");
    // setLname("");
    // setMobile("");
    // dispatch(clearSignupError());
    setErrorMessage("");
  };

  const Mapstate = () => {
    return NaijaStates.all().map((xx) => (
      <option value={xx.state}>{xx.state}</option>
    ));
  };

  const MapLga = (value) => {
    return (
      value &&
      NaijaStates.lgas(value).lgas.map((xx) => <option value={xx}>{xx}</option>)
    );
  };
  useEffect(() => {
    console.log(MapLga(Mystate));
  }, [Mystate]);
  return (
    <React.Fragment>
      {/* <Header /> */}
      <Container>
        <SelectContainer>
          <SelectContentContainer2>
            {/* <Margin /> */}

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

            <BigText> Photographers register</BigText>
            <small>
              <em>
                interested in becoming a member of <br />
                Ogaphoto Photographers ?
              </em>
            </small>
            <Listing>
              <li>
                <Input
                  autoComplete="off"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  type="text"
                  required
                  placeholder="First name"
                />
              </li>
              <li>
                <Input
                  autoComplete="off"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  type="text"
                  required
                  placeholder="Last Name"
                />
              </li>
              <li>
                <Input
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Email Address"
                />
              </li>
              <li>
                <Input
                  autoComplete="off"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="Text"
                  required
                  placeholder="Phone Number"
                />
              </li>
              <li>
                <Input
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  placeholder="Password"
                />
              </li>
              <li>
                <Input
                  autoComplete="off"
                  value={confpass}
                  onChange={(e) => setConfPassword(e.target.value)}
                  type="password"
                  required
                  placeholder="Confirm password"
                />
              </li>
              <li>
                <div
                  style={{
                    marginTop: "auto",
                    width: "100%",
                    border: "1px solid grey",
                    height: "50px",
                    marginBottom: "6px",
                  }}
                >
                  {/* <p>State:</p> */}
                  <select
                    defaultValue={Mystate}
                    name="favoritesShootTypes"
                    id="favoritesShootTypes"
                    value={Mystate}
                    onChange={(e) => setMystate(e.target.value)}
                    style={{
                      // width: "200px",
                      border: "none",
                      borderRadius: "4px",
                      height: "100%",
                    }}
                  >
                    <option value="">State</option>
                    {Mapstate()}
                  </select>
                </div>
              </li>
              <li>
                {Mystate && (
                  <div
                    style={{
                      marginTop: "auto",
                      width: "100%",
                      border: "1px solid grey",
                      height: "50px",
                    }}
                  >
                    {/* <p>State:</p> */}
                    <select
                      defaultValue={Mylga}
                      name="favoritesShootTypes"
                      id="favoritesShootTypes"
                      value={Mylga}
                      onChange={(e) => setMylga(e.target.value)}
                      style={{
                        // width: "200px",
                        border: "none",
                        borderRadius: "4px",
                        height: "100%",
                      }}
                    >
                      <option value="">Select Lga</option>
                      {MapLga(Mystate)}
                    </select>
                  </div>
                )}
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
                    "Register"
                  )}
                </Buttons>
              </li>
              <li style={{ textAlign: "center" }}>
                <small style={{ color: "rgb(71, 178, 228)" }}>
                  <Link to="/PhotoGrapherLoginNew"> Already Registered ?</Link>
                </small>
              </li>
              {/* <li style={{ textAlign: "left" }}>
                <p style={{ color: "grey" }}>
                  <Link to="/PhotoGrapherLoginNew"> Photographer's Login</Link>
                </p>
              </li> */}
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

export default PhotographersRegister;
