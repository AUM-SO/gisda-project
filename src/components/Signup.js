import React from 'react'

import '../styles/Signup.css'

import { Link } from 'react-router-dom' 

function signup() {
    return (
    
            <div>
                <body>
                    <div className='backgroud'>
                        <div className='img-signup'>
                        <div  className='pic_form_signup' />
                        </div>
                        <div className='form-signup'>
                            <div className="text-group">
                                <h1>Sign Up</h1>
                                <p>Welcome back please enter your details.</p>
                            </div>
                            <form action="" method="get" className='input-group'>
                                <input type="text" placeholder="User name" className='input' />
                                <input type="text" placeholder="Email" className='input' />
                                <input type="password" name="password" placeholder="Password" className='input' />
                                <input type="password" name="password"  placeholder="Confirm Password" className='input' />

                            </form>
                            <div className="btn-group">
                                <button className="btn_signup">Sign up</button>
                            </div>
                            <div className="link_signup">

                                <p>you have an account&nbsp;<Link to="/Login">Login Here</Link></p>
                            </div>
                        </div>
                    </div>
                        

                </body >

            </div>
        
    )
}

export default signup