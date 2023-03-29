import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (


    <body>
      <div className='backgroud-login-page'>
        <div className='img-login'>
          <div className='pic_form_Login' ><img src={require("../picture/img-pages/Sigup.jpg")} alt="" className='pic_sigup' /></div>
        </div>
        <div className='form-login'>
          <div className="text-group">
            <h1>Login </h1>
            <p>Welcome back please enter your details.</p>
          </div>
          <form action="" method="get" className='input-group-login'>
            <input type="text" placeholder="Email" className='input-login' />
            <input type="text" placeholder="Password" className='input-login inputpass' />
            <button className="btn_login" id='login_btn'>Login</button>
            <Link to={"/Signup"} className="btn_signup_LoginPages" id='login_btn'>Signup</Link>
            <div className="link_Signup">
              <p>Don’t have an account?&nbsp;<Link to="/Signup">Sign up Here</Link></p>
            </div>
          </form>



        </div>
      </div>
    </body >

  )
}

export default Login