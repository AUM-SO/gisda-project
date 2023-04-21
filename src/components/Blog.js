import React from 'react'
import '../styles/Blogstyle.css'


/* import components */
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <>
      
      <div className="containerBlog">

        <div className="BlogArea">

          <div className="container_cardBlog">
            <Link to='/DetalisBlogs' className="cardBlog animate__fadeInUp animate__animated animate__delay-1s">
              <img src={require("../img/Blog/Blogtitle.jpg")} alt="" className='zoom' />
              <div className="TextBlogs">
                <h3>กฎและข้อบังคับอุทยาน</h3>
                <p>10 / 4 / 2566</p>
              </div>
            </Link>
            <Link to='/DetalisBlogs2' className="cardBlog animate__fadeInUp animate__animated animate__delay-1s">
              <img src={require("../img/Blog/Blogtitle4.jpg")} alt="" className='zoom' />
              <div className="TextBlogs">
                <h3>การเตรียมตัวก่อนเริ่มเดินป่า</h3>
                <p>10 / 4 / 2566</p>
              </div>
            </Link>
            <Link to='/DetalisBlogs3' className="cardBlog animate__fadeInUp animate__animated animate__delay-1s">
              <img src={require("../img/Blog/Blogtitle2.jpg")} alt="" className='zoom' />
              <div className="TextBlogs">
                <h3>Trakking คืออะไร ?</h3>
                <p>10 / 4 / 2566</p>
              </div>
            </Link>
            {/* <Link to='/DetalisBlogs4' className="cardBlog animate__fadeInUp animate__animated animate__delay-1s">
              <img src={require("../img/Blog/Blogtitle3.jpg")} alt="" className='zoom' />
              <div className="TextBlogs">
                <h3>ชื่อหัวเข้า Blog</h3>
                <p>10 / 4 / 2566</p>
              </div>
            </Link> */}



          </div>




        </div>

      </div>


      <Footer />
    </>
  )
}

export default Blog