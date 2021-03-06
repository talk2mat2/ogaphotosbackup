/* eslint-disable prettier/prettier */
import React from "react";
import BaseRoute from "./components/BaseRoute";
import { useSelector } from "react-redux";
import Homepage from "./views/pages/Homepage";
import { Helmet } from "react-helmet";
// import About from "./views/pages/About";
// import Portfolio from "./views/pages/portfolio";
// import How_it_works from "./views/pages/how_it_works";
// import SignUp from "./views/pages/Signup";
// import Contact from "./views/pages/ContactPage";
// import { Scripts } from "./script";
// import './style.css'
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;

  // React.useEffect(()=>{
  //   OneSignal.push(function() {
  //     OneSignal.init({
  //       appId: "6419071e-2c4d-43b0-906c-3704961722e1",
  //       notifyButton: {
  //         enable: false,
  //       },
  //     });
  //     OneSignal.showNativePrompt();
  //   });

  // },[])

  React.useEffect(() => {
    if (userData) {
      OneSignal.push(function () {
        OneSignal.setExternalUserId(userData._id);
      });
    } else {
      OneSignal.push(function () {
        OneSignal.removeExternalUserId((results) => console.log(results));
      });
    }
  }, [userData]);

  return (
    <Router>
      <BaseRoute />
      {/* <AuthLoading> */}
      {/* <BaseRoute /> */}
      {/* <SignUp />
        <About />
        
        <Contact /> */}
      {/* </AuthLoading> */}
    </Router>
  );
}

export default App;
