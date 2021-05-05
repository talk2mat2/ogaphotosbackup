/* eslint-disable prettier/prettier */
import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ResponsiveDrawer from "./ResponsiveDrawer";
import { Helmet } from "react-helmet";
function ProtectedRoute({ component: Component, ...rest }) {
  // const auth = useSelector((state) => state.auth)

  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  const history = useHistory();
  //   React.useEffect(() => {
  //     if (!userData) {
  //       history.push("/SignUp");
  //     }
  //   }, [userData]);
  return (
    <Route
      {...rest}
      render={(props) =>
        // auth.info
        CurrentUser ? (
          <ResponsiveDrawer>
            <Component {...props} />
          </ResponsiveDrawer>
        ) : (
          <Redirect to="/SignUp" />
        )
      }
    />
  );
}

export default ProtectedRoute;
