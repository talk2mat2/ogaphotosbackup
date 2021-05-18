import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { GETMYBOOKINGSUCCESS } from "../../redux/action";
import axios from "axios";

import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import generatePDF from "../pages/generatePdf";
import { useTable } from "react-table";
const Container = Styled.div`
width:100%;
display:flex;
flex-direction:column;
padding-bottom:20px;
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
const Smalltext = Styled.p`
font-size:14px;
color:grey;
font-weight:500;
`;
const Listing = Styled.ul`
margin-top:5px;
display:flex;
flex-direction:column;
align-items:flex-start;
background-color: #fffffff;
padding:0px;
width:95%;
li{
	list-style:none;
	font-size:18px;
	width:100%;
  padding:10px;
  border-radius:4px;
  box-sizing:border-box;
	background-color: #ffff;
	color:grey;
	margin-top:1.7px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
	margin-bottom:4px;
  small{
    font-size:14px;
  }
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
// const ButtonsStyle = {
// 	marginTop: '50px',
// 	marginLeft: '80px',
// }
const Detailevents = ({
  location: {
    state: { Data },
  },
}) => {
  const [BookingDetail, setBookingDetail] = useState({});

  let history = useHistory();
  let bookings = useSelector((state) => state.bookings);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    bookings.length &&
      bookings.map((items) => {
        // console.log(items)
        return items._id === Data._id && setBookingDetail(items);
      });
  }, [bookings, Data._id]);

  const handlePdfDownload = () => {
    BookingDetail.bookingProcess && generatePDF(BookingDetail.bookingProcess);
  };

  const data = React.useMemo(
    () => [
      // {
      //   col1: "Minsk",
      //   col2: "27",
      //   col3: "rain",

      // },
      BookingDetail,
    ],
    [BookingDetail]
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "location",
        accessor: "address", // accessor is the "key" in the data
      },
      {
        Header: "location details",
        accessor: "bookingProcess.AdditionalAddress", // accessor is the "key" in the data
      },
      {
        Header: "Category",
        accessor: "bookingProcess.category",
      },
      {
        Header: "Purpose",
        accessor: "bookingProcess.purpose", // accessor is the "key" in the data
      },
      {
        Header: "Amount(NGN)",
        accessor: "bookingProcess.price", // accessor is the "key" in the data
      },
      {
        Header: "Status",
        accessor: "bookingProcess.status", // accessor is the "key" in the data
      },
      {
        Header: "payment type",
        accessor: "bookingProcess.payment_type", // accessor is the "key" in the data
      },
      {
        Header: "Event Date",
        accessor: "bookingProcess.date", // accessor is the "key" in the data
      },
      {
        Header: "Event Duration",
        accessor: "bookingProcess.duration", // accessor is the "key" in the data
      },
      {
        Header: "Event time(24h)",
        accessor: "bookingProcess.time", // accessor is the "key" in the data
      },
      {
        Header: "Photographer Name",
        accessor: "bookingProcess.choosenPhotoGrapher.fname", // accessor is the "key" in the data
      },
      {
        Header: "Photographer no.",
        accessor: "bookingProcess.choosenPhotoGrapher.mobile", // accessor is the "key" in the data
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        onClick={history.goBack}
        style={{
          position: "absolute",
          left: "50px",
          top: "18px",
          cursor: "pointer",
          zIndex: 3,
        }}
      >
        <ArrowBackIcon style={{ fontSize: "30px" }} />
      </div>
      <BigText style={{ textAlign: "center" }}>Details</BigText>

      <div style={{ overflowX: "scroll", maxWidth: "90vw" }}>
        <table {...getTableProps()} style={{ border: "solid 1px black" }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      // border: "solid 3px red",

                      color: "#ffffff",
                      backgroundColor: "rgb(0, 162, 149)",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: "10px",
                          border: "solid 1px gray",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ height: "30px" }} />
      <Listing>
        <li>
          <br />
          {BookingDetail.timeStart && (
            <>
              {" "}
              <small>
                {" "}
                Event started at:{" "}
                <Moment>{`${BookingDetail.timeStart}`}</Moment>
              </small>
              <br />
            </>
          )}

          <small>
            Event Status:{" "}
            {BookingDetail.completed
              ? "ended"
              : null || BookingDetail.accepted
              ? "processing"
              : "pending"}
          </small>

          {/* <small>
            Shots by{" "}
            {BookingDetail.photographerId && BookingDetail.photographerId.fname}
            :
          </small> */}
          <br />
          <Button
            onClick={handlePdfDownload}
            style={{
              float: "right",
              marginLeft: "30px",
              backgroundColor: "dodgerblue",
              color: "#ffffff",
              fontSize: "9px",
            }}
          >
            Download Ticket
          </Button>
        </li>
        <br />
      </Listing>
    </div>
  );
};

const FoodOrderHistory = (props) => {
  const { match, history } = props;
  const [bookings, setBookings] = useState([]);
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const token = CurrentUser && CurrentUser.token;
  // getSesssionHistory
  const getSesssionHistory = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/getSesssionHistory`,

        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log(res.data);
        // setBookinmgs(res.data.userData)
        setBookings(res.data.userData);
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

  useEffect(() => {
    getSesssionHistory();
  }, []);
  const BookingCards = ({ item }) => {
    return (
      <>
        <li>
          <small>
            request status: {!item.accepted ? "pending" : "accepted"}
          </small>
          <br />
          <small>Address : {item.address}</small> <br />
          <small>Mobile : {item.photographerId.mobile}</small>
          <br />
          <small>Date : {item.bookingDate.substring(0, 10)}</small>
          <span>
            <Buttons
              style={{
                marginLeft: "100px",
                fontSize: "9px",
              }}
              onClick={() =>
                history.push({
                  pathname: `${match.url}/info`,
                  state: { Data: item },
                })
              }
            >
              View Details
            </Buttons>
          </span>
        </li>
      </>
    );
  };
  const MapBookings = () => {
    return (
      bookings.length > 0 &&
      bookings.map((item) => {
        return <BookingCards item={item} />;
      })
    );
  };
  const data = React.useMemo(
    () => [
      // {
      //   col1: "Minsk",
      //   col2: "27",
      //   col3: "rain",

      // },
      ...bookings,
    ],
    [bookings]
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "location",
        accessor: "address", // accessor is the "key" in the data
      },
      {
        Header: "location details",
        accessor: "bookingProcess.AdditionalAddress", // accessor is the "key" in the data
      },
      {
        Header: "Category",
        accessor: "bookingProcess.category",
      },
      {
        Header: "Purpose",
        accessor: "bookingProcess.purpose", // accessor is the "key" in the data
      },
      {
        Header: "Amnt. paid(NGN)",
        accessor: "bookingProcess.amountPaid", // accessor is the "key" in the data
      },
      {
        Header: "Status",
        accessor: "bookingProcess.status", // accessor is the "key" in the data
      },
      {
        Header: "payment type",
        accessor: "bookingProcess.payment_type", // accessor is the "key" in the data
      },
      {
        Header: "Event Date",
        accessor: "bookingProcess.date", // accessor is the "key" in the data
      },
      {
        Header: "Event Duration",
        accessor: "bookingProcess.duration", // accessor is the "key" in the data
      },
      {
        Header: "Event time(24h)",
        accessor: "bookingProcess.time", // accessor is the "key" in the data
      },
      {
        Header: "Photographer Name",
        accessor: "bookingProcess.choosenPhotoGrapher.fname", // accessor is the "key" in the data
      },
      {
        Header: "Photographer no.",
        accessor: "bookingProcess.choosenPhotoGrapher.mobile", // accessor is the "key" in the data
      },
      {
        Header: "Event Status",
        accessor: "bookingProcess._id", // accessor is the "key" in the data
        Cell: ({ row }) =>
          // <a href="#" onClick={() => console.log(row.original)}>
          //   View
          // </a>
          row.original.completed
            ? "ended"
            : null || row.original.accepted
            ? "accepted"
            : "pending",
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Container>
      <Switch>
        <Route exact path={match.url}>
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              minHeight: "560px",
              width: "94%",
              padding: "10px",
              marginTop: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BigText style={{ fontSize: "15px" }}>My booking History</BigText>
            {/* <Listing>
              {bookings.length > 0 ? MapBookings() : <small>empty</small>}
            </Listing> */}
            <div style={{ overflowX: "auto", maxWidth: "90vw" }}>
              <table {...getTableProps()} style={{ border: "none" }}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr
                      className="mytablerow"
                      {...headerGroup.getHeaderGroupProps()}
                    >
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          style={{
                            // border: "solid 3px red",
                            color: "grey",
                            fontSize: "12px",
                            padding: "2px",
                            borderRadius: "4px",
                            boxSizing: "border-box",
                            backgroundColor: "#e0dede",
                          }}
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr className="tableRowdata" {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: "3px",
                                boxSizing: "border-box",
                                fontSize: "13px",
                                border: "none",
                              }}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Route>

        <Route path={`${match.url}/info`} component={Detailevents} />
      </Switch>
    </Container>
  );
};

export default FoodOrderHistory;
