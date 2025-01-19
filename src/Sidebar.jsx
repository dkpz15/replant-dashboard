import React from "react";
import logo from "./img/logo-plant.png";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-1 col-sm-1">
      <div className="sidebar bg-white">
        <div className="col-xxl-12">
          <span className="span-logo">
            <img src={logo} className="logo-plant mt-3" alt="" />
            <h6 className="logo-name">RePlant</h6>
          </span>
          <p className="p-menu mt-4 ms-4">QUICK MENU</p>
          <ul>
            <li>
              <i
                className="fa-solid fa-table-columns"
                style={{ fontSize: "12px" }}
              ></i>
              <span className="span-navbar">Dashboard</span>
            </li>
            <li>
              <i
                className="fa-solid fa-list-check"
                style={{ fontSize: "12px" }}
              ></i>
              <span className="span-navbar">My Orders</span>
            </li>
            <li>
              <i className="fa-regular fa-compass"></i>
              <span className="span-navbar">Explore</span>
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-table-cells"></i>
              <span className="span-navbar">Products</span>
            </li>
          </ul>
          <p className="p-menu mt-5 ms-4">SETTINGS</p>
          <ul>
            <li>
              <i className="fa-solid fa-chart-simple"></i>
              <span className="span-navbar">Charts</span>
            </li>
            <li>
              <i
                className="fa-solid fa-arrow-trend-up"
                style={{ fontSize: "11px" }}
              ></i>
              <span className="span-navbar">Trends</span>
            </li>
            <li>
              <i className="fa-regular fa-address-book"></i>
              <span className="span-navbar">Contact</span>
            </li>
            <li>
              <i className="fa-solid fa-book-open-reader"></i>
              <span className="span-navbar">Billing</span>
            </li>
          </ul>
        </div>
        <div className="div-help-center">
          <div className="row justify-content-center">
            <div className="col-xxl-2 col-xl-2 col-lg-2">
              <div className="circle-bg-white d-flex justify-content-center">
                <div className="circle-bg-lime">
                  <p className="p-question text-center">?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="help-center">
                <div className="div-circle-one"></div>
                <div className="div-circle-two"></div>
                <p className="p-help-center text-center">Help Center</p>
                <p className="p-having-trouble text-center">
                  Having trouble in RePlant, please contact us from our more
                  questions.
                </p>
                <button className="button-help-center mx-auto d-block">
                  Go to help center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
