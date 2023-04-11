import React from 'react'
import '../styles/DetalisBlogs.css'
/* import components */
import Footer from '../components/Footer'

function DetalisBlogs() {
    return (
        <>
            <div className="containerBlogDetalis">
                <div className="boxPath">
                    <p>insert Function Path Here !!!!</p>
                </div>
                <div className="titleimgBlog ">
                    <h1 className='TitleH1'>การเตรียมตัวก่อนเริ่มเดินป่า</h1>
                    <img src={require("../img/Blog/Blogtitle4.jpg")} alt="" className='titleimg zoom' />
                </div>
                <div className="Detalis_AreaBlogs">
                    <div className="contentBlog">
                        {/* <h1>Title Blog</h1> */}

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus repellendus, nisi doloremque dolor voluptas quasi, unde impedit eaque eos saepe maiores veniam, sint dolorum voluptate quia? Harum adipisci aspernatur nisi!
                            Molestias ab asperiores eligendi itaque veniam natus odio perferendis magni quidem similique. Enim quibusdam at culpa corporis dolor delectus quis odio quisquam consectetur tempora atque non, itaque ratione quidem commodi.
                            Aut dolores similique molestiae voluptatem! Totam nulla nisi at eos, praesentium perferendis labore ipsa doloremque itaque a aperiam molestias, quo laudantium consequuntur corporis iusto fugit sint error optio autem cupiditate?
                            Et dignissimos iusto sint incidunt velit quibusdam cupiditate a distinctio, necessitatibus temporibus quod, eveniet dolorem harum aliquam accusantium? Odit culpa provident deleniti et! Earum neque nam laudantium beatae provident ullam!
                            Necessitatibus hic quasi incidunt sunt. Velit aliquam eum soluta distinctio modi, non dolorem, ad illo cupiditate perspiciatis optio libero. Ullam perferendis qui sunt dicta excepturi mollitia a modi unde illo.
                            Beatae expedita aut incidunt amet labore eveniet praesentium a nesciunt dolore, facere facilis repellat ipsa tempora culpa nulla quia, ipsum quidem esse! Natus consequatur dignissimos eius unde repellendus, inventore quibusdam.
                            Veniam nemo dignissimos perferendis reiciendis voluptatum, inventore assumenda! Ducimus saepe ab repudiandae numquam, asperiores tempore eaque? Maxime quis impedit ipsa veritatis et mollitia, repudiandae vel, nisi, ratione consectetur quaerat unde?
                            Corrupti autem facilis sint in esse quos, libero eum culpa qui maxime ullam itaque optio ipsa accusamus alias impedit doloremque ea omnis placeat quia quae! Blanditiis quidem porro beatae dignissimos?
                            Architecto tenetur distinctio fuga, numquam placeat nesciunt ut? Vero nemo tempora possimus facilis ipsam architecto velit nesciunt dolores ipsum, blanditiis sit exercitationem laudantium excepturi obcaecati facere repellendus. Rem, magnam earum.</p>
                    </div>
                    <p className='underLineBlog'></p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default DetalisBlogs