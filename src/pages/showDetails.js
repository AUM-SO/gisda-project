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
        <div className="boxPath">
          apirak
        </div>
        <div className="displaymap">
        
        <div id="viewDiv">

        <ArcMaps />
        <ButtonAcrMap />
        </div>
          
        </div>

        <div className="container_detils">
          <div className="dataleft">
            <div className="title">
              <h2 className="nameplace">เขาไม่รักว้าย</h2>
            </div>
            <div className="locationBox">
              <FiMapPin className="pinicon" /><p>Barcelona, España</p>
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
                <FaWalking id='average_walkicon' /><p>ระยะทาง 5.5 กิโลเมตร</p>
              </div>
              <div className="average_time">
                <RxClock id='average_timewalk' /><p>เวลาเฉลี่ย 2 ชม.</p>
              </div>
            </div>
            <p className="data_place">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odit cumque soluta, alias saepe, modi fugiat tempora expedita nisi quidem temporibus mollitia nobis earum tempore consequuntur praesentium doloremque laboriosam magni.
              Tempora enim laboriosam consectetur culpa quibusdam repellat, consequuntur qui voluptatem in similique cumque molestias exercitationem quia debitis nihil, mollitia minus perspiciatis saepe possimus. Necessitatibus expedita rem dolores voluptas similique! Molestiae!
              Saepe ex, eveniet suscipit neque vero recusandae.
            </p>
          </div>

          <div className="dataright">
            <div className="btnbox">
              <button className="btn_Hardlevel">Hard</button>
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