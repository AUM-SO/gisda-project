

import '../styles/Arcgis.css'
/* import react icon */
import { FiMapPin, FiMap } from 'react-icons/fi'
import { FaStar, FaWalking, FaHiking, FaGasPump, FaParking } from 'react-icons/fa'
import { RxClock } from "react-icons/rx"

import { BiHotel } from "react-icons/bi";
import { GiMountaintop } from "react-icons/gi";

// import ArcMap from '../components/ArcMap'
import ArcMaps from '../components/Phahinkoob'
import ButtonAcrMap from '../components/ButtonAcrMap'
import Footer from '../components/Footer'

const show_Phahinkoob = () => {
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
                <h2 className="nameplace">ผาหินกูบ</h2>
              </div>
              <div className="locationBox">
                <FiMapPin className="pinicon" /><p>จังหวัด จันทบุรี</p>
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
                  <FaWalking id='average_walkicon' /><p>ระยะทาง 7 กิโลเมตร</p>
                </div>
                <div className="average_time">
                  <RxClock id='average_timewalk' /><p>เวลาเฉลี่ย 5-6 ชม.</p>
                </div>
              </div>
              <p className="data_place">
              มีป่ามากมายในไทย ไม่ว่าจะเป็น ดอยทู่ ดอยหลวงตาก เขากำแพง เขาหลวงสุโขทัย เขาหลักพัทลุง 
              ยอดสองนม และหนึ่งในนั้นที่ติดอับดับการเดินป่าอันดับต้นๆ ในไทย ก็คงจะหนีไม่พ้นผาหินกูบ 
              เนื่องจากผาหินกูบแห่งนี้ได้รับความนิยมและการให้ความสนใจของเหล่านักผจญภัยเป็นอย่างมาก 
              เพราะให้ความตื่นเต้นในระหว่างทางและได้สัมผัสธรรมชาติอันสวยงามโดยรอบ 
              </p>
            </div>

            <div className="dataright">
              <div className="btnbox">
                <button className="btn_Hardlevel">Normal</button>
              </div>

              <div className="details">
                <p>การเดินทาง : รถยนต์ส่วนบุคคล</p>
                <p>ความสูงจากระดับน้ำทะเล: 960  m </p>
                <p>เวลาทำการ : เฉพาะเสาร์-อาทิตย์ </p>
                <p>บริการและสิ่งอำนวยความสะดวก: จุดกางเต็นท์ ,ที่จอดรถ, บริการลูกหาบ,มีค่าเข้าอุทยาน</p>
                <p>เบอร์โทรอุทยาน: 093 989 7273</p>
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
};

export default show_Phahinkoob