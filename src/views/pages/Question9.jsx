import React, { useState } from "react";
import styled from "styled-components";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { useDispatch } from "react-redux";
import { SETBOOKINGPROCESSINFO } from "../../redux/action";
import { EmailOutlined } from "@material-ui/icons";
import Ratings from "../users/ratings";
import { PaystackConsumer } from "react-paystack";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../../assets/avatar.jpg";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useHistory } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";
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
const SuccessBookedContainer = styled.div`
  width: 250px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 10px;
  box-sizing: border-boz;
  align-items: center;

  transform: translate(-50%, -50%);
  z-index: 7;
`;
const LoaderContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255, 0.5);
  text-align: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 10px;
  box-sizing: border-boz;
  align-items: center;

  transform: translate(-50%, -50%);
  z-index: 7;
`;

const Question9 = (props) => {
  const [sessionVenue, setsessionVenue] = useState({});
  const [AdditionalAddress, setAdditionalAddress] = useState("");
  const [email, setEmail] = useState("");
  const photographers = useSelector((state) => state.photographers);
  const bookingprocess = useSelector((state) => state.BookingProcessReducer);
  const [CardVisible, setCardVisible] = useState(false);
  const [mylocation, setMylocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [showSuccess, setshowSuccess] = useState(false);
  const [isloading, setisloading] = useState(false);
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  const token = CurrentUser && CurrentUser.token;
  const history = useHistory();
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

  const handleBooking = React.useCallback(async (_id, transaction_id) => {
    console.log("called");
    //_id is photographers id
    // setConfirmAgreeVisible(false);
    // setPhotoDetails(false);
    if (!_id) {
      return null;
    }
    // /bookSession
    setisloading(true);
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/bookSession`,
        {
          phographerId: _id,
          address: bookingprocess.locations,
          bookingprocess,
          transaction_id,
        },
        { headers: { authorization: token } }
      )
      .then((res) => {
        console.log(res.data);
        setisloading(false);
        setshowSuccess(true);
        setTimeout(() => {
          history.replace("/dashboard");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }, 3000);
      })
      .catch((err) => {
        setisloading(false);
        alert("An error occured");
        if (err.response) {
          console.log(err.response.data.message);
          alert(err.response.data.message);
        }
        console.log(err);
      });
    //api post request to book appointment with drivers id
  }, []);

  // const config = {
  //   reference: new Date().getTime(),
  //   email: userData.Email,
  //   amount: parseFloat(bookingprocess.price) * 100,
  //   publicKey: "pk_test_9df268d64ddb8974fb23c5d9e843eb5b57261938",
  // };

  const config = {
    public_key: "FLWPUBK_TEST-e96ca53411ac8244d05c06677fca3509-X",
    tx_ref: new Date().getTime() + "-" + userData._id,
    amount: parseFloat(bookingprocess.price),
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userData.Email,
      phonenumber: userData.mobile,
      name: userData.fname,
    },
    customizations: {
      title: "Ogaphoto Booking Payment",
      description: "payment for photo shoot",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const handleClose = () => {
    setshowSuccess(false);
    history.push("/");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const handleSuccess = React.useCallback(() => {
    console.log("u called me");
  }, []);
  const PayByflutterWave = async () => {
    await handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
        if (response.status === "successful") {
          console.log(response);
          // handleSuccess();
          handleBooking(
            bookingprocess.choosenPhotoGrapher._id,
            response.transaction_id
          );
        }
      },
      onClose: () => {},
    });
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
        // disabled={!email}
        // onClick={handleSelection}
        // onClick={() => handleBooking(bookingprocess.choosenPhotoGrapher._id)}
        onClick={PayByflutterWave}
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
        Make Payment
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
              <p>{userData.Email}</p>
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
              <p>{userData.mobile}</p>
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
                  <p>{bookingprocess.duration} Of uninterupted event shoot</p>
                </VericalCenterRow>
              </span>
              <p>
                <b>NGN {parseFloat(bookingprocess.price).toLocaleString()}</b>
              </p>
            </VericalCenterRow>
            <VericalCenterRow>
              <span className="verticalRow">
                <Avatar
                  style={{
                    marginRight: "10px",
                    fontSize: "40px",
                    width: "60px",
                    height: "60px",
                  }}
                  alt="Image"
                  src={
                    bookingprocess.choosenPhotoGrapher.profileImage || avatar
                  }
                />
                {/* <PermIdentityIcon
                  fontSize="large"
                  style={{ marginRight: "10px", fontSize: "40px" }}
                /> */}
                <span>
                  <p>
                    {bookingprocess.choosenPhotoGrapher.fname}{" "}
                    {bookingprocess.choosenPhotoGrapher.lname}
                  </p>
                  <Ratings rating={5} />
                </span>
              </span>
            </VericalCenterRow>
          </span>
        </li>
      </Listing>
      {showSuccess ? (
        <SuccessBookedContainer>
          <InsertEmoticonIcon
            fontSize="large"
            style={{ color: "lime", fontSize: "40px", marginTop: "30px" }}
          />
          <p style={{ marginTop: "30px" }}>Successfully booked a photo shoot</p>
          <br />
          <p style={{ marginTop: "2px" }}>
            you will be contacted by a photographer soon, <br />
            You can also check progress on your session history
          </p>
          <button
            onClick={handleClose}
            style={{
              border: "none",
              padding: "10px",
              backgroundColor: "rgb(0, 162, 149)",
              color: "#ffffff",
            }}
          >
            OK
          </button>
        </SuccessBookedContainer>
      ) : null}
      {isloading ? (
        <LoaderContainer>
          <CircularProgress style={{ color: "tomato" }} />
          <h4 style={{ backgroundColor: "#ffffff" }}>Processing...</h4>
        </LoaderContainer>
      ) : null}
    </Container>
  );
};

export default Question9;
