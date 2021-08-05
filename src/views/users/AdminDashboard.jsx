import React, { useState } from "react";
import TransitionsModal from "./modal";
import { useSelector } from "react-redux";
import MessageModal from "./MessageModal.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Styled from "styled-components";
import { Button } from "@material-ui/core";

const VericalCenterRow = Styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
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
const AdminDashboard = (props) => {
  const [open, setOpen] = React.useState(false);
  const [countLoading, setCountLoading] = React.useState(false);
  const [priceTag, setPricetag] = React.useState(0);
  const [locationPrice, setlocationPrice] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [isloading, setisLoading] = React.useState(false);
  const [count, setCount] = React.useState({
    usersCount: 0,
    phographersCount: 0,
    bookingsCount: 0,
  });
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const token = CurrentUser && CurrentUser.token;
  const { item, history, match } = props;
  const [searchUsers, setSearchUsers] = useState("");
  const [searchPhotographers, setSearPhotographers] = useState("");
  const [searchUsersResult, setSearchUsersResult] = useState([]);
  const [HomePageData, setHomePageData] = useState([]);
  const [searchPhotographersResult, setsearchPhotographersResult] = useState(
    []
  );

  const userData = CurrentUser && CurrentUser.userData;
  const [PricetagLoading, setPricetagLoading] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchPriceTag = async () => {
    setPricetagLoading(true);
    await axios
      .get(`${process.env.REACT_APP_API_URL}/users/GetPricePriceTag`)
      .then((res) => {
        setPricetagLoading(false);
        // setLoading(false)
        setPricetag(parseInt(res.data.userData.price));
        res.data.userData.locationPrice &&
          setlocationPrice(parseInt(res.data.userData.locationPrice));
        console.log(res.data);
        // setIsregistered(true)
        // history.push('/dashboard')
      })
      .catch((err) => {
        setPricetagLoading(false);
        if (err.response) {
          // setLoading(false)
          console.log(err.response.data.message);
          // err.response.data.message &&

          // err.response.data.error && setIsregistered(false)
        }
        console.log(err);
      });
  };
  const GetHomePageData = async () => {
    setPricetagLoading(true);
    await axios
      .get(`${process.env.REACT_APP_API_URL}/users/GetHomePageData`)
      .then((res) => {
        // setPricetagLoading(false);
        // setLoading(false)
        setHomePageData(res.data.userData);
        // setPricetag(parseInt(res.data.userData.price));
        console.log(res.data);
        // setIsregistered(true)
        // history.push('/dashboard')
      })
      .catch((err) => {
        // setPricetagLoading(false);
        if (err.response) {
          // setLoading(false)
          console.log(err.response.data.message);
          // err.response.data.message &&

          // err.response.data.error && setIsregistered(false)
        }
        console.log(err);
      });
  };
  const CountUsersAndPhotgraphers = async () => {
    setCountLoading(true);
    await axios
      .get(`${process.env.REACT_APP_API_URL}/users/CountUsersAndPhotgraphers`)
      .then((res) => {
        setCountLoading(false);
        // setLoading(false)
        setCount({
          ...count,
          usersCount: res.data.userData.usersCount,
          phographersCount: res.data.userData.phographersCount,
          bookingsCount: res.data.userData.bookingsCount,
        });
        // setPricetag(parseInt(res.data.userData))
        console.log(res.data);
        // setIsregistered(true)
        // history.push('/dashboard')
      })
      .catch((err) => {
        setCountLoading(false);
        // setPricetagLoading(false)
        if (err.response) {
          // setLoading(false)
          console.log(err.response.data.message);
          // err.response.data.message &&

          // err.response.data.error && setIsregistered(false)
        }
        console.log(err);
      });
  };
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
        setCountLoading(false);

        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };
  const SearchPhotographersApi = async (search) => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/SearchPhotographers?search=${search}`,
        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log(res.data.userData);
        setsearchPhotographersResult(res.data.userData);
      })
      .catch((err) => {
        setCountLoading(false);

        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };

  const handleSearch = async (value) => {
    setSearchUsers(value);

    await SearchUsersApi(value);
  };
  const handleSearch2 = async (value) => {
    setSearPhotographers(value);

    await SearchPhotographersApi(value);
  };
  React.useEffect(() => {
    fetchPriceTag();
    GetHomePageData();
    CountUsersAndPhotgraphers();
  }, []);

  const UpdateLatestWorks = async (imagedata) => {
    const userInfo = {
      userId: userData._id,
    };
    const image = imagedata;
    var formData = new FormData();
    formData.append("file", image);
    // formData.append("file", image2);
    formData.append("userData", JSON.stringify(userInfo));
    setisLoading(true);
    await axios({
      // url: `${ProxyUrl}/users/PreRegister`,
      url: `${process.env.REACT_APP_API_URL}/users/UpdateLatestWorks`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",

        // Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data);
        // dispatch(SYNCUSERDATA(response.data.userData));
        setisLoading(false);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
        handleClose();
      });
  };

  function handleLatestImgChange(event) {
    if (!event.target.files[0]) {
      return null;
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] && UpdateLatestWorks(event.target.files[0]);
      // setImageState({
      //   file: URL.createObjectURL(event.target.files[0]),
      //   Uri: event.target.files[0],
      // });
    } else {
      return alert("select a valid image format");
    }
  }
  return (
    <div className="page-content">
      <TransitionsModal
        open={open}
        setOpen={setOpen}
        locationPrice={locationPrice}
        setlocationPrice={setlocationPrice}
        handleClose={handleClose}
        priceTag={priceTag}
        setPricetag={setPricetag}
      />
      <div className="main-wrapper">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Admin Dashboard</h5>
                {/* <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="popover"
                  title="Popover title"
                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                >
                  Click to toggle popover
                </button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="card stat-widget">
              {countLoading ? (
                <CircularProgress
                  size={20}
                  style={{
                    color: "tomato",

                    marginLeft: "50%",
                  }}
                />
              ) : (
                <div className="card-body">
                  <h5 className="card-title">Users</h5>
                  <h2>{count.usersCount}</h2>
                  <p>Registered</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info progress-bar-striped"
                      role="progressbar"
                      style={{
                        width: (count.usersCount / 1000) * 100 + "%",
                      }}
                      aria-valuenow={count.usersCount}
                      aria-valuemin={0}
                      aria-valuemax={1000}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card stat-widget">
              {countLoading ? (
                <CircularProgress
                  size={20}
                  style={{
                    color: "tomato",

                    marginLeft: "50%",
                  }}
                />
              ) : (
                <div className="card-body">
                  <h5 className="card-title">Photographers</h5>
                  <h2>{count.phographersCount}</h2>
                  <p>Registered</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success progress-bar-striped"
                      role="progressbar"
                      style={{
                        width: (count.phographersCount / 1000) * 100 + "%",
                      }}
                      aria-valuenow={count.phographersCount}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card stat-widget">
              {countLoading ? (
                <CircularProgress
                  size={20}
                  style={{
                    color: "tomato",

                    marginLeft: "50%",
                  }}
                />
              ) : (
                <div className="card-body">
                  <h5 className="card-title">Bookings Made</h5>
                  <h2>{count.bookingsCount}</h2>
                  <p>Total bookings</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger progress-bar-striped"
                      role="progressbar"
                      style={{
                        width: (count.bookingsCount / 1000) * 100 + "%",
                      }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={1000}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card stat-widget">
              {PricetagLoading ? (
                <CircularProgress
                  size={20}
                  style={{
                    color: "tomato",

                    marginLeft: "50%",
                  }}
                />
              ) : (
                <div style={{ position: "relative" }} className="card-body">
                  <h5 className="card-title">Shoot Price</h5>
                  <h3
                    style={{ position: "absolute", top: "60px", right: "9px " }}
                  >
                    {priceTag}
                  </h3>
                  <button
                    onClick={handleOpen}
                    className="btn btn-primary"
                    style={{ position: "absolute", top: "2px", right: "2px" }}
                  >
                    set
                  </button>
                  <p>Per minutes(naira)</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary progress-bar-striped"
                      role="progressbar"
                      style={{
                        width: (priceTag && priceTag / 300) * 100 + "%",
                      }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card stat-widget">
              {PricetagLoading ? (
                <CircularProgress
                  size={20}
                  style={{
                    color: "tomato",

                    marginLeft: "50%",
                  }}
                />
              ) : (
                <div style={{ position: "relative" }} className="card-body">
                  <h5 className="card-title">Location Price</h5>
                  <h3
                    style={{ position: "absolute", top: "60px", right: "9px " }}
                  >
                    {locationPrice}
                  </h3>
                  {/* 
                  <p>Per minutes(naira)</p> */}
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary progress-bar-striped"
                      role="progressbar"
                      style={{
                        width:
                          (locationPrice && locationPrice / 300) * 100 + "%",
                      }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <h5>Home Page Control</h5>
                  </div>
                  <div className="col-4">
                    {/* <h4 className="float-end">({bookings.length})</h4> */}
                  </div>
                </div>
                <div style={{ height: "20px" }} />
                <div className="row">
                  <h6>
                    latest works{" "}
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
                        onChange={handleLatestImgChange}
                        accept="image/x-png,image/jpeg"
                      />
                    </Button>
                  </h6>
                  <VericalCenterRow
                    style={{
                      flexWrap: "wrap",
                      overflowY: "auto",
                      height: "100px",
                      backgroundColor: "#F5FFFA",
                    }}
                  ></VericalCenterRow>

                  <div className="col">
                    <div className="col"></div>
                  </div>
                </div>
                <div style={{ height: "20px" }} />
                <div className="row">
                  <h6>Specialists</h6>
                  <VericalCenterRow
                    style={{
                      flexWrap: "wrap",
                      overflowY: "auto",
                      height: "100px",
                      backgroundColor: "#F5FFFA",
                    }}
                  ></VericalCenterRow>

                  <div className="col">
                    <div className="col"></div>
                  </div>
                </div>
                <div style={{ height: "20px" }} />
                <div className="row">
                  <h6>Our photographers</h6>
                  <VericalCenterRow
                    style={{
                      flexWrap: "wrap",
                      overflowY: "auto",
                      height: "100px",
                      backgroundColor: "#F5FFFA",
                    }}
                  ></VericalCenterRow>

                  <div className="col">
                    <div className="col"></div>
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
                      <div className="invoice-info"></div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="card stat-widget">
              <div className="card-body">
                <h5 className="card-title">New Customers</h5>
                <h2>132</h2>
                <p>From last week</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-info progress-bar-striped"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card stat-widget">
              <div className="card-body">
                <h5 className="card-title">Orders</h5>
                <h2>287</h2>
                <p>Orders in waitlist</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-success progress-bar-striped"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card stat-widget">
              <div className="card-body">
                <h5 className="card-title">Monthly Profit</h5>
                <h2>7.4K</h2>
                <p>For last 30 days</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger progress-bar-striped"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card stat-widget">
              <div className="card-body">
                <h5 className="card-title">Orders</h5>
                <h2>87</h2>
                <p>Orders in waitlist</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary progress-bar-striped"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xl-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Revenue</h5>
                <div id="apex1" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="card stat-widget">
              <div className="card-body">
                <h5 className="card-title">Social Media</h5>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-primary text-primary">
                        <i data-feather="thumbs-up" />
                      </div>
                      <div className="tr-text">
                        <h4>New post reached 7k+ likes</h4>
                        <p>02 March</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-info text-info">
                        <i data-feather="twitch" />
                      </div>
                      <div className="tr-text">
                        <h4>Developer AMA is now live</h4>
                        <p>01 March</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-danger text-danger">
                        <i data-feather="instagram" />
                      </div>
                      <div className="tr-text">
                        <h4>52 unread messages</h4>
                        <p>23 February</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-warning text-warning">
                        <i data-feather="shopping-bag" />
                      </div>
                      <div className="tr-text">
                        <h4>2 new orders from shop page</h4>
                        <p>17 February</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-info text-info">
                        <i data-feather="twitter" />
                      </div>
                      <div className="tr-text">
                        <h4>Hashtag #circl is trending</h4>
                        <p>03 February</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="card table-widget">
              <div className="card-body">
                <h5 className="card-title">Recent Orders</h5>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Customer</th>
                        <th scope="col">Product</th>
                        <th scope="col">Invoice</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <img
                            src="../../assets/images/avatars/profile-image.png"
                            alt=""
                          />
                          Anna Doe
                        </th>
                        <td>Modern</td>
                        <td>#53327</td>
                        <td>$20</td>
                        <td>
                          <span className="badge bg-info">Shipped</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img
                            src="../../assets/images/avatars/profile-image.png"
                            alt=""
                          />
                          John Doe
                        </th>
                        <td>Alpha</td>
                        <td>#13328</td>
                        <td>$25</td>
                        <td>
                          <span className="badge bg-success">Paid</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img
                            src="../../assets/images/avatars/profile-image.png"
                            alt=""
                          />
                          Anna Doe
                        </th>
                        <td>Lime</td>
                        <td>#35313</td>
                        <td>$20</td>
                        <td>
                          <span className="badge bg-danger">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img
                            src="../../assets/images/avatars/profile-image.png"
                            alt=""
                          />
                          John Doe
                        </th>
                        <td>Circl Admin</td>
                        <td>#73423</td>
                        <td>$23</td>
                        <td>
                          <span className="badge bg-primary">Shipped</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img
                            src="../../assets/images/avatars/profile-image.png"
                            alt=""
                          />
                          Nina Doe
                        </th>
                        <td>Space</td>
                        <td>#54773</td>
                        <td>$20</td>
                        <td>
                          <span className="badge bg-success">Paid</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="card stat-widget">
              <div className="card-body">
                <h5 className="card-title">Orders</h5>
                <div id="apex2" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="card stat-widget">
              <div className="card-body">
                <h5 className="card-title">Tasks Overview</h5>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-primary text-primary">
                        <i data-feather="user" />
                      </div>
                      <div className="tr-text">
                        <a href="#">
                          <h4>Project Managment</h4>
                        </a>
                        <p>Management</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-info text-info">
                        <i data-feather="user" />
                      </div>
                      <div className="tr-text">
                        <a href="#">
                          <h4>Design</h4>
                        </a>
                        <p>Creative</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-secondary">
                        <i data-feather="user" />
                      </div>
                      <div className="tr-text">
                        <a href="#">
                          <h4>Financial Accounting</h4>
                        </a>
                        <p>Finance</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-primary text-primary">
                        <i data-feather="user" />
                      </div>
                      <div className="tr-text">
                        <a href="#">
                          <h4>Testing</h4>
                        </a>
                        <p>Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-secondary text-secondary">
                        <i data-feather="user" />
                      </div>
                      <div className="tr-text">
                        <a href="#">
                          <h4>Development</h4>
                        </a>
                        <p>Developers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="card">
              <img
                src="../../assets/images/card-bg.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-meet-header">
                  <div className="card-meet-day">
                    <h6>WED</h6>
                    <h3>7</h3>
                  </div>
                  <div className="card-meet-text">
                    <h6>Developer AMA</h6>
                    <p>Meet project developers</p>
                  </div>
                </div>
                <p className="card-text m-b-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <a href="#" className="btn btn-info">
                  Join
                </a>
                <a href="#" className="btn btn-primary">
                  Invite
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card stat-widget">
              <div className="card-body">
                <h5 className="card-title">Transactions</h5>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-primary text-primary">
                        <i data-feather="thumbs-up" />
                      </div>
                      <div className="tr-text">
                        <h4>Facebook</h4>
                        <p>02 March</p>
                      </div>
                    </div>
                    <div className="tr-rate">
                      <p>
                        <span className="text-success">+ $24</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-success text-success">
                        <i data-feather="credit-card" />
                      </div>
                      <div className="tr-text">
                        <h4>Visa</h4>
                        <p>02 March</p>
                      </div>
                    </div>
                    <div className="tr-rate">
                      <p>
                        <span className="text-success">+ $300</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-danger text-danger">
                        <i data-feather="tv" />
                      </div>
                      <div className="tr-text">
                        <h4>Netflix</h4>
                        <p>02 March</p>
                      </div>
                    </div>
                    <div className="tr-rate">
                      <p>
                        <span className="text-danger">- $17</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-warning text-warning">
                        <i data-feather="shopping-cart" />
                      </div>
                      <div className="tr-text">
                        <h4>Themeforest</h4>
                        <p>02 March</p>
                      </div>
                    </div>
                    <div className="tr-rate">
                      <p>
                        <span className="text-danger">- $220</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="transactions-list">
                  <div className="tr-item">
                    <div className="tr-company-name">
                      <div className="tr-icon tr-card-icon tr-card-bg-info text-info">
                        <i data-feather="dollar-sign" />
                      </div>
                      <div className="tr-text">
                        <h4>PayPal</h4>
                        <p>02 March</p>
                      </div>
                    </div>
                    <div className="tr-rate">
                      <p>
                        <span className="text-success">+20%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {isloading ? (
          <LoaderContainer>
            <CircularProgress style={{ color: "tomato" }} />
            <h4 style={{ backgroundColor: "#ffffff" }}>Please wait...</h4>
          </LoaderContainer>
        ) : null}
      </div>
    </div>
  );
};

export default AdminDashboard;
