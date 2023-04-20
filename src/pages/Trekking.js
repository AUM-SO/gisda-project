import React, { useEffect, useState, useRef } from "react";
import "../styles/Trekking.css";
import { Link } from 'react-router-dom';

/* import react icon  */
import { FaWalking } from "react-icons/fa";
import { RxClock } from "react-icons/rx";
import { GoSettings } from "react-icons/go";
import { CgClose } from "react-icons/cg";

/* import components */
import Footer from "../components/Footer";

/* function DropdownFilter */
import DropdownFilter from "../components/DropdownFilter";

/* import ripples */
import Ripples from "react-ripples";
import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

/* api libs */
import axios from "axios";

import * as qs from "qs";

function Trekking() {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({ categories: [] });
  const [posts, setPost] = useState([]);
  const [count, setCount] = useState([]);

  const optionscheckboxDistance = [
    { label: "5 - 10 กิโลเมตร", value: "Distance-1" },
    { label: "10 - 20 กิโลเมตร", value: "Distance-2" },
    { label: "20 - 30 กิโลเมตร", value: "Distance-3" },
  ];
  const optionscheckboxLevel = [
    { label: "Easy", value: "Level-Easy" },
    { label: "Normal", value: "Level-Normal" },
    { label: "Hard", value: "Level-Hard" },
  ];

  const fetchCardsData = (query = {}) => {
    console.log('--->', query)
    axios.get("https://trekking.gistda.or.th/api/posts", {
      params: query,
      paramsSerializer: params => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }).then((data) => {
      setPost(data.data.results);
      setCount(data.data.count);
    });
  };
  useEffect(() => {
    fetchCardsData();
  }, []);


  const fetchCategoriesData = () => {
    axios.get("https://trekking.gistda.or.th/api/categories/")
      .then((data) => {
        setCategories(data.data.results);
      });
  };
  useEffect(() => {
    fetchCategoriesData();
  }, []);

  const handleCheckboxChange = (event) => {
    const data = event.target.value;
    let params = {}
    if (event.target.checked) {
      params = { ...filter, categories: [...filter.categories, data] }
      setFilter({ ...filter, categories: [...filter.categories, data] });
      console.log("✅ Checkbox is checked");
    } else {

      let categories = filter.categories || []
      let index = categories.indexOf(data)
      if (index >= 0) {
        categories.splice(index, 1)
        filter.categories = categories;
      }
      params = { ...filter, categories }
      setFilter({ ...filter, categories });
      console.log("⛔️ Checkbox is NOT checked");
    }
    fetchCardsData(params);
  };
  // console.log(locations);
  // console.log(categories);
  console.log(filter);

  /*  const btnfilter = () => {
     let filterbtn = document.querySelector(".btnfilter");
     let filter_container = document.querySelector("filter_container");
     filterbtn.onclick = function () {
       filter_container.classList.toggle("active");
     }
   }
 
  */

  /* const [toggle, setToggle] = useState(true);

  const btnfilter = () => {
      setToggle(!toggle)
  }; */
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "filter_container"
    );
  };

  return (
    <>
      <div className="Trekking">
        <div className="boxPart">
          <Breadcrumb
            items={[
              {
                href: "/",
                title: <HomeOutlined />,
              },
              {
                href: "/Trekking",
                title: (
                  <>
                    <UserOutlined />
                    <span>Trekking List</span>
                  </>
                ),
              },
              {
                title: "Application",
              },
            ]}
          />
        </div>

        <div className="container_trekking">

          <div className="filter_container stylefilter" ref={navRef}  /* style={{ display: toggle ?  'none' : 'block' }} */>
          <button onClick={showNavbar} id="btnfilter" className="btnfilterclose" ><CgClose className="iconfiter" /></button>
            <div className="container_Location">
              
              <h3 className="style_textfilter">Location</h3>

              {categories.filter(c => c.namespace === "location").map((categories) => (
                <div key={categories.id}>
                  <input
                    type="checkbox"
                    value={categories.id}
                    // checked={filter.categories.indexOf(categories.id) >= 0}
                    className={"style_labelfilter"}
                    onChange={handleCheckboxChange}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <label htmlFor="checkbox" className="style_labelfilter">
                    {categories.title}
                  </label>
                </div>
              ))}
            </div>

            <div className="container_Distance ">
              <h3 className="style_textfilter">Distance</h3>
              {categories.filter(w => w.namespace === "distance").map((categories) => (
                <div key={categories.id}>
                  <input
                    type="checkbox"
                    value={categories.id}
                    // checked={filter.categories.indexOf(categories.id) >= 0}
                    className={"style_labelfilter"}
                    onChange={handleCheckboxChange}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <label htmlFor="checkbox" className="style_labelfilter">
                    {categories.title}
                  </label>
                </div>
              ))}
            </div>

            <div className="container_level">
              {/* <h3 className="style_textfilter">Level</h3> */}
              {categories.filter(a => a.namespace === "level").map((categories) => (
                <div key={categories.id}>
                  <input
                    type="checkbox"
                    value={categories.id}
                    // checked={filter.categories.indexOf(categories.id) >= 0}
                    className={"style_labelfilter"}
                    onChange={handleCheckboxChange}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <label htmlFor="checkbox" className="style_labelfilter">
                    {categories.title}
                  </label>
                </div>
              ))}
            </div>
            <div className="container_level">
              <h3 className="style_textfilter">Average Time</h3>
              {categories.filter(z => z.namespace === "avg_time").map((categories) => (
                <div key={categories.id}>
                  <input
                    type="checkbox"
                    value={categories.id}
                    // checked={filter.categories.indexOf(categories.id) >= 0}
                    className={"style_labelfilter"}
                    onChange={handleCheckboxChange}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <label htmlFor="checkbox" className="style_labelfilter">
                    {categories.title}
                  </label>
                </div>
              ))}
            </div>
          </div>


          <div className="container_item">
            <div className="titleBox">

              <button onClick={showNavbar} id="btnfilter" className="btnfilter" ><GoSettings className="iconfiter" /></button>
              <div className="count_item">
                <p>{count} placs</p>
              </div>
              {/* <div className="dropdown">
                <p>level : </p>
                <DropdownFilter options={options} />
              </div> */}
            </div>

            {/*  พื้นที่แสดง cards */}
            <div className="container_showitem">
              <>

                {/*  */}
                <Ripples>
                  <Link to='/ShowDetails' className="Treak_card" >
                    <div className="textitem">
                      <h3 /* key={cards.id} */ >เขาแหลม{/* {cards.title} */}</h3>
                      <div className="walk">
                        <FaWalking id='walkicon' />
                        {/* <p>{cards.id}</p> */}
                      </div>
                      <div className="time">
                        <RxClock id='Clock' />
                        {/* <p>{cards.title}</p> */}
                      </div>
                    </div>
                    <img
                      /* key={cards.id}
                      src={cards.cover_image}  */
                      src={require("../img/mountain2.jpg")}
                      className="img_item zoom"
                    />
                  </Link>
                </Ripples>
                <Ripples>
                  <Link to='/ShowDetails' className="Treak_card" >
                    <div className="textitem">
                      <h3 /* key={cards.id} */ >เขาแหลม{/* {cards.title} */}</h3>
                      <div className="walk">
                        <FaWalking id='walkicon' />
                        {/* <p>{cards.id}</p> */}
                      </div>
                      <div className="time">
                        <RxClock id='Clock' />
                        {/* <p>{cards.title}</p> */}
                      </div>
                    </div>
                    <img
                      /* key={cards.id}
                      src={cards.cover_image}  */
                      src={require("../img/mountain2.jpg")}
                      className="img_item zoom"
                    />
                  </Link>
                </Ripples>
                <Ripples>
                  <Link to='/ShowDetails' className="Treak_card" >
                    <div className="textitem">
                      <h3 /* key={cards.id} */ >เขาแหลม{/* {cards.title} */}</h3>
                      <div className="walk">
                        <FaWalking id='walkicon' />
                        {/* <p>{cards.id}</p> */}
                      </div>
                      <div className="time">
                        <RxClock id='Clock' />
                        {/* <p>{cards.title}</p> */}
                      </div>
                    </div>
                    <img
                      /* key={cards.id}
                      src={cards.cover_image}  */
                      src={require("../img/mountain2.jpg")}
                      className="img_item zoom"
                    />
                  </Link>
                </Ripples>
                <Ripples>
                  <Link to='/ShowDetails' className="Treak_card" >
                    <div className="textitem">
                      <h3 /* key={cards.id} */ >เขาแหลม{/* {cards.title} */}</h3>
                      <div className="walk">
                        <FaWalking id='walkicon' />
                        {/* <p>{cards.id}</p> */}
                      </div>
                      <div className="time">
                        <RxClock id='Clock' />
                        {/* <p>{cards.title}</p> */}
                      </div>
                    </div>
                    <img
                      /* key={cards.id}
                      src={cards.cover_image}  */
                      src={require("../img/mountain2.jpg")}
                      className="img_item zoom"
                    />
                  </Link>
                </Ripples>

                {posts.length > 0 && (
                  <>
                    {posts.map((cards) => (
                      <>

                        <Ripples>
                          <Link to='/ShowDetails' className="Treak_card" >
                            <div className="textitem">
                              <h3 key={cards.id}>{cards.title}</h3>
                              <div className="walk">
                                <FaWalking id='walkicon' />
                                {/* <p>{cards.id}</p> */}
                              </div>
                              <div className="time">
                                <RxClock id='Clock' />
                                {/* <p>{cards.title}</p> */}
                              </div>
                            </div>
                            {/*  <img
                              key={cards.id}
                              src={cards.cover_image}
                              className="img_item zoom"
                            /> */}
                          </Link>
                        </Ripples>

                      </>
                    ))}
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default Trekking;
