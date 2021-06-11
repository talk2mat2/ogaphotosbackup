import React from "react";
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
const Question2 = (props) => {
  const dispatch = useDispatch();
  const handleSelection = (value) => {
    props.handleNext("location");
    dispatch(SETBOOKINGPROCESSINFO({ category: value }));
  };
  return (
    <Container>
      <Hbig className="tt-heading-title">What do you want to Shoot?</Hbig>
      <VericalCenterRow>
        <Listing>
          <li onClick={handleSelection.bind(this, "Real Estate")}>
            <LocalMallIcon
              style={{ color: "grey", marginRight: "15px" }}
              fontSize="large"
            />
            Real Estate
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
          <li onClick={handleSelection.bind(this, "Dating/Intimate Occasion")}>
            <FavoriteIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            Dating/Intimate Occasion
          </li>
          <li onClick={handleSelection.bind(this, "Corporate/Office Team")}>
            <BusinessIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            Corporate/Office Team
          </li>
          <li onClick={handleSelection.bind(this, "Graduation/School Event")}>
            <PermIdentityIcon
              fontSize="large"
              style={{ color: "grey", marginRight: "15px" }}
            />
            Graduation/School Event
          </li>
        </Listing>
        <Listing>
          <li onClick={handleSelection.bind(this, "Fashion")}>
            <LocalMallIcon
              style={{ color: "grey", marginRight: "15px" }}
              fontSize="large"
            />
            Fashion
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
            Media
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
            Not Listed
          </li>
        </Listing>
      </VericalCenterRow>
    </Container>
  );
};

export default Question2;
