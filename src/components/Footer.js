import { Col, Row } from "react-grid-system";
import { BrowserRouter } from "react-router-dom";
import "../styles/footer.css";

import { CiFacebook } from "react-icons/ci";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { Divider } from "antd";
const Footer = () => {
  return (
    <>
      <BrowserRouter>
        <div className="Rowgrid"></div>
        <Row>
          <Col span={8}>
            <div className="f2">
              <h2>Trekking</h2>
              <p>
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
              <div className="Facebook">
                <CiFacebook />
              </div>

              <div className="Twitter">
                <AiOutlineTwitter />
              </div>
              <div className="Instagram">
                <FaInstagram />
              </div>
            </div>
          </Col>
          <Col span={8} offset={8}>
            <Row>
              <Col span={8}>
                <h2>About</h2>
                <p href="#">How it works</p>
                <p href="#">Featured</p>
                <p href="#">Partnership</p>
                <p href="#">Bussiness Relation</p>
              </Col>
              <Col span={8}>
                <h2>Community</h2>
                <p href="#">Events</p>
                <p href="#">Blog</p>
                <p href="#">Podcast</p>
                <p href="#">Invite a friend</p>
              </Col>
              <Col span={8}>
                <h2>Socials</h2>
                <p href="#">Discord</p>
                <p href="#">Instagram</p>
                <p href="#">Twitter</p>
                <p href="#">Facebook</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider variant="middle" />
        <Row>
          <Col span={8}>
            <div className="t3">
              <p>&copy; 2022 Auto Fast. All rights reserved</p>
            </div>
          </Col>
          <Col span={8} offset={8}>
            <div className="t1">
              <p>Privacy & Policy</p>
            </div>
            <div className="t2">
              <p>Terms & Condition</p>
            </div>
          </Col>
        </Row>
      </BrowserRouter>
    </>
  );
};
export default Footer;
