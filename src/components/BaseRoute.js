/* eslint-disable import/first */
/* eslint-disable prettier/prettier */
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
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
// import PhotographersRegister from "../views/pages/PhotographersRegister";
const PhotographersRegister = lazy(() =>
  import("../views/pages/PhotographersRegister")
);

function BaseRoute() {
  return (
    <Router>
      <ScrollToTop>
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
              <p>LOADING..</p>
              <CircularProgress />
            </div>
          }
        >
          <Switch>
            <ProtectedRoute exact component={Dashboard} path="/dashboard" />
            {/* <ProtectedRoute exact component={Delivery} path="/delivery" /> */}
            <ProtectedRoute exact component={Looking} path="/looking" />
            <ProtectedRoute exact component={Profile} path="/profile" />
            <ProtectedRoute exact component={Promos} path="/promos" />
            <ProtectedRoute component={TransEat} path="/trans_eat" />
            <ProtectedRoute component={Trips} path="/trips" />
            <ProtectedRoute exact component={Wallet} path="/wallet" />
            <ProtectedRoute component={Support} path="/support" />
            <ProtectedRoute component={FoodOrderHistory} path="/eats" />
            <ProtectedRoute exact component={CourierHistory} path="/couriers" />
            <GuestRoute exact component={Homepage} path="/" />
            <GuestRoute exact component={About} path="/about" />
            {/* <GuestRoute exact component={Services} path="/service" /> */}
            <GuestRoute exact component={Contact} path="/contact" />
            <GuestRoute exact component={How_it_works} path="/How_it_works" />
            {/* <GuestRoute exact component={Blog} path="/blog" /> */}
            <GuestRoute component={Register} path="/register" />
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
            <GuestRoute
              component={PhotographersRegister}
              path="/PhotographersRegister"
            />

            <GuestRoute component={ForgotPassword} path="/forgot_password" />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
}

export default BaseRoute;
