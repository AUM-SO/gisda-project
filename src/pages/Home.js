/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import {
  FaStar, FaHiking, FaGasPump,
  FaParking
} from "react-icons/fa";

import { FiMapPin, FiMap } from "react-icons/fi";
import { BiHotel } from "react-icons/bi";
import { GiMountaintop } from "react-icons/gi";
/* import { GrInstagram } from "react-icons/gr"; */

/* import animate.css  from https://animate.style/ */
import 'animate.css';


import "../styles/Home.css";
import Footer_com from '../components/Footer'
/* import { Link } from 'react-router-dom'; */

/* import components  */
import ScrollToTopButton from '../components/ScrollToTopButton';

/* import ripples */
import Ripples from 'react-ripples'
import axios from "axios";
import { Link } from "react-router-dom";
import videoFile from '../img/Home/Header.mp4';

const Home = () => {
  
  const [posts, setPost] = useState([]);

  const fetchCardsData = () => {
    axios.get("https://trekking.gistda.or.th/api/posts").then((data) => {
      setPost(data.data.results.slice(0, 3));
    });
  };

  useEffect(() => {
    fetchCardsData();
  }, []);

  return (
    <>
          <div class="header ">
            {/* <img src={require('../img/header.jpg')} alt="" className="imghaeder" /> */}
            <video src={videoFile} width="auto" height="auto" className="imghaeder" muted loop playsInline autoPlay ></video>
            <div className="container_header">
              <h1 className="animate__fadeInDown animate__animated animate__delay-0.7s">Trekking in EEC</h1>
              <p className="animate__fadeInDown animate__animated animate__delay-0.8s">
                แหล่งรวมข้อมูลการเดินป่าสำหรับมือใหม่หรือผู้มีประสบการณ์ เพื่อส่งเสริมให้ทุกท่านที่สนใจการเดินป่าหันมาใช้เวลาว่างในการทำกิจกรรม
                พร้อมทั้งชมความสวยงามของธรรมชาติ

              </p>

              <div className="btn_titlse animate__fadeInDown animate__animated animate__delay-1s">
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
                สถานที่ที่คุณควรลอง
                คัดสรรมาเพื่อเปิดรับประสบกรณ์ใหม่ๆในการเดินป่า
                กระโดดออกจากเซฟโซนที่ทุกคนเคยอยู่
              </p>

              <div>
              </div>
            </div>
          </div>
          <div className="bt2">
            <Link onClick={() => { window.location.href = "/Trekking" }}><button>View All</button></Link>
          </div>
        </div>

        <div className="content2">
          {posts.map(post => (
            <div className="card_backgroud " key={post.id}>
              <div className="cardDetlis zoom poniter">
                <div className="imgincard ">
                  <img src={post.cover_image} alt="" className="imgcard" />
                </div>
                <div className="container_text">
                  <h3 className="texttitle textponsition">{post.title}</h3>
                  <div className="Loction_box ">
                    <i><FiMapPin className="pin_icon" /></i><p>{post.location}</p>
                  </div>
                  <div className="detils_place">
                    <p className="p_card">{post.description}</p>
                  </div>
                  <div className="iconStar">
                    <i><FaStar className="star_detilse" /></i>
                    <i><FaStar className="star_detilse" /></i>
                    <i><FaStar className="star_detilse" /></i>
                    <i><FaStar className="star_detilse" /></i>
                  </div>
                  <button className="btn_Easy">{post.level}</button>
                </div>
              </div>
            </div>
          ))}
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
            <p>
              นำเสนอฟิลเจอร์ที่หน้าสนใจต่างๆที่พร้อมให้บริการ
              กับนักเดินป่าทุกท่านเพื่ออำนวจความสะดวกในด้านต่างๆ
              ไม่ว่าจะเป็น จุดปั้มน้ำมัน จุดมาร์ค ที่จอดรถ ที่พัก แสดงภาพแผนที่สองมิติ และอาจมีเพิ่มเติมในอนาคต
            </p>
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
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7671sL_9tp0" title="GISTDA แนะนำองค์กร 2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="textcon4">
            <h1>Gistda </h1>
            <p>ประเทศไทยได้เข้าร่วมโครงการ NASA ERTS-1 ซึ่งเป็นดาวเทียมสำรวจทรัพยากรดวงแรกของโลก เมื่อวันที่ 14 กันยายน 2514 ภายใต้การดำเนินงานของ โครงการสำรวจทรัพยากรธรรมชาติดาวเทียม สำนักงานคณะกรรมการวิจัยแห่งชาติ โดย ทำหน้าที่ ประสานงาน จัดหาข้อมูลดาวเทียม ดำเนินการวิเคราะห์ข้อมูล ถ่ายทอดเทคโนโลยี
              ตลอดจนจัดหาทุนฝึกอบรม ดูงาน และการประชุม ทั้งระดับประเทศและนานาชาติ ด้วยผลสำเร็จของโครงการ จึงได้มีการเปลี่ยนสถานภาพโครงการฯ เป็นหน่วยงานระดับกองชื่อ กองสำรวจทรัพยากรธรรมชาติด้วยดาวเทียม ใน พ.ศ. 2522 และใน พ.ศ. 2525 ได้ดำเนินการจัดตั้งสถานีรับสัญญาณดาวเทียมขึ้นที่ เขตลาดกระบัง กรุงเทพมหานคร นับเป็นสถานีรับแห่งแรกในภูมิภาคเอเชียตะวันออกเฉียงใต้</p>
            <button className="btn_moredetiles zoom">Explore More</button>
          </div>
        </div>


        <ScrollToTopButton />
        <Footer_com />

      
    </>
  );

}

export default Home;

