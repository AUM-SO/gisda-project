import React from 'react'

import '../styles/Signup.css'

import { Link } from 'react-router-dom'

function signup() {
    return (

        <div>
            <body>
                <div className='backgroud-signup-page'>
                    <div className='img-signup'>
                    <div className='pic_form_Login' ><img src={require("../picture/img-pages/Login.jpg")} alt="" className='pic_sigup' /></div>
                    </div>
                    <div className='form-signup'>
                        <div className="text-group">
                            <h1>Sign Up</h1>
                            <p>Welcome back please enter your details.</p>
                        </div>
                        <form action="" method="get" className='input-group-signup'>
                            <input type="text" placeholder="User name" className='input-signup' />
                            <input type="text" placeholder="Email" className='input-signup' />
                            <input type="password" name="password" placeholder="Password" className='input-signup' />
                            <input type="password" name="password" placeholder="Confirm Password" className='input-signup' />
                            <button className="btn_signup">Sign up</button>
                            <div className="link_login">
                            <p>you have an account&nbsp;<Link to="/Login">Login Here</Link></p>
                        </div>
                        </form>

                        
                    </div>
                </div>


            </body >

        </div>

    )
}

export default signup