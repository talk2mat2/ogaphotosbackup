import React, { useState } from "react";
import styled from "styled-components";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import KitchenIcon from "@material-ui/icons/Kitchen";
import BusinessIcon from "@material-ui/icons/Business";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LandscapeIcon from "@material-ui/icons/Landscape";
import TheatersIcon from "@material-ui/icons/Theaters";
import { useDispatch } from "react-redux";
import { SETBOOKINGPROCESSINFO } from "../../redux/action";
import TimePicker from "react-time-picker";

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
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
    height: 20px;
    padding-left: 1px;
    padding-right: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    margin-top: 2px;
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

const Question7 = (props) => {
  const [value, onChange] = useState("");
  const dispatch = useDispatch();
  const handleSelection = () => {
    props.handleNext("photographerselect");
    dispatch(SETBOOKINGPROCESSINFO({ time: value }));
  };
  return (
    <Container>
      <Hbig className="tt-heading-title">
        What time of the day do you want your shoot?
      </Hbig>
      {/* <VericalCenterRow>
        <Listing>
          <li onClick={handleSelection.bind(this, "Real estate")}>
            <LocalMallIcon
              style={{ color: "grey", marginRight: "15px" }}
              fontSize="large"
            />
            Real estate
          </li>
          <li onClick={handleSelection.bind(this, "family")}>
            <PermIdentityIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            Family
          </li>
          <li onClick={handleSelection.bind(this, "Party")}>
            <PermIdentityIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            Party
          </li>
          <li onClick={handleSelection.bind(this, "Dating")}>
            <FavoriteIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            Dating
          </li>
          <li onClick={handleSelection.bind(this, "Team/Office")}>
            <BusinessIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            Team/Office
          </li>
          <li onClick={handleSelection.bind(this, "Graduation")}>
            <PermIdentityIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            Graduation
          </li>
        </Listing>
        <Listing>
          <li onClick={handleSelection.bind(this, "Fasshion")}>
            <LocalMallIcon
              style={{ color: "grey", marginRight: "15px" }}
              fontSize="large"
            />
            fashion
          </li>
          <li onClick={handleSelection.bind(this, "Food")}>
            <KitchenIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            Food
          </li>
          <li onClick={handleSelection.bind(this, "Media")}>
            <TheatersIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            media
          </li>
          <li onClick={handleSelection.bind(this, "Product")}>
            <PermIdentityIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            Product
          </li>
          <li onClick={handleSelection.bind(this, "Landscape")}>
            <LandscapeIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            Landscape
          </li>
          <li onClick={handleSelection.bind(this, "Others")}>
            <PermIdentityIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            ...Others
          </li>
        </Listing>
      </VericalCenterRow> */}
      <div
        style={{
          width: "60%",
          alignSelf: "center",
          marginTop: "50px",
          textAlign: "center",
        }}
      >
        <TimePicker onChange={onChange} value={value || new Date()} />
      </div>

      <button
        disabled={!value}
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

export default Question7;
