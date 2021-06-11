import React from "react";
import styled from "styled-components";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
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

const Question1 = (props) => {
  const dispatch = useDispatch();
  const handleSelection = (value) => {
    props.handleNext("category");
    dispatch(SETBOOKINGPROCESSINFO({ purpose: value }));
  };
  return (
    <Container>
      <Hbig className="tt-heading-title">
        Will your shoot be Personal or for a Business?
      </Hbig>
      <Listing>
        <li onClick={handleSelection.bind(this, "personal")}>
          <LocalMallIcon
            style={{ color: "grey", marginRight: "15px" }}
            fontSize="large"
          />
          personal
        </li>
        <li onClick={handleSelection.bind(this, "business")}>
          <PermIdentityIcon
            fontSize="large"
            style={{ color: "grey", marginRight: "15px" }}
          />
          business
        </li>
      </Listing>
    </Container>
  );
};

export default Question1;
