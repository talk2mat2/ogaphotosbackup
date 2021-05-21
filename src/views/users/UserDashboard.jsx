import React, { useState, useEffect } from "react";
import Map from "../../components/Map";
import { useSelector } from "react-redux";

const option = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
const UserDashboard = () => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  const [mylocation, setMylocation] = useState(null);
  const [locations] = useState([]);
  useEffect(() => {
    if (mylocation == null) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMylocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => console.log(err),
        option
      );
    }
    document.title = "Dashboard";
  }, [mylocation]);
  return (
    <div className="page-content">
      <div className="main-wrapper">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div
              className="card table-widget"
              style={{ transition: "height 1s ease" }}
            >
              <div className="card-body" style={{ minHeight: "400px" }}>
                {/* starthere map */}
                {/* <h5 className="card-title">Promos</h5> */}

                <div style={{ margin: "10px" }}>
                  {mylocation ? (
                    <Map
                      selectedMarker={mylocation}
                      mapcenter={mylocation}
                      marker={mylocation}
                      locations={locations}
                      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                      loadingElement={<div style={{ height: `400px` }} />}
                      containerElement={<div style={{ height: `400px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />
                  ) : (
                    <p>No Loaction Data Available</p>
                  )}
                </div>
                {/* end here map */}
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="card stat-widget">
              <div className="card-body " style={{ minHeight: "300px" }}>
                <h5 className="card-title">
                  Always the professional shoots you seek
                </h5>
                <div style={{ margin: "2px" }}>
                  Your picture-perfect photo booking system.
                  <br />
                  Order a Shoot and let us handle the rest,
                  <br />
                  <br />
                  {!userData.isPhotographer ? (
                    <a href="/purpose">
                      <button type="button" className="btn btn-primary">
                        Hire a photographer
                      </button>
                    </a>
                  ) : null}
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
      </div>
    </div>
  );
};

export default UserDashboard;
