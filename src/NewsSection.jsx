// NewsSection.jsx
import React from "react";
import Slider from "react-slick";
import "./NewsSection.css"; // Import the styles
import news1 from "./news1.png"
import news2 from "./news2.png";

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
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const NewsSection = () => {
  return (
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
              <Slider {...newsSettings}>
                {newsItems.map((item, index) => (
                  <div key={index} className="single__blog card-container">
                    <div className="thum">
                      <img src={item.img} alt="news" />
                    </div>
                    <div className="newsinfo">
                      <span>{item.date}</span>
                      <a href="single-blog.html">
                        <h3>{item.title}</h3>
                      </a>
                      <p>{item.desc}</p>
                      <a className="read_more" href="single-blog.html">
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection; 