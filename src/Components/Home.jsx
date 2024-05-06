import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home component</h1>

      <marquee Direction="scroll" class="infinite bg-info text-white">Tech Inside An App.Tech Inside An App.Tech Inside An App.Tech Inside An App.Tech Inside An App.Tech Inside An App.Tech Inside An App.Tech Inside An App.Tech Inside An App.</marquee>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active" onclick="window.location.href='./Television.html'">
                        <img  src="./TV_Image.png" class="d-block w-100" alt="Tv1 Image"/>
                        <div class="carousel-caption d-none d-md-block">
                          
                          <p>Limited time period offer for 55 inch Sony TV!</p>
                        </div>
                      </div>
                      <div class="carousel-item" onclick="window.location.href='./smartphones.html'">
                        <img  src="./smartphone2.png" class="d-block w-100" alt="Smartphones Image"/>
                        <div class="carousel-caption d-none d-md-block">
                          
                          <p>Buy the best smartphones at lowest price starting at 19,999 only</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img  src="./SmartSpeaker.png" class="d-block w-100" alt="SmartSpeaker Image"/>
                        <div class="carousel-caption d-none d-md-block">
                         
                          <p>Buy the best sounded speakers in the market at lowest price</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img  src="./microwave2.png" class="d-block w-100" alt="Microwave Oven Image"/>
                        <div class="carousel-caption d-none d-md-block">
                          
                          <p>Buy the best branded Micro Ovens for the aa time lowest price</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img  src="./computer2.png" class="d-block w-100" alt="Computer Image"/>
                        <div class="carousel-caption d-none d-md-block">
                         
                          <p>Buy the best budget computers on the current market</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img  src="./CC Camers2.png" class="d-block w-100" alt="CC Camera Image"/>
                        <div class="carousel-caption d-none d-md-block">
                          
                          <p>Buy the best cameras in the market at all time lowest price</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img  src="./PS5-2.png" class="d-block w-100" alt="Ps5 Image"/>
                        <div class="carousel-caption d-none d-md-block">
                          
                          <p>Limited PS5 on sale for few days</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img  src="./washing2.png" class="d-block w-100" alt="Washing Machine Image"/>
                        <div class="carousel-caption d-none d-md-block">
                         
                          <p>Buy the best Washing machines starting from 25,999</p>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>            
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
