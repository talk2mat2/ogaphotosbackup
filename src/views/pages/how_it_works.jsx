/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { Scripts } from "../../script";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import "./SignupStyle.css";

const How_it_works = () => {
  useEffect(() => {
    Scripts.forEach((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);
  return (
    <div>
      <Header />
      <div
        // className="wrapper dark-wrapper inverse-text"
        style={{ backgroundColor: "#FFA07A", marginBottom: "20px" }}
      >
        <div className="container inner">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2
                style={{ paddingTop: "50px" }}
                className="section-title section-title-upper text-center"
              >
                <span style={{ color: "#F0E68C" }}>How it</span> Works{" "}
              </h2>
              {/* <p class="text-center">How It Works</p> */}
              <div className="space40" />
              <div className="row d-flex align-items-center">
                <div className="col-md-6 order-md-2 text-center">
                  <figure>
                    <img className="octagon" src="media/model5.jpg" alt="" />
                  </figure>
                </div>
                {/*/column */}
                <div className="space20 d-block d-sm-none" />
                <div className="col-md-6">
                  <h3 className="WhiteText">STEP 1</h3>
                  <p className="lead mb-0 WhiteText">
                    Get The best photographer/ videographer at your disposal,
                    any time, any day. All you need to do is book an appointment
                    with us, and a Photographer/Videographer will be assigned to
                    you
                  </p>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
              <div className="space20 d-none d-md-block" />
              <div className="space50 d-md-none" />
              <div className="row d-flex align-items-center">
                <div className="col-md-6 text-center">
                  <figure>
                    <img className="octagon" src="media/model4.jpg" alt="" />
                  </figure>
                </div>
                {/*/column */}
                <div className="space20 d-block d-sm-none" />
                <div className="col-md-6">
                  <h3 className="WhiteText">STEP 2</h3>
                  <p className="lead mb-0 WhiteText">
                    {" "}
                    Trust us to arrive with our gadgets, indoors or Outdoors,
                    Our Creatives are ready to give you the best of experience.
                  </p>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
              <div className="space20 d-none d-md-block" />
              <div className="space50 d-md-none" />
              <div className="row d-flex align-items-center">
                <div className="col-md-6 order-md-2 text-center">
                  <figure>
                    <img
                      className="octagon"
                      src="media/group models.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                {/*/column */}
                <div className="space20 d-block d-sm-none" />
                <div className="col-md-6">
                  <h3 className="WhiteText">STEP 3</h3>
                  <p className="lead mb-0 WhiteText">
                    Time is important to us as it is to you, Withine 3 working
                    days, your work is ready in all required and desired
                    formats, soft/hard copy, diligently edited and perfected
                    fory our memories
                  </p>
                  <a
                    className="tp-caption tp-static-layer btn btn-full-rounded btn-l btn-white scroll"
                    data-x="center"
                    data-y="middle"
                    data-voffset="['130','130','130','130']"
                    data-width="['auto','auto','auto','auto']"
                    data-textalign="['center','center','center','center']"
                    data-frames='[{"delay":2000,"speed":1200,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-startslide={0}
                    data-endslide={3}
                    data-responsive="on"
                    data-responsive_offset="on"
                    style={{
                      zIndex: 9,
                      marginTop: "20px",
                      backgroundColor: "rgb(0, 162, 149)",
                      color: "#ffff",
                    }}
                    href="sign_up.html"
                  >
                    Get Started
                  </a>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      <Footer />
    </div>
  );
};

export default How_it_works;
