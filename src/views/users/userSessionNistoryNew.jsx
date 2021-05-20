import React from "react";

const UserSessionHistory = () => {
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
                    <h4 className="float-end">#511</h4>
                  </div>
                </div>
                <div className="invoice-details">
                  <div className="row">
                    <div className="col">
                      <p className="info">Date:</p>
                      <p>Jan 8, 2021</p>
                    </div>
                    <div className="col">
                      <p className="info">ID:</p>
                      <p>IO237</p>
                    </div>
                    <div className="col">
                      <p className="info">Invoice to:</p>
                      <p>John Doe, New York</p>
                      <p>5025 Collwood Blvd, apt. 2314</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="table-responsive">
                    <table className="table invoice-table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Client</th>
                          <th scope="col">Issued Date</th>
                          <th scope="col">Total</th>
                          <th scope="col">Handle</th>
                          <th scope="col">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">3311</th>
                          <td>
                            <img
                              src="assets3/images/avatars/profile-image.png"
                              alt=""
                            />{" "}
                            Nina Doe
                          </td>
                          <td>11 APR 2021</td>
                          <td>$3223</td>
                          <td>
                            <span className="badge bg-primary">Delivered</span>
                          </td>
                          <td>
                            <a href="#">
                              <i data-feather="edit" />
                            </a>
                            <a href="#">
                              <i data-feather="eye" />
                            </a>
                            <a href="#">
                              <i data-feather="more-vertical" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2331</th>
                          <td>
                            <img
                              src="assets3/images/avatars/profile-image.png"
                              alt=""
                            />{" "}
                            John Doe
                          </td>
                          <td>7 APR 2021</td>
                          <td>$3422</td>
                          <td>
                            <span className="badge bg-info">Declined</span>
                          </td>
                          <td>
                            <a href="#">
                              <i data-feather="edit" />
                            </a>
                            <a href="#">
                              <i data-feather="eye" />
                            </a>
                            <a href="#">
                              <i data-feather="more-vertical" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2344</th>
                          <td>
                            <img
                              src="assets3/images/avatars/profile-image.png"
                              alt=""
                            />{" "}
                            Jacob Doe
                          </td>
                          <td>7 APR 2021</td>
                          <td>$2415</td>
                          <td>
                            <span className="badge bg-primary">Delivered</span>
                          </td>
                          <td>
                            <a href="#">
                              <i data-feather="edit" />
                            </a>
                            <a href="#">
                              <i data-feather="eye" />
                            </a>
                            <a href="#">
                              <i data-feather="more-vertical" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2345</th>
                          <td>
                            <img
                              src="assets3/images/avatars/profile-image.png"
                              alt=""
                            />{" "}
                            Nina Doe
                          </td>
                          <td>20 MAR 2021</td>
                          <td>$3034</td>
                          <td>
                            <span className="badge bg-warning">Processing</span>
                          </td>
                          <td>
                            <a href="#">
                              <i data-feather="edit" />
                            </a>
                            <a href="#">
                              <i data-feather="eye" />
                            </a>
                            <a href="#">
                              <i data-feather="more-vertical" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2355</th>
                          <td>
                            <img
                              src="assets3/images/avatars/profile-image.png"
                              alt=""
                            />{" "}
                            John Doe
                          </td>
                          <td>20 MAR 2021</td>
                          <td>$4337</td>
                          <td>
                            <span className="badge bg-success">Delivered</span>
                          </td>
                          <td>
                            <a href="#">
                              <i data-feather="edit" />
                            </a>
                            <a href="#">
                              <i data-feather="eye" />
                            </a>
                            <a href="#">
                              <i data-feather="more-vertical" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row invoice-last">
                  <div className="col-9">
                    <p>
                      List show recent photo shoot bookings made
                      <br />
                      {/* dapibus id sollicitudin vel, luctus sit amet justo */}
                    </p>
                  </div>
                  <div className="col-3">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSessionHistory;
