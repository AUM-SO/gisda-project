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

    const [selectedValues, setSelectedValues] = useState([]);
    const optionscheckbox = [

        { label: 'ชลบุรี', value: 'option-1', className:"checkbox_filter" },
        { label: 'ตราด', value: 'option-2', className:"checkbox_filter" },
        { label: 'ฉะเทิงเทรา', value: 'option-3', className:"checkbox_filter" }
    ];
    const optionscheckboxDistance = [

        { label: '5 - 10 กิโลเมตร', value: 'Distance-1' },
        { label: '10 - 20 กิโลเมตร', value: 'Distance-2' },
        { label: '20 - 30 กิโลเมตร', value: 'Distance-3' }
    ];
    const optionscheckboxLevel = [

        { label: 'Easy', value: 'Level-Easy' },
        { label: 'Normal', value: 'Level-Normal' },
        { label: 'Hard', value: 'Level-Hard' }
    ];

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter(v => v !== value));
        } else {
            setSelectedValues([...selectedValues, value]);
        }
    }

    return (
        <>
            <div className="Trekking">
                <div className="boxPart">
                    apirak
                </div>
                <div className="container_trekking">
                    <div className="filter_container">

                        <div className="container_Location">
                            <h3 className='style_textfilter'>Location</h3>

                            {optionscheckbox.map(optionscheckbox => (

                                <div key={optionscheckbox.value}>
                                    <input type="checkbox"
                                        id={optionscheckbox.value}
                                        name={optionscheckbox.value}
                                        value={optionscheckbox.value}
                                        className={'style_labelfilter'}
                                        checked={selectedValues.includes(optionscheckbox.value)}
                                        onChange={handleCheckboxChange} />&nbsp;&nbsp;&nbsp;
                                    <label htmlFor={optionscheckbox.value} className='style_labelfilter'>{optionscheckbox.label}</label>
                                </div>

                            ))}


                        </div>

                        <div className="container_Distance ">
                            <h3 className='style_textfilter'>Distance</h3>
                            {optionscheckboxDistance.map(optionscheckboxDistance => (
                                <div key={optionscheckboxDistance.value}>
                                    <input type="checkbox"
                                        id={optionscheckboxDistance.value}
                                        name={optionscheckboxDistance.value}
                                        value={optionscheckboxDistance.value}
                                        className={'Distance'}
                                        checked={selectedValues.includes(optionscheckboxDistance.value)}
                                        onChange={handleCheckboxChange} />&nbsp;&nbsp;&nbsp;
                                    <label htmlFor={optionscheckboxDistance.value} className='style_labelfilter'>{optionscheckboxDistance.label}</label>
                                </div>
                            ))}
                        </div>

                        <div className="container_level">
                            <h3 className='style_textfilter'>Level</h3>
                            {optionscheckboxLevel.map(optionscheckboxLevel => (
                                <div key={optionscheckboxLevel.value}>
                                    <input type="checkbox" className='inputstyle'
                                        id={optionscheckboxLevel.value}
                                        name={optionscheckboxLevel.value}
                                        value={optionscheckboxLevel.value}
                                        checked={selectedValues.includes(optionscheckboxLevel.value)}
                                        onChange={handleCheckboxChange} />&nbsp;&nbsp;&nbsp;
                                    <label htmlFor={optionscheckboxLevel.value} className='style_labelfilter'>{optionscheckboxLevel.label}</label>
                                </div>
                            ))}
                        </div>
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


