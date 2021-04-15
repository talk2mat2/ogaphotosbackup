/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { Scripts } from "../../script";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Portfolio = () => {
  // useEffect(() => {
  //   Scripts.forEach((item) => {
  //     const script = document.createElement("script");
  //     script.src = item.src;
  //     script.async = true;
  //     document.body.appendChild(script);
  //   });
  // }, []);

  useEffect(() => {
    window.addEventListener("load", (event) => {
      Scripts.forEach((item) => {
        const script = document.createElement("script");
        script.src = item.src;
        script.async = "";
        document.body.appendChild(script);
      });
    });
  });
  return (
    <div>
      <Header />
      <section id="home" className="pt-0 mt-0">
        <div
          className="wrapper image-wrapper bg-image inverse-text"
          data-image-src="media/about_bg.jpg"
        >
          <div className="container inner pt-120 pb-120 text-center">
            <h1 className="heading mb-0">Latest Works </h1>
          </div>
          {/* /.container */}
        </div>
      </section>
      <div
      // className="wrapper dark-wrapper inverse-text"
      >
        <div className="container inner">
          <h2 className="section-title section-title-upper text-center">
            Selected Works
          </h2>
          <div className="space20" />
          <div
            id="cube-grid-large-filter"
            className="cbp-filter-container text-center"
          >
            <div
              data-filter="*"
              className="cbp-filter-item-active cbp-filter-item"
            >
              All
            </div>
            <div data-filter=".cat1" className="cbp-filter-item">
              Family
            </div>
            <div data-filter=".cat2" className="cbp-filter-item">
              Wedding
            </div>
            <div data-filter=".cat3" className="cbp-filter-item">
              Personal
            </div>
            <div data-filter=".cat4" className="cbp-filter-item">
              corporate
            </div>
            <div data-filter=".cat5" className="cbp-filter-item">
              Commercials 5
            </div>
          </div>
          <div className="clearfix" />
          <div className="space20" />
          <div id="cube-grid-large" className="cbp light-gallery">
            <div className="cbp-item cat1 cat5">
              <figure className="overlay overlay2">
                <a href="media/wedding1.jpg" data-sub-html="#caption1">
                  <img src="media/wedding1.jpg" alt="" />
                  <div id="caption1" className="d-none">
                    {/* <p>Cras mattis consectetur purus sit amet fermentum.</p> */}
                  </div>
                </a>
              </figure>
            </div>
            {/*/.cbp-item */}
            <div className="cbp-item cat2">
              <figure className="overlay overlay2">
                <a href="media/model1.jpg">
                  <img src="media/model1.jpg" alt="" />
                </a>
              </figure>
            </div>
            {/*/.cbp-item */}
            <div className="cbp-item cat2 cat3">
              <figure className="overlay overlay2">
                <a href="media/birthday1.jpg" data-sub-html="#caption2">
                  <img src="media/birthday1.jpg" alt="" />
                  <div id="caption2" className="d-none">
                    {/* <p>Nulla vitae elit libero, a pharetra augue.</p> */}
                  </div>
                </a>
              </figure>
            </div>
            {/*/.cbp-item */}
            <div className="cbp-item cat1 cat5">
              <figure className="overlay overlay2">
                <a href="media/corporate1.jpg">
                  <img src="media/corporate1.jpg" alt="" />
                </a>
              </figure>
            </div>
            {/*/.cbp-item */}
            <div className="cbp-item cat5 cat4">
              <figure className="overlay overlay2">
                <a href="media/model2.jpg">
                  <img src="media/model2.jpg" alt="" />
                </a>
              </figure>
            </div>
            {/*/.cbp-item */}
            {/*/.cbp-item */}
            {/*/.cbp-item */}
            {/*/.cbp-item */}
          </div>
          {/*/.cbp */}
        </div>
        {/* /.container */}
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
