import React from "react"
import { BrowserRouter } from 'react-router-dom'

import '../styles/Login.css'

function Login() {
    return (
        <BrowserRouter>
            <body>
                <div className='backgroud'>
                    <div className='img-signup'>
                        <img src='./Login-img/Login-img.jpg' alt="" className='pic_form_signup' />
                    </div>
                    <div className='form-signup'>
                        <div className="text-group">
                            <h1>Login</h1>
                        </div>
                        <form action="" method="get" className='input-group'>
                            <input type="text" placeholder="Email" className='input' />
                            <br></br>
                            <input type="text" placeholder="Password" className='input' />

                        </form>
                        <div className="btn-group">
                            <button className="btn_login">Login</button>
                            <br></br>
                            <button className="btn_signup">Signup</button>
                        </div>
                        <div className="link_signup">
                            <button className="btn_login-gmail">Login for Gmail</button>
                            <br></br>
                            <button className="btn_login-facebook">Login for Facebook</button>
                        </div>
                    </div>
                </div>

            </body>
        </BrowserRouter>


    );

}

export default Login;