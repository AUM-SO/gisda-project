import React, { useState } from "react";

import "../styles/Signup.css";

import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:8000/api/users/register/";

async function postData(url = "", data = {}) {
  const token = Cookies.get("token");
  var headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Token ${token}`;
  }

  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: headers,
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

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
        const res = await postData(baseUrl, formData);
        if (res.token) {
          Cookies.set("token", res.token);
          Swal.fire("The Internet?", "That thing is still around?", "success");
          navigate("/");
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
