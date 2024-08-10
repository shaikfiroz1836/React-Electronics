import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home component</h1>

      <marquee direction="scroll" className="infinite bg-info text-white">
        Tech Inside An App. Tech Inside An App. Tech Inside An App. Tech Inside
        An App. Tech Inside An App. Tech Inside An App. Tech Inside An App. Tech
        Inside An App. Tech Inside An App.
      </marquee>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/Photos/TV_Image.png"
                    className="d-block w-100"
                    alt="TV Image"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p>Limited time period offer for 55 inch Sony TV!</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/Photos/smartphone2.png"
                    className="d-block w-100"
                    alt="Smartphone Image"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p>
                      Buy the best smartphones at the lowest price starting at
                      19,999 only.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/Photos/SmartSpeaker.png"
                    className="d-block w-100"
                    alt="Smart Speaker Image"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p>
                      Buy the best-sounding speakers in the market at the lowest
                      price.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/Photos/microwave2.png"
                    className="d-block w-100"
                    alt="Microwave Oven Image"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p>
                      Buy the best branded microwave ovens at the lowest prices.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/Photos/computer2.png"
                    className="d-block w-100"
                    alt="Computer Image"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p>Buy the best budget computers on the current market.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/Photos/CC_Camera2.png"
                    className="d-block w-100"
                    alt="CC Camera Image"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p>
                      Buy the best cameras in the market at the lowest prices.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/Photos/PS5-2.png"
                    className="d-block w-100"
                    alt="PS5 Image"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p>Limited PS5 on sale for a few days only.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/Photos/washing2.png"
                    className="d-block w-100"
                    alt="Washing Machine Image"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p>
                      Buy the best washing machines starting from 25,999.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
