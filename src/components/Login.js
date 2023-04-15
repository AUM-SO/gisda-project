import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";
// import Swal from "sweetalert2";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    {
      try {
        const res = await axios.post(
          "https://trekking.gistda.or.th/api/users/login/",
          {},
          {
            auth: {
              username: formData.email,
              password: formData.password
            }
          }
        );
        if (res.token) {
          Swal.fire("Success?", "Login Successful", "success");
          navigate("/");
          Cookies.set("token", res.token);
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
    <body>
      <div className="backgroud-login-page">
        <div className="img-login">
          <div className="pic_form_Login">
            <img
              src={require("../picture/img-pages/Sigup.jpg")}
              alt=""
              className="pic_sigup"
            />
          </div>
        </div>
        <div className="form-login">
          <div className="text-group">
            <h1>Login </h1>
            <p>Welcome back please enter your details.</p>
          </div>
          <form
            action=""
            method="get"
            className="input-group-login"
            onSubmit={(e) => onSubmit(e)}
          >
            <input
              type="email"
              placeholder="Email"
              className="input-login"
              name="email"
              onChange={onChange}
            />
            <input
              type="text"
              placeholder="Password"
              className="input-login inputpass"
              name="password"
              onChange={onChange}
            />
            <button className="btn_login" id="login_btn" onClick={onSubmit}>
              Login
            </button>
            <Link
              to={"/Signup"}
              className="btn_signup_LoginPages"
              id="login_btn"
            >
              Signup
            </Link>
            <div className="link_Signup">
              <p>
                Don’t have an account?&nbsp;
                <Link to="/Signup">Sign up Here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Login;
