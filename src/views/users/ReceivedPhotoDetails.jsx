import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import generatePDF from "../pages/generatePdf";
import Styled from "styled-components";
import FileSaver from "file-saver";
// import Button from "@material-ui/core/Button";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import { GETMYBOOKINGSUCCESS } from "../../redux/action";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import axios from "axios";

// import Moment from "react-moment";
// import { useSelector, useDispatch } from "react-redux";
// import { Switch, Route, Link, useHistory } from "react-router-dom";
// import generatePDF from "../pages/generatePdf";
// import { useTable } from "react-table";

const WorksAvater = Styled.div`
  min-height: 200px;
  width: 300px;
  object-fit:contain;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 5px;
`;
const ReceivedPhotoDetails = (props) => {
  // const { match, history } = props;
  // const [bookings, setBookings] = useState([]);
  // const [isLoading, setIsloading] = useState(false);
  // const dispatch = useDispatch();
  // const CurrentUser = useSelector((state) => state.user.currentUser);
  // const token = CurrentUser && CurrentUser.token;
  // getSesssionHistory
  const { match, history, location } = props;
  const {
    state: { Data },
  } = location;

  function numberWithCommas(x) {
    return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const handlePdfDownload = () => {
    Data.bookingProcess && generatePDF(Data.bookingProcess);
  };
  const mapReceivedworks = () => {
    const saveFile = (url) => {
      FileSaver.saveAs(url, "image.jpg");
    };
    if (Data && Data.Edited_Photos.length > 0) {
      return Data.Edited_Photos.map((item) => {
        return (
          <WorksAvater key={item._id} style={{ position: "relative" }}>
            <button
              onClick={saveFile.bind(this, item.imgUri)}
              className="btn btn-primary"
              style={{
                position: "absolute",
                opacity: "0.6",
                top: "30px",
                left: "30px",
              }}
            >
              save
            </button>
            <a rel="noreferrer" target="_blank" href={item.imgUri}>
              <img
                src={item.imgUri}
                alt="img"
                style={{ width: "100%", borderRadius: "4px", margin: "20px" }}
              />
            </a>
          </WorksAvater>
        );
      });
    }
  };
  return (
    <div className="page-content">
      <div className="main-wrapper">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    minHeight: "700px",

                    width: "100%",
                    objectFit: "contain",
                    padding: "4px",
                    boxSizing: "border-box",
                    overflowY: "scroll",
                  }}
                >
                  {mapReceivedworks()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedPhotoDetails;
