import React from "react";
import "./Home.css";
import Image1 from "../assets/Rectangle 161123944.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";
import Image5 from "../assets/Image5.png";
import Image6 from "../assets/Image6.png";
import PlusImage from "../assets/plus Image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>EMPOWERING THE DIGITAL ERA:</h1>
        {/* <img className="" src={line1} /> */}
        <h2>DECENTRALIZING ENTERTAINMENT</h2>

        <p className="para">
          Join the world's first DePIN: Revolutionizing Content Streaming with
          Faster, Safer <br /> and Cheaper Access
        </p>

        {/* <button className="coming-soon">Coming Soon</button> */}

        <div className="image-grid">
          <img className="img1" src={Image1} alt="People watching TV" />
          <img className="img2" src={Image2} alt="Person using laptop" />
          {/* <button className="coming-soon">Coming Soon</button>
            <img src={Image3} alt="Streaming icon" /> */}
          <div className="divClass">
            <button className="coming-soon">
              Coming Soon{" "}
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{ color: "white" }}
              />
            </button>

            <img src={Image3} alt="Streaming icon" />
          </div>
          <div className="divClass2">
            <img src={Image5} alt="Person with VR headset" />
            <img src={Image4} alt="People in theater" />
          </div>
          <img className="img6" src={Image6} alt="People in theater" />
        </div>

        <div className="stats-home-container">
          <div className="stat-box">
            <div className="plusImage">
              <h3>No. of Node Operators</h3>
              <img src={PlusImage} alt="" />
            </div>
            <p className="stat-number">2000</p>
          </div>
          <div className="stat-box">
            <div className="plusImage">
              <h3>
                Data Transferred in TB <span>(last 30 days)</span>
              </h3>
              <img src={PlusImage} alt="" />
            </div>
            <p className="stat-number">12,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
