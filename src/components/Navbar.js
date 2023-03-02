import React from "react";
import '/reactweb/src/styles/Nav.css'
export const Navbar = () => {
    return (
        <>

            <header>

                <nav>
                    {/*nav ด้านซ้าย */}
                    <div class="nav-left">
                        <div className='nav-logo'>
                            <li><a href="#">logo</a></li>
                        </div>
                        <ul>
                            <li><a href='login.js'>Home</a></li>
                            <li><a href='login.js'>Trekking</a></li>
                            <li><a href='login.js'>Contact</a></li>
                            <li><a href='login.js'>About</a></li>
                        </ul>
                    </div>
                    <div className='nav-btn'>
                    <button class="login">Login</button>
                    <button class="signup">SignUp</button>
                    </div>
                </nav>
            </header>

        </>

    );
}

export default Navbar;