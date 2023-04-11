import React, { useState } from 'react'
import '../styles/Navbar.css'
import { BrowserRouter, Router, Route, Link, Routes, NavLink } from 'react-router-dom';


import Home from "../pages/Home"
import Trekking from "../pages/Trekking"
import Blog from "../components/Blog"
import About from "../pages/Abouts"
import Login from "../components/Login"
import Signup from "../components/Signup"
import ShowDetails from "../pages/showDetails"
import Arcmap from '../components/ArcMap'
import DetalisBlogs from '../pages/DetalisBlogs'
import DetalisBlogs2 from '../pages/DetalisBlogs2'
import DetalisBlogs3 from '../pages/DetalisBlogs3'
import DetalisBlogs4 from '../pages/DetalisBlogs4'


/* import Icon react */
import { FaMountain } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { useRef } from 'react';
import { useEffect } from 'react';


/* function btnHumburger() {

    let burgerbtn = document.getElementById('btnHumburger')
    let navLink = document.getElementById('nav-Link')
    console.log(burgerbtn)

    burgerbtn.addEventListener('click', () => {
        navLink.classList.toggle('moblie-manu')
    })
} */



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    let burgerbtn = document.getElementById('btnHumburger')
    let navLink = document.getElementById('nav-Link')
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(burgerbtn)

        burgerbtn.addEventListener('click', () => {
            navLink.classList.toggle('moblie-manu')
        })
    };


    

    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="brand">
                    <Link to='/'><FaMountain className='logo' /></Link>
                    <Link to='/'><h1>Trekking</h1></Link>
                </div>
                <div className="container">
                    <ul className="nav-Link  " id='nav-Link'>
                        <NavLink to='/' className='manu-nav underline-link'><li>Home</li></NavLink>
                        <NavLink to='/Trekking' className='manu-nav underline-link'><li >Trekking</li></NavLink>
                        <NavLink to='/Blog' className='manu-nav underline-link'><li>Blog</li></NavLink>
                        <NavLink to='/About' className='manu-nav underline-link'><li>About</li></NavLink>
                        <NavLink to='/Login' className='manu-nav notshow '><li>Login</li></NavLink>
                        <NavLink to='/Signup' className='manu-nav notshow '><li>Signup</li></NavLink>
                    </ul>
                    <div className="btn_gourp">
                        <Link to='/Login'><button className="btnstyle btn_notshow">Login</button></Link>
                        <Link to='/Signup'><button className="btnstyle btn_notshow">Sign up</button></Link>
                        <button className="btnstyle btn_notshow notshow" id='Logout'>Log out</button>
                    </div>

                    
                    <button className='btnHumburger' id='btnHumburger' onClick={toggleMenu}><GiHamburgerMenu /></button>
                        
                    
                    


                    
                    {/* <button className='btnHumburger' id='btnHumburger' onClick={btnHumburger}><GiHamburgerMenu /></button> */}
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Trekking" element={<Trekking />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/About" element={<About />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/ShowDetails" element={<ShowDetails />} />
                <Route path="/Arcmap" element={<Arcmap />} />
                <Route path="/DetalisBlogs" element={<DetalisBlogs />} />
                <Route path="/DetalisBlogs2" element={<DetalisBlogs2 />} />
                <Route path="//DetalisBlogs3" element={<DetalisBlogs3 />} />
                <Route path="//DetalisBlogs4" element={<DetalisBlogs4 />} />

            </Routes>
        </BrowserRouter>

    )
}




export default Navbar