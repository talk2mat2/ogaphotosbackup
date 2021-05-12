import React, { useState } from "react";
import styled from "styled-components";
import AutoCompletePlaces from "../users/AutoComplleteMap";
import MapWithAMarker from "../../components/MapWithAMarker";
import { useSelector } from "react-redux";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import KitchenIcon from "@material-ui/icons/Kitchen";
import BusinessIcon from "@material-ui/icons/Business";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LandscapeIcon from "@material-ui/icons/Landscape";
import TheatersIcon from "@material-ui/icons/Theaters";
import { useDispatch } from "react-redux";
import { SETBOOKINGPROCESSINFO } from "../../redux/action";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  transition: height 1.5s ease;
`;
const Hbig = styled.h3`
  text-align: center;
  font-size: 20px;
`;
const Listing = styled.ul`
  padding: 0;
  list-style: none;
  justify-self: flex-end;
  margin-top: auto;
  width: 48%;

  li {
    border: 0.5px solid silver;
    height: 80px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    margin-top: 20px;
    cursor: pointer;

    // margin-top:20px
    &:hover {
      border: 1px solid black;
    }
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
const VericalCenterRow = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const StepperQuestion = (props) => {
  return (
    <StepperContainer>
      <MainStepper width={props.value} />
    </StepperContainer>
  );
};
const Question3 = (props) => {
  const [sessionVenue, setsessionVenue] = useState({});

  const [email, setEmail] = useState("");
  const photographers = useSelector((state) => state.photographers);
  const bookingprocess = useSelector((state) => state.BookingProcessReducer);
  const [CardVisible, setCardVisible] = useState(false);

  const dispatch = useDispatch();
  const [isRegistered, setIsregistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [startRegistration, setStartRegistration] = useState(false);
  const [startlogin, setStarlogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleCheckIsRegistered = async (values) => {
    setIsLoading(true);

    await axios
      .post(`${process.env.REACT_APP_API_URL}/users/CheckIsRegistered`, {
        email: values,
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        setErrorMessage("");
        setIsregistered(true);
        setStartRegistration(false);
        setStarlogin(true);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response) {
          console.log(err.response.data.message);
          setStarlogin(false);
          err.response.data.message &&
            setErrorMessage(err.response.data.message);
          err.response.data.error && setIsregistered(false);
          err.response.data.error && setStartRegistration(true);
        }
        console.log(err);
      });
  };
  const handleSelection = (value) => {
    if (!validateEmail(email)) {
      return alert("provide a valide email");
    }
    if (!isRegistered) {
      return handleCheckIsRegistered(email);
    }
    props.handleNext("duration");
    console.log(bookingprocess);
    // console.log(sessionVenue, AdditionalAddress);
    // sessionVenue.name &&
    //   AdditionalAddress &&
    //   dispatch(
    //     SETBOOKINGPROCESSINFO({
    //       locations: sessionVenue.name,
    //       AdditionalAddress: AdditionalAddress,
    //     })
    //   );
  };
  return (
    <Container>
      <Hbig className="tt-heading-title">Where do we send the Quotation ?</Hbig>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
        style={{
          width: "100%",
          color: "grey",
          borderWidth: "1px",
          borderColor: "silver",
          height: "35px",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      />
      {startlogin ? (
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{
            width: "100%",
            color: "grey",
            borderWidth: "1px",
            borderColor: "silver",
            height: "35px",
            marginBottom: "4px",
            marginTop: "4px",
          }}
        />
      ) : null}
      {startRegistration ? (
        <>
          <VericalCenterRow>
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="First Name"
              style={{
                width: "47%",
                color: "grey",
                borderWidth: "1px",
                borderColor: "silver",
                height: "35px",
                marginBottom: "4px",
                marginTop: "4px",
              }}
            />
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Surname"
              style={{
                width: "47%",
                color: "grey",
                borderWidth: "1px",
                borderColor: "silver",
                height: "35px",
                marginBottom: "4px",
                marginTop: "4px",
              }}
            />
          </VericalCenterRow>
          <VericalCenterRow>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter Phone Number"
              style={{
                width: "47%",
                color: "grey",
                borderWidth: "1px",
                borderColor: "silver",
                height: "35px",
                marginBottom: "4px",
                marginTop: "4px",
              }}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Set Password"
              style={{
                width: "47%",
                color: "grey",
                borderWidth: "1px",
                borderColor: "silver",
                height: "35px",
                marginBottom: "4px",
                marginTop: "4px",
              }}
            />
          </VericalCenterRow>
        </>
      ) : null}

      <button
        disabled={!email}
        onClick={handleSelection}
        style={{
          width: "100%",
          height: "40px",
          border: "none",
          backgroundColor: "rgb(0, 162, 149)",
          padding: "9px",
          color: "#ffffff",
          cursor: "pointer",
          marginTop: "auto",
        }}
      >
        Continue
      </button>
    </Container>
  );
};

export default Question3;
