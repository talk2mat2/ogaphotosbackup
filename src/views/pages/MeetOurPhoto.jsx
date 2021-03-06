import React from "react";

const MeetOurPhoto = () => {
  return (
    <>
      <div className="tt-heading tt-heading-lg padding-on text-left">
        <div className="tt-heading-inner tt-wrap">
          {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
          <h1 className="tt-heading-title">OUR PHOTOGRAPHERS</h1>

          <div className="tt-heading-subtitle">
            Meeting the Standards matters a lot, We have Competent professionals
            too
            <hr className="hr-short" />
          </div>
        </div>
        {/* /.tt-heading-inner */}
      </div>
      <section id="blog-list-carousel-section" className="blc-featured">
        <div className="bl-carousel-wrap padding-25">
          {" "}
          {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
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
            className="owl-carousel cc-height-2 cursor-grab dots-right dots-rounded"
            data-items={4}
            data-margin={25}
            data-loop="true"
            data-nav="true"
            data-nav-speed={400}
            data-autoplay="true"
            data-autoplay-speed={400}
            data-autoplay-timeout={8000}
            data-autoplay-hover-pause="true"
            data-tablet-landscape={3}
            data-tablet-portrait={2}
            data-mobile-landscape={1}
            data-mobile-portrait={1}
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
                  backgroundImage:
                    "url(assets/img/blog/list/featured-carousel/blog-fc-1.jpg)",
                  backgroundPosition: "50% 50%",
                }}
              />
              {/* Begin caption 
                              ===================
                              * Position classes: "top-left", "top-center", "top-right", "center-left", "center", "center-right", "bottom-left", "bottom-center", "bottom-right". 
                              * Size classes: "cc-caption-xs", "cc-caption-sm", "cc-caption-lg", "cc-caption-xlg", "cc-caption-xxlg".
                              */}
              <div className="cc-caption bottom-left max-width-1000">
                {" "}
                {/* max width class is optional */}
                <h2 className="cc-title">
                  <a href="blog-single.html">patrick hughes</a>
                </h2>
                <div className="cc-meta">
                  {/* <span className="published">May 26, 2017</span> */}
                  <span className="posted-by">
                    <a href="#" title="View all posts by Martin Vegas"></a>
                  </span>
                </div>{" "}
                <div className="cc-category">
                  <a href="blog-archive.html">Featured</a>{" "}
                  <a href="blog-archive.html">Photography</a>
                </div>
              </div>
              {/* End caption */}
              {/* Begin carousel item attributes */}
              <ul className="cc-item-attr">
                <li>
                  {/* Begin comments count */}
                  <a
                    href="blog-single.html#blog-post-comments"
                    className="cc-item-comments-count"
                    title="Read the comments"
                  >
                    <i className="far fa-comment" /> 12
                  </a>
                  {/* End comments count */}
                </li>
                <li>
                  {/* Begin favorite button */}
                  <div className="favorite-btn active">
                    <div className="fav-inner">
                      <div className="icon-heart">
                        <span className="icon-heart-empty" />
                        <span className="icon-heart-filled" />
                      </div>
                    </div>
                    <div className="fav-count">47</div>
                  </div>
                  {/* End favorite button */}
                </li>
              </ul>
              {/* End carousel item attributes */}
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
                  backgroundImage:
                    "url(assets/img/blog/list/featured-carousel/blog-fc-2.jpg)",
                  backgroundPosition: "50% 50%",
                }}
              />
              {/* Begin caption 
                              ===================
                              * Position classes: "top-left", "top-center", "top-right", "center-left", "center", "center-right", "bottom-left", "bottom-center", "bottom-right". 
                              * Size classes: "cc-caption-xs", "cc-caption-sm", "cc-caption-lg", "cc-caption-xlg", "cc-caption-xxlg".
                              */}
              <div className="cc-caption bottom-left max-width-1000">
                {" "}
                {/* max width class is optional */}
                <h2 className="cc-title">
                  <a href="blog-single.html">Cory Zamora</a>
                </h2>
                <div className="cc-meta">
                  <span className="published">Photographer</span>
                  <span className="posted-by">
                    {/* - by{" "}
                    <a href="#" title="View all posts by Martin Vegas">
                      Martin Vegas
                    </a> */}
                  </span>
                </div>
                <div className="cc-category">
                  <a href="blog-archive.html">Featured</a>{" "}
                  <a href="blog-archive.html">Photography</a>
                </div>
              </div>
              {/* End caption */}
              {/* Begin carousel item attributes */}
              <ul className="cc-item-attr">
                <li>
                  {/* Begin comments count */}
                  <a
                    href="blog-single.html#blog-post-comments"
                    className="cc-item-comments-count"
                    title="Read the comments"
                  >
                    <i className="far fa-comment" /> 32
                  </a>
                  {/* End comments count */}
                </li>
                <li>
                  {/* Begin favorite button */}
                  <div className="favorite-btn">
                    <div className="fav-inner">
                      <div className="icon-heart">
                        <span className="icon-heart-empty" />
                        <span className="icon-heart-filled" />
                      </div>
                    </div>
                    <div className="fav-count">61</div>
                  </div>
                  {/* End favorite button */}
                </li>
              </ul>
              {/* End carousel item attributes */}
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
                  backgroundImage:
                    "url(assets/img/blog/list/featured-carousel/blog-fc-3.jpg)",
                  backgroundPosition: "50% 50%",
                }}
              />
              {/* Begin caption 
                              ===================
                              * Position classes: "top-left", "top-center", "top-right", "center-left", "center", "center-right", "bottom-left", "bottom-center", "bottom-right". 
                              * Size classes: "cc-caption-xs", "cc-caption-sm", "cc-caption-lg", "cc-caption-xlg", "cc-caption-xxlg".
                              */}
              <div className="cc-caption bottom-left max-width-1000">
                {" "}
                {/* max width class is optional */}
                <h2 className="cc-title">
                  <a href="blog-single.html">Coriss Ambady</a>
                </h2>
                <div className="cc-meta">
                  <span className="published">Photographer</span>
                  <span className="posted-by">
                    {/* - by{" "}
                    <a href="#" title="View all posts by Martin Vegas">
                      Martin Vegas
                    </a> */}
                  </span>
                </div>
                <div className="cc-category">
                  <a href="blog-archive.html">Featured</a>{" "}
                  <a href="blog-archive.html">Photography</a>
                </div>
              </div>
              {/* End caption */}
              {/* Begin carousel item attributes */}
              <ul className="cc-item-attr">
                <li>
                  {/* Begin comments count */}
                  <a
                    href="blog-single.html#blog-post-comments"
                    className="cc-item-comments-count"
                    title="Read the comments"
                  >
                    <i className="far fa-comment" /> 5
                  </a>
                  {/* End comments count */}
                </li>
                <li>
                  {/* Begin favorite button */}
                  <div className="favorite-btn active">
                    <div className="fav-inner">
                      <div className="icon-heart">
                        <span className="icon-heart-empty" />
                        <span className="icon-heart-filled" />
                      </div>
                    </div>
                    <div className="fav-count">21</div>
                  </div>
                  {/* End favorite button */}
                </li>
              </ul>
              {/* End carousel item attributes */}
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
                  backgroundImage:
                    "url(assets/img/blog/list/featured-carousel/blog-fc-4.jpg)",
                  backgroundPosition: "50% 50%",
                }}
              />
              {/* Begin caption 
                              ===================
                              * Position classes: "top-left", "top-center", "top-right", "center-left", "center", "center-right", "bottom-left", "bottom-center", "bottom-right". 
                              * Size classes: "cc-caption-xs", "cc-caption-sm", "cc-caption-lg", "cc-caption-xlg", "cc-caption-xxlg".
                              */}
              <div className="cc-caption bottom-left max-width-1000">
                {" "}
                {/* max width class is optional */}
                <h2 className="cc-title">
                  <a href="blog-single.html">barclay Windersky</a>
                </h2>
                <div className="cc-meta">
                  <span className="published">
                    barclay background in mathematics gives him a sophisticated
                  </span>
                  <span className="posted-by">
                    {/* - by{" "}
                    <a href="#" title="View all posts by Martin Vegas">
                      Martin Vegas
                    </a> */}
                  </span>
                </div>
                <div className="cc-category">
                  <a href="blog-archive.html">Featured</a>{" "}
                  <a href="blog-archive.html">Photography</a>
                </div>
              </div>
              {/* End caption */}
              {/* Begin carousel item attributes */}
              <ul className="cc-item-attr">
                <li>
                  {/* Begin comments count */}
                  <a
                    href="blog-single.html#blog-post-comments"
                    className="cc-item-comments-count"
                    title="Read the comments"
                  >
                    <i className="far fa-comment" /> 9
                  </a>
                  {/* End comments count */}
                </li>
                <li>
                  {/* Begin favorite button */}
                  <div className="favorite-btn">
                    <div className="fav-inner">
                      <div className="icon-heart">
                        <span className="icon-heart-empty" />
                        <span className="icon-heart-filled" />
                      </div>
                    </div>
                    <div className="fav-count">129</div>
                  </div>
                  {/* End favorite button */}
                </li>
              </ul>
              {/* End carousel item attributes */}
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
                  backgroundImage:
                    "url(assets/img/blog/list/featured-carousel/blog-fc-5.jpg)",
                  backgroundPosition: "50% 50%",
                }}
              />
              {/* Begin caption 
                              ===================
                              * Position classes: "top-left", "top-center", "top-right", "center-left", "center", "center-right", "bottom-left", "bottom-center", "bottom-right". 
                              * Size classes: "cc-caption-xs", "cc-caption-sm", "cc-caption-lg", "cc-caption-xlg", "cc-caption-xxlg".
                              */}
              <div className="cc-caption bottom-left max-width-1000">
                {" "}
                {/* max width class is optional */}
                <h2 className="cc-title">
                  <a href="blog-single.html">Nicola brooten</a>
                </h2>
                <div className="cc-meta">
                  <span className="published">
                    Nicolea's background in mathematics gives him a
                    sophisticated grasp on the aspects of Photography
                  </span>
                  <span className="posted-by">
                    {/* - by{" "}
                    <a href="#" title="View all posts by Martin Vegas">
                      Martin Vegas
                    </a> */}
                  </span>
                </div>
              </div>
              <div className="cc-category">
                <a href="blog-archive.html">Featured</a>{" "}
                <a href="blog-archive.html">Photography</a>
              </div>
              {/* End caption */}
              {/* Begin carousel item attributes */}
              <ul className="cc-item-attr">
                <li>
                  {/* Begin comments count */}
                  <a
                    href="blog-single.html#blog-post-comments"
                    className="cc-item-comments-count"
                    title="Read the comments"
                  >
                    <i className="far fa-comment" /> 9
                  </a>
                  {/* End comments count */}
                </li>
                <li>
                  {/* Begin favorite button */}
                  <div className="favorite-btn">
                    <div className="fav-inner">
                      <div className="icon-heart">
                        <span className="icon-heart-empty" />
                        <span className="icon-heart-filled" />
                      </div>
                    </div>
                    <div className="fav-count">456</div>
                  </div>
                  {/* End favorite button */}
                </li>
              </ul>
              {/* End carousel item attributes */}
            </div>
            {/* End carousel item */}
            {/* Begin carousel item 
                          ========================= */}
            {/* <div class="cc-item">
                              <span class="cover bg-transparent-3-dark"></span>
                              <a class="owl-video" href="https://vimeo.com/99653121"></a>
  
                              <div class="cc-caption bottom-left">
                                  <div class="cc-category">
                                      <a href="blog-archive.html">Photography</a>
                                  </div>
                                  <h2 class="cc-title">
                                      <a href="blog-single.html">5 Tips Your Camera Manual Never Told You About Portrait Photography</a>
                                  </h2>
                                  <div class="cc-meta"> 
                                      <span class="published">May 26, 2017</span>
                                      <span class="posted-by">- by <a href="#" title="View all posts by Martin Vegas">Martin Vegas</a></span>
                                  </div>
                              </div>
  
                              <ul class="cc-item-attr">
                                  <li>
                                      <a href="blog-single.html#blog-post-comments" class="cc-item-comments-count" title="Read the comments"><i class="far fa-comment"></i> 12</a>
                                  </li>
                                  <li>
                                      <div class="favorite-btn">
                                          <div class="fav-inner">
                                              <div class="icon-heart">
                                                  <span class="icon-heart-empty"></span>
                                                  <span class="icon-heart-filled"></span>
                                              </div>
                                          </div>
                                          <div class="fav-count">47</div>
                                      </div>
                                  </li>
                              </ul>
                          </div> */}
            {/* End carousel item */}
          </div>
          {/* End content carousel */}
        </div>{" "}
        {/* /.gl-carousel-wrap */}
      </section>
    </>
  );
};

export default MeetOurPhoto;
