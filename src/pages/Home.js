
import React from "react";
import {
  FaStar, FaHiking, FaGasPump,
  FaParking, FaFacebook, FaTiktok
} from "react-icons/fa";

import { FiMapPin, FiMap } from "react-icons/fi";
import { BiHotel } from "react-icons/bi";
import { GiMountaintop } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";
import "../styles/Home.css";

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <all>
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
        <div className="rowheader">
          <h1>Favorite Trekking</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            suscipit impedit repellat aliquam unde.
          </p>

        </div>
        <div className="bt2">
          <button>View All</button>
        </div>
      </div>

      <div className="content2">
        <div className="card_backgroud">
          <div className="card cardDetlis zoom poniter">
            <div className="sizeimg imgincard1 ">
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

            </div>
            <div className="detils_place">
              <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia placeat.</p>
            </div>
            <button className="btn_normal">Normal</button>
          </div>

          <div className="card cardDetlis zoom poniter">
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
          <div className="card cardDetlis zoom poniter">
            <div className="sizeimg imgincard3"></div>
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
            <button className="btn_Hard">Hard</button>
          </div>

        </div>

      </div>
      <div className="content3">
        <div className="textbox">
          <h1>service for you</h1>
          <p>Thailand Mountain Trail has created TMT.1, the longest hiking footpath of Thailand. The route links Chiang Mai city to the biggest mountain range of the country, Chiang Dao. Through wild jungle, stunning rice paddies and beautiful summits.</p>
          <button className="btn_moredetiles">Explore More</button>
        </div>
        <div className="container_icon">
          <div className="box">
            <button className="iconbtn poniter">
              <FaHiking className="icon" />
              <h3 className="font_icon">Trakking</h3></button>
            <button className="iconbtn poniter">
              <FaGasPump className="icon" />
              <h3 className="font_icon">Gas Station</h3></button>
            <button className="iconbtn poniter">
              <FaParking className="icon" />
              <h3 className="font_icon">Parking Area</h3></button>
            <button className="iconbtn poniter">
              <FiMap className="icon" />
              <h3 className="font_icon">Map GIS</h3></button>
            <button className="iconbtn poniter">
              <BiHotel className="icon" />
              <h3 className="font_icon">Hotel</h3></button>
            <button className="iconbtn poniter">
              <GiMountaintop className="icon" />
              <h3 className="font_icon">Mountain</h3></button>

          </div>

        </div>
      </div>
      <div className="content4">
        <div className="vdo_con4">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XALYHA2OUSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="textcon4">
          <h1>Trekking for you</h1>
          <p>Thailand Mountain Trail has created TMT.1, the longest hiking footpath of Thailand. The route links Chiang Mai city to the biggest mountain range of the country, Chiang Dao. Through wild jungle, stunning rice paddies and beautiful summits, TMT.1 goes through remote hill-tribe areas such as the Karen valleys or the Lahu and Hmong high countries. This is alongside this route we organize our trekking, running and cycling trips.</p>
          <button className="btn_moredetiles">Explore More</button>
        </div>
      </div>
      <div className="footer">
        <div className="leftMenu">
          <h1>Trekking</h1>
          <p>Our vision is to provide convenience and help increase your sales business.</p>
          <div className="group_Link">
            <Link to="/" className="icon_footer shapLink"><FaFacebook /></Link>
            <Link to="/" className="icon_footer shapLink"><GrInstagram /></Link>
            <Link to="/" className="icon_footer shapLink"><FaTiktok /></Link>
          </div>
        </div>
        <div className="About_list">
          <h2>About</h2>
          <Link to="/" className="Link_about">how it work</Link>
          <Link to="/" className="Link_about" >Featured</Link>
        </div>
        <div className="Community_list">
          <h2>Community</h2>
          <Link to="/" className="Link_comm" >Events</Link>
          <Link to="/" className="Link_comm" >Blog</Link>
        </div>
        <div className="Socials_list">
          <h2>Socials</h2>
          <Link to="/" className="Link_socials">Facebook</Link><br />
          <Link to="/" className="Link_socials">Instagram</Link><br />
          <Link to="/" className="Link_socials">Discord</Link>
        </div>

      </div>


    </all>
  );
};

export default Home;

