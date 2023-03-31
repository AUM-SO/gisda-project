import React, { useState } from 'react'
import '../styles/Trekking.css'

/* import react icon  */
import { FaWalking } from "react-icons/fa"
import { RxClock } from "react-icons/rx"

/* import components */
import Footer from '../components/Footer'

/* function DropdownFilter */
import DropdownFilter from '../components/DropdownFilter';


/* import ripples */
import Ripples from 'react-ripples'




function Trekking() {

    const options = ['Easy', 'Normal', 'Hard'];

    return (
        <>
            <div className="Trekking">
                <div className="boxPart">
                    apirak
                </div>
                <div className="container_trekking">
                    <div className="filter_container">
                    </div>
                    <div className="container_item">
                        <div className="titleBox">
                            <div className="count_item">
                                <p> 5 placs</p>
                            </div>
                            <div className="dropdown">
                                <p>level : </p>
                                <DropdownFilter options={options} />
                            </div>
                        </div>

                        {/*  พื้นที่แสดง cards */}
                        <div className="container_showitem">
                            <Ripples>
                                <button className="Treak_card ">
                                    <div className="textitem">
                                        <h3>เขาไม่รักว้าย</h3>
                                        <div className="walk">
                                            <FaWalking id='walkicon' /><p>ระยะทาง 5.5 กิโลเมตร</p>
                                        </div>
                                        <div className="time">
                                            <RxClock id='Clock' /><p>เวลาเฉลี่ย 2 ชม.</p>
                                        </div>
                                    </div>
                                    <img src={require("../img/mountain8.png")} alt="" className='img_item zoom' />
                                </button>
                            </Ripples>
                        </div>
                        <div className="container_showitem">
                            <Ripples>
                                <button className="Treak_card ">
                                    <div className="textitem">
                                        <h3>เขาไม่รักว้าย</h3>
                                        <div className="walk">
                                            <FaWalking id='walkicon' /><p>ระยะทาง 5.5 กิโลเมตร</p>
                                        </div>
                                        <div className="time">
                                            <RxClock id='Clock' /><p>เวลาเฉลี่ย 2 ชม.</p>
                                        </div>
                                    </div>
                                    <img src={require("../img/mountain4.jpg")} alt="" className='img_item zoom' />
                                </button>
                            </Ripples>
                        </div>
                        <div className="container_showitem">
                            <Ripples>
                                <button className="Treak_card ">
                                    <div className="textitem">
                                        <h3>เขาไม่รักว้าย</h3>
                                        <div className="walk">
                                            <FaWalking id='walkicon' /><p>ระยะทาง 5.5 กิโลเมตร</p>
                                        </div>
                                        <div className="time">
                                            <RxClock id='Clock' /><p>เวลาเฉลี่ย 2 ชม.</p>
                                        </div>
                                    </div>
                                    <img src={require("../img/mountain6.png")} alt="" className='img_item zoom' />
                                </button>
                            </Ripples>
                        </div>
                        <div className="container_showitem">
                            <Ripples>
                                <button className="Treak_card ">
                                    <div className="textitem">
                                        <h3>เขาไม่รักว้าย</h3>
                                        <div className="walk">
                                            <FaWalking id='walkicon' /><p>ระยะทาง 5.5 กิโลเมตร</p>
                                        </div>
                                        <div className="time">
                                            <RxClock id='Clock' /><p>เวลาเฉลี่ย 2 ชม.</p>
                                        </div>
                                    </div>
                                    <img src={require("../img/mountain4.jpg")} alt="" className='img_item zoom' />
                                </button>
                            </Ripples>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Trekking


