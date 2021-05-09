/* eslint-disable prettier/prettier */
import React from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import ScrollToTop from "../ScrollToTop";

function GuestRoute({ component: Component, ...rest }) {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  const location = useLocation();
  const history = useHistory();
  React.useEffect(() => {
    if (userData) {
      history.push("/dashboard");
    }
  }, [userData]);

  React.useEffect(() => {
    console.log(location.pathname);
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {location.pathname !== "/" ? (
            <ScrollToTop>
              <Component {...props} />
            </ScrollToTop>
          ) : (
            <Component {...props} />
          )}
        </>
      )}
    />
  );
}

export default GuestRoute;
