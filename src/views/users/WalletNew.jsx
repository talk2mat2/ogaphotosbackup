import React, { useState } from "react";
import { axios } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { SYNCUSERDATA } from "../../redux/action";

const WalletNew = () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setisloading] = React.useState(false);
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  const token = CurrentUser && CurrentUser.token;
  const [amount, setAmount] = React.useState(0);
  const dispatch = useDispatch();
  const [showSuccess, setshowSuccess] = useState(false);
  function numberWithCommas(x) {
    return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleUpdateWallet = React.useCallback(async (transaction_id) => {
    console.log("called");
    //_id is photographers id
    // setConfirmAgreeVisible(false);
    // setPhotoDetails(false);
    if (!transaction_id) {
      return null;
    }
    // /bookSession
    setisloading(true);
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/fundWallet`,
        {
          transaction_id: transaction_id,
        },
        { headers: { authorization: token } }
      )
      .then((res) => {
        console.log(res.data);
        setisloading(false);
        setshowSuccess(true);
        dispatch(SYNCUSERDATA(res.data.userData));
      })
      .catch((err) => {
        setisloading(false);
        alert("An error occured");
        if (err.response) {
          console.log(err.response.data.message);
          alert(err.response.data.message);
        }
        console.log(err);
      });
    //api post request to book appointment with drivers id
  }, []);
  const config = {
    public_key: "FLWPUBK_TEST-e96ca53411ac8244d05c06677fca3509-X",
    tx_ref: new Date().getTime() + "-" + userData._id,
    amount: parseFloat(amount),
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userData.Email,
      phonenumber: userData.mobile,
      name: userData.fname,
    },
    customizations: {
      title: "Update wallet",
      description: "Payment for photowallet",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  // const handleClose = () => {
  //   setshowSuccess(false);
  //   history.push("/");
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 2000);
  // };
  const PayByflutterWave = async () => {
    await handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
        if (response.status === "successful") {
          console.log(response);
          // handleSuccess();
          handleUpdateWallet(response.transaction_id);
        }
      },
      onClose: () => {},
    });
  };
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
                <h5 className="card-title">My Wallet</h5>
                <h3 style={{ margin: "40px" }}>Current Ballance : 500 Naira</h3>
                <div style={{ margin: "40px" }}>
                  <button
                    onClick={() => {
                      setAmount(0);
                      setOpen(!open);
                    }}
                    className="btn btn-danger m-t-xs"
                    type="button"
                  >
                    fund wallet
                  </button>
                </div>
                {open ? (
                  <div
                    style={{
                      width: "50%",

                      margin: "40px",
                    }}
                  >
                    <p>NGN {numberWithCommas(amount)}</p>
                    <input
                      id="floatingInput"
                      className="form-control"
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                      value={amount}
                      style={{ width: "100%" }}
                      type="number"
                      name="email"
                      placeholder="Enter Amount greater than 1000"
                      required
                    />
                    <div style={{ height: "9px" }} />
                    <button
                      disabled={!amount || amount < 500}
                      onClick={() => {
                        setOpen(false);
                        PayByflutterWave();
                      }}
                      type="button"
                      className="btn btn-secondary"
                    >
                      Proceed
                    </button>
                  </div>
                ) : null}
                <div style={{ margin: "40px" }}>
                  <p>
                    funds in wallet can be used for booking purposes
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="card stat-widget">
              <div className="card-body " style={{ minHeight: "300px" }}>
                <h5 className="card-title">Recent Fundings</h5>
                <div style={{ margin: "2px" }}>
                  <p>
                    Recent Successful fundings
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

export default WalletNew;
