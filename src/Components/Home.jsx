import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <h1>Home component</h1>

      <marquee direction="scroll" className="infinite bg-info text-white">
        Tech Inside An App. Tech Inside An App. Tech Inside An App.
      </marquee>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={599} width={899}
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
            height={599} width={899}
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
            height={599} width={899}
            src="/Photos/SmartSpeaker.png"
            alt="Smart Speaker Image"
          />
          <Carousel.Caption>
            <p>Buy the best-sounding speakers in the market at the lowest price.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={599} width={899}
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
            height={599} width={899}
            src="/Photos/computer2.png"
            alt="Computer Image"
          />
          <Carousel.Caption>
            <p>
            Buy the best budget computers on the current market
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={599} width={899}
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
            height={599} width={899}
            src="/Photos/PS5-2.png"
            alt="PS5 Image"
          />
          <Carousel.Caption>
            <p>
            Limited PS5 on sale for few days
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={599} width={899}
            src="/Photos/washing2.png"
            alt="Washing Machine Image"
          />
          <Carousel.Caption>
            <p>
            Buy the best Washing machines starting from 25,999
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default Home;
