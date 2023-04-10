import React from 'react'

import '../styles/footerstyle.css'

import { Link } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs"

/* import Page for footer manu */
import Home from "../pages/Home"
import Trekking from "../pages/Trekking"
import Blog from "../components/Blog"
import About from "../pages/Abouts"
import Login from "../components/Login"
import Signup from "../components/Signup"

const Footer = () => {
  return (
    <>
      {/* <div className="container_footer"> */}

      {/*  <div className="textbox_footer">
          <Link to='/' className='boxbox' ><FaMountain className='Logo_footer' />&nbsp;&nbsp;<h1 className='h1_footer'>Trekking</h1></Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deleniti.</p>
          <p></p>
        </div>
        <div className="menulist">
          <div className="manu_footer">
            <Link to='/'>Home</Link>
            <Link to='/Trekking'>Trekking</Link>
            <Link to='/Blog'>Blog</Link>
            <Link to='/About'>About</Link>
          </div>
          <div className="contactBox">

          </div>


        </div> */}

      <footer class="footer">
        <div className="logo_footer">
          <Link to='/'>Trekking</Link>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero.</p>
        </div>
        <div class="container-footer">
          <div class="row">
            <div class="footer-col">
              <h4>Pages</h4>
              <ul>
                <li><Link to='/'>Home</Link ></li>
                <li><Link to='/Trekking'>Trekking</Link ></li>
                <li><Link to='/Blog'>Blog</Link ></li>
                <li><Link to='/About'>About</Link ></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>service</h4>
              <ul>
                <li><Link to=''>Trekking</Link ></li>
                <li><Link to=''>Map GIS</Link ></li>
                <li><Link to=''>Mountain</Link ></li>
                <li><Link to=''>Parking Area</Link ></li>
                <li><Link to=''>Hotel</Link ></li>
              </ul>
            </div>
            
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <Link to='https://www.facebook.com/gistda' target='_blank'><BsFacebook class='iconLinkFooter'/></Link >
                <Link to=''><BsFacebook class='iconLinkFooter' target='_blank'/></Link >
                <Link to=''><BsFacebook class='iconLinkFooter' target='_blank'/></Link >
                  
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* </div> */}
    </>


  )
}

export default Footer