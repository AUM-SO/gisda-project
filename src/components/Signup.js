import React from "react";

/* import img from '/public/pic_Signup_page/miuntain2.png' */
import { BrowserRouter} from 'react-router-dom' ;
import { Link } from 'react-router-dom';
import "../styles/Signup.css";

function Signup() {
    return (
        <BrowserRouter>
            <body>
                <div className='backgroud'>
                    <div className='img-signup'>
                        <img src='#' alt="" className='pic_form_signup' />
                    </div>
                    <div className='form-signup'>
                        <div className="text-group">
                            <h1>Sign Up</h1>
                            <p>Welcome back please enter your details.</p>
                        </div>
                        <form action="" method="get" className='input-group'>
                            <input type="text" placeholder="User name" className='input' />
                            <input type="text" placeholder="Email" className='input' />
                            <input type="text" placeholder="Password" className='input' />
                            <input type="text" placeholder="Confirm Password" className='input' />

                        </form>
                        <div className="btn-group">
                            <button className="btn_signup">Sign up</button>
                        </div>
                        <nav className="link_signup">
                            <p>you have an account&nbsp;
                            <Link to={"#"}>Login here !!</Link></p>
                        </nav>
                    </div>
                </div>

            </body>
        </BrowserRouter>


    );

}

export default Signup;