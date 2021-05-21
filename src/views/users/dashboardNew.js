import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import DashboardanNewMain from "./DashboardNewMainwithmap";
// import UserSessionHistory from "./userSessionNistoryNew";
// import WalletNew from "./WalletNew";
import { LOGINOUTUSER } from "../../redux/action";
import { SYNCUSERDATA } from "../../redux/action";
import axios from "axios";

const DashboardNew = (props) => {
  const [mylocation, setMylocation] = useState(null);

  const [isOpen, setisOpen] = React.useState(false);
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  const token = CurrentUser && CurrentUser.token;

  const { match, history } = props;
  const [sidebarhidden, setsidebarhidden] = useState("");
  const dispatch = useDispatch();
  const HandleToggleNavBar = () => {
    sidebarhidden === "" && setsidebarhidden("sidebar-hidden");
    sidebarhidden === "sidebar-hidden" && setsidebarhidden("");
  };

  const handlemobiletoggle = () => {
    window.innerWidth < 980 && HandleToggleNavBar();
  };
  const option = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  useEffect(() => {
    if (mylocation === null) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMylocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          // alert(position.coords.latitude)
        },
        (err) => console.log(err),
        option
      );
    }
  }, []);

  useEffect(() => {
    const updateMyLocation = (values) => {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/photographer/updateMyLocation`,
          values,
          {
            headers: { authorization: token },
          }
        )
        .then((res) => {
          console.log(res.data);
          // setIsregistered(true)
          dispatch(SYNCUSERDATA(res.data.userData));
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
    const updateClient = () => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/updateClient`, {
          headers: { authorization: token },
        })
        .then((res) => {
          console.log(res.data);
          dispatch(SYNCUSERDATA(res.data.userData));
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data.message);
          }
          console.log(err);
        });
    };

    mylocation && userData.isPhotographer
      ? updateMyLocation({ lat: mylocation.lat, lng: mylocation.lng })
      : updateClient();
  }, [mylocation]);
  const LogOut = () => {
    dispatch(LOGINOUTUSER());
    history.push("/");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const Greetings = () => {
    var d = new Date();
    var time = d.getHours();

    if (time < 12) {
      return "Good morning ";
    }
    if (time > 12 && time < 18) {
      return "Good afternoon ";
    }
    if (time > 18) {
      return "Good evening ";
    } else {
      return "Welcome";
    }
  };
  return (
    <>
      <Helmet>
        {/* <link
          href="assetsdashboard/libs/flatpickr/flatpickr.min.css"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="assetsdashboard/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assetsdashboard/css/icons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assetsdashboard/css/app.min.css"
          rel="stylesheet"
          type="text/css"
        /> */}
        {/* pasted scrips */}
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,700,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="assets3/plugins/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets3/plugins/font-awesome/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="assets3/plugins/perfectscroll/perfect-scrollbar.css"
          rel="stylesheet"
        />
        <link
          href="assets3/plugins/apexcharts/apexcharts.css"
          rel="stylesheet"
        />

        <link href="assets3/css/main.min.css" rel="stylesheet" />
        <link href="assets3/css/custom.css" rel="stylesheet" />
      </Helmet>
      <Helmet>
        <script src="assets3/plugins/jquery/jquery-3.4.1.min.js"></script>
        <script src="https://unpkg.com/@popperjs/core@2"></script>
        <script src="assets3/plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="https://unpkg.com/feather-icons"></script>
        <script src="assets3/plugins/perfectscroll/perfect-scrollbar.min.js"></script>
        <script src="assets3/plugins/apexcharts/apexcharts.min.js"></script>
        <script src="assets3/js/main.min.js"></script>
        <script src="assets3/js/pages/dashboard.js"></script>
      </Helmet>
      <body className={sidebarhidden}>
        {/* <div className="loader">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}
        <div className="page-container">
          <div className="page-header">
            <nav className="navbar navbar-expand-lg d-flex justify-content-between">
              <div className id="navbarNav">
                <ul className="navbar-nav" id="leftNav">
                  <li onClick={HandleToggleNavBar} className="nav-item">
                    <a className="nav-link" id="sidebar-toggle" href="#">
                      {/* <i data-feather="arrow-left" /> */}
                      <ArrowBackIcon style={{ fontSize: "30px" }} />
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                      Settings
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <div>
                        {Greetings()} {userData.fname} !
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="logo">
                <a className="navbar-brand" href="/" />
              </div>

              <div className id="headerNav">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link search-dropdown"
                      href="#"
                      id="searchDropDown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i data-feather="search" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-lg search-drop-menu"
                      aria-labelledby="searchDropDown"
                    >
                      <form>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Type something.."
                          aria-label="Search"
                        />
                      </form>
                      <h6 className="dropdown-header">Recent Searches</h6>
                      <a className="dropdown-item" href="#">
                        charts
                      </a>
                      <a className="dropdown-item" href="#">
                        new orders
                      </a>
                      <a className="dropdown-item" href="#">
                        file manager
                      </a>
                      <a className="dropdown-item" href="#">
                        new users
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link notifications-dropdown"
                      href="#"
                      id="notificationsDropDown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      3
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end notif-drop-menu"
                      aria-labelledby="notificationsDropDown"
                    >
                      <h6 className="dropdown-header">Notifications</h6>
                      <a href="#">
                        <div className="header-notif">
                          <div className="notif-image">
                            <span className="notification-badge bg-info text-white">
                              <i className="fas fa-bullhorn" />
                            </span>
                          </div>
                          <div className="notif-text">
                            <p className="bold-notif-text">
                              faucibus dolor in commodo lectus mattis
                            </p>
                            <small>19:00</small>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="header-notif">
                          <div className="notif-image">
                            <span className="notification-badge bg-primary text-white">
                              <i className="fas fa-bolt" />
                            </span>
                          </div>
                          <div className="notif-text">
                            <p className="bold-notif-text">
                              faucibus dolor in commodo lectus mattis
                            </p>
                            <small>18:00</small>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="header-notif">
                          <div className="notif-image">
                            <span className="notification-badge bg-success text-white">
                              <i className="fas fa-at" />
                            </span>
                          </div>
                          <div className="notif-text">
                            <p>faucibus dolor in commodo lectus mattis</p>
                            <small>yesterday</small>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="header-notif">
                          <div className="notif-image">
                            <span className="notification-badge">
                              <img
                                src="assets3/images/avatars/profile-image.png"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="notif-text">
                            <p>faucibus dolor in commodo lectus mattis</p>
                            <small>yesterday</small>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="header-notif">
                          <div className="notif-image">
                            <span className="notification-badge">
                              <img
                                src="assets3/images/avatars/profile-image.png"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="notif-text">
                            <p>faucibus dolor in commodo lectus mattis</p>
                            <small>yesterday</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link profile-dropdown"
                      href="#"
                      id="profileDropDown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="assets3/images/avatars/profile-image.png"
                        alt=""
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end profile-drop-menu"
                      aria-labelledby="profileDropDown"
                    >
                      <a className="dropdown-item" href="#">
                        <i data-feather="user" />
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i data-feather="inbox" />
                        Messages
                      </a>
                      <a className="dropdown-item" href="#">
                        <i data-feather="edit" />
                        Activities
                        <span className="badge rounded-pill bg-success">
                          12
                        </span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <i data-feather="check-circle" />
                        Tasks
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        <i data-feather="settings" />
                        Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i data-feather="unlock" />
                        Lock
                      </a>
                      <a className="dropdown-item" href="#">
                        <i data-feather="log-out" />
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="page-sidebar">
            <ul className="list-unstyled accordion-menu">
              <li className="sidebar-title">Main</li>
              <li className="active-page">
                <Link onClick={handlemobiletoggle} to="/dashboard">
                  <i data-feather="home" />
                  Dashboard
                </Link>
              </li>
              <li className="sidebar-title">Apps</li>
              {!userData.isPhotographer && !userData.isAdmin ? (
                <li>
                  <Link onClick={handlemobiletoggle} to={`/UserSessionHistory`}>
                    <i data-feather="inbox" />
                    Session History
                  </Link>
                </li>
              ) : null}
              {userData.isPhotographer ? (
                <li>
                  <Link
                    onClick={handlemobiletoggle}
                    to={`/PhotoGrapherSessionHistory`}
                  >
                    <i data-feather="inbox" />
                    Received Bookings
                  </Link>
                </li>
              ) : null}
              {!userData.isPhotographer && !userData.isAdmin ? (
                <li>
                  <Link onClick={handlemobiletoggle} to={`/wallets`}>
                    <i data-feather="calendar" />
                    Wallet
                  </Link>
                </li>
              ) : null}
              {!userData.isAdmin ? (
                <li>
                  <Link onClick={handlemobiletoggle} to={`/Promos`}>
                    <i data-feather="user" />
                    Promos
                  </Link>
                </li>
              ) : null}

              <li>
                <Link onClick={handlemobiletoggle} to="/SupportMessage">
                  <i data-feather="message-circle" />
                  Support Message
                </Link>
              </li>
              <li>
                <Link onClick={handlemobiletoggle} to="/Profile">
                  <i data-feather="edit" />
                  Profile Settings
                </Link>
              </li>
              <li>
                <Link onClick={LogOut}>
                  <i data-feather="message-circle" />
                  Log Out
                </Link>
              </li>
              {/* <li className="sidebar-title">Elements</li> */}
            </ul>
          </div>
          {/* page content here start */}
          {/* <Switch>
            <Route exact path={`${match.url}`}>
              <DashboardanNewMain />
            </Route>
            <Route exact path={`${match.url}/wallet`}>
              <WalletNew />
            </Route>
            <Route path={`${match.url}/UserSessionHistory`}>
              <UserSessionHistory />
            </Route>
          </Switch> */}
          {props.children}
          {/* page content here end */}
        </div>
        {/* Javascripts */}
      </body>
    </>
  );
};

export default DashboardNew;
