import React from 'react'
import '../styles/DetalisBlogs.css'
/* import components */
import Footer from '../components/Footer'

function DetalisBlogs() {
    return (
        <>
            <div className="containerBlogDetalis">
                {/* <div className="boxPath">
                    <p>insert Function Path Here !!!!</p>
                </div> */}
                <div className="titleimgBlog ">
                    <h1 className='TitleH1'>กฎและข้อบังคับอุทยาน</h1>
                    <img src={require("../img/Blog/Blogtitle.jpg")} alt="" className='titleimg zoom' />
                </div>
                <div className="Detalis_AreaBlogs">
                    <div className="contentBlog">
                        {/* <h1>Title Blog</h1> */}
                        <p>ทั้งนี้ส่วนอุทยานแห่งชาติ กรมอุทยานแห่งชาติสัตว์ป่าและพันธ์ุพืช ดังนี้</p>
                        <ul className='boxlist'>
                            <li>ข้อห้ามในการใช้พื้นที่ภายในอุทยานฯ</li>
                            <li>ห้ามให้อาหารสัตว์</li>
                            <li>ห้ามนำภาชนะที่ทำด้วยโฟมเข้าในเขตอุทยาน</li>
                            <li>ห้ามเก็บพันธุ์ไม้/ดอกไม้</li>
                            <li>ห้ามขีดเขียนในอุทยานแห่งชาติ</li>
                            <li>ห้ามล่าสัตว์ป่า</li>
                            <li>ห้ามก่อกองไฟ</li>
                            <li>ห้ามนำเครื่องดื่มแอลกอฮอล์เข้าภายในอุทยานแห่งชาติ</li>
                            <li>ห้ามส่งเสียงดัง</li>
                            <li>ห้ามนำสัตว์เลี้ยงหรือสัตว์ต่างถิ่นเข้า</li>
                            <li>ห้ามพกพาอาวุธเข้าอุทยานแห่งชาติ</li>
                            <li>ห้ามเดินออกนอกเส้นทาง</li>
                            <li>ห้ามทิ้งขยะ</li>
                        </ul>
                    </div>
                    <img src={require("../img/Blog/content1/WEB_COVER.jpg")} alt="" className='imgcontentBlog' />
                    <div className="contentBlog">
                        <p>นอกจากนี้ยังมีควรปฏิบัติในการท่องเที่ยวน้ำตกในอุทยานแห่งชาติ</p>
                        <ul className='boxlist'>
                            <li>ไม่ควรดื่มแอลกอฮอล์ในการเที่ยวน้ำตก เพราะนอกจากจะทำให้เกิดการมึนเมา เสี่ยงต่อการจมน้ำหรือพลัดตกจากผาน้ำตกแล้ว เศษแก้วขวดที่แตกยังเป็นอันตรายต่อผู้อื่นและธรรมชาติอีกด้วย</li>
                            <li>ควรเคารพสิทธิ์ผู้อื่นที่เดินทางเข้าไปสัมผัสธรรมชาติร่วมกัน</li>
                            <li>ไม่ทิ้งขยะในทุกพื้นที่ ยกเว้นถาชนะที่จัดไว้ให้เท่านั้น</li>
                            <li>ช่วยกันเก็บขยะออกจากพื้นที่เพื่อให้แหล่งธรรมชาติงดงามน่าชมตลอดไป</li>
                            <li>ควรปฏิบัติตามกฎระเบียบของสถานที่นั้นๆ เช่น กฎระเบียบของอุทยานแห่งชาติ หรือกฎข้อบังคับของเขตรักษาพันธุ์สัตว์ป่า</li>
                            <li>ควรให้การเดินทางเข้าไปสัมผัสธรรมชาติของท่านเป็นการเรียนรู้ที่คุ้มค่าที่สุด</li>
                        </ul>
                    </div>

                    <p className='underLineBlog'></p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default DetalisBlogs