import React, { useState } from "react";
import { axios } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { SYNCUSERDATA } from "../../redux/action";

const PromosMew = () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setisloading] = React.useState(false);
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  const token = CurrentUser && CurrentUser.token;
  const [amount, setAmount] = React.useState(0);
  const dispatch = useDispatch();
  const [showSuccess, setshowSuccess] = useState(false);

  return (
    <div className="page-content">
      <div className="main-wrapper">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div
              className="card table-widget"
              style={{ transition: "height 1s ease" }}
            >
              <div className="card-body" style={{ minHeight: "400px" }}>
                <h5 className="card-title">Promos</h5>
                <div style={{ margin: "40px" }}>
                  <p>
                    no promos right now
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="card stat-widget">
              <div className="card-body " style={{ minHeight: "300px" }}>
                <h5 className="card-title">Recent Promos</h5>
                <div style={{ margin: "2px" }}>
                  <p>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromosMew;
