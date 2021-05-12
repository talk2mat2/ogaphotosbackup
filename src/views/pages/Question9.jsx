import React, { useState } from "react";
import styled from "styled-components";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { useSelector } from "react-redux";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { useDispatch } from "react-redux";
import { SETBOOKINGPROCESSINFO } from "../../redux/action";
import { EmailOutlined } from "@material-ui/icons";
import Ratings from "../users/ratings";

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
    border: 0.2px solid silver;
    min-height: 50px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    margin-top: 20px;

    // margin-top:20px
    // &:hover {
    //   border: 1px solid black;
    // }
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
`;

const StepperQuestion = (props) => {
  return (
    <StepperContainer>
      <MainStepper width={props.value} />
    </StepperContainer>
  );
};
const Question9 = (props) => {
  const [sessionVenue, setsessionVenue] = useState({});
  const [AdditionalAddress, setAdditionalAddress] = useState("");
  const [email, setEmail] = useState("");
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
  const now = new Date();
  return (
    <Container>
      <Hbig className="tt-heading-title">Confirm Your booking details ?</Hbig>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        {now.getDay() * 2} person(s) are looking for shoots within similar
        period
      </p>
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
          marginTop: "8px",
        }}
      >
        Pay with Credit Card
      </button>
      <Listing>
        <li style={{ justifyContent: "space-between" }}>
          <h5>
            <b>Total</b>
          </h5>
          <h5>
            <b>NGN {parseFloat(bookingprocess.price).toLocaleString()}</b>
          </h5>
        </li>
        <li>
          <span style={{ width: "100%" }}>
            <VericalCenterRow>
              <EmailOutlined
                fontSize="small"
                style={{ color: "grey", marginRight: "10px" }}
              />
              <p>talk@yahoo.com</p>
            </VericalCenterRow>
            <VericalCenterRow>
              <EventNoteIcon
                fontSize="small"
                style={{ color: "grey", marginRight: "10px" }}
              />
              <p>
                {bookingprocess.date}, {bookingprocess.time}
              </p>
            </VericalCenterRow>
            <VericalCenterRow>
              <PhoneAndroidIcon
                fontSize="small"
                style={{ color: "grey", marginRight: "10px" }}
              />
              <p>0893874784848</p>
            </VericalCenterRow>
            <VericalCenterRow>
              <LocationOnIcon
                fontSize="small"
                style={{ color: "grey", marginRight: "10px" }}
              />
              <p>{bookingprocess.locations}</p>
            </VericalCenterRow>
          </span>
        </li>
        <li>
          <span style={{ width: "100%" }}>
            <VericalCenterRow
              style={{
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <span>
                <VericalCenterRow>
                  <EventAvailableIcon
                    fontSize="small"
                    style={{ color: "grey", marginRight: "10px" }}
                  />
                  <p>2 hours Of uninterupted event shoot</p>
                </VericalCenterRow>
              </span>
              <p>
                <b>NGN {parseFloat(bookingprocess.price).toLocaleString()}</b>
              </p>
            </VericalCenterRow>
            <VericalCenterRow>
              <span className="verticalRow">
                <PermIdentityIcon
                  fontSize="large"
                  style={{ marginRight: "10px", fontSize: "40px" }}
                />
                <span>
                  <p>wale james</p>
                  <Ratings rating={5} />
                </span>
              </span>
            </VericalCenterRow>
          </span>
        </li>
      </Listing>
    </Container>
  );
};

export default Question9;
