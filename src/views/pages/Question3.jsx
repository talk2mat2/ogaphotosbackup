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
const Question4 = (props) => {
  const [sessionVenue, setsessionVenue] = useState({});
  const [AdditionalAddress, setAdditionalAddress] = useState("");
  const photographers = useSelector((state) => state.photographers);
  const bookingprocess = useSelector((state) => state.BookingProcessReducer);
  const [CardVisible, setCardVisible] = useState(false);
  const [mylocation, setMylocation] = useState({});
  const [locations, setLocations] = useState([]);
  const [DisplayAutoComplete, setDisplayAutoComplete] = useState(false);
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
  const option = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  React.useEffect(() => {
    setTimeout(() => {
      setDisplayAutoComplete(true);
    }, 1000);
  }, []);
  React.useEffect(() => {
    if (!mylocation.lat) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMylocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          // alert(position.coords.latitude)
        },
        (err) => console.log(err),
        option
      );
    }
  }, []);
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
    props.handleNext("Email");
    console.log(bookingprocess);
    // console.log(sessionVenue, AdditionalAddress);
    sessionVenue.name &&
      AdditionalAddress &&
      dispatch(
        SETBOOKINGPROCESSINFO({
          locations: sessionVenue.name,
          lat: sessionVenue.lat,
          lng: sessionVenue.lng,
          AdditionalAddress: AdditionalAddress,
        })
      );
  };
  return (
    <Container>
      <Hbig className="tt-heading-title">
        Where is the location of the shoot?
      </Hbig>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "15px",
        }}
      >
        <AutoCompletePlaces handleplaces={handleplaces} />
      </div>
      {CardVisible && sessionVenue ? (
        <input
          value={AdditionalAddress}
          onChange={(e) => setAdditionalAddress(e.target.value)}
          placeholder="Enter addition location details,e.g: second floor"
          style={{
            width: "100%",
            color: "grey",
            borderWidth: "1px",
            borderColor: "silver",
            height: "35px",
            marginBottom: "10px",
          }}
        />
      ) : null}
      {CardVisible && sessionVenue ? (
        <MapWithAMarker
          mapcenter={sessionVenue}
          sessionVenue={sessionVenue}
          selectedMarker={sessionVenue}
          photographers={[]}
          markers={locations}
          onClick={() => {}}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: "100%", flex: 1 }} />}
          mapElement={<div style={{ height: `300px`, marginBottom: "10px" }} />}
        />
      ) : null}
      {mylocation.lat && !CardVisible && DisplayAutoComplete ? (
        <MapWithAMarker
          mapcenter={mylocation}
          sessionVenue={{}}
          selectedMarker={mylocation}
          photographers={[]}
          markers={locations}
          onClick={() => {}}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: "100%", flex: 1 }} />}
          mapElement={<div style={{ height: `300px`, marginBottom: "10px" }} />}
        />
      ) : null}
      <button
        disabled={!sessionVenue.name || !AdditionalAddress}
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

export default Question4;
