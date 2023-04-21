import React from 'react'
import '../styles/showDetails_style.css'

import Footer from '../components/Footer'

/* import react icon */
import { FiMapPin, FiMap } from 'react-icons/fi'
import { FaStar, FaWalking, FaHiking, FaGasPump, FaParking } from 'react-icons/fa'
import { RxClock } from "react-icons/rx"

import { BiHotel } from "react-icons/bi";
import { GiMountaintop } from "react-icons/gi";


// import ArcMap from '../components/ArcMap'
import ArcMaps from '../components/ArcMap'
import ButtonAcrMap from '../components/ButtonAcrMap'


function ShowDetails() {
  // const [comment, setComment] = useState('');

  // const handleCommentSubmit = (e) => {
  //   e.preventDefault();

  //   // Create the comment data object
  //   const commentData = {
  //     name: 'NameUser', // You can customize this with the user's name or fetch it from an input field
  //     comment: comment
  //   };

  //   // Send a POST request to submit the comment
  //   axios.post('https://trekking.gistda.or.th/api/posts/1/comments/', commentData)
  //     .then(response => {
  //       console.log('Comment submitted successfully:', response.data);
  //       // Reset the comment input field after successful submission
  //       setComment('');
  //     })
  //     .catch(error => {
  //       console.error('Failed to submit comment:', error);
  //     });
  // };

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
          <div className="container_data">
            <div className="dataleft">
              <div className="title">
                <h2 className="nameplace">เขาแหลม</h2>
              </div>
              <div className="locationBox">
                <FiMapPin className="pinicon" /><p>จังหวัด ตราด</p>
                <div className="StarshowDetails">
                  <i><FaStar className="star_plase" /></i>
                  <i><FaStar className="star_plase" /></i>
                  <i><FaStar className="star_plase" /></i>
                  <i><FaStar className="star_plase" /></i>
                  <i><FaStar className="star_plase" /></i>
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
                หมู่เกาะช้าง จังหวัดตราด แหล่งท่องเที่ยวทางทะเลที่ขึ้นชื่อที่สุดของภาคตะวันออก
                หมู่เกาะช้างมีเกาะช้างเป็นเกาะที่ใหญ่ที่สุดประกอบด้วยเกาะบริวารมากมาย นักท่องเที่ยว 99.99% มาเที่ยวเกาะช้างลงเล่นน้ำทะเล
                พักผ่อนรีสอร์ทริมหาด และล่องเรือดำน้ำตามเกาะบริวารต่างๆ ส่วนการเดินขึ้นเขาเพื่อชมวิวบนยอดเขาของเกาะช้าง
                เป็นเรื่องของการท่องเที่ยวแนวผจญภัยที่เกิดขึ้นเมื่อไม่นานมานี้และแต่ละปีมีคนมาเที่ยวเรียกว่านับจำนวนคนได้ที่จะเดินป่าขึ้นเขา
                มาชมวิวทิวทัศน์ของหมู่เกาะช้างที่ได้ชื่อว่าเป็น Dream Destination
              </p>
            </div>

            <div className="dataright">
              <div className="btnbox">
                <button className="btn_Hardlevel">Normal</button>
              </div>

              <div className="details">
                <p>ฤดูการท่องเที่ยว มกราคม - มีนาคม</p>
                <p>ความสูงจากระดับน้ำทะเล</p>
                <p>ความยากของเส้นทางการเดิน</p>
                <p>มีจุดกางเต็นท์</p>
                <p>มีแหล่งน้ำ</p>
              </div>

              <div className="container_service">
                <button className="iconservice poniter" >
                  <FaHiking className="iconDetalis" />
                </button>
                <button className="iconservice poniter">
                  <FaGasPump className="iconDetalis" />
                </button>
                <button className="iconservice poniter">
                  <FaParking className="iconDetalis" />
                </button>
                <button className="iconservice poniter">
                  <FiMap className="iconDetalis" />
                </button>
                <button className="iconservice poniter">
                  <BiHotel className="iconDetalis" />
                </button>
                <button className="iconservice poniter">
                  <GiMountaintop className="iconDetalis" />
                </button>
              </div>
            </div>

          </div>





        </div>
        <div className="container_comment">
          <h3>Comments</h3>
          <div className="box_comment">
            <div className="boxUser">
              <div className="User">
                <img src="*" alt="" className='imgUserboxcomment ' />
                <h5 className='marginBoxUser'>NameUser</h5>
              </div>

            </div>
            <form action="" className='formcomment'/* onChange={handleCommentSubmit} */>
              <input type="text" name="" id="" className='commentinput' placeholder='แสดงความคิด' />
              <button type='submit' className=" stylebtn_comment" id='' name=''>comment</button>
            </form>
          </div>


          {/* ส่วนการแสดงความคิดเห็น */}
          <div className="container_showcomment">
            <div className="box_comment">
              <div className="boxUser">
                <div className="User">
                  <img src="*" alt="" className='imgUserboxcomment ' />
                </div>
                <div className="containerUserdate">
                  <h5 className='marginBoxUser'>NameUser</h5>
                  <div className="date">
                    <p>12-1-2023</p>
                  </div>
                </div>

              </div>
              <p className="showComment thaifont" >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ut, minus placeat molestias velit quo ad ipsum quaerat voluptate nulla.
              </p>
            </div>
          </div>

          <div className="container_showcomment">
            <div className="box_comment">
              <div className="boxUser">
              <div className="User">
                  <img src="*" alt="" className='imgUserboxcomment ' />
                </div>
                <div className="containerUserdate">
                  <h5 className='marginBoxUser'>NameUser</h5>
                  <div className="date">
                    <p>12-1-2023</p>
                  </div>
                </div>
              </div>
              <p className="showComment thaifont" >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit culpa ad porro repellendus excepturi, delectus placeat dolore minus adipisci distinctio recusandae rem numquam voluptatibus quam, asperiores unde saepe sequi? Officiis.
                Velit voluptatem natus architecto ipsam rem neque dolore eum. Ipsa inventore cupiditate facere. Incidunt cumque maxime optio provident recusandae reiciendis quae rerum placeat eaque voluptate officiis vel labore, quam unde.
                Facilis est eum quasi officia aspernatur eius atque, velit distinctio minus consequuntur dolore laborum, sapiente id, earum et repellat facere labore expedita amet ab praesentium incidunt dolorem enim? Ipsum, commodi.
                Minus nisi nulla ad, repellendus corrupti ipsam molestiae? Cum voluptatem corporis quia ratione. Sint repellendus cupiditate sed voluptatem sunt, reiciendis illo error facilis dolores, nesciunt recusandae natus dolor beatae odit.

              </p>
            </div>
          </div>

          <button className='seeMore thaifont' id='' name=''>เพิ่มเติม</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ShowDetails