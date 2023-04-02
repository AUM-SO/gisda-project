/* eslint-disable react/jsx-pascal-case */
import React/* , { useEffect, useState } */ from "react";
import {
  FaStar, FaHiking, FaGasPump,
  FaParking
} from "react-icons/fa";

import { FiMapPin, FiMap } from "react-icons/fi";
import { BiHotel } from "react-icons/bi";
import { GiMountaintop } from "react-icons/gi";
/* import { GrInstagram } from "react-icons/gr"; */


import "../styles/Home.css";
import Footer_com from '../components/Footer'
/* import { Link } from 'react-router-dom'; */

/* import components  */
import ScrollToTopButton from '../components/ScrollToTopButton';

/* import ripples */
import Ripples from 'react-ripples'

/* Function ScrollToTopButton */




const Home = () => {
  
  /* const [cards, setCards] = useState([]);

  const fetchCardsData = () => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCards(data.results);
        // console.log(data)
        // console.log(cards.results.description)
      });
  };

  useEffect(() => {
    fetchCardsData();
  }, []); */

  return (
    <>
      <div class="header ">
        <img src={require('../img/header.jpg')} alt="" className="imghaeder" />
        <div className="container_header">
          <h1>Trekking in EEC</h1>
          <p >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatem est sit illo! Repudiandae, libero quidem. Omnis laborum quod, tenetur rerum,
            harum nisi dolor deserunt perferendis quaerat nostrum quia, aspernatur odit!
          </p>

          <div className="btn_titlse">
            <Ripples className="zoom">
              <button className="bt1 btn-primary ">details more</button>
            </Ripples>
          </div>
        </div>

      </div>
      <div class="content1">
        <div className="rowheader">
          <div className="textbox_comtent1">
            <h1>Favorite Trekking</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              suscipit impedit repellat aliquam unde.
            </p>
          </div>
        </div>
        <div className="bt2">
          <button>View All</button>
        </div>
      </div>

      <div className="content2">
        <div className="card_backgroud">
          <div className="cardDetlis zoom poniter">
            <div className="imgincard ">
              <img src={require("../img/mountain1.jpg")} alt="" className="imgcard" />
            </div>
            <div className="container_text">
              <h3 className="texttitle textponsition">ผาหินกูบ </h3>
              <div className="Loction_box ">
                <i><FiMapPin className="pin_icon" /></i><p>Barcelona, España</p>
              </div>
              <div className="detils_place">
                <p className="p_card">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="iconStar">
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
              </div>
              <button className="btn_Easy">Easy</button>
            </div>

          </div>
        </div>

        <div className="card_backgroud">
          <div className="cardDetlis zoom poniter">
            <div className="imgincard ">
              <img src={require("../img/mountain2.jpg")} alt="" className="imgcard" />
            </div>
            <div className="container_text">
              <h3 className="texttitle textponsition">ผาหินกูบ </h3>
              <div className="Loction_box ">
                <i><FiMapPin className="pin_icon" /></i><p>Barcelona, España</p>
              </div>

              <div className="detils_place">
                <p className="p_card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, autem.</p>
              </div>
              <div className="iconStar">
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
              </div>
              <button className="btn_normal">Normal</button>
            </div>
          </div>
        </div>

        <div className="card_backgroud">
          <div className="cardDetlis zoom poniter">
            <div className="imgincard ">
              <img src={require("../img/mountain5.jpg")} alt="" className="imgcard" />
            </div>
            <div className="container_text">
              <h3 className="texttitle textponsition">ผาหินกูบ </h3>
              <div className="Loction_box ">
                <i><FiMapPin className="pin_icon" /></i><p>Barcelona, España</p>
              </div>
              <div className="detils_place">
                <p className="p_card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni!</p>
              </div>
              <div className="iconStar">
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
              </div>
              <button className="btn_Hard" >Hard</button>
            </div>
          </div>

        </div>
      </div>

    {/* version fetch data from data base */}
    {/* <div className="content2">
        <>
          {cards.length > 0 && (
            <>
              {cards.map((cards) => (
                <>
                  <div className="card_backgroud">
                    <div className="cardDetlis zoom poniter">
                      <div className="imgincard ">
                        <img
                          key={cards.id}
                          src={cards.cover_image}
                          alt=""
                          className="imgcard"
                        />
                      </div>
                      <div className="container_text">
                        <h3 className="texttitle textponsition" key={cards.id}>
                          {cards.title}
                        </h3>
                        <div className="Loction_box ">
                          <i>
                            <FiMapPin className="pin_icon" />
                          </i>
                          <a key={cards.id} href={cards.content}>
                            {cards.title}
                          </a>
                        </div>
                        <div className="detils_place">
                          <p className="p_card" key={cards.id}>
                            {cards.description}
                          </p>
                        </div>
                        <div className="iconStar">
                          <i>
                            <FaStar className="star_detilse" />
                          </i>
                          <i>
                            <FaStar className="star_detilse" />
                          </i>
                          <i>
                            <FaStar className="star_detilse" />
                          </i>
                          <i>
                            <FaStar className="star_detilse" />
                          </i>
                        </div>
                        <button className="btn_Easy">Easy</button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </>
          )}
        </>
       
      </div> */}
      <div className="content3">
        <div className="textbox">
          <h1>service for you</h1>
          <p>Thailand Mountain Trail has created TMT.1, the longest hiking footpath of Thailand. The route links Chiang Mai city to the biggest mountain range of the country, Chiang Dao. Through wild jungle, stunning rice paddies and beautiful summits.</p>
          <button className="btn_moredetiles zoom">Explore More</button>
        </div>
        <div className="container_icon">
          <div className="box">
            <button className="iconbtn poniter zoom" >
              <FaHiking className="icon" />
              <h3 className="font_icon">Trakking</h3></button>
            <button className="iconbtn poniter zoom">
              <FaGasPump className="icon" />
              <h3 className="font_icon">Gas Station</h3></button>
            <button className="iconbtn poniter zoom">
              <FaParking className="icon" />
              <h3 className="font_icon">Parking Area</h3></button>
            <button className="iconbtn poniter zoom">
              <FiMap className="icon" />
              <h3 className="font_icon">Map GIS</h3></button>
            <button className="iconbtn poniter zoom">
              <BiHotel className="icon" />
              <h3 className="font_icon">Hotel</h3></button>
            <button className="iconbtn poniter zoom">
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
          <button className="btn_moredetiles zoom">Explore More</button>
        </div>
      </div>


      <ScrollToTopButton />
      <Footer_com />
    </>
  );

}

export default Home;

