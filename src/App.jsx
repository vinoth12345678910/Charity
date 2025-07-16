import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick';
import About from './About';
import Blog from './Blog';
import SingleBlog from './Single-blog';
import Contact from './Contact';
import Element from './Element';
import Cause from './Cause';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Routes, Route, Link } from 'react-router-dom';
import news1 from './news1.png'
import news2 from './news2.png';
import "./NewsSection.css";
import NavBar from './NavLink';

function HomeContent() {
  const [counters, setCounters] = useState({
    event1: 0,
    event2: 0,
    event3: 0,
    event4: 0
  });

  // Ref for the donation section
  const donateSectionRef = useRef(null);

  // Handler for nav click
  const handleDonateNavClick = (e) => {
    e.preventDefault();
    if (donateSectionRef.current) {
      donateSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Slower counter animation (4 seconds)
    const animateCounters = () => {
      const targetValues = { event1: 120, event2: 120, event3: 120, event4: 120 };
      const duration = 4000; // 4 seconds
      const steps = 80;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        setCounters({
          event1: Math.floor(targetValues.event1 * progress),
          event2: Math.floor(targetValues.event2 * progress),
          event3: Math.floor(targetValues.event3 * progress),
          event4: Math.floor(targetValues.event4 * progress)
        });
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };
    setTimeout(animateCounters, 1000);
    // Restore sticky navbar on scroll
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

  // Sticky navbar on scroll (from Cause.jsx)
  useEffect(() => {
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

  // News carousel settings
  const newsItems = [
    {
      date: "July 18, 2019",
      title: "Pure Water Is More Essential",
      desc: "The passage experienced a surge in popularity during the 1960s when used it on their sheets, and again.",
      img: news1,
    },
    {
      date: "July 18, 2019",
      title: "Pure Water Is More Essential",
      desc: "The passage experienced a surge in popularity during the 1960s when used it on their sheets, and again.",
      img: news2,
    },
    // Add more items as needed
  ];
  const newsSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      }
    ]
  };
  // Custom style for gap between news boxes and narrower box
  const newsBoxStyle = {
    margin: '0 20px', // bigger gap
    maxWidth: '350px', // slightly shorter box
    width: '80%',
    boxSizing: 'border-box',
  };
  return (
    <>
      <style>{`
        .news-carousel-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .single__blog {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
          padding: 32px 28px;
          min-height: 340px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .horizontal-card {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 0;
          padding: 0;
          background: none;
          border-radius: 12px;
          box-shadow: none;
          margin-bottom: 24px;
          min-height: 200px;
          overflow: hidden;
        }
        .horizontal-card .thum {
          flex: 1 1 50%;
          display: flex;
          align-items: stretch;
          justify-content: stretch;
          padding: 0;
          margin: 0;
        }
        .horizontal-card .thum img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
          display: block;
        }
        .horizontal-card .newsinfo {
          flex: 1 1 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 32px 28px;
          background: #fff;
          border-radius: 0 12px 12px 0;
          box-shadow: none;
          border: none;
        }
        .horizontal-card .newsinfo h3,
        .horizontal-card .newsinfo span,
        .horizontal-card .newsinfo p,
        .horizontal-card .newsinfo a {
          border: none !important;
          box-shadow: none !important;
          background: none !important;
        }
        @media (max-width: 900px) {
          .horizontal-card {
            flex-direction: column;
            min-height: unset;
          }
          .horizontal-card .thum,
          .horizontal-card .newsinfo {
            flex: 1 1 100%;
            width: 100%;
            border-radius: 0;
          }
          .horizontal-card .newsinfo {
            border-radius: 0 0 12px 12px;
            padding: 24px 16px;
          }
        }
        @media (max-width: 991px) {
          .news-carousel-wrapper {
            justify-content: center;
          }
          .single__blog {
            max-width: 95vw !important;
            width: 100% !important;
            margin: 0 auto !important;
          }
        }
      `}</style>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>Charifit</title>
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* <link rel="manifest" href="site.webmanifest"> */}
  <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png" />
  {/* Place favicon.ico in the root directory */}
  {/* CSS here */}
  <link rel="stylesheet" href="/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/css/owl.carousel.min.css" />
  <link rel="stylesheet" href="/css/magnific-popup.css" />
  <link rel="stylesheet" href="/css/font-awesome.min.css" />
  <link rel="stylesheet" href="/css/themify-icons.css" />
  <link rel="stylesheet" href="/css/nice-select.css" />
  <link rel="stylesheet" href="/css/flaticon.css" />
  <link rel="stylesheet" href="/css/gijgo.css" />
  <link rel="stylesheet" href="/css/animate.css" />
  <link rel="stylesheet" href="/css/slicknav.css" />
  <link rel="stylesheet" href="/css/style.css" />
  {/* <link rel="stylesheet" href="css/responsive.css"> */}
  {/*[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]*/}
  {/* header-start */}
  <NavBar handleDonateNavClick={handleDonateNavClick} />
  {/* header-end */}
  {/* slider_area_start */}
  

  <div className="slider_area">
    <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="slider_text ">
              <span>Get Started Today.</span>
              <h3> Help the children When They Need</h3>
              <p>
                With so much to consume and such little time, coming up <br />
                with relevant title ideas is essential
              </p>
              <Link to="/about" className="boxed-btn3">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* slider_area_end */}
  {/* reson_area_start  */}
  <div className="reson_area section_padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section_title text-center mb-55">
            <h3>
              <span>Reason of Helping</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="single_reson">
            <div className="thum">
              <div className="thum_1">
                <img src="/img/help/1.png" alt="" />
              </div>
            </div>
            <div className="help_content">
              <h4>Collecting Fund</h4>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print.
              </p>
              <a href="#" className="read_more">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_reson">
            <div className="thum">
              <div className="thum_1">
                <img src="/img/help/2.png" alt="" />
              </div>
            </div>
            <div className="help_content">
              <h4>Blood Camp</h4>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print.
              </p>
              <a href="#" className="read_more">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_reson">
            <div className="thum">
              <div className="thum_1">
                <img src="/img/help/3.png" alt="" />
              </div>
            </div>
            <div className="help_content">
              <h4>Friendly Volunteer</h4>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print.
              </p>
              <a href="#" className="read_more">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* reson_area_end  */}
  {/* latest_activites_area_start  */}
  <div className="latest_activites_area">
    <div className=" video_bg_1 video_activite  d-flex align-items-center justify-content-center">
      <a
        className="popup-video"
        href="https://www.youtube.com/watch?v=MG3jGHnBVQs"
      >
        <i className="flaticon-ui" />
      </a>
    </div>
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-lg-7">
          <div className="activites_info">
            <div className="section_title">
              <h3>
                {" "}
                <span>Watch Our Latest</span>
                <br />
                Activities
              </h3>
            </div>
            <p className="para_1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua. enim
              minim veniam, quis nostrud exercitation.
            </p>
            <p className="para_2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua. enim
              minim veniam, quis nostrud exercitation. tempor incididunt ut
              labore dolore magna aliqua. enim minim veniam, quis nostrud
              exercitation.
            </p>
            <a href="#" data-scroll-nav={1} className="boxed-btn4">
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* latest_activites_area_end  */}
  {/* popular_causes_area_start  */}
  <div className="popular_causes_area section_padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section_title text-center mb-55">
            <h3>
              <span>Popular Causes</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="causes_active owl-carousel">
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
                <h4>Help us to Send Food</h4>
                <p>
                  The passage is attributed to an unknown typesetter in the
                  century who is thought
                </p>
                <a className="read_more" href="cause_details.html">
                  Read More
                </a>
              </div>
            </div>
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
                <h4>Clothes For Everyone</h4>
                <p>
                  The passage is attributed to an unknown typesetter in the
                  century who is thought
                </p>
                <a className="read_more" href="cause_details.html">
                  Read More
                </a>
              </div>
            </div>
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
                <h4>Water For All Children</h4>
                <p>
                  The passage is attributed to an unknown typesetter in the
                  century who is thought
                </p>
                <a className="read_more" href="cause_details.html">
                  Read More
                </a>
              </div>
            </div>
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
                <h4>Help us to Send Food</h4>
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
  </div>
  {/* popular_causes_area_end  */}
  {/* counter_area_start  */}
  <div className="counter_area">
    <div className="container">
      <div className="counter_bg overlay">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single_counter d-flex align-items-center justify-content-center">
              <div className="icon">
                <i className="flaticon-calendar" />
              </div>
              <div className="events">
                <h3 className="counter">{counters.event1}</h3>
                <p>Finished Event</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single_counter d-flex align-items-center justify-content-center">
              <div className="icon">
                <i className="flaticon-heart-beat" />
              </div>
              <div className="events">
                <h3 className="counter">{counters.event2}</h3>
                <p>Finished Event</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single_counter d-flex align-items-center justify-content-center">
              <div className="icon">
                <i className="flaticon-in-love" />
              </div>
              <div className="events">
                <h3 className="counter">{counters.event3}</h3>
                <p>Finished Event</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single_counter d-flex align-items-center justify-content-center">
              <div className="icon">
                <i className="flaticon-hug" />
              </div>
              <div className="events">
                <h3 className="counter">{counters.event4}</h3>
                <p>Finished Event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* counter_area_end  */}
  {/* our_volunteer_area_start  */}
  <div className="our_volunteer_area section_padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section_title text-center mb-55">
            <h3>
              <span>Our Volunteer</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="single_volenteer">
            <div className="volenteer_thumb">
              <img src="/img/volenteer/1.png" alt="" />
            </div>
            <div className="voolenteer_info d-flex align-items-end">
              <div className="social_links">
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-facebook" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-pinterest" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-linkedin" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-twitter" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="info_inner">
                <h4>Sakil khan</h4>
                <p>Donner</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_volenteer">
            <div className="volenteer_thumb">
              <img src="/img/volenteer/2.png" alt="" />
            </div>
            <div className="voolenteer_info d-flex align-items-end">
              <div className="social_links">
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-facebook" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-pinterest" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-linkedin" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-twitter" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="info_inner">
                <h4>Emran Ahmed</h4>
                <p>Volunteer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_volenteer">
            <div className="volenteer_thumb">
              <img src="/img/volenteer/3.png" alt="" />
            </div>
            <div className="voolenteer_info d-flex align-items-end">
              <div className="social_links">
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-facebook" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-pinterest" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-linkedin" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-twitter" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="info_inner">
                <h4>Sabbir Ahmed</h4>
                <p>Volunteer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* our_volunteer_area_end  */}
  {/* news__area_start  */}
  <div className="news__area section_padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section_title text-center mb-55">
            <h3>
              <span>News &amp; Updates</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="news-carousel-wrapper">
            <div className="news-cards-flex">
              <div className="single__blog card-container horizontal-card">
                <div className="thum">
                  <img src={news1} alt="news" />
                </div>
                <div className="newsinfo">
                  <span>July 18, 2019</span>
                  <h3>Pure Water Is More Essential</h3>
                  <p>The passage experienced a surge in popularity during the 1960s when used it on their sheets, and again.</p>
                  <a className="read_more" href="#">Read More</a>
                </div>
              </div>
              <div className="single__blog card-container horizontal-card">
                <div className="thum">
                  <img src={news2} alt="news" />
                </div>
                <div className="newsinfo">
                  <span>July 18, 2019</span>
                  <h3>Pure Water Is More Essential</h3>
                  <p>The passage experienced a surge in popularity during the 1960s when used it on their sheets, and again.</p>
                  <a className="read_more" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* news__area_end  */}
  <div data-scroll-index={1} className="make_donation_area section_padding" ref={donateSectionRef}>
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
  {/* link that opens popup */}
  {/* JS here */}
  {/*contact js*/}
</>

  )
}

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);
  const [openPages, setOpenPages] = useState(false);

  return (
    <div className="custom-mobile-menu d-block d-lg-none" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <button
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        style={{
          background: 'transparent',
          border: 'none',
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          height: '40px',
        }}
      >
        <div style={{ width: 32, height: 32, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ height: 4, background: '#fff', margin: '4px 0', borderRadius: 2 }}></span>
          <span style={{ height: 4, background: '#fff', margin: '4px 0', borderRadius: 2 }}></span>
          <span style={{ height: 4, background: '#fff', margin: '4px 0', borderRadius: 2 }}></span>
        </div>
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            left: 0,
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 1000,
            borderRadius: 4,
            padding: '10px 0',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, color: '#111' }}>
            <li style={{ padding: '10px 20px', color: '#111' }}><Link to="/" style={{ color: '#111', textDecoration: 'none' }} onClick={() => setOpen(false)}>Home</Link></li>
            <li style={{ padding: '10px 20px', color: '#111' }}><Link to="/about" style={{ color: '#111', textDecoration: 'none' }} onClick={() => setOpen(false)}>About</Link></li>
            <li style={{ padding: '10px 20px', color: '#111', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span><span style={{ color: '#111' }}>Blog</span></span>
              <button
                style={{ background: 'none', border: 'none', padding: 0, fontWeight: 'bold', cursor: 'pointer', color: '#111', fontSize: '1.2em' }}
                onClick={() => setOpenBlog((v) => !v)}
                aria-label="Toggle Blog submenu"
              >
                {openBlog ? '-' : '+'}
              </button>
            </li>
            {openBlog && (
              <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 0 30px', color: '#111' }}>
                <li style={{ padding: '5px 0', color: '#111' }}><Link to="/blog" style={{ color: '#111', textDecoration: 'none' }} onClick={() => setOpen(false)}>Blog</Link></li>
                <li style={{ padding: '5px 0', color: '#111' }}><Link to="/single-blog" style={{ color: '#111', textDecoration: 'none' }} onClick={() => setOpen(false)}>Single Blog</Link></li>
              </ul>
            )}
            <li style={{ padding: '10px 20px', color: '#111', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span><span style={{ color: '#111' }}>Pages</span></span>
              <button
                style={{ background: 'none', border: 'none', padding: 0, fontWeight: 'bold', cursor: 'pointer', color: '#111', fontSize: '1.2em' }}
                onClick={() => setOpenPages((v) => !v)}
                aria-label="Toggle Pages submenu"
              >
                {openPages ? '-' : '+'}
              </button>
            </li>
            {openPages && (
              <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 0 30px', color: '#111' }}>
                <li style={{ padding: '5px 0', color: '#111' }}><Link to="/element" style={{ color: '#111', textDecoration: 'none' }} onClick={() => setOpen(false)}>Elements</Link></li>
                <li style={{ padding: '5px 0', color: '#111' }}><Link to="/cause" style={{ color: '#111', textDecoration: 'none' }} onClick={() => setOpen(false)}>Cause</Link></li>
              </ul>
            )}
            <li style={{ padding: '10px 20px', color: '#111' }}><Link to="/contact" style={{ color: '#111', textDecoration: 'none' }} onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};
export { MobileMenu };
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/single-blog" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/element" element={<Element />} />
        <Route path="/cause" element={<Cause />} />
      </Routes>
    </>
  );
}

export default App;