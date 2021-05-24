import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { GETMYBOOKINGSUCCESS } from "../../redux/action";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import JSZip from "jszip";
import FileSaver from "file-saver";
import JSZipUtils from "jszip-utils";

import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import generatePDF from "../pages/generatePdf";
import { useTable } from "react-table";

const EditPhotoRequest = (props) => {
  const { match, history } = props;
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const token = CurrentUser && CurrentUser.token;
  // getSesssionHistory
  const getSesssionHistory = async () => {
    setIsloading(true);
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/FecthEditPhotoRequest`,

        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log(res.data);
        setIsloading(false);
        // setBookinmgs(res.data.userData)
        setBookings(res.data.userData);
        // dispatch(GETMYBOOKINGSUCCESS(res.data.userData));
        // setIsregistered(true)
        // history.push('/dashboard')
      })
      .catch((err) => {
        setIsloading(false);
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
        Header: "Photographer Name",
        accessor: "photographerId.fname", // accessor is the "key" in the data
        Cell: ({ row }) => {
          return (
            <p>
              {row.original.photographerId.fname}{" "}
              {row.original.photographerId.lname}
            </p>
          );
        },
      },
      // {
      //   Header: "location details",
      //   accessor: "bookingProcess.AdditionalAddress", // accessor is the "key" in the data
      // },
      // {
      //   Header: "Category",
      //   accessor: "bookingProcess.category",
      // },
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
        Header: "Photographer no.",
        accessor: "photographerId.mobile", // accessor is the "key" in the data
      },
      // {
      //   Header: "Event Duration",
      //   accessor: "bookingProcess.duration", // accessor is the "key" in the data
      // },
      // {
      //   Header: "Event time(24h)",
      //   accessor: "bookingProcess.time", // accessor is the "key" in the data
      // },
      {
        Header: "Client  Name",
        accessor: "{row.original.photographerId.", // accessor is the "key" in the data
        Cell: ({ row }) => {
          return (
            <p>
              {row.original.clientId.fname} {row.original.clientId.lname}
            </p>
          );
        },
      },
      {
        Header: "Client no.",
        accessor: "clientId.mobile", // accessor is the "key" in the data
      },
      {
        Header: "Client Email ",
        accessor: "clientId.Email", // accessor is the "key" in the data
      },
      {
        Header: "Images",
        // accessor: "bookingProcess._id", // accessor is the "key" in the data
        Cell: ({ row }) => (
          <button
            style={{
              border: "none",
              backgroundColor: "inherit",

              cursor: "pointer",
            }}
            onClick={() => {
              // console.log(row.original);
              HarvestImageurl(row.original);
              // history.push({
              //   pathname: `/editphotouserDetails`,
              //   state: { Data: row.original },
              // });
            }}
          >
            Download
          </button>
        ),
      },
      {
        Header: "Upload",
        // accessor: "bookingProcess._id", // accessor is the "key" in the data
        Cell: ({ row }) => (
          <button
            style={{
              border: "none",
              backgroundColor: "inherit",

              cursor: "pointer",
            }}
            onClick={() => {
              // console.log(row.original);

              history.push({
                pathname: `/AdminUploadedits`,
                state: { Data: row.original },
              });
            }}
          >
            Upload
          </button>
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

  const HarvestImageurl = (data) => {
    console.log(data);
    const imageuril = [];
    if (data && data.Request_Photos.length > 0) {
      data.Request_Photos.map((item) => imageuril.push(item.imgUri));
      console.log(imageuril);
      // return imageuril;
      var zip = new JSZip();
      var count = 0;
      var zipFilename = `client-${data.clientId.Email}.zip`;
      imageuril.forEach(function (url, i) {
        var filename = imageuril[i];
        filename = filename
          .replace(/[\/\*\|\:\<\>\?\"\\]/gi, "")
          .replace(
            "httpssequenceimagestaging.blob.core.windows.netretouch",
            ""
          );
        JSZipUtils.getBinaryContent(url, function (err, data) {
          if (err) {
            throw err;
          }
          zip.file(filename, data, { binary: true });
          count++;
          if (count == imageuril.length) {
            zip.generateAsync({ type: "blob" }).then(function (content) {
              FileSaver.saveAs(content, zipFilename);
            });
          }
        });
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
                <div className="row">
                  <div className="col-8">
                    <h2>Edit Picture Request</h2>
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
                      Request to edit picture by photographers
                      <div className="col"></div>
                    </div>
                    <div className="col">
                      <h6>
                        {" "}
                        Click Upload to send to client after downloading and
                        editing image works
                      </h6>
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

export default EditPhotoRequest;
