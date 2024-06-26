import React from 'react'

import '../styles/footerstyle.css'

import { Link } from 'react-router-dom'
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs"



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
                <li><Link onClick={() => {window.location.href="/"}}>Home</Link ></li>
                <li><Link onClick={() => {window.location.href="/Trekking"}}>Trekking</Link ></li>
                <li><Link onClick={() => {window.location.href="/Blog"}}>Blog</Link ></li>
                <li><Link onClick={() => {window.location.href="/About"}}>About</Link ></li>
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
                <Link to='https://www.youtube.com/@GISTDAspace' target='_blank'><BsYoutube class='iconLinkFooter'/></Link >
                <Link to='https://www.instagram.com/gistda_space/' target='_blank'><BsInstagram class='iconLinkFooter'/></Link >
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