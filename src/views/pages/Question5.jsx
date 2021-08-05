import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AutoCompletePlaces from "../users/AutoComplleteMap";
import MapWithAMarker from "../../components/MapWithAMarker";
import axios from "axios";
import { useSelector } from "react-redux";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import KitchenIcon from "@material-ui/icons/Kitchen";
import BusinessIcon from "@material-ui/icons/Business";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LandscapeIcon from "@material-ui/icons/Landscape";
import TheatersIcon from "@material-ui/icons/Theaters";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { useDispatch } from "react-redux";
import { SETBOOKINGPROCESSINFO } from "../../redux/action";
const Space = styled.div`
  width: 1px;
`;
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
  width: 100%;

  li {
    border: 0.5px solid silver;
    min-height: 100px;
    padding-left: 5px;
    padding-right: 5px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
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
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  border-bottom: 1px solid grey;
  justify-content: space-between;
`;
const Horizontalcolumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Question5 = (props) => {
  const [sessionVenue, setsessionVenue] = useState({});
  const [AdditionalAddress, setAdditionalAddress] = useState("");
  const [email, setEmail] = useState("");
  const photographers = useSelector((state) => state.photographers);
  const bookingprocess = useSelector((state) => state.BookingProcessReducer);
  const [CardVisible, setCardVisible] = useState(false);
  const [mylocation, setMylocation] = useState(null);
  const [PriceTag, setPriceTag] = useState(null);
  const [locationPrice, setlocationPrice] = useState(null);
  const [durations, setDurations] = useState("");
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
  // const handleplaces = async (place) => {
  //   // console.log(place.formatted_address)
  //   // console.log(place.geometry.location.lat())
  //   // console.log(place.geometry.location.lng())
  //   const lng = await place.geometry.location.lng();
  //   const lat = await place.geometry.location.lat();
  //   const address = place.formatted_address;
  //   return await handleToClick(lng, lat, address);
  // };
  const handleSelection = (value) => {
    if (!CalculatetotalPrice()) {
      return null;
    }
    props.handleNext("date");
    console.log(bookingprocess);
    // console.log(sessionVenue, AdditionalAddress);
    // sessionVenue.name &&
    //   AdditionalAddress &&
    dispatch(
      SETBOOKINGPROCESSINFO({
        duration: durations,
        price: CalculatetotalPrice(),
      })
    );
  };
  const GetPricePriceTag = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/users/GetPricePriceTag`)
      .then((res) => {
        console.log(res.data.userData.price);
        setPriceTag(res.data.userData.price);
        setlocationPrice(res.data.userData.locationPrice);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };

  const CalculatetotalPrice = () => {
    if (!PriceTag || !durations) {
      return null;
    }
    // if (durations === "30 minutes") {
    //   return PriceTag * 30;
    // }
    if (durations === "1 hour") {
      return PriceTag * 60;
    }
    if (durations === "2 hours") {
      return PriceTag * 120;
    }
    if (durations === "3 hours") {
      return PriceTag * 180;
    }
    if (durations === "7 hours") {
      return PriceTag * 420;
    }
    if (durations === "24 hours") {
      // return PriceTag * 1440;
      return 100000;
    }
  };
  useEffect(() => {
    GetPricePriceTag();
  }, []);
  return (
    <Container>
      <Hbig className="tt-heading-title">
        What is the expected duration of your shoot ?
      </Hbig>
      <VericalCenterRow>
        <label className="container">
          1 hr{" "}
          <input
            value="1 hour"
            type="radio"
            checked={durations === "1 hour"}
            name="duration"
            onChange={(e) => {
              setDurations(e.target.value);
            }}
          />
        </label>
        <label className="container">
          2 hr{" "}
          <input
            value="2 hours"
            type="radio"
            checked={durations === "2 hours"}
            name="duration"
            onChange={(e) => {
              setDurations(e.target.value);
            }}
          />
          <span class="checkmark"></span>
        </label>
        <label className="container">
          3 hr{" "}
          <input
            value="3 hours"
            type="radio"
            checked={durations === "3 hours"}
            name="duration"
            onChange={(e) => {
              setDurations(e.target.value);
            }}
          />
          <span class="checkmark"></span>
        </label>
        <label className="container">
          7 hr{" "}
          <input
            value="7 hours"
            type="radio"
            checked={durations === "7 hours"}
            name="duration"
            onChange={(e) => {
              setDurations(e.target.value);
            }}
          />
          <span class="checkmark"></span>
        </label>
        <label className="container">
          24 hr{" "}
          <input
            value="24 hours"
            type="radio"
            checked={durations === "24 hours"}
            name="duration"
            onChange={(e) => {
              setDurations(e.target.value);
            }}
          />
          <span class="checkmark"></span>
        </label>
      </VericalCenterRow>
      <Listing>
        {durations && (
          <li>
            <EventNoteIcon fontSize="large" style={{ marginTop: "20px" }} />

            <Horizontalcolumn>
              <p>{durations} Of uninterupted event shoot</p>
              {CalculatetotalPrice ? (
                <p>
                  <b>
                    NGN {parseFloat(CalculatetotalPrice()).toLocaleString()}
                  </b>{" "}
                  {locationPrice
                    ? `+ ${parseFloat(locationPrice)} (loc.)`
                    : null}
                </p>
              ) : null}
              <em style={{ color: "dodgerblue" }}>Multiple Locations</em>
              <em style={{ color: "dodgerblue" }}>
                Digital Copy Files Included
              </em>
            </Horizontalcolumn>
          </li>
        )}
      </Listing>

      <button
        disabled={!durations}
        onClick={handleSelection}
        style={{
          marginTop: "auto",
          width: "100%",
          height: "40px",
          border: "none",
          backgroundColor: "rgb(0, 162, 149)",
          padding: "9px",
          color: "#ffffff",
          cursor: "pointer",
        }}
      >
        Continue
      </button>
    </Container>
  );
};

export default Question5;
