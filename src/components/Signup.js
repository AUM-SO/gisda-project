import React, { useState } from "react";

import "../styles/Signup.css";

import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    {
      try {
        const res = await axios.post("https://trekking.gistda.or.th/api/users/register/", formData)
        if (res.data.token) {
          Cookies.set("token", res.data.token);
          Swal.fire("Success?", "Register Successful", "success");
          navigate("/");
        } else {
          Swal.fire("Error?", res.detail || "Server Error", "error");
        }
      } catch (err) {
        console.log(err);
        Cookies.remove("token");
      }
    }
  };
  return (
    <div>
      <body>
        <div className="backgroud-signup-page">
          <div className="img-signup">
            <div className="pic_form_Login">
              <img
                src={require("../picture/img-pages/Login.jpg")}
                alt=""
                className="pic_sigup"
              />
            </div>
          </div>
          <div className="form-signup">
            <div className="text-group">
              <h1>Sign Up</h1>
              <p>Welcome back please enter your details.</p>
            </div>
            <form  action="" className="input-group-signup" onSubmit={(e) => onSubmit(e)}>
              <input
                type="text"
                placeholder="User name"
                className="input-signup"
                name="username"
                required
                autoComplete="username"
                onChange={onChange}
              />
              <input
                type="email"
                placeholder="Email"
                className="input-signup"
                name="email"
                onChange={onChange}
              />
              <input
                type="password"
                name="password1"
                placeholder="Password"
                className="input-signup"
                onChange={onChange}
              />
              <input
                type="password"
                name="password2"
                placeholder="Confirm Password"
                className="input-signup"
                onChange={onChange}
              />
              <button className="btn_signup">Sign up</button>
              <div className="link_login">
                <p>
                  you have an account&nbsp;<Link to="/Login">Login Here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Signup;
