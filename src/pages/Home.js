import { Rate } from "antd";
import React from "react";
import { Col, Row } from "react-grid-system";
import { EnvironmentOutlined } from "@ant-design/icons";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

import { MdBed } from "react-icons/md";
import { BsMap } from "react-icons/bs";
import { GiMountainCave } from "react-icons/gi";
import { IoMdCar } from "react-icons/io";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div class="header ">
        <h1>Trekking in EEC</h1>
        <div className="ph">
          <h3 >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            est sit illo! Repudiandae, libero quidem. Omnis laborum quod, tenetur
            rerum, harum nisi dolor deserunt perferendis quaerat nostrum quia,
            aspernatur odit! Hiking is a long, vigorous walk, usually on trails or
            footpaths in the countryside.
          </h3>
        </div>
        <div className="btn_titlse">
          <button className="bt1">details more</button>
        </div>

      </div>
      <div class="content1">
        <Row>
          <Col sm={4}>
            <div className="rowheader">
              <h1>Trekking for you</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                suscipit impedit repellat aliquam unde.
              </p>
            </div>
          </Col>
          <Col>
            <div className="bt2">
              <button>View All</button>
            </div>
          </Col>
        </Row>
        <div className="content2">
          <div className="card_backgroud">
            <div className="card cardDetlis zoom">
              <div className="sizeimg imgincard1">
              </div>
              <h3 className="texttitle textponsition">During several </h3>
              <div className="Loction_box ">
                <i><FiMapPin className="pin_icon" /></i><p>Barcelona, España</p>
              </div>
              <div className="iconStar">
                <i><FaStar className="star_detilse"/></i>
                <i><FaStar className="star_detilse"/></i>
                <i><FaStar className="star_detilse"/></i>
                <i><FaStar className="star_detilse"/></i>
                
              </div>
              <div className="detils_place">
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia placeat.</p>
              </div>
              <button className="btn_normal">Normal</button>
            </div>
            
            <div className="card cardDetlis zoom">
              <div className="sizeimg imgincard2">
              </div>
              <h3 className="texttitle textponsition">During several </h3>
              <div className="Loction_box ">
                <i><FiMapPin className="pin_icon" /></i><p>Barcelona, España</p>
              </div>
              <div className="iconStar">
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
              </div>
              <div className="detils_place">
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia placeat.</p>
              </div>
              <button className="btn_Easy">Easy</button>
            </div>
            <div className="card cardDetlis zoom">
              <div className="sizeimg imgincard3"></div>
              <h3 className="texttitle textponsition">During several </h3>
              <div className="Loction_box ">
                <i><FiMapPin className="pin_icon" /></i><p>Barcelona, España</p>
              </div>
              <div className="iconStar">
                <i><FaStar className="star_detilse"/></i>
                <i><FaStar className="star_detilse"/></i>
                <i><FaStar className="star_detilse"/></i>
                <i><FaStar className="star_detilse"/></i>
                <i><FaStar className="star_detilse"/></i>
              </div>
              <div className="detils_place">
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia placeat.</p>
              </div>
              <button className="btn_Hard">Hard</button>
            </div>
            
          </div>

        </div>
        <div className="content3">
            <div className="textbox">
              <h1>trekking for you</h1>
              <p>Thailand Mountain Trail has created TMT.1, the longest hiking footpath of Thailand. The route links Chiang Mai city to the biggest mountain range of the country, Chiang Dao. Through wild jungle, stunning rice paddies and beautiful summits.</p>
                
            </div>
        </div>
        <div className="content4">

        </div>

      </div>
    </>
  );
};

export default Home;

