import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import generatePDF from "../pages/generatePdf";
import { GETMYBOOKINGSUCCESS } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
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

const PhotoSessionSessionHistoryDetails = (props) => {
  // const { match, history } = props;
  // const [bookings, setBookings] = useState([]);
  // const [isLoading, setIsloading] = useState(false);
  // const dispatch = useDispatch();
  // const CurrentUser = useSelector((state) => state.user.currentUser);
  // const token = CurrentUser && CurrentUser.token;
  // getSesssionHistory
  const { match, history, location } = props;
  const [BookingDetail, setBookingDetail] = useState({});
  const {
    state: { Data },
  } = location;
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const CurrentUser = useSelector((state) => state.user.currentUser);
  let bookings = useSelector((state) => state.bookings);
  const token = CurrentUser && CurrentUser.token;
  function numberWithCommas(x) {
    return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const handlePdfDownload = () => {
    Data.bookingProcess && generatePDF(Data.bookingProcess);
  };

  useEffect(() => {
    bookings.length &&
      bookings.map((items) => {
        // console.log(items)
        return items._id === Data._id && setBookingDetail(items);
      });
  }, [bookings, Data._id]);
  const StartSession = async (id) => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/photographer/StartSession?id=${id}`,

        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(GETMYBOOKINGSUCCESS(res.data.userData));
        // setIsregistered(true)
        // history.push('/dashboard')
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
          // err.response.data.message &&

          // err.response.data.error && setIsregistered(false)
        }
        console.log(err);
      });
  };
  const EndSession = async (id) => {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/photographer/EndSession?id=${id}`,

        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(GETMYBOOKINGSUCCESS(res.data.userData));
        // setIsregistered(true)
        // history.push('/dashboard')
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
          // err.response.data.message &&

          // err.response.data.error && setIsregistered(false)
        }
        console.log(err);
      });
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
                      Start event on arrival at event location
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
                          Client{" "}
                          <span>
                            {Data.bookedById && Data.bookedById.fname}{" "}
                            {Data.bookedById && Data.bookedById.lname}
                          </span>
                        </p>
                        <p>
                          Client no.
                          <span>
                            {Data.bookedById && Data.bookedById.mobile}
                          </span>
                        </p>
                        <p>
                          Client email
                          <span>
                            {Data.bookedById && Data.bookedById.Email}
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
                        <div className="col" style={{ marginTop: "40px" }}>
                          <button
                            className="btn btn-secondary"
                            disabled={BookingDetail && BookingDetail.timeStart}
                            onClick={StartSession.bind(this, BookingDetail._id)}
                            style={{
                              minWidth: "70px",
                              alignSelf: "flex-end",
                              marginRight: "20px",
                            }}
                            variant="outlined"
                            color="secondary"
                          >
                            {!BookingDetail.timeStart
                              ? "Start Session"
                              : "started"}
                          </button>

                          {BookingDetail && BookingDetail.timeStart ? (
                            <button
                              className="btn btn-secondary"
                              disabled={BookingDetail.timeEnd}
                              onClick={EndSession.bind(this, BookingDetail._id)}
                              style={{
                                minWidth: "70px",
                                alignSelf: "flex-end",
                              }}
                              variant="outlined"
                              color="secondary"
                            >
                              {BookingDetail.timeEnd ? "Ended" : "End Session"}
                            </button>
                          ) : null}
                          <div style={{ height: "30px" }}></div>
                          {BookingDetail.sessionDuration ||
                          BookingDetail.sessionDuration > -1 ? (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              <>
                                <h4>Event Ended</h4>
                                <br />
                                <QueryBuilderIcon
                                  style={{
                                    color: "#25D366",
                                    fontSize: "100px",
                                  }}
                                />
                              </>
                              <br />
                              <h5>
                                Total Duration :{BookingDetail.sessionDuration}{" "}
                                minute(s) !
                              </h5>
                              {/* <BigText>
            Amount Charge:NGN
            {BookingDetail.sessionDuration * BookingDetail.pricePerMinutes} :
          </BigText> */}
                            </div>
                          ) : null}
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

export default PhotoSessionSessionHistoryDetails;
