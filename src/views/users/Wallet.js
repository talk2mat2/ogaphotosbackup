import React from "react";
import Styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
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
const ButtonsStyle = {
  marginTop: "50px",
  marginLeft: "80px",
};
const Wallet = () => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
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
              PhotoCredits: <b>NGN {userData.wallet} Ballance</b>
            </p>
          </li>

          <li>
            {" "}
            <Buttons
              style={{ ...ButtonsStyle, minWidth: "100px" }}
              variant="outlined"
              color="secondary"
            >
              <small> Update Walllet</small>
            </Buttons>
          </li>
        </Listing>
      </div>
    </Container>
  );
};

export default Wallet;
