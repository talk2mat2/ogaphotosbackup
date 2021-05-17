import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { GETMYBOOKINGSUCCESS } from "../../redux/action";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import generatePDF from "../pages/generatePdf";
import { useTable } from "react-table";

import Moment from "react-moment";
const Container = Styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
background-color:#ffff;
min-height:440px;
padding-top:10px;
`;
const BigText = Styled.p`
font-size:20px;
color:grey;
font-weight:500;
`;
const ButtonsStyle = {
  marginTop: "10px",
  marginRight: "8px",
};
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
	&:disabled {
		border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
	}
  }
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
// const Buttons = Styled(Button)`
//   && {

// margin-top:8px;
//     color: rgb(190, 10, 10);
//     border-color: rgb(190, 10, 10);
//     &:focus {
//       background-color: white;
//     }
//     // @media (max-width: 1100px) {
//     //   display: none;
//     // }
//   }
// `
// const ButtonsStyle = {
// 	marginTop: '50px',
// 	marginLeft: '80px',
// }
const BookingCards = (props) => {
  const { item, history, match, token, HandleAcceptOffer } = props;
  const handlePdfDownload = () => {
    item.bookingProcess && generatePDF(item.bookingProcess);
  };

  return (
    <li
    // style={{ cursor: 'pointer' }}
    >
      <small>Booked by: {item.bookedById.fname}</small>
      <br />
      <small>Date : {item.bookingDate.substring(0, 10)}</small>
      <br />
      <small>Email : {item.bookedById.Email}</small>
      <br />
      <small>Mobile : {item.bookedById.mobile}</small>
      <br />
      <small>Event Location : {item.address}</small>
      <br />
      {item.bookingProcess && (
        <small>
          Event Date : <Moment>{item.bookingProcess.date}</Moment>
        </small>
      )}
      <br />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {" "}
        <Buttons
          onClick={handlePdfDownload}
          style={{
            // backgroundColor: "dodgerblue",
            // color: "#ffffff",
            fontSize: "9px",
          }}
        >
          Download Ticket
        </Buttons>
        <Buttons
          style={{
            // backgroundColor: "dodgerblue",
            // color: "#ffffff",
            fontSize: "9px",
          }}
          onClick={HandleAcceptOffer.bind(this, item._id)}
          disabled={item.accepted}
        >
          {item.accepted ? "accepted" : "accept offer"}
        </Buttons>
        <Buttons
          style={{
            // backgroundColor: "dodgerblue",
            // color: "#ffffff",
            fontSize: "9px",
          }}
          disabled={!item.accepted}
          onClick={() =>
            history.push({
              pathname: `${match.url}/events`,
              state: { Data: item, token: token },
            })
          }
        >
          View More
        </Buttons>
      </div>
    </li>
  );
};
const Detailevents = ({
  location: {
    state: { Data, token },
  },
}) => {
  const [BookingDetail, setBookingDetail] = useState({});
  let dispatch = useDispatch();
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
  // console.log(data)
  const StartSession = async (id) => {
    setLoading(true);
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
        Header: "Event time",
        accessor: "bookingProcess.time", // accessor is the "key" in the data
      },
      {
        Header: "Client Name",
        accessor: "bookedById.fname", // accessor is the "key" in the data
      },
      {
        Header: "Client no.",
        accessor: "bookedById.mobile", // accessor is the "key" in the data
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
          left: "30px",
          top: "18px",
          cursor: "pointer",
          zIndex: 3,
        }}
      >
        <ArrowBackIcon style={{ fontSize: "30px" }} />
      </div>
      <BigText style={{ textAlign: "center" }}>Booking Details</BigText>
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
      {BookingDetail.bookedById && (
        <Listing>
          <li>
            {/* <BigText>
              {BookingDetail.bookedById.fname} {BookingDetail.bookedById.lname}
            </BigText> */}
            {/* <br />
            <small>location: {BookingDetail.address}</small>
            <br /> */}
            <small>price per min: NGN {BookingDetail.pricePerMinutes}</small>
          </li>
        </Listing>
      )}
      <Buttons
        disabled={BookingDetail && BookingDetail.timeStart}
        onClick={StartSession.bind(this, BookingDetail._id)}
        style={{ ...ButtonsStyle, minWidth: "70px", alignSelf: "flex-end" }}
        variant="outlined"
        color="secondary"
      >
        <small> {!BookingDetail.timeStart ? "Start Session" : "started"}</small>
      </Buttons>
      {BookingDetail && BookingDetail.timeStart ? (
        <Buttons
          disabled={BookingDetail.timeEnd}
          onClick={EndSession.bind(this, BookingDetail._id)}
          style={{ ...ButtonsStyle, minWidth: "70px", alignSelf: "flex-end" }}
          variant="outlined"
          color="secondary"
        >
          <small> {BookingDetail.timeEnd ? "Ended" : "End Session"}</small>
        </Buttons>
      ) : null}
      {BookingDetail.sessionDuration || BookingDetail.sessionDuration > -1 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <>
            <small>completed</small>
            <QueryBuilderIcon style={{ color: "#25D366", fontSize: "40px" }} />
          </>

          <BigText>
            total duration :{BookingDetail.sessionDuration} minutes !
          </BigText>
          <BigText>
            Amount Charge:NGN
            {BookingDetail.sessionDuration * BookingDetail.pricePerMinutes} :
          </BigText>
        </div>
      ) : null}
    </div>
  );
};
const Trips = (props) => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const { match, history } = props;
  const dispatch = useDispatch();
  // 	path={match.url}
  // {`${match.url}/signup`}
  const bookings = useSelector((state) => state.bookings);
  const token = CurrentUser && CurrentUser.token;
  const FecthMyBookings = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/photographer/FectMyBookings`,

        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log(res.data);
        // setBookinmgs(res.data.userData)
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
  const HandleAcceptOffer = async (id) => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/photographer/AcceptOffer?id=${id}`,

        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log(res.data);
        // setBookinmgs(res.data.userData)
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
    FecthMyBookings();
  }, []);

  const MapBookings = () => {
    return (
      bookings.length > 0 &&
      bookings.map((item) => {
        return (
          <BookingCards
            match={match}
            item={item}
            token={token}
            history={history}
            HandleAcceptOffer={HandleAcceptOffer}
          />
        );
      })
    );
  };

  return (
    <Container>
      <Switch>
        <Route exact path={match.url}>
          <>
            <BigText>Received Bookings</BigText>
            <Listing>
              {bookings.length > 0 ? MapBookings() : <li>empty</li>}
            </Listing>
          </>
        </Route>
        <Route path={`${match.url}/events`} component={Detailevents} />
      </Switch>
    </Container>
  );
};

export default Trips;
