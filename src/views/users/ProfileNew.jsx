import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import { SYNCUSERDATA } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import axios from "axios";
import Styled from "styled-components";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CircularProgress from "@material-ui/core/CircularProgress";

const VericalCenterRow = Styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;

const WorksAvater = Styled.div`
  height: 100px;
  width: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 5px;
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
const ProfileNew = () => {
  const [loading, setLoading] = React.useState(false);
  const [isloading, setisLoading] = React.useState(false);
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  const [aboutMe, setaboutMe] = React.useState(userData.aboutMe || "");
  const [open, setOpen] = React.useState(false);
  const [ImageState, setImageState] = React.useState({ file: null, Uri: null });
  const token = CurrentUser && CurrentUser.token;
  const [favoritesShootTypes, setfavoritesShootTypes] = React.useState(
    userData.favouriteShoots || "-"
  );
  const dispatch = useDispatch();
  function handleProfileImgChange(event) {
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
  function handlePhotographerImgChange(event) {
    if (!event.target.files[0]) {
      return null;
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] && UpdatePortfolioWorks(event.target.files[0]);
      // setImageState({
      //   file: URL.createObjectURL(event.target.files[0]),
      //   Uri: event.target.files[0],
      // });
    } else {
      return alert("select a valid image format");
    }
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const UpdateProfile = async () => {
    // Porthfolio_works: [{ imgUri: String }],
    // favouriteShoots: String,
    // profileImage: String,
    // aboutMe: String,
    setLoading(true);
    const userInfo = {
      favouriteShoots: favoritesShootTypes,
      aboutMe: aboutMe,
      userId: userData._id,
    };
    const image = ImageState.Uri;
    var formData = new FormData();
    formData.append("file", image);
    // formData.append("file", image2);
    formData.append("userData", JSON.stringify(userInfo));
    setLoading(true);
    await axios({
      // url: `${ProxyUrl}/users/PreRegister`,
      url: `${process.env.REACT_APP_API_URL}/${
        userData.isPhotographer ? "photographer" : "users"
      }/editProfileUpload`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",

        // Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data);
        dispatch(SYNCUSERDATA(response.data.userData));
        setLoading(false);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        handleClose();
      });
  };
  const UpdatePortfolioWorks = async (imagedata) => {
    // Porthfolio_works: [{ imgUri: String }],
    // favouriteShoots: String,
    // profileImage: String,
    // aboutMe: String,
    // setLoading(true);
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
      url: `${process.env.REACT_APP_API_URL}/${
        userData.isPhotographer ? "photographer" : "users"
      }/UploadWorks`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",

        // Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data);
        dispatch(SYNCUSERDATA(response.data.userData));
        setisLoading(false);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
        handleClose();
      });
  };
  const mapPortfolioworks = () => {
    if (userData.Porthfolio_works.length > 0) {
      return userData.Porthfolio_works.slice(0, 4).map((item) => {
        return (
          <WorksAvater>
            <a target="_blank" href={item.imgUri}>
              <img
                src={item.imgUri}
                alt="img"
                style={{ width: "100%", borderRadius: "4px" }}
              />
            </a>
          </WorksAvater>
        );
      });
    }
  };
  const handleDeleteImg = (id) => {
    if (!id) {
      return null;
    }
    console.log(id);
    setisLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/photographer/DeleteWorks`,
        {
          imageId: id,
        },
        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        dispatch(SYNCUSERDATA(res.data.userData));
        setisLoading(false);
        handleClose();
      })
      .catch((err) => {
        setLoading(false);
        setisLoading(false);
        if (err.response) {
          // setErrorMessage(err.response.data.message);
          console.log(err.response.data.message);
          // err.response.data.message &&

          // err.response.data.error && setIsregistered(false)
        } else {
          // setErrorMessage(
          //   "An error occured ,make sure you have a working network"
          // );
          console.log(err);
        }
      });
  };
  const mapPortfolioworks2 = () => {
    if (userData.Porthfolio_works.length > 0) {
      return userData.Porthfolio_works.map((item) => {
        return (
          <WorksAvater style={{ position: "relative" }}>
            <HighlightOffIcon
              onClick={handleDeleteImg.bind(this, item._id)}
              fontSize="medium"
              style={{
                color: "tomato",
                position: "absolute",
                top: 0,
                backgroundColor: "inherit",
                borderRadius: "100%",
                cursor: "pointer",
              }}
            />
            <img
              src={item.imgUri}
              alt="img"
              style={{ width: "100%", borderRadius: "4px" }}
            />
          </WorksAvater>
        );
      });
    }
  };
  return (
    <div className="page-content">
      <div className="main-wrapper">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="open-email-content">
                  <div className="mail-header">
                    <div className="mail-title">
                      <h4>My Profile</h4>
                    </div>
                    <div className="mail-actions">
                      <a href="/purpose">
                        {!userData.isPhotographer ? (
                          <button type="button" className="btn btn-secondary">
                            Hire a photographer
                          </button>
                        ) : null}
                      </a>
                    </div>
                    <div className="mail-info">
                      <div className="mail-author">
                        <img
                          style={{
                            width: "100px",
                            height: "100px",
                            border: "100px",
                            objectFit: "cover",
                          }}
                          src={userData.profileImage || avatar}
                          alt=""
                        />
                        <div className="mail-author-info">
                          <div style={{ height: "30px" }} />
                          <span className="mail-author-name">
                            {userData.fname} {userData.lname}
                          </span>
                          <span className="mail-author-address">
                            {userData.Email}
                          </span>
                        </div>
                      </div>
                      {/* <div className="mail-other-info">
                        <span>21 July, 18:01</span>
                      </div> */}
                    </div>
                  </div>
                  <div>
                    <p>favourite shoot type: {userData.favouriteShoots}</p>
                  </div>
                  <div className="mail-text">
                    <p>
                      About me:,
                      <br />
                      <br />
                      {userData.aboutMe}
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>

                  <div className="mail-attachment">
                    <span className="attachment-info"></span>
                    <div className="mail-attachment-files">
                      <div className="card">
                        <button
                          onClick={handleOpen}
                          type="button"
                          className="btn btn-secondary"
                        >
                          Edit profile
                        </button>
                      </div>
                      <div className="card">
                        <div className="card-body"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* here */}

          {userData.isPhotographer ? (
            <div className="col-md-12 col-lg-4">
              <div className="card stat-widget">
                <div
                  className="card-body "
                  style={{ minHeight: "300px", paddingBottom: "30px" }}
                >
                  <h5 className="card-title">My Porthfolio</h5>{" "}
                  {userData.isPhotographer &&
                  userData.Porthfolio_works.length > 4 ? (
                    <Link to="/viewall">view more </Link>
                  ) : null}
                  <div
                    style={{
                      margin: "1px",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <p>
                      <br />
                    </p>
                    {mapPortfolioworks()}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{ maxWidth: "500px" }} className="col-sm-12 col-md-8 ">
            <div className="card">
              <div className="card-body">
                <Button
                  style={{
                    borderRadius: "100%",
                    height: "100px",
                    width: "100px",
                  }}
                  variant="contained"
                  component="label"
                >
                  <Avatar
                    style={{
                      width: "100px",
                      height: "100px",
                      border: "100px",
                      objectFit: "cover",
                    }}
                    alt="Imag"
                    src={ImageState.file || userData.profileImage || avatar}
                  />
                  <input
                    type="file"
                    hidden
                    onChange={handleProfileImgChange}
                    accept="image/x-png,image/jpeg"
                  />
                </Button>

                <div className="mail-author-info">
                  <div style={{ height: "30px" }} />
                  <span className="mail-author-name">
                    {userData.fname} {userData.lname}
                  </span>
                  <br />
                  <span className="mail-author-address">{userData.Email}</span>
                </div>
                <br />
                <br />

                <div style={{ marginTop: "auto", width: "100%" }}>
                  <p>Favourite shoot type:</p>
                  <select
                    defaultValue={favoritesShootTypes}
                    name="favoritesShootTypes"
                    id="favoritesShootTypes"
                    value={favoritesShootTypes}
                    onChange={(e) => setfavoritesShootTypes(e.target.value)}
                    style={{
                      width: "200px",
                      border: "none",
                      borderRadius: "4px",
                      height: "30px",
                    }}
                  >
                    <option value="">Select</option>
                    <option value="Real estate">Real estate</option>
                    <option value="family">Family/Events</option>
                    <option value="Party">Party</option>
                    <option value="Dating">Dating</option>
                    <option value="Team/Office">Team/Professional Head Shots</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Media">Media</option>
                    <option value="Food">Food</option>
                    <option value="Product/Branding">Product/Branding</option>
                    <option value="Landscape">Landscape</option>
                    <option value="Portraits">Portraits</option>
                    <option value="Lifestyle/Makeup">Lifestyle/Makeup</option>
                    <option value="Fitnes">Fitness</option>
                    <option value="Real Estate">Real Estate</option>
                  </select>
                </div>
                <div style={{ height: "8px" }} />
                {userData.isPhotographer ? (
                  <div style={{ marginTop: "auto", width: "100%" }}>
                    <h4>
                      Portfolio 
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
                            onChange={handlePhotographerImgChange}
                            accept="image/x-png,image/jpeg"
                          />
                        </Button>
                      }
                    </h4>
                    <VericalCenterRow
                      style={{
                        flexWrap: "wrap",
                        overflowY: "scroll",
                        height: "70px",
                        backgroundColor: "gold",
                      }}
                    >
                      {mapPortfolioworks2()}
                    </VericalCenterRow>
                  </div>
                ) : null}
                <br />
                <div style={{ marginTop: "auto", width: "100%" }}>
                  <p>About me</p>
                  <textarea
                    className="form-control"
                    id="floatingInput"
                    value={aboutMe}
                    onChange={(e) => setaboutMe(e.target.value)}
                    column="10"
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                      minWidth: "100%",
                      height: "80px",
                    }}
                  >
                    Birthdays
                  </textarea>
                </div>
                <button
                  disabled={loading}
                  onClick={UpdateProfile}
                  type="button"
                  className="btn btn-secondary"
                >
                  {loading ? (
                    <CircularProgress
                      size={24}
                      style={{
                        fontSize: 20,
                        color: "tomato",
                      }}
                    />
                  ) : (
                    "Update"
                  )}
                </button>

                {isloading ? (
                  <LoaderContainer>
                    <CircularProgress style={{ color: "tomato" }} />
                    <h4 style={{ backgroundColor: "#ffffff" }}>
                      Please wait...
                    </h4>
                  </LoaderContainer>
                ) : null}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProfileNew;
