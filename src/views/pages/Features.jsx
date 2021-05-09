import React from "react";

const Features = () => {
  return (
    <section id="latest-news-section">
      {/* Begin tt-heading 
        ====================== 
        * Use class "padding-on" to enable heading paddings (useful if you use tt-heading as stand alone element).
        * Use class "text-center" or "text-right" to align tt-heading.
        * Use classes "tt-heading-xs", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set tt-heading size.
        */}
      <div className="tt-heading tt-heading-lg padding-on text-center">
        <div className="tt-heading-inner tt-wrap">
          <h1 className="tt-heading-title">Our Features</h1>
          <div className="tt-heading-subtitle">
            Delivering services designed to give you and your business the best
            experience.
          </div>
          <hr className="hr-short" />
        </div>
      </div>
      {/* End tt-heading */}
      <div className="latest-news-section-inner tt-wrap">
        {/* add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag! ) */}
        {/* Begin latest news carousel
            ================================ */}
        <div className="latest-news-carousel">
          <div
            className="owl-carousel cursor-grab nav-outside-top"
            data-items={3}
            data-margin={30}
            data-loop="true"
            data-dots="false"
            data-nav="true"
            data-nav-speed={500}
            data-autoplay="true"
            data-autoplay-timeout={5000}
            data-autoplay-speed={500}
            data-autoplay-hover-pause="true"
            data-tablet-landscape={3}
            data-tablet-portrait={2}
            data-mobile-landscape={1}
            data-mobile-portrait={1}
          >
            {/* Begin carousel item 
                    ========================= */}
            <div className="cc-item">
              {/* Begin blog list item */}
              <article className="blog-list-item">
                {/* Blog list item image */}
                <a href="blog-single.html" className="bl-item-image">
                  <img src="assets/img/blog/list/blog-1.jpg" alt="image" />
                </a>
                {/* Begin blog list item info */}
                <div className="bl-item-info">
                  <div className="bl-item-category">
                    <a href="blog-archive.html">Photography</a>
                  </div>
                  <a href="blog-single.html" className="bl-item-title">
                    <h2>Commitments to client needs</h2>
                  </a>
                  <div className="bl-item-meta">
                    <span className="posted-by"></span>
                  </div>
                  {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                  <div className="bl-item-desc" data-max-words={14}>
                    Cutting edge services
                  </div>
                  <a
                    href="blog-single.html"
                    className="bl-item-read-more"
                    title="Read More"
                  >
                    <span />
                  </a>
                  {/* Begin blog list item attributes */}
                  <ul className="bl-item-attr">
                    <li>
                      {/* Begin comments count */}
                      <a
                        href="blog-single.html#blog-post-comments"
                        className="bl-item-comments-count"
                        title="Read the comments"
                      >
                        <i className="far fa-comment" /> 10
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
                        <div className="fav-count">48</div>
                      </div>
                      {/* End favorite button */}
                    </li>
                  </ul>
                  {/* End blog list item attributes */}
                </div>
                {/* End blog list item info */}
              </article>
              {/* End blog list item */}
            </div>
            {/* End carousel item */}
            {/* Begin carousel item 
                    ========================= */}
            <div className="cc-item">
              {/* Begin blog list item */}
              <article className="blog-list-item">
                {/* Blog list item image */}
                <a href="blog-single.html" className="bl-item-image">
                  <img src="assets/img/blog/list/blog-2.jpg" alt="image" />
                </a>
                {/* Begin blog list item info */}
                <div className="bl-item-info">
                  <div className="bl-item-category">
                    <a href="blog-archive.html">Equipment</a>
                  </div>
                  <a href="blog-single.html" className="bl-item-title">
                    <h2>
                      We’ll Pair You Up with the Perfect Photographer who
                      Matches Your Style
                    </h2>
                  </a>
                  <div className="bl-item-meta"></div>
                  {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                  <div className="bl-item-desc" data-max-words={14}>
                    Once a photographer is confirmed as available, you can
                    officially book and reserve your shoot.
                  </div>
                  <a
                    href="blog-single.html"
                    className="bl-item-read-more"
                    title="Read More"
                  >
                    <span />
                  </a>
                  {/* Begin blog list item attributes */}
                  <ul className="bl-item-attr">
                    <li>
                      {/* Begin comments count */}
                      <a
                        href="blog-single.html#blog-post-comments"
                        className="bl-item-comments-count"
                        title="Read the comments"
                      >
                        <i className="far fa-comment" /> 66
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
                        <div className="fav-count">98</div>
                      </div>
                      {/* End favorite button */}
                    </li>
                  </ul>
                  {/* End blog list item attributes */}
                </div>
                {/* End blog list item info */}
              </article>
              {/* End blog list item */}
            </div>
            {/* End carousel item */}
            {/* Begin carousel item 
                    ========================= */}
            <div className="cc-item">
              {/* Begin blog list item */}
              <article className="blog-list-item">
                {/* Blog list item image */}
                <a href="blog-single.html" className="bl-item-image">
                  <img src="assets/img/blog/list/blog-3.jpg" alt="image" />
                </a>
                {/* Begin blog list item info */}
                <div className="bl-item-info">
                  <div className="bl-item-category">
                    <a href="blog-archive.html">Travel</a>
                  </div>
                  <a href="blog-single.html" className="bl-item-title">
                    <h2>On Your Time</h2>
                  </a>
                  <div className="bl-item-meta">
                    {/* <span className="published">May 26, 2017</span>
                    <span className="posted-by">
                      - by
                      <a href="#" title="View all posts by Martin Vegas">
                        Anna Vernik
                      </a>
                    </span> */}
                  </div>
                  {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                  <div className="bl-item-desc" data-max-words={14}>
                    a vetted specialist takes your ideas and vision and crafts
                  </div>
                  <a
                    href="blog-single.html"
                    className="bl-item-read-more"
                    title="Read More"
                  >
                    <span />
                  </a>
                  {/* Begin blog list item attributes */}
                  <ul className="bl-item-attr">
                    <li>
                      {/* Begin comments count */}
                      <a
                        href="blog-single.html#blog-post-comments"
                        className="bl-item-comments-count"
                        title="Read the comments"
                      >
                        <i className="far fa-comment" /> 3
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
                        <div className="fav-count">54</div>
                      </div>
                      {/* End favorite button */}
                    </li>
                  </ul>
                  {/* End blog list item attributes */}
                </div>
                {/* End blog list item info */}
              </article>
              {/* End blog list item */}
            </div>
            {/* End carousel item */}
            {/* Begin carousel item 
                    ========================= */}
            <div className="cc-item">
              {/* Begin blog list item */}
              <article className="blog-list-item">
                {/* Blog list item image */}
                <a href="blog-single.html" className="bl-item-image">
                  <img src="assets/img/blog/list/blog-4.jpg" alt="image" />
                </a>
                {/* Begin blog list item info */}
                <div className="bl-item-info">
                  <div className="bl-item-category">
                    <a href="blog-archive.html">Photography</a>
                  </div>
                  <a href="blog-single.html" className="bl-item-title">
                    <h2>Creativity and Imagination</h2>
                  </a>
                  <div className="bl-item-meta"></div>
                  {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                  <div className="bl-item-desc" data-max-words={14}>
                    Taking things outside of their purpose and putting them to
                    other uses.
                  </div>
                  <a
                    href="blog-single.html"
                    className="bl-item-read-more"
                    title="Read More"
                  >
                    <span />
                  </a>
                  {/* Begin blog list item attributes */}
                  <ul className="bl-item-attr">
                    <li>
                      {/* Begin comments count */}
                      <a
                        href="blog-single.html#blog-post-comments"
                        className="bl-item-comments-count"
                        title="Read the comments"
                      >
                        <i className="far fa-comment" /> 0
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
                        <div className="fav-count">3</div>
                      </div>
                      {/* End favorite button */}
                    </li>
                  </ul>
                  {/* End blog list item attributes */}
                </div>
                {/* End blog list item info */}
              </article>
              {/* End blog list item */}
            </div>
            {/* End carousel item */}
            {/* Begin carousel item 
                    ========================= */}
            <div className="cc-item">
              {/* Begin blog list item */}
              <article className="blog-list-item">
                {/* Blog list item image */}
                <a href="blog-single.html" className="bl-item-image">
                  <img src="assets/img/blog/list/blog-5.jpg" alt="image" />
                </a>
                {/* Begin blog list item info */}
                <div className="bl-item-info">
                  <div className="bl-item-category">
                    <a href="blog-archive.html">Photography</a>
                  </div>
                  <a href="blog-single.html" className="bl-item-title">
                    <h2>An Eye for Detail</h2>
                  </a>
                  <div className="bl-item-meta">
                    {/* <span className="published">May 26, 2017</span>
                    <span className="posted-by">
                      - by
                      <a href="#" title="View all posts by Martin Vegas">
                        Martin Vegas
                      </a>
                    </span> */}
                  </div>
                  {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                  <div className="bl-item-desc" data-max-words={14}>
                    Generation of ideas or products that are both original and
                    valuable.
                  </div>
                  <a
                    href="blog-single.html"
                    className="bl-item-read-more"
                    title="Read More"
                  >
                    <span />
                  </a>
                  {/* Begin blog list item attributes */}
                  <ul className="bl-item-attr">
                    <li>
                      {/* Begin comments count */}
                      <a
                        href="blog-single.html#blog-post-comments"
                        className="bl-item-comments-count"
                        title="Read the comments"
                      >
                        <i className="far fa-comment" /> 8
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
                        <div className="fav-count">71</div>
                      </div>
                      {/* End favorite button */}
                    </li>
                  </ul>
                  {/* End blog list item attributes */}
                </div>
                {/* End blog list item info */}
              </article>
              {/* End blog list item */}
            </div>
            {/* End carousel item */}
            {/* Begin carousel item 
                    ========================= */}
            <div className="cc-item">
              {/* Begin blog list item */}
              <article className="blog-list-item">
                {/* Blog list item image */}
                <a href="blog-single.html" className="bl-item-image">
                  <img src="assets/img/blog/list/blog-6.jpg" alt="image" />
                </a>
                {/* Begin blog list item info */}
                <div className="bl-item-info">
                  <div className="bl-item-category">
                    <a href="#">Photography</a>
                  </div>
                  <a href="blog-single.html" className="bl-item-title">
                    <h2>Best Shoots</h2>
                  </a>
                  <div className="bl-item-meta">
                    {/* <span className="published">May 26, 2017</span>
                    <span className="posted-by">
                      - by
                      <a href="#" title="View all posts by Martin Vegas">
                        Martin Vegas
                      </a>
                    </span> */}
                  </div>
                  {/* Use data attributes to set text maximum characters or words (example: data-max-characters="120" or data-max-words="40") */}
                  <div className="bl-item-desc" data-max-words={14}>
                    There are always two people in every picture: the
                    photographer and the viewer
                  </div>
                  <a
                    href="blog-single.html"
                    className="bl-item-read-more"
                    title="Read More"
                  >
                    <span />
                  </a>
                  {/* Begin blog list item attributes */}
                  <ul className="bl-item-attr">
                    <li>
                      {/* Begin comments count */}
                      <a
                        href="blog-single.html#blog-post-comments"
                        className="bl-item-comments-count"
                        title="Read the comments"
                      >
                        <i className="far fa-comment" /> 28
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
                        <div className="fav-count">65</div>
                      </div>
                      {/* End favorite button */}
                    </li>
                  </ul>
                  {/* End blog list item attributes */}
                </div>
                {/* End blog list item info */}
              </article>
              {/* End blog list item */}
            </div>
            {/* End carousel item */}
          </div>
          {/* End content carousel */}
        </div>
        {/* End latest news carousel */}
      </div>
      {/* /.latest-news-section-inner */}
    </section>
  );
};

export default Features;
