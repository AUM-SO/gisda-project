import React from 'react'
import '../styles/showDetails_style.css'

import Footer from '../components/Footer'

/* import react icon */
import { FiMapPin } from 'react-icons/fi'
import { FaStar, FaWalking } from 'react-icons/fa'
import { RxClock } from "react-icons/rx"



// import ArcMap from '../components/ArcMap'
import ArcMaps from '../components/ArcMap'
import ButtonAcrMap from '../components/ButtonAcrMap'


function ShowDetails() {
  return (
    <>
      <div className="containershowcard">
        {/* <div className="boxPath">
          apirak
        </div> */}
        <div className="displaymap">
        
        <div id="viewDiv">

        <ArcMaps />
        <ButtonAcrMap />
        </div>
          
        </div>

        <div className="container_detils">
          <div className="dataleft">
            <div className="title">
              <h2 className="nameplace">เขาแหลม</h2>
            </div>
            <div className="locationBox">
              <FiMapPin className="pinicon" /><p>จังหวัด ตราด</p>
              <div className="StarshowDetails">
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
                <i><FaStar className="star_detilse" /></i>
              </div>
            </div>
            <div className="iconBoxshowdetils">
              <div className="average_walk">
                <FaWalking id='average_walkicon' /><p>ระยะทาง 3 กิโลเมตร</p>
              </div>
              <div className="average_time">
                <RxClock id='average_timewalk' /><p>เวลาเฉลี่ย 3 ชม.</p>
              </div>
            </div>
            <p className="data_place">
            หมู่เกาะช้าง จังหวัดตราด แหล่งท่องเที่ยวทางทะเลที่ขึ้นชื่อที่สุดของภาคตะวันออก หมู่เกาะช้างมีเกาะช้างเป็นเกาะที่ใหญ่ที่สุดประกอบด้วยเกาะบริวารมากมาย นักท่องเที่ยว 99.99% มาเที่ยวเกาะช้างลงเล่นน้ำทะเล พักผ่อนรีสอร์ทริมหาด และล่องเรือดำน้ำตามเกาะบริวารต่างๆ ส่วนการเดินขึ้นเขาเพื่อชมวิวบนยอดเขาของเกาะช้างเป็นเรื่องของการท่องเที่ยวแนวผจญภัยที่เกิดขึ้นเมื่อไม่นานมานี้และแต่ละปีมีคนมาเที่ยวเรียกว่านับจำนวนคนได้ที่จะเดินป่าขึ้นเขามาชมวิวทิวทัศน์ของหมู่เกาะช้างที่ได้ชื่อว่าเป็น Dream Destination
            </p>
          </div>

          <div className="dataright">
            <div className="btnbox">
              <button className="btn_Hardlevel">Normal</button>
            </div>
            <div className="details">
              <p>ฤดูการท่องเที่ยว มกราคม - มีนาคม</p>
              <p>ความสูงจากระดับน้ำทะเล </p>
              <p>ความยากของเส้นทางการเดิน</p>
              <p>มีจุดกางเต็นท์</p>
              <p>มีแหล่งน้ำ</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ShowDetails