import React, { useEffect, useState } from "react";
import "../styles/Trekking.css";

/* import react icon  */
import { FaWalking } from "react-icons/fa";
import { RxClock } from "react-icons/rx";

/* import components */
import Footer from "../components/Footer";

/* function DropdownFilter */
import DropdownFilter from "../components/DropdownFilter";

/* import ripples */
import Ripples from "react-ripples";

function Trekking() {
  const [categories, setCategories] = useState([]);
  const [cards, setCards] = useState([]);
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

  const fetchCardsData = () => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCards(data.results);
        setCount(data.count);
      });
  };
  useEffect(() => {
    fetchCardsData();
  }, []);
  const options = ["Easy", "Normal", "Hard"];

  const fetchCategoriesData = () => {
    fetch("http://localhost:3000/api/categories/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data.results);
      });
  };
  useEffect(() => {
    fetchCategoriesData();
  }, []);

  const handleCheckboxChange = (event) => {
    const data = event.target.value;
    if (event.target.checked) {
      setCategories([...categories, data]);
      console.log("✅ Checkbox is checked");
    } else {
      setCategories(categories.filter((categories) => categories !== data));
      console.log("⛔️ Checkbox is NOT checked");
    }
  };
  // console.log(locations);
  console.log(categories);

  return (
    <>
      <div className="Trekking">
        <div className="boxPart">apirak</div>

        <div className="container_trekking">
          <div className="filter_container">
            <div className="container_Location">
              <h3 className="style_textfilter">Location</h3>

              {categories.map((categories) => (
                <div key={categories.id}>
                  <input
                    type="checkbox"
                    value={categories.id}
                    // checked={locations.includes(setLocations)}
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
              {optionscheckboxDistance.map((optionscheckboxDistance) => (
                <div key={optionscheckboxDistance.value}>
                  <input
                    type="checkbox"
                    id={optionscheckboxDistance.value}
                    name={optionscheckboxDistance.value}
                    value={optionscheckboxDistance.value}
                    className={"Distance"}
                    checked={categories.includes(optionscheckboxDistance.value)}
                    onChange={handleCheckboxChange}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <label
                    htmlFor={optionscheckboxDistance.value}
                    className="style_labelfilter"
                  >
                    {optionscheckboxDistance.label}
                  </label>
                </div>
              ))}
            </div>

            <div className="container_level">
              <h3 className="style_textfilter">Level</h3>
              {optionscheckboxLevel.map((optionscheckboxLevel) => (
                <div key={optionscheckboxLevel.value}>
                  <input
                    type="checkbox"
                    className="inputstyle"
                    id={optionscheckboxLevel.value}
                    name={optionscheckboxLevel.value}
                    value={optionscheckboxLevel.value}
                    checked={categories.includes(optionscheckboxLevel.value)}
                    onChange={handleCheckboxChange}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <label
                    htmlFor={optionscheckboxLevel.value}
                    className="style_labelfilter"
                  >
                    {optionscheckboxLevel.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="container_item">
            <div className="titleBox">
              <div className="count_item">
                <p>{count} placs</p>
              </div>
              <div className="dropdown">
                <p>level : </p>
                <DropdownFilter options={options} />
              </div>
            </div>

            {/*  พื้นที่แสดง cards */}
            <div className="container_showitem">
              <>
                {cards.length > 0 && (
                  <>
                    {cards.map((cards) => (
                      <>
                        <Ripples>
                          <button className="Treak_card ">
                            <div className="textitem">
                              <h3 key={cards.id}>{cards.title}</h3>
                              <div className="walk">
                                <FaWalking id="walkicon" />
                                <p> ระยะทาง 5.5 กิโลเมตร</p>
                              </div>
                              <div className="time">
                                <RxClock id="Clock" />
                                <p>เวลาเฉลี่ย 2 ชม.</p>
                              </div>
                            </div>
                            <img
                              key={cards.id}
                              src={cards.cover_image}
                              className="img_item zoom"
                            />
                          </button>
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
