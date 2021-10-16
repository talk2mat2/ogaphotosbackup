/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import Sliders from "../../components/Sliders";
import MenuIcon from "@material-ui/icons/Menu";
import { Helmet } from "react-helmet";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import MeetOurPhoto from "./MeetOurPhoto";
import Features from "./Features";
import NaijaStates from "naija-state-local-government";
import styled from "styled-components";

const Listing = styled.ul`
  margin-top: 20px;
  // display: flex;
  // flex-direction: row;
  width: 200px;
  // flex-wrap: wrap;
  align-items: center;
  padding: 0px;
  align-items: center;
  margin: 40px;
  a {
    color: inherit;
  }
  a :hover {
    color: inherit;
  }

  li {
    padding: 0px;
    list-style: none;
    font-size: 17px;
    width: 100%;
    margin: 10px;
    text-align: left;
  }

  @media (max-width: 630px) {
    margin: 5px;
    li {
      font-size: 14px;
    }
  }
`;
const LatestWorks = [
  "url(assets/img/gallery/gallery-list/gallery-list-1.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-2.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-3.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-4.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-5.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-6.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-7.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-8.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-9.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-10.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-11.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-13.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-14.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-15.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-17.jpg)",
  "url(assets/img/gallery/gallery-list/gallery-list-18.jpg)",
  "url(assets/img/gallery/gallery-list/20.jpg)",
  "url(assets/img/gallery/gallery-list/21.jpg)",
  "url(assets/img/gallery/gallery-list/22.jpg)",
  "url(assets/img/gallery/gallery-list/23.jpg)",
  "url(assets/img/gallery/gallery-list/24.jpg)",
  "url(assets/img/gallery/gallery-list/25.jpg)",
  "url(assets/img/gallery/gallery-list/26.jpg)",
  "url(assets/img/gallery/gallery-list/27.jpg)",
  "url(assets/img/gallery/gallery-list/28.jpg)",
  "url(assets/img/gallery/gallery-list/29.jpg)",
  "url(assets/img/gallery/gallery-list/30.jpg)",
  "url(assets/img/gallery/gallery-list/31.jpg)",
  "url(assets/img/gallery/gallery-list/32.jpg)",
  "url(assets/img/gallery/gallery-list/33.jpg)",
  "url(assets/img/gallery/gallery-list/34.jpg)",
  "url(assets/img/gallery/gallery-list/35.jpg)",

  "url(assets/img/gallery/gallery-list/37.jpg)",
  "url(assets/img/gallery/gallery-list/38.jpg)",
  "url(assets/img/gallery/gallery-list/40.jpg)",
  "url(assets/img/gallery/gallery-list/41.jpg)",
  "url(assets/img/gallery/gallery-list/42.jpg)",
  "url(assets/img/gallery/gallery-list/43.jpg)",
  "url(assets/img/gallery/gallery-list/44.jpg)",
  "url(assets/img/gallery/gallery-list/45.jpg)",
  "url(assets/img/gallery/gallery-list/46.jpg)",

 
];

const Homepage = () => {
  const [showmenu, setShowmenu] = useState(null);

  const handleOpenMenu = () => {
    if (showmenu === null) {
      setShowmenu("openNav");
    } else {
      setShowmenu(null);
    }
  };

  const Mapstate = () => {
    return NaijaStates.all()
      .slice(0, 9)
      .map((xx) => (
        <Link
          to={{ pathname: "/bestphotographers", state: { Data: xx.state } }}
        >
          <li value={xx.state}>{xx.state} photographers</li>
        </Link>
      ));
  };
  const Mapstate2 = () => {
    return NaijaStates.all()
      .slice(9, 19)
      .map((xx) => (
        <Link
          to={{ pathname: "/bestphotographers", state: { Data: xx.state } }}
        >
          <li value={xx.state}>{xx.state} photographers</li>
        </Link>
      ));
  };
  const Mapstate3 = () => {
    return NaijaStates.all()
      .slice(19, 29)
      .map((xx) => (
        <Link
          to={{ pathname: "/bestphotographers", state: { Data: xx.state } }}
        >
          <li value={xx.state}>{xx.state} photographers</li>
        </Link>
      ));
  };
  const Mapstate4 = () => {
    return NaijaStates.all()
      .slice(29, 36)
      .map((xx) => (
        <Link
          to={{ pathname: "/bestphotographers", state: { Data: xx.state } }}
        >
          <li value={xx.state}>{xx.state} photographers</li>
        </Link>
      ));
  };

  const MapLatestWorks = (LatestWorks) => {
    return LatestWorks.map((url) => (
      <div className="isotope-item iso-height-1">
        {/* Begin gallery list item */}
        <div className="gallery-list-item">
          {/* Begin gallery list item image */}
          <div className="gl-item-image-wrap">
            {/* Begin gallery list item image inner */}
            <a href="/#" className="gl-item-image-inner">
              <div
                className="gl-item-image bg-image"
                style={{
                  backgroundImage: url,
                  backgroundPosition: "50% 50%",
                }}
              />
              <span className="gl-item-image-zoom" />
            </a>
            {/* End gallery list item image inner */}
            {/* Begin gallery list item meta */}
            <ul className="gli-meta">
              {/* <li>
												<div class="img-count" title="Image count"><i class="fas fa-camera"></i> 32</div>
											</li> */}
              <li>
                {/* Begin favorite button */}
                <div className="favorite-btn">
                  <div className="fav-inner">
                    <div className="icon-heart">
                      <span className="icon-heart-empty" />
                      <span className="icon-heart-filled" />
                    </div>
                  </div>
                  <div className="fav-count">13</div>
                </div>
                {/* End favorite button */}
              </li>
            </ul>
            {/* End gallery list item meta */}
          </div>
          {/* End gallery list item image */}
          {/* Begin gallery list item info */}
          <div className="gl-item-info">
            <div className="gl-item-caption">
              <h2 className="gl-item-title">
                <a href="/#">Ogaphoto</a>
              </h2>
              <span className="gl-item-category">
                <a href="/#">Gallery</a>,<a href="/#"></a>
              </span>
            </div>
          </div>
          {/* End gallery list item info */}
        </div>
        {/* End gallery list item */}
      </div>
    ));
  };
  return (
    <div>
      {/* <Header /> */}
      <Helmet>
        <link
          rel="stylesheet"
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
        />

        <script src="/assets/vendor/jquery.mousewheel.min.js"></script>

        <script src="/assets/vendor/ytplayer/js/jquery.mb.YTPlayer.min.js"></script>

        <script src="/assets/vendor/lightgallery/js/lightgallery-all.min.js"></script>

        <script src="/assets/js/theme.js"></script>

        <script src="/assets/demo-panel/js/demo-panel.js"></script>
        <script src="/assets/demo-panel/js/styleswitch.js"></script>
      </Helmet>
      <div>
        {/* BEGIN DEMO PANEL (FOR DEMO SITE ONLY!) */}
        <Header />
        <div id="body-content">
          <section id="tt-intro" className="slideshow-intro">
            <div className="tt-intro-inner">
              <div className="gl-carousel-wrap no-padding">
                <div
                  className="owl-carousel cc-height-5 cursor-grab dots-right bg-dark"
                  data-items={1}
                  data-loop="true"
                  data-nav="true"
                  data-nav-speed={500}
                  data-dots-speed={500}
                  data-autoplay="true"
                  data-autoplay-timeout={8000}
                  data-autoplay-speed={500}
                  data-autoplay-hover-pause="true"
                >
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Element cover */}
                    <span className="cover bg-transparent-3-dark" />
                    {/* cc image */}
                    <div
                      className="cc-image bg-image"
                      style={{
                        backgroundImage: "url(assets/img/intro/intro-10.jpg)",
                        backgroundPosition: "50% 50%",
                      }}
                    />

                    <div className="intro-caption caption-animate intro-caption-xxlg center-left">
                      <h1 className="intro-title">Ogaphoto</h1>
                      <h2 className="intro-subtitle">The Best Photographers</h2>
                      <p className="intro-description max-width-650">
                        Amazing, vetted photographers at your fingertips, in
                        <br />
                        real time, based on your need. We even take last minute
                        bookings. Once requested, your photographer gets in
                        touch with you in 30 mins and starts working with you.
                      </p>
                      <div className="margin-top-30">
                        <a
                          href="/Purpose"
                          className="btn btn-primary margin-top-5 margin-right-10"
                          target="_blank"
                        >
                          Hire a photographer!
                        </a>
                        <a
                          href="/Purpose"
                          className="btn btn-white-bordered margin-top-5"
                        >
                          Discover More
                        </a>
                      </div>
                    </div>
                    {/* End intro caption */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Element cover */}
                    <span className="cover bg-transparent-3-dark" />
                    {/* cc image */}
                    <div
                      className="cc-image bg-image"
                      style={{
                        backgroundImage: "url(assets/img/intro/intro-11.jpg)",
                        backgroundPosition: "50% 50%",
                      }}
                    />

                    <div className="intro-caption caption-animate intro-caption-xxlg center-left">
                      <h2 className="intro-title">
                        Amazing <br />
                        Photos
                      </h2>
                      <h2 className="intro-subtitle">Wherever you are</h2>
                      <p className="intro-description max-width-650">
                        Capture the magic of your vacation with a travel
                        photoshoot by booking in advance, store your vacation
                        photos and videos as they are taken, create lasting trip
                        memories.
                      </p>
                      <div className="margin-top-30">
                        <a
                          href="/Purpose"
                          className="btn btn-primary margin-top-5 margin-right-10"
                          target="_blank"
                        >
                          Hire a photographer!
                        </a>
                        <a
                          href="/Purpose"
                          className="btn btn-white-bordered margin-top-5"
                        >
                          Discover More
                        </a>
                      </div>
                    </div>
                    {/* End intro caption */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Element cover */}
                    <span className="cover bg-transparent-3-dark" />
                    {/* cc image */}
                    <div
                      className="cc-image bg-image"
                      style={{
                        backgroundImage: "url(assets/img/intro/intro-12.jpg)",
                        backgroundPosition: "50% 50%",
                      }}
                    />

                    <div className="intro-caption caption-animate intro-caption-xxlg center-left">
                      <h1 className="intro-title">Convenient</h1>
                      <h2 className="intro-subtitle">Ready in 72 Hours</h2>
                      <p className="intro-description max-width-650">
                        Retouched Photos are ready in Record Time! Within 3
                        working days of your finished shoot, your photographers
                        edited photos and videos will be delivered via the
                        Ogaphoto App, with easy access to one-click sharing or
                        downloads. *Readiness subject to quantity of photos or
                        length of video*
                      </p>
                      <div className="margin-top-30">
                        <a
                          href="/Purpose"
                          className="btn btn-primary margin-top-5 margin-right-10"
                          target="_blank"
                        >
                          Hire a photographer!
                        </a>
                        <a
                          href="/Purpose"
                          className="btn btn-white-bordered margin-top-5"
                        >
                          Discover More
                        </a>
                      </div>
                    </div>
                    {/* End intro caption */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Element cover */}
                    <span className="cover bg-transparent-3-dark" />
                    {/* cc image */}
                    <div
                      className="cc-image bg-image"
                      style={{
                        backgroundImage: "url(assets/img/intro/intro-13.jpg)",
                        backgroundPosition: "50% 50%",
                      }}
                    />

                    <div className="intro-caption caption-animate intro-caption-xxlg center-left">
                      <h1 className="intro-title">Fixed Price</h1>
                      <h2 className="intro-subtitle">Photography</h2>
                      <p className="intro-description max-width-650">
                        Ogaphoto gives you stunning visuals for every budget,
                        with no hidden costs or fees, you get what you pay for ,
                        We also provide after shoot support and access to
                        storage till you are ready to receive them
                      </p>
                      <div className="margin-top-30">
                        <a
                          href="/Purpose"
                          className="btn btn-primary margin-top-5 margin-right-10"
                          target="_blank"
                        >
                          Hire a photographer!
                        </a>
                        <a
                          href="/Purpose"
                          className="btn btn-white-bordered margin-top-5"
                        >
                          Discover More
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* End carousel item */}
                </div>
                {/* End content carousel */}
              </div>
              {/* /.gl-carousel-wrap */}
            </div>
            {/* /.tt-intro-inner */}
          </section>

          <section id="about-me-section">
            <div className="about-me-inner">
              <div className="split-box about-me">
                <div className="container-fluid">
                  <div className="row">
                    <div className="row-lg-height">
                      <div
                        className="col-lg-5 col-lg-height split-box-image no-padding bg-image"
                        style={{
                          backgroundImage: "url(assets/img/misc/me-2.jpg)",
                          backgroundPosition: "50% 50%",
                        }}
                      >
                        <div className="sbi-height padding-height-80" />
                      </div>

                      <div className="col-lg-7 col-lg-height col-lg-middle no-padding">
                        <div
                          className="full-cover for-light-style bg-gray-3 bg-image"
                          style={{
                            backgroundImage:
                              "url(assets/img/pattern/bg-pattern-1-light.png)",
                            backgroundPosition: "50% 50%",
                          }}
                        />
                        <div
                          className="full-cover for-dark-style bg-gray-3 bg-image"
                          style={{
                            backgroundImage:
                              "url(assets/img/pattern/bg-pattern-1-dark.png)",
                            backgroundPosition: "50% 50%",
                          }}
                        />

                        <div className="split-box-content sb-content-right">
                          <div className="tt-heading">
                            <div className="tt-heading-inner">
                              <h1 className="tt-heading-title">About</h1>
                              {/* <div className="tt-heading-subtitle">
                                About Ogaphoto and what we do
                              </div> */}
                              <hr className="hr-short" />
                            </div>
                            {/* /.tt-heading-inner */}
                          </div>
                          {/* End tt-heading */}
                          <div className="margin-top-30">
                            <p>
                              <strong> Ogaphoto</strong> is the widest on-demand
                              photography network in Nigeria. With the largest
                              capacity of experienced local professionals with
                              high grade equipment, we can tackle any size of
                              project and craft your ideas and vision into
                              amazing visuals. Build your personal &
                              professional brand or business with quality images
                              and still stay within your budget.
                            </p>
                          </div>
                          <a
                            href="/#blog-list-section"
                            className="btn btn-primary margin-top-20 margin-right-20"
                          >
                            Read More
                          </a>
                      
                          <a
                            href="#contact-section"
                            className="btn btn-dark margin-top-20"
                          >
                            Get In Touch!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "80px" }} id="gallery-list-section">
            <div className="tt-heading tt-heading-lg padding-on text-center">
              <div className="tt-heading-inner tt-wrap">
                {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
                <h1 className="tt-heading-title">Recent Work</h1>
                <div className="tt-heading-subtitle">
                  Photo Projects from our past clients
                </div>
                <hr className="hr-short" />
              </div>
              {/* /.tt-heading-inner */}
            </div>
            {/* End tt-heading */}
            <div className="isotope-wrap">
              <div className="isotope col-4">
                <div className="isotope-items-wrap gli-colored gli-alter-4">
                  <div className="grid-sizer" />
                  {/* paste map latest works */}
                  {MapLatestWorks(LatestWorks)}
                </div>
                {/* End isotope items wrap */}
                {/* Begin isotope pagination 
						============================== */}
                {/* <div class="isotope-pagination">
							<div class="iso-load-more">
								<a class="btn btn-dark-bordered btn-lg" href="">View More <i class="fas fa-refresh"></i></a>
							</div>
						</div> */}
                {/* End isotope pagination */}
              </div>
              {/* End isotope */}
            </div>
            {/* /.isotope-wrap */}
          </section>
          {/* End gallery list section */}
          {/* ===========================
			///// Begin prices section /////
			============================ */}

          {/* End prices section */}
          {/* =================================
			///// Begin testimonials section /////
			================================== */}

          {/* pasted here start */}

          <section id="blog-list-section" className="blog-list-classic">
            {/* <h1 className="tt-heading-title" style={{ textAlign: "center" }}>
              How it Works
            </h1> */}
            <div className="tt-heading tt-heading-lg padding-on text-center">
              <div className="tt-heading-inner tt-wrap">
                {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
                <h1 className="tt-heading-title">How it Works</h1>

                <hr className="hr-short" />
                <p>Capture that memorable moments in three easy steps</p>
              </div>
              {/* /.tt-heading-inner */}
            </div>
            {/* <hr className="hr-short" /> */}
            <div style={{ height: "30px" }} />
            <div className="blog-list-inner tt-wrap">
              {" "}
              {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
              <div className="row no-margin">
                {/* Content column */}
                <div className="col-md-12 no-padding-left no-padding-right">
                  <div className="isotope-wrap">
                    {/* Begin isotope
								===================
								* Use class "gutter-1", "gutter-2" or "gutter-3" to add more space between items.
								* Use class "col-1", "col-2", "col-3", "col-4", "col-5" or "col-6" for columns.
								*/}
                    <div className="isotope col-3 gutter-3">
                      {/* Begin isotope items wrap 
									============================== */}
                      <div className="isotope-items-wrap no-margin">
                        {/* Grid sizer (do not remove!!!) */}
                        <div className="grid-sizer" />
                        {/* ===================== 
										/// Begin isotope item ///
										====================== */}
                        {/* End isotope item */}
                        {/* ===================== 
										/// Begin isotope item ///
										====================== */}
                        {/* End isotope item */}
                        {/* ===================== 
										/// Begin isotope item ///
										====================== */}
                        {/* End isotope item */}
                        {/* ===================== 
										/// Begin isotope item ///
										====================== */}
                        {/* End isotope item */}
                        {/* ===================== 
										/// Begin isotope item ///
										====================== */}
                        <div className="isotope-item">
                          {/* Begin blog list item */}
                          <article className="blog-list-item">
                            {/* Blog list item image */}
                            <a href="/#" className="bl-item-image">
                              <img src="/assets/img/gallery/gallery-list/36.jpg" alt="" />
                            </a>
                            {/* Begin blog list item info */}
                            <div className="bl-item-info">
                              <div className="bl-item-category"></div>

                              <h2>Step One:</h2>
                              <h4>
                                <b>Book an appointment</b>
                              </h4>

                              <div className="bl-item-meta"></div>
                              {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                              <div
                                className="bl-item-desc"
                                data-max-words={100}
                              >
                                Get The best photographer/ videographer at your
                                disposal, any time, any day. All you need to do
                                is book an appointment with us, and a
                                Photographer/Videographer will be assigned to
                                you
                              </div>

                              {/* Begin blog list item attributes */}

                              {/* End blog list item attributes */}
                            </div>
                            {/* End blog list item info */}
                          </article>
                          {/* End blog list item */}
                        </div>
                        {/* End isotope item */}
                        {/* ===================== 
										/// Begin isotope item ///
										====================== */}
                        <div className="isotope-item">
                          {/* Begin blog list item */}
                          <article className="blog-list-item">
                            {/* Blog list item image */}
                            <a href="/#" className="bl-item-image">
                              <img src="media/model4.jpg" alt="" />
                            </a>
                            {/* Begin blog list item info */}
                            <div className="bl-item-info">
                              <div className="bl-item-category"></div>

                              <h3 className='bl-item-title"'>
                                <b>Step Two</b>
                              </h3>
                              <h4>
                                <b>Take your photos</b>{" "}
                              </h4>

                              <div className="bl-item-meta"></div>
                              {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                              <div className="bl-item-desc">
                                * Your photographer will bring their
                                professional-grade equipment to you at the
                                chosen time and location and you can relax
                                knowing that you are in the hands of an
                                experienced creative. Trust us with both your
                                indoor, outdoor or even underwater shoots.
                              </div>

                              {/* Begin blog list item attributes */}

                              {/* End blog list item attributes */}
                            </div>
                            {/* End blog list item info */}
                          </article>
                          {/* End blog list item */}
                        </div>
                        {/* End isotope item */}
                        {/* ===================== 
										/// Begin isotope item ///
										====================== */}
                        <div className="isotope-item">
                          {/* Begin blog list item */}
                          <article className="blog-list-item">
                            {/* Blog list item image */}
                            <a href="/#" className="bl-item-image">
                              <img src="media/frame.jpg" alt="i" />
                            </a>
                            {/* Begin blog list item info */}
                            <div className="bl-item-info">
                              <h3>
                                <b>Step Three</b>
                              </h3>
                              <h4>
                                <b>Receive your work</b>
                              </h4>

                              <div className="bl-item-meta"></div>
                              {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                              <div
                                className="bl-item-desc"
                                data-max-words={200}
                              >
                                Your time is valuable and important to us, that
                                is why within 3 working days, your work is ready
                                in all required and desired formats, soft/hard
                                copy, diligently edited and perfected for your
                                memories.
                              </div>

                              {/* Begin blog list item attributes */}

                              {/* End blog list item attributes */}
                            </div>
                            {/* End blog list item info */}
                          </article>
                          {/* End blog list item */}
                        </div>
                        {/* End isotope item */}
                        {/* ===================== 
										/// Begin isotope item ///
										====================== */}
                        {/* End isotope item */}
                        {/* ===================== 
										/// Begin isotope item ///
										====================== */}
                        {/* End isotope item */}
                      </div>
                      {/* End isotope items wrap */}
                    </div>
                    {/* End isotope */}
                  </div>{" "}
                  {/* /.isotope-wrap */}
                  {/* End pagination */}
                </div>{" "}
                {/* /.col (Content column) */}
              </div>{" "}
              {/* /.row */}
            </div>{" "}
            {/* /.blog-list-inner */}
          </section>
          {/* End blog list section */}

          {/* pasted here end */}

          {/* pasted here specialist start */}

          <section>
            {/* Begin tt-heading 
				====================== 
				* Use class "padding-on" to enable heading paddings (useful if you use tt-heading as stand alone element).
				* Use class "text-center" or "text-right" to align tt-heading.
				* Use classes "tt-heading-xs", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set tt-heading size.
				*/}
            <div className="tt-heading tt-heading-lg padding-on">
              <div className="tt-heading-inner tt-wrap">
                {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
                <div className="row">
                  <div className="col-md-4">
                    <h1 className="tt-heading-title">Services &amp; Pricing</h1>
                    <div className="tt-heading-subtitle">
                      Please choose your package
                    </div>
                    <hr className="hr-short" />
                  </div>
                  {/* /.col */}
                  <div className="col-md-8">
                    <p>
                      Our pricing is designed to fit any budget regardless of
                      the type of project. Whether you need a studio, a
                      luxurious outdoor set up, or a simple background, we give
                      you the power to go wherever your creative path takes you
                    </p>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.tt-heading-inner */}
            </div>
            {/* End tt-heading */}
            <div className="prices-section-inner tt-wrap">
              {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
              {/* Begin price boxes container 
					================================= */}
              <div className="price-boxes-container">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    {/* Begin price box */}
                    <div className="price-box">
                      <div
                        className="pr-box price-heading bg-image"
                        style={{
                          backgroundImage:
                            "url(assets/img/misc/price-box-1.jpg)",
                        }}
                      >
                        <div className="price-heading-inner">
                          <i className="fas fa-umbrella" />
                          <h3 className="price-title">Studio</h3>
                          <div className="price-heading-text">
                            Studio Photo Session
                          </div>
                        </div>
                      </div>
                      <div className="pr-box price-box-price">
                        <div className="price">
                          <span className="price-currency">N</span>20
                          <span style={{ fontSize: "12px" }}>K</span>
                        </div>
                        {/* <div class="price-tenure">Per 1 Month</div> */}
                      </div>
                      <div className="pr-box price-features">
                        <ul className="list-unstyled">
                          <li>Studio space.</li>
                          <li>Photography backdrops.</li>
                          <li>Adjustable lighting equipment kits.</li>
                        </ul>
                      </div>
                      <div className="pr-box">
                        <a
                          href="/Purpose"
                          className="btn btn-price-box btn-dark btn-lg"
                        >
                          Hire a photographer
                        </a>
                        <a
                          href="/#"
                          className="btn btn-link btn-lg btn-block"
                        ></a>
                      </div>
                    </div>
                    {/* End price box */}
                  </div>
                  {/* /.col */}
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    {/* Begin price box (featured) */}
                    <div className="price-box price-box-featured">
                      <div
                        className="pr-box price-heading bg-image"
                        style={{
                          backgroundImage:
                            // "url(assets/img/misc/price-box-2.jpg)",
                            "url(assets/img/gallery/gallery-list/37.jpg)",
                        }}
                      >
                        <div className="price-heading-inner">
                          <i className="fas fa-tree" />
                          <h3 className="price-title">Outdoor</h3>
                          <div className="price-heading-text">
                            Outdoor Photo Session
                          </div>
                        </div>
                      </div>
                      <div className="pr-box price-box-price">
                        <div className="price">
                          <span className="price-currency">N</span>43
                          <span style={{ fontSize: "12px" }}>K</span>
                        </div>
                        {/* <div class="price-tenure">Per 6 Month</div> */}
                      </div>
                      <div className="pr-box price-features">
                        <ul className="list-unstyled">
                          <li>Multiple Locations</li>
                          <li>Digital & Hard Copy Files Included</li>
                          <li>Time Based</li>
                        </ul>
                      </div>
                      <div className="pr-box">
                        <a
                          href="/Purpose"
                          className="btn btn-price-box btn-dark btn-lg"
                        >
                          Hire a photographer
                        </a>
                        <a
                          href="/#"
                          className="btn btn-link btn-lg btn-block"
                        ></a>
                      </div>
                    </div>
                    {/* End price box */}
                  </div>
                  {/* /.col */}
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    {/* Begin price box */}
                    <div className="price-box">
                      <div
                        className="pr-box price-heading bg-image"
                        style={{
                          backgroundImage:
                            "url(assets/img/misc/price-box-3.jpg)",
                        }}
                      >
                        <div className="price-heading-inner">
                          <i className="fas fa-user" />
                          <h3 className="price-title">Personal</h3>
                          <div className="price-heading-text">
                            Personal Photo Session
                          </div>
                        </div>
                      </div>
                      <div className="pr-box price-box-price">
                        <div className="price">
                          <span className="price-currency">N</span>54
                          <span style={{ fontSize: "12px" }}>K</span>
                        </div>
                        {/* <div class="price-tenure">Per 1 Year</div> */}
                      </div>
                      <div className="pr-box price-features">
                        <ul className="list-unstyled">
                          <li>1-2 Locations</li>
                          <li>Digital & Hard Copy Files Included</li>
                          <li>Time Based</li>
                        </ul>
                      </div>
                      <div className="pr-box">
                        <a
                          href="/Purpose"
                          className="btn btn-price-box btn-dark btn-lg"
                        >
                          Hire a photographer
                        </a>
                        <a
                          href="/#"
                          className="btn btn-link btn-lg btn-block"
                        ></a>
                      </div>
                    </div>
                    {/* End price box */}
                  </div>
                  {/* /.col */}
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    {/* Begin price box */}
                    <div className="price-box">
                      <div
                        className="pr-box price-heading bg-image"
                        style={{
                          backgroundImage:
                            // "url(assets/img/misc/price-box-4.jpg)",
                            "url(assets/img/gallery/gallery-list/40.jpg)",
                        }}
                      >
                        <div className="price-heading-inner">
                          <i className="fas fa-gem" />
                          <h3 className="price-title">Wedding</h3>
                          <div className="price-heading-text">
                            Wedding Photo Session
                          </div>
                        </div>
                      </div>
                      <div className="pr-box price-box-price">
                        <div className="price">
                          <span className="price-currency">N</span>150
                          <span style={{ fontSize: "12px" }}>K</span>
                        </div>
                        {/* <div class="price-tenure">Per 1 Year</div> */}
                      </div>
                      <div className="pr-box price-features">
                        <ul className="list-unstyled">
                          <li>1-4 Locations</li>
                          <li>Digital & Hard Copy Files Included</li>
                          <li>Time Based</li>
                        </ul>
                      </div>
                      <div className="pr-box">
                        <a
                          href="/Purpose"
                          className="btn btn-price-box btn-dark btn-lg"
                        >
                          Hire a photographer
                        </a>
                        <a
                          href="/dashboard"
                          className="btn btn-link btn-lg btn-block"
                        ></a>
                      </div>
                    </div>
                    {/* End price box */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
                <div className="row margin-top-70 margin-auto max-width-800">
                  {/* <div className="col-md-12 text-center">
                    <p>
                      We also provide after shoot support and access to storage
                      till you are ready to receive them.
                    </p>
                  </div> */}
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* End price boxes container */}
            </div>
            {/* /.prices-section-inner */}
          </section>
          <section id="specialist" style={{ margin: "10px", marginBottom: 0 }}>
            <div className="tt-heading tt-heading-lg padding-on text-left">
              {/* <div className="tt-heading-inner tt-wrap"> */}
              {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
              {/* <h1 className="tt-heading-title">Specialists</h1> */}
              {/* <span>
                  <div className="tt-heading-subtitle">
                    Ogaphoto has local specialists for every kind of shoot or
                    video, and work with you to take your brand to the next
                    level.
                  </div>
                  <a
                    style={{ float: "right" }}
                    href="/Purpose"
                    className="btn btn-price-box btn-dark btn-lg"
                  >
                    Hire a photographer
                  </a>
                </span>
                <hr className="hr-short" />
              </div> */}
              {/* /.tt-heading-inner */}
            </div>
            {/* End tt-heading */}
            <div className="isotope-wrap">
              <div className="isotope col-3 gutter-3">
                <div className="isotope-items-wrap gli-alter-2 gli-frame">
                  {/* Grid sizer (do not remove!!!) */}
                  <div className="grid-sizer" />
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a href="/#" className="gl-item-image-inner">
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage: "url(media/family1.jpg)",

                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">203</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="/#">Family</a>
                          </h2>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a href="/#" className="gl-item-image-inner">
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage: "url(media/product.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">39</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="/#">Products</a>
                          </h2>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a href="/#" className="gl-item-image-inner">
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage: "url(media/events.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">49</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="/#">Events</a>
                          </h2>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a href="/#" className="gl-item-image-inner">
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage: "url(media/img_rr_02.jpg)",

                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">49</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="/#">Portrait</a>
                          </h2>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a href="/#" className="gl-item-image-inner">
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              backgroundImage: "url(media/graduation.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">85</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="/#">Graduation</a>
                          </h2>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                  {/* ===================== 
							/// Begin isotope item ///
							========================== 
							* If you use background image on isotope-item child element, then you need to use class "iso-height-1" or "iso-height-2" to set the item height. If you use simple image tag, then don't use height classes.
							*/}
                  <div className="isotope-item iso-height-1">
                    {/* Begin gallery list item */}
                    <div className="gallery-list-item">
                      {/* Begin gallery list item image */}
                      <div className="gl-item-image-wrap">
                        {/* Begin gallery list item image inner */}
                        <a href="/#" className="gl-item-image-inner">
                          <div
                            className="gl-item-image bg-image"
                            style={{
                              // backgroundImage: "url(media/estate.jpg)",
                              backgroundImage: "url(assets/img/gallery/gallery-list/30.jpg)",
                              backgroundPosition: "50% 50%",
                            }}
                          />
                          <span className="gl-item-image-zoom" />
                        </a>
                        {/* End gallery list item image inner */}
                        {/* Begin gallery list item meta */}
                        <ul className="gli-meta">
                          <li>
                            {/* Begin favorite button */}
                            <div className="favorite-btn">
                              <div className="fav-inner">
                                <div className="icon-heart">
                                  <span className="icon-heart-empty" />
                                  <span className="icon-heart-filled" />
                                </div>
                              </div>
                              <div className="fav-count">7</div>
                            </div>
                            {/* End favorite button */}
                          </li>
                        </ul>
                        {/* End gallery list item meta */}
                      </div>
                      {/* End gallery list item image */}
                      {/* Begin gallery list item info */}
                      <div className="gl-item-info">
                        <div className="gl-item-caption">
                          <h2 className="gl-item-title">
                            <a href="/#">Real Estate</a>
                          </h2>
                        </div>
                      </div>
                      {/* End gallery list item info */}
                    </div>
                    {/* End gallery list item */}
                  </div>
                  {/* End isotope item */}
                </div>

                {/* Begin isotope pagination 
						============================== */}
                {/* <div class="isotope-pagination">
							<div class="iso-load-more">
								<a class="btn btn-dark-bordered btn-lg" href="">View More <i class="fas fa-refresh"></i></a>
							</div>
						</div> */}
                {/* End isotope pagination */}
              </div>
              {/* End isotope */}
            </div>
            {/* /.isotope-wrap */}
          </section>
          <MeetOurPhoto />
          {/* pasted here specialist end */}
          <div style={{ height: "80px" }} />

          <div className="tt-heading tt-heading-lg padding-on text-center">
            <div className="tt-heading-inner tt-wrap">
              {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
              <h1 className="tt-heading-title">What People Are Saying</h1>

              <hr className="hr-short" />
            </div>
            {/* /.tt-heading-inner */}
          </div>
          <section
            id="testimonials-section"
            className="bg-dark bg-image-fixed"
            style={{
              backgroundImage: "url(assets/img/misc/misc-4.jpg)",
              backgroundPosition: "50% 50%",
            }}
          >
            {/* Element cover */}
            <span className="cover bg-transparent-7-dark" />
            <div className="testimonials-section-inner tt-wrap">
              {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
              {/* Begin testimonials carousel
					=================================
					* Use class "tm-hide-image" to hide testimonial image.
					* Use class "tm-center" or "tm-right" to align testimonials.
					*/}
              <div className="testimonials-carousel tm-center">
                {/* Begin tt-heading 
						====================== 
						* Use class "padding-on" to enable heading paddings (useful if you use tt-heading as stand alone element).
						* Use class "text-center" or "text-right" to align tt-heading.
						* Use classes "tt-heading-xs", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set tt-heading size.
						*/}
                {/* <div class="tt-heading tt-heading-lg text-center">
							<div class="tt-heading-inner tt-wrap">
								<h1 class="tt-heading-title text-white">Testimonials</h1>
								<div class="tt-heading-subtitle text-gray-3">What customers say</div>
								<hr class="hr-short">
							</div>
						</div> */}
                {/* End tt-heading */}
                {/* Begin content carousel (https://owlcarousel2.github.io/OwlCarousel2/)
						====================================================================
						* Use class "nav-outside" for outside nav (requires boxed layout).
						* Use class "nav-outside-top" for outside top nav (requires enough space at the top of the carousel).
						* Use class "nav-bottom-right" for bottom right nav.
						* Use class "nav-rounded" for rounded nav.
						* Use class "nav-light" to enable nav light style.
						* Use class "dots-outside" for outside dots (requires enough space at the bottom of the carousel).
						* Use class "dots-left", "dots-right" or "dots-center-right" to align dots.
						* Use class "dots-rounded" for rounded dots.
						* Use class "owl-mousewheel" to enable mousewheel support.
						* Use class "cursor-grab" to enable cursor grab icon (no effect on links!).
						* Use class "cc-hover-light", "cc-hover-dark" or "cc-hover-zoom" to enable carousel items hover effect.
						* Use class "cc-height-1", "cc-height-2", "cc-height-3", "cc-height-4", "cc-height-5", "cc-height-6" or "cc-height-full" to set carousel height (do not use with data-autoheight="true"!!!).
						* Use class "cc-height-m" to set full height for small screens (do not use with data-autoheight="true"!!!).
						================================================================
						* Available carousel data attributes:
								data-items="5".......................(items visible on desktop)
								data-tablet-landscape="4"............(items visible on mobiles)
								data-tablet-portrait="3".............(items visible on mobiles)
								data-mobile-landscape="2"............(items visible on tablets)
								data-mobile-portrait="1".............(items visible on tablets)
								data-loop="true".....................(true/false)
								data-margin="10".....................(space between items)
								data-center="true"...................(true/false)
								data-start-position="0"..............(item start position)
								data-animate-in="fadeIn".............(more animations: http://daneden.github.io/animate.css/)
								data-animate-out="fadeOut"...........(more animations: http://daneden.github.io/animate.css/)
								data-mouse-drag="false"..............(true/false)
								data-touch-drag="false"..............(true/false)
								data-autoheight="true"...............(true/false)
								data-autoplay="true".................(true/false)
								data-autoplay-timeout="5000".........(milliseconds)
								data-autoplay-hover-pause="true".....(true/false)
								data-autoplay-speed="800"............(milliseconds)
								data-drag-end-speed="800"............(milliseconds)
								data-nav="true"......................(true/false)
								data-nav-speed="800".................(milliseconds)
								data-dots="false"....................(true/false)
								data-dots-speed="800"................(milliseconds)
						*/}
                <div
                  className="owl-carousel cursor-grab nav-outside dots-outside"
                  data-items={1}
                  data-loop="true"
                  data-autoheight="true"
                  data-nav="true"
                  data-nav-speed={500}
                  data-dots-speed={500}
                  data-autoplay="true"
                  data-autoplay-timeout={8000}
                  data-autoplay-speed={500}
                  data-autoplay-hover-pause="true"
                >
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Begin testimonial item */}
                    <div className="testimonial-item text-white">
                      <div
                        className="tm-image bg-image"
                        style={{
                          backgroundImage:
                            "url(assets/img/misc/price-box-1.jpg)",
                          backgroundPosition: "50% 50%",
                        }}
                      />
                      <blockquote>
                        <p>
                          What a wonderful experience ,Ogaphoto provided us with
                          everything we need. the photographer was so kind and
                          very helpful. I really enjoyed the family shoot that
                          we had with Ogaphoto, Thank you!
                        </p>
                        <small>Tina Oyedeji</small>
                      </blockquote>
                    </div>
                    {/* End testimonial item */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Begin testimonial item */}
                    <div className="testimonial-item text-white">
                      <div
                        className="tm-image bg-image"
                        style={{
                          backgroundImage:
                            "url(media/img_rr_02.jpg)",
                          backgroundPosition: "50% 50%",
                        }}
                      />
                      <blockquote>
                        <p>
                          A complete game changer for my business,thanks for
                          saving the day
                        </p>
                        <small>Ayo sowunmi</small>
                      </blockquote>
                    </div>
                    {/* End testimonial item */}
                  </div>
                  {/* End carousel item */}
                  {/* Begin carousel item 
							========================= */}
                  <div className="cc-item">
                    {/* Begin testimonial item */}
                    <div className="testimonial-item text-white">
                      <div
                        className="tm-image bg-image"
                        style={{
                          backgroundImage:
                            "url(assets/img/misc/price-box-3.jpg)",
                          backgroundPosition: "50% 50%",
                        }}
                      />
                      <blockquote>
                        <p>
                          if you aren’t using Ogaphoto for your bookings you
                          need to. It has been a great experience and I love
                          anything about them,
                        </p>
                        <small>Chizo George</small>
                      </blockquote>
                    </div>
                    {/* End testimonial item */}
                  </div>
                  {/* End carousel item */}
                </div>
                {/* End content carousel */}
              </div>
              {/* End testimonials carousel */}
            </div>
            {/* /.tt-intro-inner */}
          </section>
          {/* End testimonials section */}
          {/* ================================
			///// Begin latest news section /////
			================================= */}
          {/* <Features /> */}
          {/* End latest news section */}
          {/* ===================================
			///// Begin call to action section /////
			==================================== */}

          <section className="call-to-action-section bg-gray-3 margin-top-60">
            <div
              className="full-cover for-light-style bg-image"
              style={{
                backgroundImage:
                  "url(assets/img/pattern/bg-pattern-2-light.png)",
                backgroundPosition: "50% 50%",
              }}
            />
            <div
              className="full-cover for-dark-style bg-image"
              style={{
                backgroundImage:
                  "url(assets/img/pattern/bg-pattern-2-dark.png)",
                backgroundPosition: "50% 50%",
              }}
            />
            <div className="call-to-action-inner tt-wrap">
              {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
              <div className="row">
                <div className="col-md-12 text-center">
                  {/* Begin tt-heading 
							====================== 
							* Use class "padding-on" to enable heading paddings (useful if you use tt-heading as stand alone element).
							* Use class "text-center" or "text-right" to align tt-heading.
							* Use classes "tt-heading-xs", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set tt-heading size.
							*/}
                  <div className="tt-heading tt-heading-lg text-center">
                    <div className="tt-heading-inner tt-wrap">
                      <h1 className="tt-heading-title">
                        Book a Professional Photographer in 5 Mins!
                      </h1>
                      <div className="tt-heading-subtitle">
                        Interested in a Photo shoot?
                      </div>
                      <hr className="hr-short" />
                    </div>
                  </div>
                  {/* End tt-heading */}
                  <div className="margin-top-30 max-width-1000 margin-auto">
                    <p>
                      Ready to capture your greatness? You have a reason to book
                      a shoot right now.
                    </p>
                    <div className="margin-top-30">
                      <a
                        href="/Purpose"
                        className="btn btn-primary margin-top-5"
                      >
                        Book A photography shoot!
                      </a>
                    </div>
                  </div>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.call-to-action-inner */}
          </section>
          {/* End call to action section */}
          {/* ===========================
			///// Begin footer section /////
			================================
			* Use class "footer-dark" to enable dark footer.
			* Use class "no-margin-top" if needed. 
			*/}

          {/* pasted here */}
          <div id="body-content">
            {/* ========================
			///// Begin page header /////
			=============================
			* Use classes "ph-xs", "ph-sm", "ph-lg" or "ph-xlg" to set page header size.
			* Use class "ph-center" or "ph-right" to align page header caption.
			*/}
            <section id="page-header" className="ph-sm">
              {/* Begin page header image 
				============================= 
				* Use class "parallax-bg-1" up to "parallax-bg-6" to enable background image parallax effect.
				* Use class "fade-out-scroll-3" to enable fade out effect if page scroll.
				* Use class "hide-ph-image" to hide page header image without removing the code.
				*/}
              <div
                // className="page-header-image parallax-bg-3 bg-image"
                style={{
                  backgroundImage: "url(assets/img/misc/page-header-bg-5.jpg)",

                  objectFit: "cover",
                }}
              >
                {/* Element cover 
					===================
					* You can use prepared background transparent classes depends on brightness of your page header image. More info: file "helper.css".
					*/}
                {/* <div className="cover bg-transparent-5-dark" /> */}
              </div>
              {/* End page header image */}
              {/* Begin page header inner */}
              <div className="page-header-inner tt-wrap">
                {/* Begin page header caption 
					===============================
					* Use classes "ph-caption-xs", "ph-caption-sm", "ph-caption-lg" or "ph-caption-xlg" to set page header size.
					* Use class "parallax-1" up to "parallax-6" to enable parallax effect.
					* Use class "fade-out-scroll-1" up to "fade-out-scroll-6" to enable fade out effect if page scroll.
					*/}
                <div
                // className="page-header-caption ph-caption-lg parallax-4 fade-out-scroll-3"
                >
                  <h1 className="tt-heading-title">Contact Us</h1>
                  <hr className="hr-short" />
                  {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                  <div className="page-header-description" data-max-words={40}>
                    <p>
                      Get in touch with us via email (enter email), phone number
                      (enter phone number), or via whatsapp
                    </p>
                  </div>
                </div>
                {/* End page header caption */}
              </div>
              {/* End page header inner */}
            </section>
            {/* End page header */}
            {/* ============================
			///// Begin contact section /////
			============================= */}
            <section id="contact-section">
              <div className="contact-section-inner tt-wrap">
                {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
                {/* ======================
					///// Begin split box /////
					based on: http://www.minimit.com/articles/solutions-tutorials/bootstrap-3-responsive-columns-of-same-height
					======================= */}
                <div className="split-box">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="row-lg-height full-height-vh">
                        {/* Column */}
                        <div
                          className="col-lg-6 col-lg-height col-lg-middle bg-image"
                          style={{
                            backgroundImage:
                              "url(assets/img/misc/contact-bg.jpg)",
                            backgroundPosition: "50% 50%",
                          }}
                        >
                          {/* Element cover */}
                          <div className="cover" />
                          {/* Begin split box content */}
                          <div className="split-box-content text-left no-padding-left no-padding-right">
                            {/* Begin contact info */}
                            <div className="contact-info-wrap">
                              <div className="contact-info">
                                <p>
                                  <i className="fas fa-home" /> 
                                  address: 
                                  {/* 121
                                  King Street, Melbourne, Australia */}
                                </p>
                                <p>
                                  <i className="fas fa-phone" /> phone:
                                   {/* +123 456
                                  789 000 */}
                                </p>
                                <p>
                                  <i className="fas fa-envelope" /> email:
                                  <a
                                    href="mailto:company@email.com"
                                    target="_blank"
                                  >
                                    ogaphoto@email.com
                                  </a>
                                </p>
                              </div>
                              {/* Begin social buttons */}
                              <div className="social-buttons margin-top-20">
                                <ul>
                                  <li>
                                    <a
                                      href="/#"
                                      className="btn btn-social-min btn-default btn-rounded-full"
                                      title="Follow me on Facebook"
                                      target="_blank"
                                    >
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/#"
                                      className="btn btn-social-min btn-default btn-rounded-full"
                                      title="Follow me on Twitter"
                                      target="_blank"
                                    >
                                      <i className="fab fa-twitter" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/#"
                                      className="btn btn-social-min btn-default btn-rounded-full"
                                      title="Follow me on Google+"
                                      target="_blank"
                                    >
                                      <i className="fab fa-google-plus-g" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/#"
                                      className="btn btn-social-min btn-default btn-rounded-full"
                                      title="Follow me on Pinterest"
                                      target="_blank"
                                    >
                                      <i className="fab fa-pinterest-p" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/#"
                                      className="btn btn-social-min btn-default btn-rounded-full"
                                      title="Follow me on Dribbble"
                                      target="_blank"
                                    >
                                      <i className="fab fa-dribbble" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End social buttons */}
                            </div>
                            {/* End contact info */}
                          </div>
                          {/* End split box content */}
                        </div>
                        {/* /.col */}
                        {/* Column */}
                        <div className="col-lg-6 col-lg-height col-lg-middle no-padding">
                          {/* Begin split box content */}
                          <div className="split-box-content">
                            {/* Begin contact form 
											========================= */}
                            <form id="contact-form">
                              <div className="contact-form-inner text-left">
                                <div className="contact-form-info">
                                  {/* Begin tt-heading 
														====================== 
														* Use class "padding-on" to enable heading paddings (useful if you use tt-heading as stand alone element).
														* Use class "text-center" or "text-right" to align tt-heading.
														* Use classes "tt-heading-xs", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set tt-heading size.
														*/}
                                  <div className="tt-heading">
                                    <div className="tt-heading-inner">
                                      <h1 className="tt-heading-title">
                                        Help Center
                                      </h1>
                                      {/* <div class="tt-heading-subtitle">Subtitle Here</div> */}
                                      <hr className="hr-short" />
                                    </div>
                                    {/* /.tt-heading-inner */}
                                  </div>
                                  {/* End tt-heading */}
                                  <div className="margin-top-30">
                                    <p>
                                      Our customer services are standing by to
                                      answer all your questions
                                    </p>
                                  </div>
                                </div>
                                {/* /.contact-form-info */}
                                {/* Begin hidden required fields (https://github.com/agragregra/uniMail) */}
                                <input
                                  type="hidden"
                                  name="project_name"
                                  defaultValue="y"
                                />
                                {/* Change value to your site name */}
                                <input
                                  type="hidden"
                                  name="admin_email"
                                  defaultValue="your@email.com"
                                />
                                {/* Change value to your valid email address (where a message will be sent) */}
                                <input
                                  type="hidden"
                                  name="form_subject"
                                  defaultValue="Message from yourwebsiteaddress.com"
                                />
                                {/* Change value to your own message subject */}
                                {/* End Hidden Required Fields */}
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <select
                                        className="form-control"
                                        name="option"
                                        required
                                      >
                                        <option value disabled selected>
                                          Select an option
                                        </option>
                                        <option value="Feedback">
                                          Feedback
                                        </option>
                                        <option value="Complaint">
                                          Complaint
                                        </option>
                                        <option value="Problem Booking">
                                          Problem Booking
                                        </option>
                                        <option value=" Problem Joining">
                                          Problem Joining
                                        </option>
                                        <option value="Problem Booking">
                                          Photo Cancellation Issue
                                        </option>
                                        <option value=" Photo Refund Issue">
                                          Photo Refund Issue
                                        </option>
                                        <option value="Other">Other</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <textarea
                                        className="form-control"
                                        name="message"
                                        rows={4}
                                        placeholder="Your Message"
                                        required
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="small text-gray">
                                  <em>* All fields are required!</em>
                                </div>
                              </div>
                              {/* /.contact-form-inner */}
                              <div className="row">
                                <div className="col-lg-12">
                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-lg margin-top-40"
                                  >
                                    Send Message
                                  </button>
                                </div>
                              </div>
                            </form>
                            {/* End contact form */}
                          </div>
                          {/* End split box content */}
                        </div>
                        {/* /.col */}
                      </div>
                      {/* /.row-height */}
                    </div>
                    {/* /.row */}
                    <div className="row">{/* /.col */}</div>
                    {/* /.row */}
                  </div>
                  {/* /.container */}
                </div>
                {/* End split box */}
              </div>
              {/* /.contact-section-inner */}
            </section>
            {/* End contact section */}
            {/* ===========================
			///// Begin footer section /////
			================================
			* Use class "footer-dark" to enable dark footer.
			* Use class "no-margin-top" if needed. 
			*/}
          </div>

          {/* pasted here ends */}

          <section id="footer" className="footer-dark no-margin-top">
            <div className="footer-inner">
              <div className="footer-container tt-wrap">
                <div className="row">
                  <div className="col-md-3">
                    {/* Begin footer logo */}
                    <div id="footer-logo">
                      <a href="/#" className="logo-dark">
                        <img src="assets/img/logo-dark.png" alt="logo" />
                      </a>
                      <a href="/#" className="logo-light">
                        <img src="assets/img/logo-light2.png" alt="logo" />
                      </a>
                      {/* for small screens */}
                      <a href="/#" className="logo-dark-m">
                        <img src="assets/img/logo-dark-m.png" alt="logo" />
                      </a>
                      <a href="/#" className="logo-light-m">
                        <img src="assets/img/logo-light-m.png" alt="logo" />
                      </a>
                    </div>
                    {/* End footer logo */}
                  </div>
                  {/* /.col */}

                  <div className="col-md-5">
                    <div className="footer-text">
                      <h4>- Join Us</h4>
                      <a
                        style={{ textDecoration: "none" }}
                        href="/PhotographersRegister"
                      >
                        Join our vast network of photographers
                      </a>
                    </div>
                    <div style={{ height: "40px" }} />
                  </div>

                  <div className="col-md-5">
                    {/* Begin footer text */}

                    {/* End footer text */}
                    <div className="footer-text">
                      <h4>- Ogaphoto Studio</h4>
                      Over the years Ogaphoto has leveraged on our vast network
                      of photographers to bring you the best hands in the
                      industry. We hire only the best and therefore you must
                      subject yourself to our continual improvement programs and
                      standards of operations. Our services are cost effective
                      to make sure our clients needs are always met.
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-md-4">
                    {/* Begin social buttons */}
                    <div className="social-buttons">
                      <ul>
                        <li>
                          <a
                            href="/#"
                            className="btn2 btn-social-min "
                            title="Follow me on Facebook"
                            target="_blank"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#"
                            className="btn2 btn-social-min   "
                            title="Follow me on Twitter"
                            target="_blank"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#"
                            className="btn2 btn-social-min "
                            title="Follow me on Google+"
                            target="_blank"
                          >
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#"
                            className="btn2 btn-social-min "
                            title="Follow me on Pinterest"
                            target="_blank"
                          >
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#"
                            className="btn2 btn-social-min "
                            title="Follow me on Dribbble"
                            target="_blank"
                          >
                            <i className="fab fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#"
                            className="btn2 btn-social-min "
                            title="Drop me a line"
                            target="_blank"
                          >
                            <i className="fas fa-envelope" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* End social buttons */}
                    {/* Begin footer subscribe form */}
                    <form
                      id="footer-subscribe-form"
                      className="form-btn-inside"
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control no-bg"
                          id="footer-subscribe"
                          name="subscribe"
                          placeholder="Subscribe. Enter your email address..."
                          required
                        />
                        <button type="submit">
                          <i className="fas fa-paper-plane" />
                        </button>
                      </div>
                    </form>
                    {/* End footer subscribe form */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.footer-container */}

              <div className="footer-bottom">
                <div className="row">
                  <div
                    style={{
                      width: "100%",
                      minHeight: "30px",

                      marginTop: "80px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <Listing>{Mapstate()}</Listing>
                    <Listing>{Mapstate2()}</Listing>
                    <Listing>{Mapstate3()}</Listing>
                    <Listing>{Mapstate4()}</Listing>
                  </div>
                </div>
                <div className="footer-container tt-wrap">
                  <div className="row">
                    <div className="col-md-6 col-md-push-6">
                      {/* Begin footer menu */}
                      <ul className="footer-menu">
                        <li>
                          <a href="/#">Home</a>
                        </li>
                        <li>
                          <a href="/#">About</a>
                        </li>
                        <li>
                          <a href="/#">Portfolio</a>
                        </li>
                        <li>
                          <a href="/#">Blog</a>
                        </li>
                        <li>
                          <a href="/#">FAQ</a>
                        </li>
                        <li>
                          <a href="/#">Contact</a>
                        </li>
                      </ul>
                      {/* End footer menu */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-6 col-md-pull-6">
                      {/* Begin footer copyright */}
                      <div className="footer-copyright">
                        <p>© Ogaphot 2021 / All rights reserved</p>
                      </div>
                      {/* End footer copyright */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.footer-container */}
              </div>
              {/* /.footer-bottom */}
            </div>
            {/* /.footer-inner */}
            {/* Scroll to top button */}
            <a
              href="/#body-content"
              className="scrolltotop sm-scroll"
              title="Scroll to top"
            >
              <i className="fas fa-chevron-up" />
            </a>
          </section>
          {/* End footer section */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
