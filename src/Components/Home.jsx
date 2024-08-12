import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";

const Home = ({ isDarkMode, toggleTheme }) => {
  return (
    <div>
      <div className="marquee-container">
        <div className="marquee-content">
          Welcome to UrbanMart, your one-stop destination for all your shopping
          needs! We offer a wide range of products, from the latest electronics
          to trendy fashion and everyday essentials. At UrbanMart, we are
          committed to providing you with top-quality items at unbeatable
          prices.
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={599}
            width={899}
            src="/Photos/TV_Image.png"
            alt="TV Image"
          />
          <Carousel.Caption>
            <p>Limited time period offer for 55 inch Sony TV!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={599}
            width={899}
            src="/Photos/smartphone2.png"
            alt="Smartphone Image"
          />
          <Carousel.Caption>
            <p>
              Buy the best smartphones at the lowest price starting at 19,999
              only.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={599}
            width={899}
            src="/Photos/SmartSpeaker.png"
            alt="Smart Speaker Image"
          />
          <Carousel.Caption>
            <p>
              Buy the best-sounding speakers in the market at the lowest price.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={599}
            width={899}
            src="/Photos/microwave2.png"
            alt="TV Image"
          />
          <Carousel.Caption>
            <p>Buy the best branded Micro Ovens for the aa time lowest price</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={599}
            width={899}
            src="/Photos/computer2.png"
            alt="Computer Image"
          />
          <Carousel.Caption>
            <p>Buy the best budget computers on the current market</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={599}
            width={899}
            src="/Photos/CC Camers2.png"
            alt="Camers Image"
          />
          <Carousel.Caption>
            <p>Buy the best cameras in the market at all time lowest price</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={599}
            width={899}
            src="/Photos/PS5-2.png"
            alt="PS5 Image"
          />
          <Carousel.Caption>
            <p>Limited PS5 on sale for few days</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={599}
            width={899}
            src="/Photos/washing2.png"
            alt="Washing Machine Image"
          />
          <Carousel.Caption>
            <p>Buy the best Washing machines starting from 25,999</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src="/Photos/IphoneImages/natural-tit.png"
                onClick={() => (window.location.href = "/Iphone")}
                className="card-img-top"
                alt="Iphone 15 pro max Natural Titanium Image"
              />
              <div
                className={`${
                  isDarkMode ? "text-white" : "text-dark"
                } card-body`}
              >
                <h5
                  className={`${
                    isDarkMode ? "text-white" : "text-dark"
                  } card-title`}
                >
                  Iphone 15 pro max Natural Titanium
                </h5>
                <p className="card-text">Buy at the lowest Price</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src="/Photos/Samsung-Galaxy-S24-Ultra.png"
                onClick={() => (window.location.href = "/Samsungs")}
                className="card-img-top"
                alt="Samsung S24 Ultra Image"
              />
              <div className="card-body">
                <h5
                  className={`${
                    isDarkMode ? "text-white" : "text-dark"
                  } card-title`}
                >
                  Samsung S24 Ultra
                </h5>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-dark"
                  } card-text`}
                >
                  Buy at the lowest Price
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src="/Photos/Oneplus Images/oneplus-12-Green.png"
                onClick={() => (window.location.href = "/Oneplus")}
                className="card-img-top"
                alt="Oneplus 12 green Image"
              />
              <div className="card-body">
                <h5
                  className={`${
                    isDarkMode ? "text-white" : "text-dark"
                  } card-body`}
                >
                  Oneplus 12 Green
                </h5>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-dark"
                  } card-text`}
                >
                  Buy at the lowest Price
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
