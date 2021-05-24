/* eslint-disable import/first */
/* eslint-disable prettier/prettier */
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteNew from "./ProtectedRouteNew";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Login from "../views/Login";
import ErrorPage from "../views/ErrorPage";
const Homepage = lazy(() => import("../views/pages/Homepage"));
// import Homepage from "../views/pages/Homepage";
// import About from "../views/pages/About";
const About = lazy(() => import("../views/pages/About"));
// import Services from "../views/pages/ServicesPage";
// import Contact from "../views/pages/ContactPage";
const Contact = lazy(() => import("../views/pages/About"));
// import Blog from "../views/pages/BlogPage";
// import Register from "../views/Register";
const Register = lazy(() => import("../views/Register"));
// import ForgotPassword from "../views/ForgotPassword";
const ForgotPassword = lazy(() => import("../views/ForgotPassword"));
// import Dashboard from "../views/users/Dashboard";
const Dashboard = lazy(() => import("../views/users/Dashboard"));
import GuestRoute from "./GuestRoute";
import ScrollToTop from "../ScrollToTop";
import DashboardNew from "../views/users/dashboardNew";
import DashboardanNewMain from "../views/users/DashboardNewMainwithmap";
import WalletNew from "../views/users/WalletNew";
import UserSessionHistory from "../views/users/userSessionNistoryNew";
import SupportMessageNew from "../views/users/SupportMessageNew";
import ProfileNew from "../views/users/ProfileNew";
import PromosMew from "../views/users/Promosnew";
import Viewallwork from "../views/users/Viewallworks";
import UserSessionHistoryDetails from "../views/users/userSessionNistoryNew_Details";
import PhotoGrapherSessionHistory from "../views/users/PhotoGrapherSessionNistoryNew";
import PhotoSessionSessionHistoryDetails from "../views/users/PhotoSessionNistoryNew_Details";
import EditPhotoRequest from "../views/users/EditPhotoRequest";
import Submitshoots from "../views/users/submiteShoots";
import editphotouserDetails from "../views/users/editphotouserDetails";
import AdminUploadedits from "../views/users/AdminUploadedits";
import ReceivedPhotos from "../views/users/ReceivedPhotos";
import ReceivedPhotoDetails from "../views/users/ReceivedPhotoDetails";

// import Delivery from "../views/users/Delivery";
// import Looking from "../views/users/Looking";
const Looking = lazy(() => import("../views/users/Looking"));
// import Profile from "../views/users/Profile";
const Profile = lazy(() => import("../views/users/Profile"));
// import Promos from "../views/users/Promos";
const Promos = lazy(() => import("../views/users/Promos"));
// import TransEat from "../views/users/TransEat";
const TransEat = lazy(() => import("../views/users/TransEat"));
// import Trips from "../views/users/Trips";
const Trips = lazy(() => import("../views/users/Trips"));
// import Wallet from "../views/users/Wallet";
const Wallet = lazy(() => import("../views/users/Wallet"));
// import Support from "../views/users/Support";
const Support = lazy(() => import("../views/users/Support"));
// import FoodOrderHistory from "../views/users/FoodOrderHistory";
const FoodOrderHistory = lazy(() => import("../views/users/FoodOrderHistory"));
// import CourierHistory from "../views/users/CourierHistory";
const CourierHistory = lazy(() => import("../views/users/CourierHistory"));
// import SignUp from "../views/pages/Signup";
const SignUp = lazy(() => import("../views/pages/Signup"));
// import How_it_works from "../views/pages/how_it_works";
const How_it_works = lazy(() => import("../views/pages/how_it_works"));
// import Portfolio from "../views/pages/portfolio";
const Portfolio = lazy(() => import("../views/pages/portfolio"));
// import PhotoSignUp from "../views/pages/photographSignUP";
const PhotoSignUp = lazy(() => import("../views/pages/photographSignUP"));
// import PhotoGrapherLoginNew from "../views/pages/PhotographerLoginNew";
const PhotoGrapherLoginNew = lazy(() =>
  import("../views/pages/PhotographerLoginNew")
);
// import ClientRegister from "../views/pages/ClientRegister";
const ClientRegister = lazy(() => import("../views/pages/ClientRegister"));
const Purpose = lazy(() => import("../views/pages/Purpose"));
// import PhotographersRegister from "../views/pages/PhotographersRegister";
const PhotographersRegister = lazy(() =>
  import("../views/pages/PhotographersRegister")
);

function BaseRoute() {
  return (
    <Router>
      <Suspense
        fallback={
          <div
            style={{
              width: "100vw",
              height: "100vh",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>Loading..</p>
            <CircularProgress />
          </div>
        }
      >
        <Switch>
          <ProtectedRouteNew path="/dashboard" component={DashboardanNewMain} />
          <ProtectedRouteNew path="/wallets" component={WalletNew} />
          <ProtectedRouteNew
            path="/UserSessionHistory"
            component={UserSessionHistory}
          />
          <ProtectedRouteNew path="/viewall" component={Viewallwork} />
          <ProtectedRouteNew
            path="/UserSessionHistoryDetails"
            component={UserSessionHistoryDetails}
          />

          <ProtectedRouteNew
            path="/editphotouserDetails"
            component={editphotouserDetails}
          />
          <ProtectedRouteNew
            path="/PhotoGrapherSessionHistory"
            component={PhotoGrapherSessionHistory}
          />
          <ProtectedRouteNew
            path="/EditPhotoRequest"
            component={EditPhotoRequest}
          />
          <ProtectedRouteNew path="/Receveived" component={ReceivedPhotos} />
          <ProtectedRouteNew
            path="/ReceivedPhotoDetails"
            component={ReceivedPhotoDetails}
          />

          <ProtectedRouteNew path="/Submitshoots" component={Submitshoots} />

          <ProtectedRouteNew
            path="/AdminUploadedits"
            component={AdminUploadedits}
          />

          <ProtectedRouteNew
            path="/PhotoSessionSessionHistoryDetails"
            component={PhotoSessionSessionHistoryDetails}
          />
          <ProtectedRouteNew
            path="/SupportMessage"
            component={SupportMessageNew}
          />
          <ProtectedRouteNew path="/Profile" component={ProfileNew} />
          <ProtectedRouteNew path="/Promos" component={PromosMew} />

          {/* <Route
            path="/AdminDashboard"
            render={(props) => (
              <DashboardNew {...props}>
                <AdminDashboard {...props} />
              </DashboardNew>
            )}
          /> */}

          {/* <ProtectedRoute exact component={Dashboard} path="/dashboard" /> */}
          {/* <ProtectedRoute exact component={Delivery} path="/delivery" /> */}
          {/* <ProtectedRoute exact component={Looking} path="/looking" /> */}
          {/* <ProtectedRoute exact component={Profile} path="/profile" /> */}
          {/* <ProtectedRoute exact component={Promos} path="/promos" /> */}
          {/* <ProtectedRoute component={TransEat} path="/trans_eat" /> */}
          {/* <ProtectedRoute component={Trips} path="/trips" /> */}
          {/* <ProtectedRoute exact component={Wallet} path="/wallet" /> */}
          {/* <ProtectedRoute component={Support} path="/support" /> */}
          {/* <ProtectedRoute component={FoodOrderHistory} path="/eats" /> */}
          {/* <ProtectedRoute exact component={CourierHistory} path="/couriers" /> */}
          <GuestRoute exact component={Homepage} path="/" />
          {/* 
          <GuestRoute exact component={About} path="/about" /> */}
          {/* <GuestRoute exact component={Services} path="/service" /> */}
          {/* <GuestRoute exact component={Contact} path="/contact" /> */}
          {/* <GuestRoute exact component={How_it_works} path="/How_it_works" /> */}
          {/* <GuestRoute exact component={Blog} path="/blog" /> */}
          {/* <GuestRoute component={Register} path="/register" /> */}
          {/* <GuestRoute component={Login} path='/login' /> */}
          <GuestRoute component={SignUp} path="/SignUp" />
          <GuestRoute
            component={PhotoGrapherLoginNew}
            path="/PhotoGrapherLoginNew"
          />
          <GuestRoute component={ClientRegister} path="/ClientRegister" />

          {/* <GuestRoute component={PhotoSignUp} path="/photographer" /> */}

          {/* <GuestRoute component={Login} path="/Login" /> */}
          <GuestRoute component={Portfolio} path="/Portfolio" />
          <GuestRoute component={Purpose} path="/Purpose" />
          <GuestRoute
            component={PhotographersRegister}
            path="/PhotographersRegister"
          />

          <GuestRoute component={ForgotPassword} path="/forgot_password" />

          <Route path="*" component={ErrorPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default BaseRoute;
