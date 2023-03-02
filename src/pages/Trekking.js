import React from 'react'

import '../styles/Trekking.css'


function Trekking() {
    return (
        <body>
            <div className='container-main'>
                <div className='content-left'>

                    <input type="search" placeholder='search' className='search'></input>
                    <br></br>
                    <div className='checkbox-filter'>
                        <div class="province">
                            <h5>Province</h5>
                            <input type="checkbox"></input>
                            <label className='labelcheck'>ชลบุรี</label>
                            <br></br>
                            <input type="checkbox"></input>
                            <label className='labelcheck'>ตลาด</label>
                            <br></br>
                            <input type="checkbox"></input>
                            <label className='labelcheck'>ฉะเชิงเทรา</label>
                            <br></br>
                            <input type="checkbox"></input>
                            <label className='labelcheck'>ระยอง</label>
                            <br></br>
                        </div>
                        <div class="distant">
                            <h5>Distant</h5>
                            <input type="checkbox"></input>
                            <label className='labelcheck'>5-10km</label>
                            <br></br>
                            <input type="checkbox"></input>
                            <label className='labelcheck'>10-20km</label>
                            <br></br>
                            <input type="checkbox"></input>
                            <label className='labelcheck'>20-30km</label>
                            <br></br>
                            <input type="checkbox"></input>
                            <label className='labelcheck'>30km++</label>
                        </div>
                        <div class="level">
                            <h5>Level</h5>
                            <input type="checkbox"></input>
                            <label className='labelcheck'>Easy</label>
                            <br></br>
                            <input type="checkbox"></input>
                            <label className='labelcheck'>Normal</label>
                            <br></br>
                            <input type="checkbox"></input>
                            <label className='labelcheck'>Hard</label>
                            <br></br>
                        </div>
                    </div>
                </div>


                <div className='content-right'>
                    <p className='title-cardheader'>Website / Trekking</p>
                    <div className="cardheader">
                        <h1 className='h1_cardheader'>Trekking For You</h1>
                        <p className='p_cardheader'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a neque, laboriosam blanditiis, reprehenderit repellendus consequatur eos eveniet accusamus quisquam corporis sequi eaque numquam saepe deleniti enim nemo reiciendis laborum?</p>
                    </div>
                    <h1>Favorite Trekking</h1>
                    <div className="backgroud_Showcard">
                        <div className="showcards">
                            <div className="card1 cdr_detile ">
                                <div className="img">
                                    <div className="imgV4"></div>
                                </div>

                                <h3 className="h3_card">สถานที่ </h3>
                                <p className='P_card'>ระยะทาง 5.5 กิโล</p>
                                <p className='P_card'>เวลาเฉลี่ย 1 ชม.</p>
                            </div>
                            <div className="card2 cdr_detile">
                                <div className="img">
                                    <div className="imgV4"></div>
                                </div>

                                <h3 className="h3_card">สถานที่ </h3>
                                <p className='P_card'>ระยะทาง 5.5 กิโล</p>
                                <p className='P_card'>เวลาเฉลี่ย 1 ชม.</p>
                            </div>
                            <div className="card3 cdr_detile">
                                <div className="img">
                                    <div className="imgV4"></div>
                                </div>

                                <h3 className="h3_card">สถานที่ </h3>
                                <p className='P_card'>ระยะทาง 5.5 กิโล</p>
                                <p className='P_card'>เวลาเฉลี่ย 1 ชม.</p>
                            </div>
                            <div className="card4 cdr_detile">
                                <div className="img">
                                    <div className="imgV4"></div>
                                </div>

                                <h3 className="h3_card">สถานที่ </h3>
                                <p className='P_card'>ระยะทาง 5.5 กิโล</p>
                                <p className='P_card'>เวลาเฉลี่ย 1 ชม.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </body>
    )
}

export default Trekking