import React from 'react'

import { BrowserRouter, NavLink, Routes, Route, Link } from 'react-router-dom';
import '../styles/Navbar.css'

// pages
import Home from '../pages/Home'
import Trekking from '../pages/Trekking'
import Contact from '../pages/Contact'
import Abouts from '../pages/Abouts'
import Login from './Login'
import Signup from '../components/Signup'


function Navber() {
    /* let activeClassName = "nav-active" */
    return (
        <BrowserRouter>
            <header>

                <nav className='navbar'>
                    <h1 className='logo'>Trekking</h1>
                    <NavLink to="/" className="stylenav" >Home</NavLink>
                    <NavLink to="/Trekking" className="stylenav" /* className={({ isActive }) => isActive ? activeClassName : undefined} */>Trekking</NavLink>
                    <NavLink to="/Contact" className="stylenav" /* className={({ isActive }) => isActive ? activeClassName : undefined} */>Contact</NavLink>
                    <NavLink to="/Abouts"  className="stylenav" >Abouts</NavLink>
                    <div className="btnnav_group">
                        <Link to="/Login"><button className='btn-nav btn1'>Login</button></Link>
                        <Link to="/Signup"><button className='btn-nav btn2'>Sign up</button></Link>
                    </div>


                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Trekking" element={<Trekking />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Abouts" element={<Abouts />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default Navber