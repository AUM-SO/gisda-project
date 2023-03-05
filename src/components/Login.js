import React from 'react'
import '../styles/Login.css'

import { Link } from 'react-router-dom'

function Login() {
  return (

    
      <body>
        <div className='backgroud'>
          <div className='img-signup'>
            <div  className='pic_form_Login' />
          </div>
          <div className='form-signup'>
            <div className="text-group">
              <h1>Login </h1>
              <p>Welcome back please enter your details.</p>
            </div>


            <form action="" method="get" className='input-group'>
              <input type="text" placeholder="Email" className='input' />
              <input type="text" placeholder="Password" className='input inputpass' />

            </form>

            <div className="btn-group">
              <button className="btn_signup">Login</button>
            </div>
            <div className="link_signup">
              <p>Don’t have an account?&nbsp;<Link to="/Signup">Sign up Here</Link></p>
            </div>
          </div>
        </div>


      </body >

    

  )
}

export default Login