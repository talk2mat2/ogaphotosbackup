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

const Container = styled.div`
  width: 100%;
  min-height: 400px;
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
  margin-top: auto;
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
const Question6 = (props) => {
  const [sessionVenue, setsessionVenue] = useState({});
  const [AdditionalAddress, setAdditionalAddress] = useState("");
  const [date, setDate] = useState("");
  const photographers = useSelector((state) => state.photographers);
  const bookingprocess = useSelector((state) => state.BookingProcessReducer);
  const [CardVisible, setCardVisible] = useState(false);
  const [mylocation, setMylocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const dispatch = useDispatch();

  const handleToClick = async (long1, lat1, address) => {
    // console.log(typeof long)
    let lng = parseFloat(long1);
    let lat = parseFloat(lat1);
    console.log(lng, lat, typeof lng, typeof lat);
    setCardVisible(true);
    setsessionVenue({
      name: address,

      lat: lat,
      lng: lng,
    });
    // await handleSearchPhotoGrphers({
    //   sesionlocation: { lat: lat, lng: lng, address },
    // });
  };
  const handleplaces = async (place) => {
    // console.log(place.formatted_address)
    // console.log(place.geometry.location.lat())
    // console.log(place.geometry.location.lng())
    const lng = await place.geometry.location.lng();
    const lat = await place.geometry.location.lat();
    const address = place.formatted_address;
    return await handleToClick(lng, lat, address);
  };
  const handleSelection = (value) => {
    if (!date) {
      return null;
    }
    props.handleNext("time");
    console.log(bookingprocess);
    // console.log(sessionVenue, AdditionalAddress);
    // sessionVenue.name &&
    //   AdditionalAddress &&
    dispatch(
      SETBOOKINGPROCESSINFO({
        date: date,
      })
    );
  };
  var now = new Date();
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  return (
    <Container>
      <Hbig className="tt-heading-title">Choose a date for your shoot</Hbig>
      <input
        min={formatDate(now)}
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
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

      <button
        disabled={!date}
        onClick={handleSelection}
        style={{
          width: "100%",
          height: "40px",
          border: "none",
          backgroundColor: "rgb(0, 162, 149)",
          padding: "9px",
          color: "#ffffff",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Continue
      </button>
    </Container>
  );
};

export default Question6;
