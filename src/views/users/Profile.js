import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button, Grid, InputLabel, TextField } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { SYNCUSERDATA } from "../../redux/action";
import Autocomplete from "react-google-autocomplete";
import Styled from "styled-components";
import Select from "@material-ui/core/Select";
import avatar from "../../assets/avatar.jpg";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
// import GooglePlacesAutocomplete, {
// 	geocodeByPlaceId,
// } from 'react-google-places-autocomplete'
import {
  Typography,
  ListItemIcon,
  Divider,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import languageJson from "../../config/language";
import {
  LocationCityRounded,
  PersonOutline,
  PersonPinCircle,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    maxHeight: 440,
  },
  paper: {
    padding: theme.spacing(4),
    minHeight: "500px",
    margin: "auto",
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    fontSize: 40,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    maxWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
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
const WorksAvater = Styled.div`
  height: 100px;
  width: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 5px;
`;
const ProfileAvater = Styled.div`
  height: 150px;
  width: 150px;
  background-color: #ffffff;
  border-radius: 150px;
  object-fit:contain;
  margin: 5px;
`;
const EditProfile = Styled.div`

over-flow:scroll;
  background-color: #F0FFF0;
  padding:10px;
  box-sizing:border-box;
  width: 550px;
  max-height: 100vh;
  border-radius:4px;
  // background-image: linear-gradient(to right, #ddd6f3 , #ddd6f3);
display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
`;
const VericalCenterRow = Styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;
const Profile = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [isloading, setisLoading] = React.useState(false);
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  const [favoritesShootTypes, setfavoritesShootTypes] = React.useState(
    userData.favouriteShoots || "-"
  );
  const [aboutMe, setaboutMe] = React.useState(userData.aboutMe || "");
  const [open, setOpen] = React.useState(false);
  const [ImageState, setImageState] = useState({ file: null, Uri: null });
  const token = CurrentUser && CurrentUser.token;
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

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const ButtonsStyle = {
    marginTop: "50px",
    marginLeft: "80px",
  };
  const handleplaces = async (place) => {
    console.log(place.formatted_address);
    console.log(place.geometry.location.lat());
    console.log(place.geometry.location.lng());
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
      return userData.Porthfolio_works.map((item) => {
        return (
          <WorksAvater>
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
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <EditProfile>
            <Button
              style={{ borderRadius: "100%", height: "100px", width: "100px" }}
              variant="contained"
              component="label"
            >
              <Avatar
                className={classes.image}
                alt="Image"
                src={ImageState.file || userData.profileImage || avatar}
              />
              <input
                type="file"
                hidden
                onChange={handleProfileImgChange}
                accept="image/x-png,image/jpeg"
              />
            </Button>

            <div style={{ marginTop: "auto", width: "100%" }}>
              <h4>Email</h4>
              <p>{userData.Email}</p>
            </div>
            <div style={{ marginTop: "auto", width: "100%" }}>
              <h4>Favourite shoot type</h4>
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
                <option value="">select</option>
                <option value="Real estate">Real estate</option>
                <option value="family">family</option>
                <option value="Party">Party</option>
                <option value="Dating">Dating</option>
                <option value="Team/Office">Team/Office</option>
                <option value="Graduation">Graduation</option>
                <option value="Fashion">Fashion</option>
                <option value="media">media</option>
                <option value="Food">Food</option>
                <option value="Product">Product</option>
                <option value="Landscape">Landscape</option>
              </select>
            </div>
            <div style={{ height: "8px" }} />
            {userData.isPhotographer ? (
              <div style={{ marginTop: "auto", width: "100%" }}>
                <h4>
                  Portfolio works
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
                    Height: "100px",
                  }}
                >
                  {mapPortfolioworks2()}
                </VericalCenterRow>
              </div>
            ) : null}
            <div style={{ marginTop: "auto", width: "100%" }}>
              <h4>About me</h4>
              <textarea
                value={aboutMe}
                onChange={(e) => setaboutMe(e.target.value)}
                column="10"
                style={{ maxWidth: "100%", width: "100%", minWidth: "100%" }}
              >
                Birthdays
              </textarea>
            </div>
            <button
              disabled={loading}
              onClick={UpdateProfile}
              className="btn1 "
              style={{
                backgroundColor: "rgb(0, 162, 149)",
                padding: "9px",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                minWidth: "200px",
                marginTop: "auto",
              }}
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                />
              ) : (
                "Update"
              )}
            </button>
            {isloading ? (
              <LoaderContainer>
                <CircularProgress style={{ color: "tomato" }} />
                <h4 style={{ backgroundColor: "#ffffff" }}>Please wait...</h4>
              </LoaderContainer>
            ) : null}
          </EditProfile>
        </Fade>
      </Modal>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar
              className={classes.image}
              alt="Image"
              src={userData.profileImage || avatar}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {userData.fname + " " + userData.lname}
                </Typography>
                <Typography variant="body2">{userData.mobile}</Typography>
                <Typography variant="body2" gutterBottom>
                  {userData.Email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid container spacing={2} alignItems='flex-end'>
					<Grid item>
						<PersonPinCircle />
					</Grid>
					<Grid item xs={12} sm container>
						<FormControl className={classes.formControl}>
							<InputLabel
								shrink
								id='demo-simple-select-placeholder-label-label'
							>
								Location
							</InputLabel>
							<Select
								labelId='demo-simple-select-placeholder-label-label'
								id='demo-simple-select-placeholder-label'
								value={age}
								onChange={handleChange}
								displayEmpty
								className={classes.selectEmpty}
							>
								<MenuItem value=''>
									<em>Nigeria</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid> */}
        {/* <Autocomplete
					placeholder='enter location'
					apiKey={`${process.env.REACT_APP_API_KEY}`}
					style={{
						width: '300px',
						color: 'grey',
						borderWidth: '1px',
						borderColor: 'silver',
					}}
					onPlaceSelected={(place) => {
						handleplaces(place)
					}}
					types={['address']}
					componentRestrictions={{ country: 'ng' }}
				/> */}
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item>
            <h4>About me:</h4>
          </Grid>
          <Grid
            item
            xs={12}
            sm
            container
            style={{
              maxWidth: "300px",
            }}
          >
            <VericalCenterRow>
              <p>{userData.aboutMe}</p>
            </VericalCenterRow>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <PersonOutline />
          </Grid>
          <Grid item xs={12} sm container>
            <Typography variant="subtitle1" gutterBottom>
              {userData.Email}
            </Typography>
            {/* <TextField
							disabled
							id='standard-disabled'
							label='Invite Code'
							defaultValue={auth.info.email}
						/> */}
          </Grid>
        </Grid>
        {/* <Grid container spacing={2} alignItems='flex-end'>
					<Grid item>
						<LocationCityRounded />
					</Grid>
					<Grid item xs={12} sm container>
						<FormControl className={classes.formControl}>
							<InputLabel id='demo-simple-select-label'>Location</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid> */}
        <div style={{ height: "15px" }} />
        {userData.isPhotographer ? (
          <div style={{ marginTop: "auto", width: "100%" }}>
            <h4>Portfolio works</h4>
            <VericalCenterRow
              style={{
                flexWrap: "wrap",
                overflowY: "scroll",
                Height: "150px",
              }}
            >
              {mapPortfolioworks()}
            </VericalCenterRow>
          </div>
        ) : null}
        <div style={{ height: "8px" }} />
        <button
          onClick={handleOpen}
          className="btn1 "
          style={{
            backgroundColor: "rgb(0, 162, 149)",
            padding: "9px",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Edit profile
        </button>
      </Paper>
    </div>
  );
};

export default Profile;
