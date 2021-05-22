import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CircularProgress from "@material-ui/core/CircularProgress";
const SupportMessageNew = (props) => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const bookings = useSelector((state) => state.bookings);
  const token = CurrentUser && CurrentUser.token;
  const [loading, setLoading] = useState(false);
  const [messagedetail, setmessagedetail] = useState(null);
  const [MessageState, setMessageState] = useState({});
  const { item, history, match } = props;
  const FetchMessages = async (id) => {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/FetchMessages`,

        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setMessageState(res.data.userData);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };
  const mapMessages = () => {
    return (
      MessageState.length > 0 &&
      MessageState.map((item) => {
        return (
          <Link
            onClick={() => {
              setmessagedetail(item);
            }}
            // to={{
            //   pathname: `${match.url}/details`,
            //   state: { data: item },
            // }}
          >
            <li>
              <a href="#">
                <div className="email-list-item">
                  <div className="email-author">
                    <img
                      src="assets3/images/avatars/profile-image.png"
                      alt=""
                    />
                    <span className="author-name">
                      {item.sender.fname && item.sender.fname}
                    </span>
                    {/* <span className="email-date">15m ago</span> */}
                  </div>
                  <div className="email-info">
                    <span className="email-subject">
                      {item.title.slice(0, 29)}{" "}
                    </span>
                    <span className="email-text">
                      {item.body.slice(0, 50)}...
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </Link>
        );
      })
    );
  };
  useEffect(() => {
    FetchMessages();
  }, []);
  return (
    <div className="page-content">
      <div className="main-wrapper">
        <div className="row">
          <div className="col-sm-12 col-md-4 m-b-md">
            <div className="card">
              <div className="card-body" style={{ minHeight: "300px" }}>
                <div className="email-list">
                  <ul className="list-unstyled">
                    {loading ? (
                      <CircularProgress
                        size={24}
                        style={{
                          fontSize: 20,
                          color: "tomato",
                          marginLeft: "50%",
                        }}
                      />
                    ) : MessageState.length > 0 ? (
                      mapMessages()
                    ) : (
                      <p>No new message</p>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {messagedetail ? (
            <div className="col-sm-12 col-md-8">
              <div className="card">
                <div className="card-body">
                  <div className="open-email-content">
                    <div className="mail-header">
                      <div className="mail-title">
                        <h4> {messagedetail.title}</h4>
                      </div>
                      <div className="mail-actions">
                        {/* <button type="button" className="btn btn-secondary">
                        Reply
                      </button>
                      <button type="button" className="btn btn-secondary">
                        Forward
                      </button>
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button> */}
                      </div>

                      <div className="mail-info">
                        <div className="mail-author">
                          <img
                            src="assets3/images/avatars/profile-image.png"
                            alt=""
                          />
                          <div className="mail-author-info">
                            <span className="mail-author-name">
                              {messagedetail.sender.fname &&
                                messagedetail.sender.fname}
                            </span>
                            {/* <span className="mail-author-address">
                              kenny.high@gmail.com
                            </span> */}
                          </div>
                        </div>
                        <div className="mail-other-info">
                          {/* <span>21 July, 18:01</span> */}
                        </div>
                      </div>
                    </div>
                    <div className="mail-text">
                      <p>{messagedetail.body}</p>
                    </div>
                    <div className="mail-attachment">
                      <span className="attachment-info">
                        - from {messagedetail.sender.fname}
                      </span>
                      <div className="mail-attachment-files">
                        <div className="card">
                          {/* <img
                            src="assets3/images/bg-1.jpeg"
                            className="card-img-top"
                            alt="..."
                          /> */}
                          {/* <div className="card-body">
                            <h5 className="card-title">Attachment.jpg</h5>
                            <p className="card-text text-secondary">444 KB</p>
                          </div> */}
                        </div>
                        {/* <div className="card">
                          <img
                            src="assets3/images/card-bg.png"
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">Attachment.jpg</h5>
                            <p className="card-text text-secondary">444 KB</p>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SupportMessageNew;
