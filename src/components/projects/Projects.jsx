import React from "react";
import "./project.scss";
import Title from "../title/Title";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="project" id="Projects">
      <div className="container w-75">
        <div className="project__top mb-5">
          <Title
            name={"My Projects"}
            desc={
              "A showcase of my diverse projects, all built with React's cutting-edge capabilities. Witness the power of React in action as it brings web applications to life with interactivity and elegance. "
            }
          />
        </div>
        <div className="project__data">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="project__data__item  my-0 p-2">
                <div className="project__data__item__left">
                  <div className="top">
                    <h4>Farm Mart: Online Marketplace</h4>
                    <p>
                      Welcome to FarmMart: Online Marketplace, where agriculture
                      meets e-commerce. In a world increasingly connected
                      through technology, our project bridges the gap between
                      farmers and consumers, offering a digital platform that
                      revolutionizes the way fresh produce is bought and sold.
                      
                      FarmMart provides a seamless and convenient experience for
                      both farmers and buyers, connecting them in a virtual
                      marketplace that promotes local, sustainable, and
                      accessible food sources. Explore how our platform empowers
                      farmers to reach a broader customer base while enabling
                      consumers to access farm-fresh products with ease. Join us
                      on this journey to transform the agricultural landscape,
                      supporting local farmers and fostering a more sustainable
                      and transparent food supply chain. Discover the features
                      and benefits of FarmMart: Online Marketplace as we
                      redefine the future of agriculture and online commerce."
                    </p>
                  </div>
                  <div className="bottom">
                    <a href={"https://sthajeevan.com.np"} target="_blank">
                      <button>View Live</button>
                    </a>
                    <a
                      href={"https://github.com/Jeevan1/FarmManagement"}
                      target="_blank"
                    >
                      <button>Source Code</button>
                    </a>
                  </div>
                </div>
                <div className="project__data__item__right">
                  <div className="img border">
                    <img src="./img/bg/farm.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project__data__item  my-4 p-2">
                <div className="project__data__item__left pe-3">
                  <div className="top">
                    <h4>BusinessBoard: Professional Business Management Dashboard</h4>
                    <p>
                      Welcome to the Business Dashboard project, where
                      data-driven decision-making meets streamlined operations.
                      Our project is designed to provide businesses with a
                      powerful tool to visualize and analyze key metrics,
                      helping you gain valuable insights into your company's
                      performance. The Business Dashboard offers a comprehensive
                      view of critical business data, from sales and financial
                      data to marketing analytics and customer insights. With
                      user-friendly interfaces and customizable widgets, our
                      dashboard simplifies complex data into actionable
                      information, empowering you to make informed choices that
                      drive growth and success. Join us on this journey to
                      transform your business operations by harnessing the power
                      of data. Explore the features and capabilities of our
                      Business Dashboard and unlock the potential to enhance
                      efficiency, drive innovation, and achieve your business
                      goals.
                    </p>
                  </div>
                  <div className="bottom">
                    <a
                      href={"https://businessboard.netlify.app"}
                      target="_blank"
                    >
                      <button>View Live</button>
                    </a>
                    <a
                      href={"https://github.com/Jeevan1/oneups"}
                      target="_blank"
                    >
                      <button>Source Code</button>
                    </a>
                  </div>
                </div>
                <div className="project__data__item__right">
                  <div className="img border">
                    <img src="./img/bg/oneup.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project__data__item  my-4 p-2">
                <div className="project__data__item__left pe-3">
                  <div className="top">
                    <h4>GEOSTORE: e-Commerce Platform</h4>
                    <p>
                      Welcome to Geomart, your gateway to an exceptional online
                      shopping experience. Geomart is not just another
                      e-commerce site; it's a destination where convenience,
                      quality, and innovation converge to redefine your shopping
                      journey. At Geomart, we're committed to offering you a
                      curated selection of products that cater to your diverse
                      needs. Whether you're looking for fashion, electronics,
                      home essentials, or more, our platform provides a seamless
                      shopping experience, complete with user-friendly features,
                      secure transactions, and personalized recommendations.
                      Join us on this exciting journey through the world of
                      online shopping. Explore the endless possibilities that
                      Geomart has to offer, as we strive to enhance your
                      lifestyle with a click. Discover our unique features and
                      exceptional customer service as we pave the way for the
                      future of e-commerce.
                    </p>
                  </div>
                  <div className="bottom">
                    <a href={"https://geostorenp.netlify.app"} target="_blank">
                      <button>View Live</button>
                    </a>
                    <a
                      href={"https://github.com/Jeevan1/geostore"}
                      target="_blank"
                    >
                      <button>Source Code</button>
                    </a>
                  </div>
                </div>
                <div className="project__data__item__right">
                  <div className="img border">
                    <img src="./img/bg/geostore.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Projects;
