import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import generatePDF from "../pages/generatePdf";
// import Styled from "styled-components";
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

const UserSessionHistoryDetails = (props) => {
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
  return (
    <div className="page-content">
      <div className="main-wrapper">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <h2>Event Details</h2>
                  </div>
                  <div className="col-4">
                    {/* <h4 className="float-end">({bookings.length})</h4> */}
                  </div>
                </div>
                <div className="invoice-details">
                  <div className="row">
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={history.goBack}
                      className="col"
                    >
                      <ArrowBackIcon style={{ fontSize: "30px" }} />
                    </div>
                    <div className="col">
                      {/* <p className="info">ID:</p>
                      <p>IO237</p> */}
                    </div>
                    <div className="col">
                      {Data.address}
                      <div className="col"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="table-responsive">
                    {/* here */}

                    {/* 
                    Event Status: pending
Address :Ikorodu Rd, Ikorodu, Nigeria:
Event Time: 03:49:
Payment status: paid
Shots by: bill */}

                    <div className="col">
                      <div className="invoice-info">
                        <p>
                          Location <span>{Data.address}</span>
                        </p>
                        <p>
                          Location Details{" "}
                          <span>
                            {Data.bookingProcess &&
                              Data.bookingProcess.AdditionalAddress}
                          </span>
                        </p>
                        <p>
                          Purpose{" "}
                          <span>
                            {Data.bookingProcess && Data.bookingProcess.purpose}
                          </span>
                        </p>
                        <p>
                          Event Status{" "}
                          <span>
                            {" "}
                            {Data.completed
                              ? "ended"
                              : null || Data.accepted
                              ? "processing"
                              : "pending"}
                          </span>
                        </p>
                        <p>
                          Event Time{" "}
                          <span>
                            {Data.bookingProcess && Data.bookingProcess.time}
                          </span>
                        </p>
                        <p>
                          Payment status{" "}
                          <span>
                            {" "}
                            {Data.bookingProcess && Data.bookingProcess.status}
                          </span>
                        </p>
                        <p>
                          Payment method
                          <span>
                            {" "}
                            {Data.bookingProcess &&
                              Data.bookingProcess.payment_type}
                          </span>
                        </p>
                        <p>
                          Payment_Id
                          <span>{Data.payment_Id}</span>
                        </p>
                        <p>
                          Photographer{" "}
                          <span>
                            {Data.photographerId && Data.photographerId.fname}{" "}
                            {Data.photographerId && Data.photographerId.lname}
                          </span>
                        </p>
                        <p>
                          Photographer no.
                          <span>
                            {Data.photographerId && Data.photographerId.mobile}
                          </span>
                        </p>
                        {/* <p className="bold"> */}
                        <p>
                          Amount paid{" "}
                          <span>
                            N
                            {Data.bookingProcess &&
                              numberWithCommas(Data.bookingProcess.price)}
                          </span>
                        </p>
                        <div className="d-grid gap-2">
                          <button
                            onClick={handlePdfDownload}
                            style={{ width: "150px" }}
                            className="btn btn-danger m-t-xs"
                            type="button"
                          >
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row invoice-last">
                  <div className="col-9">
                    <p>
                      <br />
                      {/* dapibus id sollicitudin vel, luctus sit amet justo */}
                    </p>
                  </div>
                  {/* <div className="col-3">
                    <div className="invoice-info">
                      <p>
                        Subtotal <span>$1700</span>
                      </p>
                      <p>
                        Discount <span>$30</span>
                      </p>
                      <p>
                        Tax <span>20%</span>
                      </p>
                      <p className="bold">
                        Total <span>$1336</span>
                      </p>
                      <div className="d-grid gap-2">
                        <button className="btn btn-danger m-t-xs" type="button">
                          Print Invoice
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSessionHistoryDetails;
