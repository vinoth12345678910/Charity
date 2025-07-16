import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavLink';
const Blog = () => {
  useEffect(() => {
    // Sticky navbar on scroll
    const handleScroll = () => {
      const header = document.getElementById('sticky-header');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>Charifit</title>
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* <link rel="manifest" href="site.webmanifest"> */}
  <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png" />
  {/* Place favicon.ico in the root directory */}
  {/* CSS here */}
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/owl.carousel.min.css" />
  <link rel="stylesheet" href="css/magnific-popup.css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/themify-icons.css" />
  <link rel="stylesheet" href="css/nice-select.css" />
  <link rel="stylesheet" href="css/flaticon.css" />
  <link rel="stylesheet" href="css/gijgo.css" />
  <link rel="stylesheet" href="css/animate.css" />
  <link rel="stylesheet" href="css/slicknav.css" />
  <link rel="stylesheet" href="css/style.css" />
  {/* <link rel="stylesheet" href="css/responsive.css"> */}
  {/*[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]*/}
  {/* header-start */}
  <NavBar />
  {/* header-end */}
  {/* bradcam_area_start  */}
  <div className="bradcam_area breadcam_bg overlay d-flex align-items-center justify-content-center">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="bradcam_text text-center">
            <h3>Blog</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* bradcam_area_end  */}
  {/*================Blog Area =================*/}
  <section className="blog_area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mb-5 mb-lg-0">
          <div className="blog_left_sidebar">
            <article className="blog_item">
              <div className="blog_item_img">
                <img
                  className="card-img rounded-0"
                  src="/img/blog/single_blog_1.png"
                  alt=""
                />
                <a href="#" className="blog_item_date">
                  <h3>15</h3>
                  <p>Jan</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href="single-blog.html">
                  <h2>Google inks pact for new 35-storey office</h2>
                </a>
                <p>
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
                <ul className="blog-info-link">
                  <li>
                    <a href="#">
                      <i className="fa fa-user" /> Travel, Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comments" /> 03 Comments
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="blog_item">
              <div className="blog_item_img">
                <img
                  className="card-img rounded-0"
                  src="/img/blog/single_blog_2.png"
                  alt=""
                />
                <a href="#" className="blog_item_date">
                  <h3>15</h3>
                  <p>Jan</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href="single-blog.html">
                  <h2>Google inks pact for new 35-storey office</h2>
                </a>
                <p>
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
                <ul className="blog-info-link">
                  <li>
                    <a href="#">
                      <i className="fa fa-user" /> Travel, Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comments" /> 03 Comments
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="blog_item">
              <div className="blog_item_img">
                <img
                  className="card-img rounded-0"
                  src="/img/blog/single_blog_3.png"
                  alt=""
                />
                <a href="#" className="blog_item_date">
                  <h3>15</h3>
                  <p>Jan</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href="single-blog.html">
                  <h2>Google inks pact for new 35-storey office</h2>
                </a>
                <p>
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
                <ul className="blog-info-link">
                  <li>
                    <a href="#">
                      <i className="fa fa-user" /> Travel, Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comments" /> 03 Comments
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="blog_item">
              <div className="blog_item_img">
                <img
                  className="card-img rounded-0"
                  src="/img/blog/single_blog_4.png"
                  alt=""
                />
                <a href="#" className="blog_item_date">
                  <h3>15</h3>
                  <p>Jan</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href="single-blog.html">
                  <h2>Google inks pact for new 35-storey office</h2>
                </a>
                <p>
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
                <ul className="blog-info-link">
                  <li>
                    <a href="#">
                      <i className="fa fa-user" /> Travel, Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comments" /> 03 Comments
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="blog_item">
              <div className="blog_item_img">
                <img
                  className="card-img rounded-0"
                  src="/img/blog/single_blog_5.png"
                  alt=""
                />
                <a href="#" className="blog_item_date">
                  <h3>15</h3>
                  <p>Jan</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href="single-blog.html">
                  <h2>Google inks pact for new 35-storey office</h2>
                </a>
                <p>
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
                <ul className="blog-info-link">
                  <li>
                    <a href="#">
                      <i className="fa fa-user" /> Travel, Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comments" /> 03 Comments
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <nav className="blog-pagination justify-content-center d-flex">
              <ul className="pagination">
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Previous">
                    <i className="ti-angle-left" />
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Next">
                    <i className="ti-angle-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog_right_sidebar">
            <aside className="single_sidebar_widget search_widget">
              <form action="#">
                <div className="form-group">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Keyword"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Search Keyword'"
                    />
                    <div className="input-group-append">
                      <button className="btn" type="button">
                        <i className="ti-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </aside>
            <aside className="single_sidebar_widget post_category_widget">
              <h4 className="widget_title">Category</h4>
              <ul className="list cat-list">
                <li>
                  <a href="#" className="d-flex">
                    <p>Resaurant food</p>
                    <p>(37)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Travel news</p>
                    <p>(10)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Modern technology</p>
                    <p>(03)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Product</p>
                    <p>(11)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Inspiration</p>
                    <p>21</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Health Care (21)</p>
                    <p>09</p>
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="single_sidebar_widget popular_post_widget">
              <h3 className="widget_title">Recent Post</h3>
              <div className="media post_item">
                <img src="/img/post/post_1.png" alt="post" />
                <div className="media-body">
                  <a href="single-blog.html">
                    <h3>From life was you fish...</h3>
                  </a>
                  <p>January 12, 2019</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="/img/post/post_2.png" alt="post" />
                <div className="media-body">
                  <a href="single-blog.html">
                    <h3>The Amazing Hubble</h3>
                  </a>
                  <p>02 Hours ago</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="/img/post/post_3.png" alt="post" />
                <div className="media-body">
                  <a href="single-blog.html">
                    <h3>Astronomy Or Astrology</h3>
                  </a>
                  <p>03 Hours ago</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="/img/post/post_4.png" alt="post" />
                <div className="media-body">
                  <a href="single-blog.html">
                    <h3>Asteroids telescope</h3>
                  </a>
                  <p>01 Hours ago</p>
                </div>
              </div>
            </aside>
            <aside className="single_sidebar_widget tag_cloud_widget">
              <h4 className="widget_title">Tag Clouds</h4>
              <ul className="list">
                <li>
                  <a href="#">project</a>
                </li>
                <li>
                  <a href="#">love</a>
                </li>
                <li>
                  <a href="#">technology</a>
                </li>
                <li>
                  <a href="#">travel</a>
                </li>
                <li>
                  <a href="#">restaurant</a>
                </li>
                <li>
                  <a href="#">life style</a>
                </li>
                <li>
                  <a href="#">design</a>
                </li>
                <li>
                  <a href="#">illustration</a>
                </li>
              </ul>
            </aside>
            <aside className="single_sidebar_widget instagram_feeds">
              <h4 className="widget_title">Instagram Feeds</h4>
              <ul className="instagram_row flex-wrap">
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/img/post/post_5.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/img/post/post_6.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/img/post/post_7.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/img/post/post_8.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/img/post/post_9.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/img/post/post_10.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="single_sidebar_widget newsletter_widget">
              <h4 className="widget_title">Newsletter</h4>
              <form action="#">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter email'"
                    placeholder="Enter email"
                    required=""
                  />
                </div>
                <button
                  className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================Blog Area =================*/}
  {/* footer_start  */}
  <footer className="footer">
    <div className="footer_top">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-4 ">
            <div className="footer_widget">
              <div className="footer_logo">
                <a href="#">
                  <img src="/img/footer_logo.png" alt="" />
                </a>
              </div>
              <p className="address_text">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore.
              </p>
              <div className="socail_links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-2">
            <div className="footer_widget">
              <h3 className="footer_title">Services</h3>
              <ul className="links">
                <li>
                  <a href="#">Donate</a>
                </li>
                <li>
                  <a href="#">Sponsor</a>
                </li>
                <li>
                  <a href="#">Fundraise</a>
                </li>
                <li>
                  <a href="#">Volunteer</a>
                </li>
                <li>
                  <a href="#">Partner</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-lg-3">
            <div className="footer_widget">
              <h3 className="footer_title">Contacts</h3>
              <div className="contacts">
                <p>
                  +2(305) 587-3407 <br />
                  info@loveuscharity.com <br />
                  Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-lg-3">
            <div className="footer_widget">
              <h3 className="footer_title">Top News</h3>
              <ul className="news_links">
                <li>
                  <div className="thumb">
                    <a href="#">
                      <img src="/img/news/news_1.png" alt="" />
                    </a>
                  </div>
                  <div className="info">
                    <a href="#">
                      <h4>School for African Childrens</h4>
                    </a>
                    <span>Jun 12, 2019</span>
                  </div>
                </li>
                <li>
                  <div className="thumb">
                    <a href="#">
                      <img src="/img/news/news_2.png" alt="" />
                    </a>
                  </div>
                  <div className="info">
                    <a href="#">
                      <h4>School for African Childrens</h4>
                    </a>
                    <span>Jun 12, 2019</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right_text">
      <div className="container">
        <div className="row">
          <div className="bordered_1px " />
          <div className="col-xl-12">
            <p className="copy_right text-center"></p>
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with{" "}
              <i className="ti-heart" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
            <p />
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* footer_end  */}
  {/* JS here */}
  {/*contact js*/}
</>

  )
}

export default Blog 