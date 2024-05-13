import React, { useEffect, useState } from "react";
import "../styles/UpperBody.css";
import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import { DayDealsData } from "../data/DealsofDayData";

export const UpperBody = () => {
  const endTime = new Date("May 14, 2024 00:00:00").getTime();

  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  const gap = endTime - currentTime;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gap / days);
  const remainingHours = Math.floor((gap % days) / hours);
  const remainingMinutes = Math.floor((gap % hours) / minutes);
  const remainingSeconds = Math.floor((gap % minutes) / seconds);

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);
  }, [currentTime]);

  return (
    <div>
      <div className="search-layout">
        <div>
          <div className="search-header">
            <h2>What are you looking for?</h2>
            <i className="fa-solid fa-clipboard-list"></i>
            <p>Order with prescription</p>
            <div>
              <h3>UPLOAD NOW</h3>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <form className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              name="#"
              placeholder="Search for medicine"
              id="#"
            />
            <input type="submit" value="search" />
          </form>
        </div>
      </div>
      <div className="nav-card-layout container">
        <div className="nav-cards">
          <div>
            <Link to="/medicine">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
                alt=""
              />
            </Link>
            <h4>Medicine</h4>
            <p>FLAT 50% OFF</p>
          </div>

          <div>
            <Link to="/labtests">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
                alt=""
              />
            </Link>
            <h4>Lab Tests</h4>
            <p>UPTO 60% OFF</p>
          </div>
          <div>
            <Link to="healthcare-products">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0"
                alt=""
              />
            </Link>
            <h4>Healthcare</h4>
            <p>UPTO 50% OFF</p>
          </div>
          <div>
            <Link to="/health-blogs">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0"
                alt=""
              />
            </Link>
            <h4>Health Blogs</h4>
            <p></p>
          </div>
          <div>
            <img
              src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0"
              alt=""
            />
            <h4>PLUS</h4>
            <p>UPTO 50% OFF</p>
          </div>
          <div>
            <img
              src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0"
              alt=""
            />
            <h4>Offers</h4>
            <p></p>
          </div>
          <div>
            <Link to="/value-store">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0"
                alt=""
              />
            </Link>
            <h4>Value store</h4>
            <p>UPTO 60% OFF</p>
          </div>
        </div>
      </div>
      <div className="banner">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" id="banner1">
              <div>
                <img
                  src="https://cdn01.pharmeasy.in/dam/banner/banner/3820fdf2bc7-25OFFER.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src="https://cdn01.pharmeasy.in/dam/banner/banner/3dbac21f287-jmyj.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item" id="banner2">
              <div>
                <img
                  src="https://cdn01.pharmeasy.in/dam/banner/banner/3dbac21f287-jmyj.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src="https://cdn01.pharmeasy.in/dam/banner/banner/dc74366217d-New_Slipper.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev dark-carousel-controls"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next dark-carousel-controls"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* deals of day */}
      <div className="deals-of-the-day container1">
        <h1 className="title">
          Deals of the day
          <span className="timer">
            <i className="fa-regular fa-clock p-1"></i>
            {remainingHours}:{remainingMinutes}:{remainingSeconds} HOURS LEFT,
            HURRY!
          </span>
          <span className="view-all">View All</span>
        </h1>
        <div className="product-cards">
          {DayDealsData.map((data, index) => (
            <div key={index}>
              <img src={data.img} alt={data.heading} />
              <div>
                <h4 className="name">{data.heading}</h4>
                <p>{data.oldprice}</p>
                <h4>{data.newprice}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
