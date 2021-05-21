import React from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const DashboardanNewMain = (props) => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  return (
    <React.Fragment>
      {userData.isAdmin ? (
        <AdminDashboard {...props} />
      ) : (
        <UserDashboard {...props} />
      )}
    </React.Fragment>
  );
};

export default DashboardanNewMain;
