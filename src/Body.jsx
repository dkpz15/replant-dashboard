import React from "react";
import { useState } from "react";
import "./body.css";
import video from "./video/video-leaf.mp4";
import profile from "./img/profile.jpeg";
import plantStat from "./img/plant-stat.png";
import lamp from "./img/lamp.png";
import plant1 from "./img/plant1.png";
import plant2 from "./img/plant2.png";
import plant3 from "./img/plant3.png";
import plant4 from "./img/plant4.png";
import person1 from "./img/person-one.png";
import person2 from "./img/person-two.png";
import person3 from "./img/person-three.png";
import person4 from "./img/person-four.png";
import person5 from "./img/person-five.png";

function HeartClick() {
  const [isActive, setIsActive] = useState(false);

  const handleHeartClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <i
      className={isActive ? "fa-solid fa-heart" : "fa-regular fa-heart"}
      onClick={handleHeartClick}
    ></i>
  );
}

function Body() {
  return (
    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-11 col-sm-11 div-body">
      <div className="div-between d-flex justify-content-between">
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
          <h5 className="h5-replant">Welcome to RePlant</h5>
          <p className="p-welcome-back">Hello Darren, Welcome back!</p>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
          <input
            type="search"
            className="input-search mt-2"
            placeholder="Search Here"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
          <div className="me-3 d-flex justify-content-end">
            <div className="div-top bg-white">
              <i className="fa-regular fa-comment-dots text-center text-black"></i>
            </div>
            <div className="div-top bg-white">
              <i className="fa-regular fa-bell text-center text-black"></i>
            </div>
            <div className="div-top bg-white">
              <img src={profile} alt="" className="img-profile" />
            </div>
          </div>
        </div>
      </div>
      <div className="row div-video-plant">
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 mt-4">
          <video
            className="video-leaf w-100"
            height={210}
            src={video}
            autoPlay
            loop
            muted
          ></video>
          <div className="div-inside-video position-absolute">
            <h4 className="p-long-big text-white fw-bold">
              Create and sell extraordinary products
            </h4>
            <p className="p-long text-white mt-3 ms-3">
              The world's fast growing industry today are natural made products
              and the variations are enormous!
            </p>
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-4">
                <button className="button-explore-more">Explore More</button>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-4">
                <button className="button-top-sellers">Top Sellers</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-4 d-flex div-stat-left">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-10">
            <div className="div-my-stat">
              <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-9">
                  <h5>My Stat</h5>
                  <div className="d-flex justify-content-start">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <p className="mt-2">Today</p>
                      <p className="p-orders p-orders-margin-top">10 Orders</p>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 div-plant-stat-right">
                      <p className="mt-2">This Month</p>
                      <p className="p-orders">175 Orders</p>
                    </div>
                  </div>
                  <a href="#" className="text-black position-absolute">
                    Go to my orders
                    <i className="fa-solid fa-arrow-right text-black"></i>
                  </a>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-3">
                  <img src={plantStat} alt="" className="img-plant-stat" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <img src={lamp} alt="" className="img-lamp" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <p className="p-listings">My Listings</p>
          <div className="d-flex justify-content-end">
            <button className="button-see-all button-margin-top me-3">
              See All <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="div-plant-card d-flex">
            <div className="plant-card">
              <div className="div-heart d-flex justify-content-end">
                {HeartClick()}
              </div>
              <img
                src={plant1}
                alt=""
                className="mx-auto d-block img-plant-one"
              />
              <p className="p-plant-one text-center mt-1">Swiss Cheese</p>
            </div>
            <div className="plant-card">
              <div className="div-heart d-flex justify-content-end">
                {HeartClick()}
              </div>
              <img
                src={plant2}
                alt=""
                className="mx-auto d-block img-plant-two"
              />
              <p className="p-plant-two text-center">Offidix Faux</p>
            </div>
            <div className="plant-card">
              <div className="div-heart d-flex justify-content-end">
                {HeartClick()}
              </div>
              <img
                src={plant3}
                alt=""
                className="mx-auto d-block img-plant-three"
              />
              <p className="p-plant-three text-center">Zanzibar Gem</p>
            </div>
            <div className="plant-card">
              <div className="div-heart d-flex justify-content-end">
                {HeartClick()}
              </div>
              <img
                src={plant4}
                alt=""
                className="mx-auto d-block img-plant-four"
              />
              <p className="p-plant-four text-center">Aloe Vera</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <p className="p-listings-two">Top Sellers</p>
              <div className="d-flex justify-content-end">
                <button className="button-see-all me-2 margin-to-top-one">
                  See All <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="div-sellers div-margin-left-two">
                <div className="d-flex justify-content-around">
                  <div className="div-circle-person d-flex">
                    <img src={person1} alt="" />
                    <img src={person2} alt="" />
                    <img src={person3} alt="" />
                    <img src={person4} alt="" />
                  </div>
                  <div className="div-line-center">
                    <div></div>
                  </div>
                  <div className="div-plant-sold">
                    <p className="p-plant-sold">14.556 Plant sold</p>
                    <div className="d-flex div-sellers-days">
                      <p className="p-sellers">21 Sellers</p>
                      <p className="p-days ms-3">7 Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 div-to-margin-top">
              <p className="p-listings-three">Featured Sellers</p>
              <div className="d-flex justify-content-end">
                <button className="button-see-all margin-to-top-two">
                  See All <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="div-sellers div-margin-left">
                <div className="d-flex justify-content-around">
                  <div className="div-circle-person d-flex">
                    <img src={person3} alt="" />
                    <img src={person1} alt="" />
                    <img src={person4} alt="" />
                    <img src={person2} alt="" />
                  </div>
                  <div className="div-line-center">
                    <div></div>
                  </div>
                  <div className="div-plant-sold">
                    <p className="p-plant-sold">28.556 Plant sold</p>
                    <div className="d-flex div-sellers-days">
                      <p className="p-sellers">26 Sellers</p>
                      <p className="p-days ms-3">31 Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 div-to-margin-top-two">
          <p className="p-listings">Recent Activity</p>
          <div className="d-flex justify-content-end">
            <button className="button-see-all button-margin-top-two me-3">
              See All <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="col-xxl-12">
            <div className="div-people-ordered">
              <img src={person2} alt="" />
              <p className="position-absolute">Sevy Ivana</p>
              <span className="span-people position-absolute">
                Ordered a new plant
              </span>
              <div className="d-flex justify-content-end">
                <span className="span-time position-absolute me-3">
                  2 min ago
                </span>
              </div>
            </div>
            <div className="div-people-ordered margin-for-people">
              <img src={person4} alt="" />
              <p className="position-absolute">Martin Rex</p>
              <span className="span-people position-absolute">
                Ordered a new plant
              </span>
              <div className="d-flex justify-content-end">
                <span className="span-time position-absolute me-3">
                  2 min ago
                </span>
              </div>
            </div>
            <div className="div-people-ordered margin-for-people">
              <img src={person1} alt="" />
              <p className="position-absolute">Alexandra Reva</p>
              <span className="span-people position-absolute">
                Ordered a new plant
              </span>
              <div className="d-flex justify-content-end">
                <span className="span-time position-absolute me-3">
                  3 min ago
                </span>
              </div>
            </div>
            <div className="div-people-ordered margin-for-people">
              <img src={person3} alt="" />
              <p className="position-absolute">Ariana Arizona</p>
              <span className="span-people position-absolute">
                Ordered a new plant
              </span>
              <div className="d-flex justify-content-end">
                <span className="span-time position-absolute me-3">
                  4 min ago
                </span>
              </div>
            </div>
            <div className="div-people-ordered margin-for-people">
              <img src={person5} alt="" />
              <p className="position-absolute">Mark Devons</p>
              <span className="span-people position-absolute">
                Ordered a new plant
              </span>
              <div className="d-flex justify-content-end">
                <span className="span-time position-absolute me-3">
                  7 min ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
