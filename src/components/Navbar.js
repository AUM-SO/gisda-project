import React, { useState } from "react";
import "../styles/Navbar.css";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";

import Home from "../pages/Home";
import Trekking from "../pages/Trekking";
import Blog from "../components/Blog";
import About from "../pages/Abouts";
import Login from "../components/Login";
import Signup from "../components/Signup";

import ShowDetails from "../pages/showDetails";
import ShowDetails2 from "../pages/show_mountain2";
import ShowDetails3 from "../pages/show_Phahinkoob";

import Arcmap from "../components/ArcMap";
import DetalisBlogs from "../pages/DetalisBlogs";
import DetalisBlogs2 from "../pages/DetalisBlogs2";
import DetalisBlogs3 from "../pages/DetalisBlogs3";
/* import DetalisBlogs4 from "../pages/DetalisBlogs4"; */

/* import Icon react */
import { FaMountain } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { useRef } from "react";
import { useEffect } from "react";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [isLogged, setisLogged] = useState(false);
  const logoutCookies = Cookies.get("token");
  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    checkStorage();
    return () => { };
  }, [isLogged]);
  function checkStorage() {
    if (logoutCookies) {
      //   Swal.fire("Success?", "1", "success");
      <Avatar icon={<UserOutlined />} />
      setisLogged(true);
    } else {
      //   Swal.fire("Success?", "2", "success");

      setisLogged(false);
    }
  }
  const logout = () => {
    // Swal.fire("Success?", "3", "success");
    Cookies.remove("token");
    setisLogged(true);
    window.location.href = "/Login";
  };

  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="brand">
          <Link to="/">
            <FaMountain className="logo" />
          </Link>
          <Link to="/">
            <h1>Trekking</h1>
          </Link>
        </div>
        <div className="container">
          <ul className="nav-Link " id="nav-Link">
            <NavLink to="/" className="manu-nav underline-link">
              <li>Home</li>
            </NavLink>
            <NavLink to="/Trekking" className="manu-nav underline-link">
              <li>Trekking</li>
            </NavLink>
            <NavLink to="/Blog" className="manu-nav underline-link">
              <li>Blog</li>
            </NavLink>
            <NavLink to="/About" className="manu-nav underline-link">
              <li>About</li>
            </NavLink>
            <NavLink to="/Login" className="manu-nav notshow ">
              <li>Login</li>
            </NavLink>
            <NavLink to="/Signup" className="manu-nav notshow ">
              <li>Signup</li>
            </NavLink>
          </ul>
          <div className="btn_gourp">
            <Link to="/Login">
              {!isLogged ? (
                <button className="btnstyle btn_notshow">Login</button>
              ) : (
                <button className="btnstyle btn_notshow " onClick={logout}>
                  Log out
                </button>
              )}
            </Link>
            <Link to="/Signup">
              <button className="btnstyle btn_notshow">Sign up</button>
            </Link>

          </div>

          <button
            onClick={handleClick}
            className="btnHumburger"
            id="btnHumburger"
          >
            <GiHamburgerMenu className="iconBurger" />
            <HiX className="iconclose" />
          </button>

          <ul
            class=" popupBurger"
            style={{ display: toggle ? "none" : "block" }}
          >
            <div className="backpop">
              <NavLink to="/" className="manu-nav underline-link">
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/Trekking "
                /* onClick={() => {window.location.href="/Trekking"}} */ className="manu-nav underline-link"
              >
                <li>Trekking</li>
              </NavLink>
              <NavLink to="/Blog" className="manu-nav underline-link">
                <li>Blog</li>
              </NavLink>
              <NavLink to="/About" className="manu-nav underline-link">
                <li>About</li>
              </NavLink>
              <NavLink to="/Login" className="manu-nav notshow ">
                <li>Login</li>
              </NavLink>
              <NavLink to="/Signup" className="manu-nav notshow ">
                <li>Signup</li>
              </NavLink>
            </div>
            <button className="btnclose"></button>
          </ul>
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
        <Route path="/show_mountain2" element={<ShowDetails2 />} />
        <Route path="/show_Phahinkoob" element={<ShowDetails3 />} />
        <Route path="/Arcmap" element={<Arcmap />} />

        <Route path="/DetalisBlogs" element={<DetalisBlogs />} />
        <Route path="/DetalisBlogs2" element={<DetalisBlogs2 />} />
        <Route path="/DetalisBlogs3" element={<DetalisBlogs3 />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
