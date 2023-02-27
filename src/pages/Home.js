import { Rate } from "antd";
import React from "react";
import { Col, Row } from "react-grid-system";
import { EnvironmentOutlined } from "@ant-design/icons";
// import "@flaticon/flaticon-uicons/css/all";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div class="header">
        <h1>Trekking in EEC</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          est sit illo! Repudiandae, libero quidem. Omnis laborum quod, tenetur
          rerum, harum nisi dolor deserunt perferendis quaerat nostrum quia,
          aspernatur odit!
        </p>
        <button className="bt1">details more</button>
      </div>
      <div class="content1">
        <Row>
          <Col sm={4}>
            <div className="rowheader">
              <h1>Trekking for you</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                suscipit impedit repellat aliquam unde.
              </p>
            </div>
          </Col>
          <Col >
            <div className="bt2">
            <button >View All</button>
            </div>
            
          </Col>
        </Row>

        <div class="grids">
          <Row>
            <Col sm={4}>
              <div class="grid1">
                <img
                  src="https://reactjs.org/logo-og.png"
                  alt="React Logo"
                  width={240}
                />

                <h2>During several years of research</h2>
                <div className="icon1">
                  <Row>
                    <Col sm={1}>
                      <EnvironmentOutlined />
                    </Col>
                    <Col sm={1}>
                      <p>Barcelona, España</p>
                    </Col>
                  </Row>
                </div>
                <div className="star1">
                  <Rate />
                </div>
                <div className="p1">
                  <p>
                    During several years of research running and cycling trips.
                  </p>
                </div>

                <button className="bt3">Normal</button>
              </div>
            </Col>
            <Col sm={4}>
              <div class="grid2">
                <img
                  src="https://reactjs.org/logo-og.png"
                  alt="React Logo"
                  width={240}
                />
                <h2>During several years of research</h2>
                <div className="icon1">
                  <Row>
                    <Col sm={1}>
                      <EnvironmentOutlined />
                    </Col>
                    <Col sm={1}>
                      <p>Barcelona, España</p>
                    </Col>
                  </Row>
                </div>
                <div className="star2">
                  <Rate />
                </div>
                <div className="p1">
                  <p>
                    During several years of research running and cycling trips.
                  </p>
                </div>
                <button className="bt4">Hard</button>
              </div>
            </Col>
            <Col sm={4}>
              <div class="grid3">
                <img
                  src="https://reactjs.org/logo-og.png"
                  alt="React Logo"
                  width={240}
                />
                <h2>During several years of research</h2>
                <div className="icon1">
                  <Row>
                    <Col sm={1}>
                      <EnvironmentOutlined />
                    </Col>
                    <Col sm={1}>
                      <p>Barcelona, España</p>
                    </Col>
                  </Row>
                </div>
                <div className="star3">
                  <Rate />
                </div>
                <div className="p1">
                  <p>
                    During several years of research running and cycling trips.
                  </p>
                </div>
                <button className="bt5">Easy</button>
              </div>
            </Col>
          </Row>
        </div>
        <div class="content2">
          <div className="grids1">
            <Row>
              <Col sm={3}>
                <div className="centerh">
                  <h1>Trekking for you</h1>
                  <p>
                    Thailand Mountain Trail has created TMT.1, the longest
                    hiking footpath of Thailand. The route links Chiang Mai city
                    to the biggest mountain range of the country, Chiang Dao.
                    Through wild jungle, stunning rice paddies and beautiful
                    summits.
                  </p>
                  <button>Explore More</button>
                </div>
              </Col>
              <Col sm={8}>
                <div class="grid4">
                  <Row>
                    <Col sm={4}>
                      <div className="imgicon1" />
                    </Col>
                    <Col sm={4}>
                      <div className="imgicon2" />
                    </Col>
                    <Col sm={4}>
                      <div className="imgicon3" />
                    </Col>
                    <Col sm={4}>
                      <div className="imgicon4" />
                    </Col>
                    <Col sm={4}>
                      <div className="imgicon5" />
                    </Col>
                    <Col sm={4}>
                      <div className="imgicon6" />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="grids2">
          <Row>
            <Col sm={4}>
              <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            </Col>
            <Col sm={8}>
              <div className="foter">
                <h2>Trekking for you</h2>
                <p>
                  Thailand Mountain Trail has created TMT.1, the longest hiking
                  footpath of Thailand. The route links Chiang Mai city to the
                  biggest mountain range of the country, Chiang Dao. Through
                  wild jungle, stunning rice paddies and beautiful summits,
                  TMT.1 goes through remote hill-tribe areas such as the Karen
                  valleys or the Lahu and Hmong high countries. This is
                  alongside this route we organize our trekking, running and
                  cycling trips.
                </p>
                <button>Explore More</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
