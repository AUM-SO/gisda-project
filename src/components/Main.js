
import React from 'react';

import '/reactweb/src/styles/Main.css'


export const Main = () => {

    return (
        <>
            <body>
                <div className='container-main'>
                    <div className='content-left'>

                        <input type="search" placeholder='search' className='search'></input>
                        <br></br>
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


                    <div className='content-right'>
                        <p className='title-cardheader'>Website / Trekking</p>
                    
                            <img src="./Main-img/card header.png" ></img>
                    
                        <p className='favorite-trekking'>Favorite Trekking</p>
                        <div className='CardAll'>

                            <div className='card1'>
                                <img src="./Main-img/card1.png"></img>
                                <div className='vector1'>
                                    <img src="./Main-img/Vector 1.png"></img>
                                </div>
                                <div className='detail1'>
                                    <h6>สถานที่ 1</h6>
                                    <p><img src='./Main-img/Time.png'></img>
                                        Trail 5.5 km
                                    </p>
                                    <p><img img src='./Main-img/Time.png'></img>
                                        Time 2 hrs.
                                    </p>
                                </div>
                            </div>
                            

                            <div className='card2'>
                                <img src="./Main-img/card 2.png"></img>
                                <div className='vector2'>
                                    <img src="./Main-img/Vector 2.png"></img>
                                </div>
                                <div className='detail2'>
                                    <h6>สถานที่ 2</h6>
                                    <p><img src='./Main-img/Time.png'></img>
                                        Trail 5.5 km
                                    </p>
                                    <p><img img src='./Main-img/Time.png'></img>
                                        Time 2 hrs.
                                    </p>
                                </div>



                                </div>
                                <div className='card3'>
                                    <img src="./Main-img/card 3.png"></img>
                                    <div className='vector3'>
                                        <img src="./Main-img/Vector 3.png"></img>
                                    </div>
                                    <div className='detail3'>
                                        <h6>สถานที่ 2</h6>
                                        <p><img src='./Main-img/Time.png'></img>
                                        Trail 5.5 km
                                    </p>
                                    <p><img img src='./Main-img/Time.png'></img>
                                        Time 2 hrs.
                                    </p>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </body>

        </>
    );
}

export default Main;