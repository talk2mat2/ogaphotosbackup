import React, { useEffect, useState } from "react";
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
import Ratings from "../users/ratings";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  SETBOOKINGPROCESSINFO,
  GETPHOTOGRAPHERSSUCCESS,
} from "../../redux/action";

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
const PhotographersContainer = styled.div`
  background-color: rgb(246, 249, 255);
  min-height: 300px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizinf: border-box;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const WorksAvater = styled.div`
  height: 100px;
  width: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 5px;
`;
const PhotographersCard = (props) => {
  const { PhotoInfo, setchoosenPhotoGrapher, choosenPhotoGrapher } = props;
  useEffect(() => {
    console.log(choosenPhotoGrapher);
  }, [choosenPhotoGrapher]);

  return (
    <PhotographersContainer
      style={{
        position: "relative",
      }}
    >
      <VericalCenterRow>
        {PhotoInfo && PhotoInfo._id === props.item._id ? (
          <div
            style={{
              position: "absolute",
              top: "-3px",
              right: "2px",
              color: "#ffffff",
              backgroundColor: "dodgerblue",
              padding: "1px",
              boxSizing: "border-box",
            }}
          >
            <small> Recommended</small>
          </div>
        ) : null}
        <span className="verticalRow">
          <PermIdentityIcon
            fontSize="large"
            style={{ marginRight: "10px", fontSize: "40px" }}
          />
          <span>
            <p>
              {props.item.fname} {props.item.lname}
            </p>
            <Ratings rating={5} />
          </span>
        </span>
        <input
          type="radio"
          name="chossenPhotographer"
          onchange={(e) => props.setchoosenPhotoGrapher(e.target.value)}
          value={props.item}
          checked={PhotoInfo && PhotoInfo._id === props.item._id}
        />
      </VericalCenterRow>

      <VericalCenterRow>
        <span>
          <h4>Specialized in</h4>
          <h5>Event Photography</h5>
          <p>
            liked by <b>{Math.floor(Math.random() * 100)}</b> other Ogaphoto
            customers
          </p>
        </span>
        <span>
          <h5>Portfolio Example</h5>
          <small>Event Photography</small>
        </span>
      </VericalCenterRow>
      <VericalCenterRow
        style={{ justifyContent: "space-around", marginTop: "auto" }}
      >
        <WorksAvater />
        <WorksAvater />
        <WorksAvater />
        <WorksAvater />
      </VericalCenterRow>
    </PhotographersContainer>
  );
};
const Question8 = (props) => {
  const history = useHistory();
  const [sessionVenue, setsessionVenue] = useState({});
  const [AdditionalAddress, setAdditionalAddress] = useState("");
  const [email, setEmail] = useState("");
  const photographers = useSelector((state) => state.photographers);
  const bookingprocess = useSelector((state) => state.BookingProcessReducer);
  const [CardVisible, setCardVisible] = useState(false);
  const [mylocation, setMylocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const dispatch = useDispatch();
  const [PhotoInfo, setPhotoInfo] = useState(null);
  const [Searching, setSearching] = useState(false);
  const [choosenPhotoGrapher, setchoosenPhotoGrapher] = useState({});

  const handleSearchPhotoGrphers = async (values) => {
    setSearching(true);

    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/SearchPhotogrAphersCloser`,
        values
        // { headers: { authorization: token } }
      )
      .then((res) => {
        setSearching(false);
        console.log(res.data);
        // setIsregistered(true)
        // history.push('/dashboard')
        dispatch(GETPHOTOGRAPHERSSUCCESS(res.data.userData));
      })
      .catch((err) => {
        setSearching(false);
        if (err.response) {
          // setErrorMessage(err.response.data.message)
          console.log(err.response.data.message);
          // err.response.data.message &&

          // err.response.data.error && setIsregistered(false)
        }
        console.log(err);
      });
  };

  const SearchPhotoGraphersFunction = async () => {
    if (
      !bookingprocess.lng ||
      !bookingprocess.lat ||
      !bookingprocess.locations
    ) {
      console.log("no user lat/ln/address");
      return history.push("/Purpose");
    }
    let lng = parseFloat(bookingprocess.lng);
    let lat = parseFloat(bookingprocess.lat);
    let address = bookingprocess.locations;
    return await handleSearchPhotoGrphers({
      sesionlocation: { lat: lat, lng: lng, address },
    });
  };

  // const handleToClick = async (long1, lat1, address) => {
  //   // console.log(typeof long)
  //   let lng = parseFloat(long1);
  //   let lat = parseFloat(lat1);
  //   console.log(lng, lat, typeof lng, typeof lat);
  //   setCardVisible(true);
  //   setsessionVenue({
  //     name: address,

  //     lat: lat,
  //     lng: lng,
  //   });
  //   await handleSearchPhotoGrphers({
  //     sesionlocation: { lat: lat, lng: lng, address },
  //   });
  // };
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
    props.handleNext("checkout");
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

  const mapPhotographers = (PhotoInfo) => {
    if (photographers && photographers.length > 0) {
      return photographers.map((item) => (
        <PhotographersCard
          item={item}
          key={item._id}
          PhotoInfo={PhotoInfo}
          choosenPhotoGrapher={choosenPhotoGrapher}
          setchoosenPhotoGrapher={setchoosenPhotoGrapher}
        />
      ));
    } else {
      return null;
    }
  };

  useEffect(() => {
    SearchPhotoGraphersFunction();
  }, []);

  const MatchPhotographer = () => {
    if (photographers && photographers.length > 0) {
      const CloserPhotoGrapher = photographers.reduce(function (prev, curr) {
        return prev.distance < curr.distance ? prev : curr;
      });
      setPhotoInfo(CloserPhotoGrapher);
      console.log(CloserPhotoGrapher);
    }
  };
  useEffect(() => {
    MatchPhotographer();
  }, [photographers]);
  return (
    <Container>
      <Hbig className="tt-heading-title">Select a photographer</Hbig>
      <button
        // disabled={!email}
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
          marginBottom: "10px",
        }}
      >
        Continue
      </button>
      {mapPhotographers(PhotoInfo)}
    </Container>
  );
};

export default Question8;
