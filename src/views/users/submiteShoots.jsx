import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { GETMYBOOKINGSUCCESS } from "../../redux/action";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import CheckIcon from "@material-ui/icons/Check";
import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import generatePDF from "../pages/generatePdf";
import { useTable } from "react-table";

const VericalCenterRow = Styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;

const SearchUsersContainer = Styled.div`
min-height:200px;
padding:10px;
box-sizing:border-box;
width:100%;
position: absolute;
z-index:10;
transform:translateY(-100);
background-color:#fff;
left:0;`;

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
margin-top:20px;
display:flex;
flex-direction:column;
align-items:flex-start;
padding:0px;
width:95%;
list-style:none;
li{
padding:6px;
box-sizing:border-box;
  width:95%;
	color:grey;
  border-radius:20px
}
 li:hover{
   background-color:rgb(200, 224, 248);;
   color:dodgerblue;
   font-weight:bold;
 }

`;
const LoaderContainer = Styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255, 0.5);
  text-align: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 10px;
  box-sizing: border-boz;
  align-items: center;

  transform: translate(-50%, -50%);
  z-index: 7;
`;
const Submitshoots = (props) => {
  const { match, history } = props;

  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const token = CurrentUser && CurrentUser.token;
  const bookings = useSelector((state) => state.bookings);
  const [searchUsers, setSearchUsers] = useState("");
  const [selectedUser, setselectedUser] = useState("");
  const [searchPhotographers, setSearPhotographers] = useState("");
  const [searchUsersResult, setSearchUsersResult] = useState([]);

  const userData = CurrentUser && CurrentUser.userData;
  // getSesssionHistory
  const [ImageState, setImageState] = React.useState({ file: null, Uri: null });
  const [ImageState2, setImageState2] = React.useState({
    file: null,
    Uri: null,
  });
  const [ImageState3, setImageState3] = React.useState({
    file: null,
    Uri: null,
  });
  const [ImageState4, setImageState4] = React.useState({
    file: null,
    Uri: null,
  });
  const [ImageState5, setImageState5] = React.useState({
    file: null,
    Uri: null,
  });
  const [ImageState6, setImageState6] = React.useState({
    file: null,
    Uri: null,
  });
  const [ImageState7, setImageState7] = React.useState({
    file: null,
    Uri: null,
  });
  const [ImageState8, setImageState8] = React.useState({
    file: null,
    Uri: null,
  });
  const [ImageState9, setImageState9] = React.useState({
    file: null,
    Uri: null,
  });
  const [ImageState10, setImageState10] = React.useState({
    file: null,
    Uri: null,
  });

  const SearchUsersApi = async (search) => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/SearchUsers?search=${search}`,
        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log(res.data.userData);
        setSearchUsersResult(res.data.userData);
      })
      .catch((err) => {
        // setCountLoading(false);

        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };
  const handleClickResults = (item) => {
    setSearchUsersResult([]);
    setselectedUser(item);
    // history.push({
    //   pathname: `${match.url}/userDetails`,
    //   state: { data: item },
    // });
  };
  const handleSearch = async (value) => {
    setSearchUsers(value);

    await SearchUsersApi(value);
  };
  const MapUsersResult = () => {
    return searchUsersResult.map((item) => (
      <li
        style={{ cursor: "pointer", marginBottom: "15px" }}
        onClick={handleClickResults.bind(this, item)}
      >
        <p>
          {item.Email} <br />
          <span style={{ fontSize: "9px" }}>
            {item.fname} {item.lname}
          </span>
        </p>
      </li>
    ));
  };
  function handleImageChange(event) {
    if (!event.target.files[0]) {
      return null;
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] &&
        setImageState({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
    } else {
      return alert("select a valid image format");
    }
  }
  function handleImageChange2(event) {
    if (!event.target.files[0]) {
      return null;
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] &&
        setImageState2({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
    } else {
      return alert("select a valid image format");
    }
  }
  function handleImageChange3(event) {
    if (!event.target.files[0]) {
      return null;
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] &&
        setImageState3({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
    } else {
      return alert("select a valid image format");
    }
  }
  function handleImageChange4(event) {
    if (!event.target.files[0]) {
      return null;
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] &&
        setImageState4({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
    } else {
      return alert("select a valid image format");
    }
  }
  function handleImageChange5(event) {
    if (!event.target.files[0]) {
      return null;
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] &&
        setImageState5({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
    } else {
      return alert("select a valid image format");
    }
  }
  function handleImageChange6(event) {
    if (!event.target.files[0]) {
      return null;
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] &&
        setImageState6({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
    } else {
      return alert("select a valid image format");
    }
  }
  function handleImageChange7(event) {
    if (!event.target.files[0]) {
      return null;
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] &&
        setImageState7({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
    } else {
      return alert("select a valid image format");
    }
  }
  function handleImageChange8(event) {
    if (!event.target.files[0]) {
      return null;
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] &&
        setImageState8({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
    } else {
      return alert("select a valid image format");
    }
  }
  function handleImageChange9(event) {
    if (!event.target.files[0]) {
      return null;
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] &&
        setImageState9({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
    } else {
      return alert("select a valid image format");
    }
  }
  function handleImageChange10(event) {
    if (!event.target.files[0]) {
      return null;
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] &&
        setImageState10({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
    } else {
      return alert("select a valid image format");
    }
  }

  const checkSelectedImages = () => {
    if (
      ImageState.Uri ||
      ImageState2.Uri ||
      ImageState3.Uri ||
      ImageState4.Uri ||
      ImageState5.Uri ||
      ImageState6.Uri ||
      ImageState7.Uri ||
      ImageState8.Uri ||
      ImageState9.Uri ||
      ImageState10.Uri
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleUploads = async () => {
    if (!checkSelectedImages()) {
      return alert("no image(s) selected");
    }
    if (!selectedUser) {
      return alert("please type and select client email");
    }
    setIsloading(true);
    var formData = new FormData();

    let userInfo = {
      email: String(selectedUser.Email).toLowerCase(),
      mobile: selectedUser.Email,
      name: selectedUser.fname,
      clientId: selectedUser._id,
      photographerId: userData._id,
    };
    formData.append("userData", JSON.stringify(userInfo));
    ImageState.Uri && formData.append("file", ImageState.Uri);
    ImageState2.Uri && formData.append("file", ImageState2.Uri);
    ImageState3.Uri && formData.append("file", ImageState3.Uri);
    ImageState4.Uri && formData.append("file", ImageState4.Uri);
    ImageState5.Uri && formData.append("file", ImageState5.Uri);
    ImageState6.Uri && formData.append("file", ImageState6.Uri);
    ImageState7.Uri && formData.append("file", ImageState7.Uri);
    ImageState8.Uri && formData.append("file", ImageState8.Uri);
    ImageState9.Uri && formData.append("file", ImageState9.Uri);
    ImageState10.Uri && formData.append("file", ImageState10.Uri);
    console.log(formData);
    await axios({
      // url: `${ProxyUrl}/users/PreRegister`,
      url: `${process.env.REACT_APP_API_URL}/photographer/submiteShoots`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",

        // Authorization: token,
      },
    })
      .then(function (response) {
        console.log(response.data);
        setIsloading(false);
        window.location.reload();
        alert(response.data.message);
        // setAlert({
        //   status: "success",
        //   isError: true,
        //   alertMessage: response.data.message,
        // });
      })
      .catch(function (error) {
        setIsloading(false);
        if (error.response) {
          // setAlert({
          //   status: "error",
          //   isError: true,
          //   alertMessage: error.response.data.message,
          // });
          alert(error.response.data.message);
        }
      });
  };
  return (
    <div className="page-content">
      <div className="main-wrapper">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body" style={{ minHeight: "550px" }}>
                <div className="row">
                  <div className="col-8">
                    <h2>Submit shoots</h2>
                  </div>
                  <div className="col-4">
                    {/* <h4 className="float-end">({bookings.length})</h4> */}
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-7">
                    <p>selected</p>
                  </div>
                </div> */}
                <div className="invoice-details">
                  <div className="row">
                    <div className="col">
                      {/* <p className="info">ID:</p>
                      <p>IO237</p> */}
                    </div>
                    <div className="col">
                      Submit works to admin for quality control after which the
                      works are sent to client
                      <div className="col"></div>
                    </div>
                    <div className="col=7">
                      {/* <p className="info">Date:</p>
                      <p>Jan 8, 2021</p> */}
                      {selectedUser ? (
                        <div className="col8">
                          <p>
                            Client name :
                            <span>
                              <b>
                                {selectedUser.fname} {selectedUser.lname}
                              </b>
                            </span>
                          </p>
                          <p>
                            Client email: <b>{selectedUser.Email}</b>
                          </p>
                          <p>
                            Client mobile: <b>{selectedUser.mobile}</b>
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-9" style={{ position: "relative" }}>
                    <input
                      autocomplete="false"
                      id="floatingInput"
                      className="form-control"
                      // onChange={(e) => {
                      //   setAmount(e.target.value);
                      // }}
                      value={searchUsers}
                      style={{ width: "100%" }}
                      onChange={(e) => handleSearch(e.target.value)}
                      type="text"
                      name="email"
                      placeholder="Client Email"
                      required
                    />
                    {searchUsersResult && searchUsersResult.length > 0 && (
                      <SearchUsersContainer>
                        <Listing>{MapUsersResult()}</Listing>
                      </SearchUsersContainer>
                    )}
                  </div>
                </div>
                <VericalCenterRow
                  style={{
                    flexWrap: "wrap",
                    overflowY: "auto",
                    height: "100px",
                    backgroundColor: "#F5FFFA",
                  }}
                >
                  {ImageState.file && (
                    <img
                      src={ImageState.file}
                      alt="preview"
                      style={{
                        maxHeight: "80px",
                        display: "block",
                        // maxWidth: "80px",
                      }}
                    />
                  )}

                  {ImageState2.file && (
                    <img
                      src={ImageState2.file}
                      alt="preview"
                      style={{
                        maxHeight: "80px",
                        display: "block",
                        // maxWidth: "80px",
                      }}
                    />
                  )}
                  {ImageState3.file && (
                    <img
                      src={ImageState3.file}
                      alt="preview"
                      style={{
                        maxHeight: "80px",
                        display: "block",
                        // maxWidth: "80px",
                      }}
                    />
                  )}
                  {ImageState4.file && (
                    <img
                      src={ImageState4.file}
                      alt="preview"
                      style={{
                        maxHeight: "80px",
                        display: "block",
                        // maxWidth: "80px",
                      }}
                    />
                  )}
                  {ImageState5.file && (
                    <img
                      src={ImageState5.file}
                      alt="preview"
                      style={{
                        maxHeight: "80px",
                        display: "block",
                        // maxWidth: "80px",
                      }}
                    />
                  )}
                  {ImageState6.file && (
                    <img
                      src={ImageState6.file}
                      alt="preview"
                      style={{
                        maxHeight: "80px",
                        display: "block",
                        // maxWidth: "80px",
                      }}
                    />
                  )}
                  {ImageState7.file && (
                    <img
                      src={ImageState7.file}
                      alt="preview"
                      style={{
                        maxHeight: "80px",
                        display: "block",
                        // maxWidth: "80px",
                      }}
                    />
                  )}
                  {ImageState8.file && (
                    <img
                      src={ImageState8.file}
                      alt="preview"
                      style={{
                        maxHeight: "80px",
                        display: "block",
                        // maxWidth: "80px",
                      }}
                    />
                  )}
                  {ImageState9.file && (
                    <img
                      src={ImageState9.file}
                      alt="preview"
                      style={{
                        maxHeight: "80px",
                        display: "block",
                        // maxWidth: "80px",
                      }}
                    />
                  )}
                  {ImageState10.file && (
                    <img
                      src={ImageState10.file}
                      alt="preview"
                      style={{
                        maxHeight: "80px",
                        display: "block",
                        // maxWidth: "80px",
                      }}
                    />
                  )}
                  {/* {mapPortfolioworks2()} */}
                </VericalCenterRow>
                <div className="row">
                  <div className="col-9">
                    <h5>
                      Choose file
                      {
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            marginLeft: "10px",
                            padding: 0,
                            color: "#ffffff",
                            backgroundColor: "dodgerblue",
                            fontSize: "9px",
                          }}
                        >
                          upload
                          <input
                            type="file"
                            hidden
                            onChange={handleImageChange}
                            accept="image/x-png,image/jpeg"
                          />
                        </Button>
                      }
                      {ImageState.file && <CheckIcon fontSize="medium" />}
                    </h5>
                    <h5>
                      Choose file
                      {
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            marginLeft: "10px",
                            padding: 0,
                            color: "#ffffff",
                            backgroundColor: "dodgerblue",
                            fontSize: "9px",
                          }}
                        >
                          upload
                          <input
                            type="file"
                            hidden
                            onChange={handleImageChange2}
                            accept="image/x-png,image/jpeg"
                          />
                        </Button>
                      }
                      {ImageState2.file && <CheckIcon fontSize="medium" />}
                    </h5>
                    <h5>
                      Choose file
                      {
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            marginLeft: "10px",
                            padding: 0,
                            color: "#ffffff",
                            backgroundColor: "dodgerblue",
                            fontSize: "9px",
                          }}
                        >
                          upload
                          <input
                            type="file"
                            hidden
                            onChange={handleImageChange3}
                            accept="image/x-png,image/jpeg"
                          />
                        </Button>
                      }
                      {ImageState3.file && <CheckIcon fontSize="medium" />}
                    </h5>
                    <h5>
                      Choose file
                      {
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            marginLeft: "10px",
                            padding: 0,
                            color: "#ffffff",
                            backgroundColor: "dodgerblue",
                            fontSize: "9px",
                          }}
                        >
                          upload
                          <input
                            type="file"
                            hidden
                            onChange={handleImageChange4}
                            accept="image/x-png,image/jpeg"
                          />
                        </Button>
                      }
                      {ImageState4.file && <CheckIcon fontSize="medium" />}
                    </h5>
                    <h5>
                      Choose file
                      {
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            marginLeft: "10px",
                            padding: 0,
                            color: "#ffffff",
                            backgroundColor: "dodgerblue",
                            fontSize: "9px",
                          }}
                        >
                          upload
                          <input
                            type="file"
                            hidden
                            onChange={handleImageChange5}
                            accept="image/x-png,image/jpeg"
                          />
                        </Button>
                      }
                      {ImageState5.file && <CheckIcon fontSize="medium" />}
                    </h5>
                    <h5>
                      Choose file
                      {
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            marginLeft: "10px",
                            padding: 0,
                            color: "#ffffff",
                            backgroundColor: "dodgerblue",
                            fontSize: "9px",
                          }}
                        >
                          upload
                          <input
                            type="file"
                            hidden
                            onChange={handleImageChange6}
                            accept="image/x-png,image/jpeg"
                          />
                        </Button>
                      }
                      {ImageState6.file && <CheckIcon fontSize="medium" />}
                    </h5>
                    <h5>
                      Choose file
                      {
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            marginLeft: "10px",
                            padding: 0,
                            color: "#ffffff",
                            backgroundColor: "dodgerblue",
                            fontSize: "9px",
                          }}
                        >
                          upload
                          <input
                            type="file"
                            hidden
                            onChange={handleImageChange7}
                            accept="image/x-png,image/jpeg"
                          />
                        </Button>
                      }
                      {ImageState7.file && <CheckIcon fontSize="medium" />}
                    </h5>
                    <h5>
                      Choose file
                      {
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            marginLeft: "10px",
                            padding: 0,
                            color: "#ffffff",
                            backgroundColor: "dodgerblue",
                            fontSize: "9px",
                          }}
                        >
                          upload
                          <input
                            type="file"
                            hidden
                            onChange={handleImageChange8}
                            accept="image/x-png,image/jpeg"
                          />
                        </Button>
                      }
                      {ImageState8.file && <CheckIcon fontSize="medium" />}
                    </h5>
                    <h5>
                      Choose file
                      {
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            marginLeft: "10px",
                            padding: 0,
                            color: "#ffffff",
                            backgroundColor: "dodgerblue",
                            fontSize: "9px",
                          }}
                        >
                          upload
                          <input
                            type="file"
                            hidden
                            onChange={handleImageChange9}
                            accept="image/x-png,image/jpeg"
                          />
                        </Button>
                      }
                      {ImageState9.file && <CheckIcon fontSize="medium" />}
                    </h5>
                    <h5>
                      Choose file
                      {
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            marginLeft: "10px",
                            padding: 0,
                            color: "#ffffff",
                            backgroundColor: "dodgerblue",
                            fontSize: "9px",
                          }}
                        >
                          upload
                          <input
                            type="file"
                            hidden
                            onChange={handleImageChange10}
                            accept="image/x-png,image/jpeg"
                          />
                        </Button>
                      }
                      {ImageState10.file && <CheckIcon fontSize="medium" />}
                    </h5>
                  </div>
                </div>

                <div className="row">
                  <div className="col-8">
                    {checkSelectedImages() ? (
                      <button
                        onClick={handleUploads}
                        style={{
                          marginLeft: "80px",
                          marginTop: "20px",
                          color: "dodgerblue",
                          fontWeight: "bold",
                        }}
                        type="button"
                        className="btn btn-secondary"
                      >
                        Upload works
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className="row invoice-last">
                  <div className="col-9">
                    <p>
                      <br />
                      {/* dapibus id sollicitudin vel, luctus sit amet justo */}
                    </p>
                  </div>
                  {isLoading ? (
                    <LoaderContainer>
                      <CircularProgress style={{ color: "tomato" }} />
                      <h4 style={{ backgroundColor: "#ffffff" }}>
                        Please wait...
                      </h4>
                    </LoaderContainer>
                  ) : null}
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

export default Submitshoots;
