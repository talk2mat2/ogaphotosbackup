import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { GETMYBOOKINGSUCCESS } from "../../redux/action";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import generatePDF from "../pages/generatePdf";
import { useTable } from "react-table";

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
const PhotoGrapherSessionHistory = (props) => {
  const { match, history } = props;

  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const token = CurrentUser && CurrentUser.token;
  const bookings = useSelector((state) => state.bookings);
  // getSesssionHistory
  const FecthMyBookings = async () => {
    setIsloading(true);
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/photographer/FectMyBookings`,

        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log(res.data);
        setIsloading(false);
        // setBookinmgs(res.data.userData)
        dispatch(GETMYBOOKINGSUCCESS(res.data.userData));
        // setIsregistered(true)
        // history.push('/dashboard')
      })
      .catch((err) => {
        if (err.response) {
          setIsloading(false);
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
      // {
      //   Header: "location details",
      //   accessor: "bookingProcess.AdditionalAddress", // accessor is the "key" in the data
      // },
      {
        Header: "Category",
        accessor: "bookingProcess.category",
      },
      // {
      //   Header: "Purpose",
      //   accessor: "bookingProcess.purpose", // accessor is the "key" in the data
      // },
      // {
      //   Header: "Amnt. paid(NGN)",
      //   accessor: "bookingProcess.amountPaid", // accessor is the "key" in the data
      // },
      // {
      //   Header: "Status",
      //   accessor: "bookingProcess.status", // accessor is the "key" in the data
      // },
      // {
      //   Header: "payment type",
      //   accessor: "bookingProcess.payment_type", // accessor is the "key" in the data
      // },
      {
        Header: "Event Date",
        accessor: "bookingProcess.date", // accessor is the "key" in the data
      },
      {
        Header: "Event Duration",
        accessor: "bookingProcess.duration", // accessor is the "key" in the data
      },
      {
        Header: "Event time(24)",
        accessor: "bookingProcess.time", // accessor is the "key" in the data
      },
      {
        Header: "Client Name",
        accessor: "bookedById.fname", // accessor is the "key" in the data
      },
      // {
      //   Header: "Client no.",
      //   accessor: "bookedById.mobile", // accessor is the "key" in the data
      // },
      {
        Header: "Accept Invite",
        accessor: "accepted", // accessor is the "key" in the data
        Cell: ({ row }) => (
          // <a href="#" onClick={() => console.log(row.original)}>
          //   View
          // </a>
          // row.original.completed
          //   ? "ended"
          //   : null || row.original.accepted
          //   ? "accepted"
          //   : "pending",
          <Buttons
            style={{
              // backgroundColor: "dodgerblue",
              // color: "#ffffff",
              fontSize: "9px",
            }}
            onClick={HandleAcceptOffer.bind(this, row.original._id)}
            disabled={row.original.accepted}
          >
            {row.original.accepted ? "accepted" : "accept book"}
          </Buttons>
        ),
      },
      {
        Header: "View Details",
        accessor: "bookingProcess._id", // accessor is the "key" in the data
        Cell: ({ row }) => (
          // <a href="#" onClick={() => console.log(row.original)}>
          //   View
          // </a>
          // row.original.completed
          //   ? "ended"
          //   : null || row.original.accepted
          //   ? "accepted"
          //   : "pending",
          <Buttons
            style={{
              // backgroundColor: "dodgerblue",
              // color: "#ffffff",
              fontSize: "9px",
            }}
            disabled={!row.original.accepted}
            onClick={() =>
              history.push({
                pathname: `/PhotoSessionSessionHistoryDetails`,
                state: { Data: row.original, token: token },
              })
            }
          >
            View
          </Buttons>
        ),
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
    <div className="page-content">
      <div className="main-wrapper">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <h2>Session History</h2>
                  </div>
                  <div className="col-4">
                    <h4 className="float-end">({bookings.length})</h4>
                  </div>
                </div>
                <div className="invoice-details">
                  <div className="row">
                    <div className="col">
                      {/* <p className="info">Date:</p>
                      <p>Jan 8, 2021</p> */}
                    </div>
                    <div className="col">
                      {/* <p className="info">ID:</p>
                      <p>IO237</p> */}
                    </div>
                    <div className="col">
                      List showing recent photo shoot bookings made
                      <div className="col"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="table-responsive">
                    {isLoading ? (
                      <CircularProgress
                        size={24}
                        style={{
                          fontSize: 50,
                          color: "tomato",
                          marginLeft: "50%",
                        }}
                      />
                    ) : (
                      <table
                        className="table invoice-table"
                        {...getTableProps()}
                        style={{ border: "none" }}
                      >
                        <thead>
                          {headerGroups.map((headerGroup) => (
                            <tr
                              className="mytablerow"
                              {...headerGroup.getHeaderGroupProps()}
                            >
                              {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} scope="col">
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
                                    <td {...cell.getCellProps()}>
                                      {cell.render("Cell")}
                                    </td>
                                  );
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    )}
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

export default PhotoGrapherSessionHistory;
