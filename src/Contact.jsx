import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavLink';
const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    number: '',
    message: ''
  });
  const [status, setStatus] = useState('');

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    try {
      const response = await fetch('/src/contact_process.php', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', subject: '', number: '', message: '' });
      } else {
        setStatus('Error sending message.');
      }
    } catch (err) {
      setStatus('Error sending message.');
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
<NavBar/>
  {/* header-end */}
  {/* bradcam_area_start  */}
  <div className="bradcam_area breadcam_bg overlay d-flex align-items-center justify-content-center">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="bradcam_text text-center">
            <h3>Contact</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* bradcam_area_end  */}
  {/* ================ contact section start ================= */}
  <section className="contact-section">
    <div className="container">
      <div className="d-none d-sm-block mb-5 pb-4">
        <div
          id="map"
          style={{ height: 480, position: "relative", overflow: "hidden" }}
        />
      </div>
      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="col-lg-8">
          <form className="form-contact contact_form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <textarea
                    className="form-control w-100"
                    name="message"
                    id="message"
                    cols={30}
                    rows={9}
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control valid"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control valid"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="subject"
                    id="subject"
                    type="text"
                    placeholder="Enter Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="number"
                    id="number"
                    type="text"
                    placeholder="Phone"
                    value={form.number}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="button button-contactForm boxed-btn">
                Send
              </button>
              <div style={{ marginTop: '10px', color: status === 'Message sent!' ? 'green' : 'red' }}>{status}</div>
            </div>
          </form>
        </div>
        <div className="col-lg-3 offset-lg-1">
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-home" />
            </span>
            <div className="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-tablet" />
            </span>
            <div className="media-body">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-email" />
            </span>
            <div className="media-body">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ================ contact section end ================= */}
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

export default Contact 