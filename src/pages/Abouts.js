import React, { useRef } from 'react'
import '../styles/AboutStyle.css'
import Ripples from "react-ripples";

/* import animate.css  from https://animate.style/ */
import 'animate.css';

/* import react icon */
import { SiGmail } from 'react-icons/si'

/* import components */
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
/* import components  */
import ScrollToTopButton from '../components/ScrollToTopButton';
/* import parallax  */
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Abouts() {



  return (

    <>


      <ScrollToTopButton />
      <div className="container_About">
        <div className="container_title">
          <div className="texttitle_About ">
            <h1 className='h1_title animate__fadeInDown animate__animated animate__delay-0.5s'>About us.</h1>
          </div>
          <div className="title_About">
            <div className="Img_about">
              <img src={require("../img/About_img/title_img.jpg")} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="content_about">
        <div className="detalis_content">
          <h3>วัตถุประสงค์</h3>
          <p>วัตถุประสงค์ของงานวิจัยในครั้งนี้คือการเน้นการพัฒนา Web Application ที่สามารถรองรับความต้องการ
            ผู้ที่สนใจการศึกษาธรรมชาติ ผู้ที่ชอบความท้าทายในการเดินป่า และเป็นช่องทางแลกเปลี่ยนความคิดเห็นและประสบการณ์ในการศึกษาธรรมชาติ โดยแอปพลิเคชันนี้จะรวบรวมข้อมูลพื้นฐานเกี่ยวกับ ลักษณะภูมิประเทศ
            ในพื้นที่ตัวอย่าง ความลาดชัน ประเภทของป่า และออกแบบเส้นทางการเดินป่า เชื่อมโยงบนฐานข้อมูล
            ของเทคโนโลยีอวกาศและภูมิสารสนเทศ ถือได้ว่าจะเป็นช่องทางหนึ่งที่สามารถเชื่อมโยงกลุ่มคนที่มีความสนใจ
            ในลักษณะเดียวกัน ได้มีโอกาสแลกเปลี่ยนพูดคุย สร้างทริปการเดินทางร่วมกัน อีกทั้งยังสามารถลดค่าใช้จ่าย
            บางส่วนที่เกิดขึ้นจากการประสานงานของส่วนกลางซึ่งเป็นนายหน้าในปัจจุบัน ทั้งนี้เพื่อให้ Web Application ดังกล่าวประสบความสำเร็จในการพัฒนาจึงมีความจำเป็นอย่างยิ่งที่ต้องอาศัยผู้ที่มีประสบการณ์ ในการเดินป่าในรูปแบบต่างๆ มาช่วยออกแบบเพื่อให้สามารถใช้งานได้จริงและมีประสิทธิภาพในอนาคต Web Application นี้ถือได้ว่าเป็นนวัตกรรมใหม่ สำหรับผู้ที่สนใจธรรมชาติ และยังสามารถต่อยอดไปในภาคธุรกิจได้อีก ช่องทางหนึ่งด้วย
          </p>
          <div className="underLine"></div>
        </div>
      </div>
      
      <div className="container_team">
        <div className="detalis_team">
          <div className="title_Team">
            <h3 className='animate__slideInUp'>Team</h3>

          </div>
          <div className="container_CardTeam">
            <Ripples className="cardteam zoom">
              <img src={require('../img/About_img/aum.png')} alt="" />
              <div className="team_textcard">
                <Link to='' className='NameDev'>Apirak Phutnium</Link>
                <p>Web design & Front End </p>
                <Link to='' target='_blank' className='icon_cardTeam'>
                  <SiGmail id='iconCardteam' /><p className='NameDev'>Aum0834@gmail.com</p>
                </Link>
              </div>
            </Ripples>
            <Ripples className="cardteam zoom ">
              <img src={require('../img/About_img/not2.png')} alt="" />
              <div className="team_textcard">
                <Link to='' className='NameDev' >Panupong Mapa</Link>
                <p>Back End Developer</p>
                <Link to='' target='_blank' className='icon_cardTeam'>
                  <SiGmail id='iconCardteam' /><p className='NameDev'>panupong.map@psru.ac.th</p>
                </Link>
              </div>
            </Ripples>
            <Ripples className="cardteam zoom">
              <img src={require('../img/About_img/nes.png')} alt="" />
              <div className="team_textcard">
                <Link to='' className='NameDev' >Metichai Bunyungrod</Link>
                <p>Web design & Front End</p>
                <Link to='' target='_blank' className='icon_cardTeam'>
                  <SiGmail id='iconCardteam' /><p className='NameDev'>Blvckroninx@gmail.com</p>
                </Link>
              </div>
            </Ripples>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Abouts