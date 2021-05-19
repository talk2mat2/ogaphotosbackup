import React, { useState } from "react";
import Styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import Fade from "@material-ui/core/Fade";
import { SYNCUSERDATA } from "../../redux/action";
import CircularProgress from "@material-ui/core/CircularProgress";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import axios from "axios";
const LoaderContainer = Styled.div`
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
const Container = Styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
background-color:#f1f0f0;
min-height:440px;
padding-top:10px;
`;
const BigText = Styled.p`
font-size:20px;
color:grey;
font-weight:500;
`;
const Listing = Styled.ul`
margin-top:20px;
display:flex;
flex-direction:column;
align-items:flex-start;
padding:0px;
width:95%;
li{
	list-style:none;
	font-size:18px;
	color:grey;
}
`;
const Buttons = Styled(Button)`
  && {


margin-top:8px;
    color: rgb(190, 10, 10);
    border-color: rgb(190, 10, 10);
    &:focus {
      background-color: white;
    }
    // @media (max-width: 1100px) {
    //   display: none;
    // }
  }
`;
const EditProfile = Styled.div`

over-flow:scroll;
background-color: rgb(246, 249, 255);
  padding:10px;
  box-sizing:border-box;
  width: 550px;
  max-height: 100vh;
  min-height:200px;
  border-radius:8px;
  // background-image: linear-gradient(to right, #ddd6f3 , #ddd6f3);
display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  @media(max-width:630px){
width:90vw;
  }
`;
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const ButtonsStyle = {
  marginTop: "50px",
  marginLeft: "80px",
};
const Wallet = () => {
  const classes = useStyles();
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [showSuccess, setshowSuccess] = useState(false);
  const dispatch = useDispatch();

  const token = CurrentUser && CurrentUser.token;
  const [isloading, setisloading] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleUpdateWallet = React.useCallback(async (transaction_id) => {
    console.log("called");
    //_id is photographers id
    // setConfirmAgreeVisible(false);
    // setPhotoDetails(false);
    if (!transaction_id) {
      return null;
    }
    // /bookSession
    setisloading(true);
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/fundWallet`,
        {
          transaction_id: transaction_id,
        },
        { headers: { authorization: token } }
      )
      .then((res) => {
        console.log(res.data);
        setisloading(false);
        setshowSuccess(true);
        dispatch(SYNCUSERDATA(res.data.userData));
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
  const config = {
    public_key: "FLWPUBK_TEST-e96ca53411ac8244d05c06677fca3509-X",
    tx_ref: new Date().getTime() + "-" + userData._id,
    amount: parseFloat(amount),
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userData.Email,
      phonenumber: userData.mobile,
      name: userData.fname,
    },
    customizations: {
      title: "Update wallet",
      description: "Payment for photowallet",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  // const handleClose = () => {
  //   setshowSuccess(false);
  //   history.push("/");
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 2000);
  // };
  const PayByflutterWave = async () => {
    await handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
        if (response.status === "successful") {
          console.log(response);
          // handleSuccess();
          handleUpdateWallet(response.transaction_id);
        }
      },
      onClose: () => {},
    });
  };
  return (
    <Container>
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          minHeight: "560px",
          width: "94%",
          padding: "10px",
          marginTop: "20px",
          marginBottom: "20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BigText style={{ fontSize: "16px" }}>Wallet Page</BigText>
        <Listing>
          <li>
            <p className="menuitem">
              {" "}
              PhotoCredits: <b>NGN {userData.wallet} Balance</b>
            </p>
          </li>

          <li>
            {" "}
            <Buttons
              onClick={handleOpen}
              // onClick={PayByflutterWave}
              style={{ ...ButtonsStyle, minWidth: "100px" }}
              variant="outlined"
              color="secondary"
            >
              <small> Update Walllet</small>
            </Buttons>
          </li>
        </Listing>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <EditProfile>
              <h2
                style={{
                  fontSize: "20px",
                  textAlign: "left",
                  alignSelf: "flex-start",
                }}
                className="tt-heading-title"
              >
                Current Balance: NGN {userData.wallet}
              </h2>
              <div style={{ height: "40px" }} />
              {/* <div style={{ marginTop: "auto", width: "100%" }}>
                <h4>Favourite shoot type</h4>
                <select
                  defaultValue={favoritesShootTypes}
                  name="favoritesShootTypes"
                  id="favoritesShootTypes"
                  value={favoritesShootTypes}
                  onChange={(e) => setfavoritesShootTypes(e.target.value)}
                  style={{
                    width: "200px",
                    border: "none",
                    borderRadius: "4px",
                    height: "30px",
                  }}
                >
                  <option value="">select</option>
                  <option value="Real estate">Real estate</option>
                  <option value="family">family</option>
                  <option value="Party">Party</option>
                  <option value="Dating">Dating</option>
                  <option value="Team/Office">Team/Office</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Fashion">Fashion</option>
                  <option value="media">media</option>
                  <option value="Food">Food</option>
                  <option value="Product">Product</option>
                  <option value="Landscape">Landscape</option>
                </select>
              </div> */}
              {/* <div className="col-lg-6"> */}
              <div
                style={{ width: "70%", backgroundColor: "grey" }}
                className="form-group"
              >
                <input
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  value={amount}
                  style={{ width: "100%" }}
                  type="number"
                  className="form-control"
                  name="email"
                  placeholder="Enter Amount greater than 1000"
                  required
                />
              </div>
              {/* </div> */}
              <div style={{ height: "8px" }} />
              <div style={{ marginTop: "auto" }}>
                <div className="row">
                  <div className="col-lg-12">
                    <button
                      disabled={!amount || amount < 500}
                      onClick={() => {
                        handleClose();
                        PayByflutterWave();
                      }}
                      type="submit"
                      className="btn btn-primary btn-lg margin-top-40"
                    >
                      Make Payment
                    </button>
                  </div>
                </div>
              </div>
              {/* {isloading ? (
                <LoaderContainer>
                  <CircularProgress style={{ color: "tomato" }} />
                  <h4 style={{ backgroundColor: "#ffffff" }}>Please wait...</h4>
                </LoaderContainer>
              ) : null} */}
            </EditProfile>
          </Fade>
        </Modal>
      </div>
    </Container>
  );
};

export default Wallet;
