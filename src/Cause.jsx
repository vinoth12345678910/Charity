import React, { useRef } from 'react';
import NavBar from './NavLink';
const Cause = () => {
  // Ref for the donation section
  const donateSectionRef = useRef(null);

  // Handler for nav click
  const handleDonateNavClick = (e) => {
    e.preventDefault();
    if (donateSectionRef.current) {
      donateSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
<NavBar handleDonateNavClick={handleDonateNavClick} />
  {/* header-end */}
  {/* bradcam_area_start  */}
  <div className="bradcam_area breadcam_bg overlay d-flex align-items-center justify-content-center">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="bradcam_text text-center">
            <h3>Causes</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* bradcam_area_end  */}
  {/* popular_causes_area_start  */}
  <div className="popular_causes_area pt-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single_cause">
            <div className="thumb">
              <img src="/img/causes/1.png" alt="" />
            </div>
            <div className="causes_content">
              <div className="custom_progress_bar">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow={30}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="progres_count">30%</span>
                  </div>
                </div>
              </div>
              <div className="balance d-flex justify-content-between align-items-center">
                <span>Raised: $5000.00 </span>
                <span>Goal: $9000.00 </span>
              </div>
              <a href="cause_details.html">
                <h4>Help us to Send Food</h4>
              </a>
              <p>
                The passage is attributed to an unknown typesetter in the
                century who is thought
              </p>
              <a className="read_more" href="cause_details.html">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_cause">
            <div className="thumb">
              <img src="/img/causes/2.png" alt="" />
            </div>
            <div className="causes_content">
              <div className="custom_progress_bar">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow={30}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="progres_count">30%</span>
                  </div>
                </div>
              </div>
              <div className="balance d-flex justify-content-between align-items-center">
                <span>Raised: $5000.00 </span>
                <span>Goal: $9000.00 </span>
              </div>
              <a href="cause_details.html">
                {" "}
                <h4>Clothes For Everyone</h4>
              </a>
              <p>
                The passage is attributed to an unknown typesetter in the
                century who is thought
              </p>
              <a className="read_more" href="cause_details.html">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_cause">
            <div className="thumb">
              <img src="/img/causes/3.png" alt="" />
            </div>
            <div className="causes_content">
              <div className="custom_progress_bar">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow={30}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="progres_count">30%</span>
                  </div>
                </div>
              </div>
              <div className="balance d-flex justify-content-between align-items-center">
                <span>Raised: $5000.00 </span>
                <span>Goal: $9000.00 </span>
              </div>
              <a href="cause_details.html">
                {" "}
                <h4>Water For All Children</h4>
              </a>
              <p>
                The passage is attributed to an unknown typesetter in the
                century who is thought
              </p>
              <a className="read_more" href="cause_details.html">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_cause">
            <div className="thumb">
              <img src="/img/causes/4.png" alt="" />
            </div>
            <div className="causes_content">
              <div className="custom_progress_bar">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow={30}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="progres_count">30%</span>
                  </div>
                </div>
              </div>
              <div className="balance d-flex justify-content-between align-items-center">
                <span>Raised: $5000.00 </span>
                <span>Goal: $9000.00 </span>
              </div>
              <a href="cause_details.html">
                <h4>Help us to Send Food</h4>
              </a>
              <p>
                The passage is attributed to an unknown typesetter in the
                century who is thought
              </p>
              <a className="read_more" href="cause_details.html">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_cause">
            <div className="thumb">
              <img src="/img/causes/5.png" alt="" />
            </div>
            <div className="causes_content">
              <div className="custom_progress_bar">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow={30}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="progres_count">30%</span>
                  </div>
                </div>
              </div>
              <div className="balance d-flex justify-content-between align-items-center">
                <span>Raised: $5000.00 </span>
                <span>Goal: $9000.00 </span>
              </div>
              <a href="cause_details.html">
                <h4>Clothes For Everyone</h4>
              </a>
              <p>
                The passage is attributed to an unknown typesetter in the
                century who is thought
              </p>
              <a className="read_more" href="cause_details.html">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_cause">
            <div className="thumb">
              <img src="/img/causes/6.png" alt="" />
            </div>
            <div className="causes_content">
              <div className="custom_progress_bar">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow={30}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="progres_count">30%</span>
                  </div>
                </div>
              </div>
              <div className="balance d-flex justify-content-between align-items-center">
                <span>Raised: $5000.00 </span>
                <span>Goal: $9000.00 </span>
              </div>
              <a href="cause_details.html">
                <h4>Water For All Children</h4>
              </a>
              <p>
                The passage is attributed to an unknown typesetter in the
                century who is thought
              </p>
              <a className="read_more" href="cause_details.html">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* popular_causes_area_end  */}
  <div ref={donateSectionRef} data-scroll-index={1} className="make_donation_area section_padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section_title text-center mb-55">
            <h3>
              <span>Make a Donation</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form action="#" className="donation_form">
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="single_amount">
                  <div className="input_field">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          $
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="40,200"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="single_amount">
                  <div className="fixed_donat d-flex align-items-center justify-content-between">
                    <div className="select_prise">
                      <h4>Select Amount:</h4>
                    </div>
                    <div className="single_doonate">
                      <input
                        type="radio"
                        id="blns_1"
                        name="radio-group"
                        defaultChecked=""
                      />
                      <label htmlFor="blns_1">10</label>
                    </div>
                    <div className="single_doonate">
                      <input
                        type="radio"
                        id="blns_2"
                        name="radio-group"
                        defaultChecked=""
                      />
                      <label htmlFor="blns_2">30</label>
                    </div>
                    <div className="single_doonate">
                      <input
                        type="radio"
                        id="Other"
                        name="radio-group"
                        defaultChecked=""
                      />
                      <label htmlFor="Other">Other</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="donate_now_btn text-center">
            <a href="#" className="boxed-btn4">
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
                      <img src="/news_1.png" alt="" />
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
                      <img src="/news_2.png" alt="" />
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
  {/* link that opens popup */}
  {/* JS here */}
  {/*contact js*/}
</>

  );
};

export default Cause; 