import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
const DetailMessages = ({
  location: {
    state: { data },
  },
}) => {
  let history = useHistory();
  return (
    <>
      <div
        onClick={history.goBack}
        style={{
          position: "absolute",
          left: "60px",
          top: "40px",
          cursor: "pointer",
        }}
      >
        <ArrowBackIcon style={{ fontSize: "30px" }} />
      </div>
      <BigText>{data.title}</BigText>
      <Listing>
        <li>
          <small>{data.body}</small>
        </li>
      </Listing>
    </>
  );
};
const Support = (props) => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const bookings = useSelector((state) => state.bookings);
  const token = CurrentUser && CurrentUser.token;
  const [loading, setLoading] = useState();
  const [MessageState, setMessageState] = useState({});
  const { item, history, match } = props;
  const FetchMessages = async (id) => {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/FetchMessages`,

        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log(res.data);
        setMessageState(res.data.userData);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };

  const mapMessages = () => {
    return (
      MessageState.length > 0 &&
      MessageState.map((item) => {
        return (
          <Link
            to={{
              pathname: `${match.url}/details`,
              state: { data: item },
            }}
          >
            <li className="menuitem" style={{ textDecoration: "underline" }}>
              {item.title.slice(0, 29)}{" "}
              <p className="menuitem">
                from -{item.sender.fname && item.sender.fname}
              </p>
            </li>
          </Link>
        );
      })
    );
  };
  useEffect(() => {
    FetchMessages();
  }, []);
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
        <Switch>
          <Route exact path={match.url}>
            <>
              {" "}
              <BigText style={{ fontSize: "16px" }}>Messages</BigText>
              <Listing>
                {MessageState.length > 0 ? (
                  mapMessages()
                ) : (
                  <li>No new messages availaible</li>
                )}
              </Listing>
            </>
          </Route>
          <Route path={`${match.url}/details`} component={DetailMessages} />
        </Switch>
      </div>
    </Container>
  );
};

export default Support;
