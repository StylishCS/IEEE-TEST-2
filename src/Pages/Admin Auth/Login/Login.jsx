import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import logo from "../../../Assets/logos/horizontal logo.png";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import "./Style/login.css";
import Axios from "axios";
import Cookies from "js-cookies";
import MainError from "../../../Shared/components/MainError";
import MainSpinner from "./../../../Shared/components/MainSpinner";

const Login = () => {
  const [showPass, setShowPass] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [mainError, setMainError] = useState("");
  const [loading, setLoading] = useState(false);
  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password should be at least 6 characters long
    return password.length >= 8;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset error messages
    setEmailError("");
    setPasswordError("");
    setMainError("");

    // Basic form validation
    if (!validateEmail(email)) {
      setEmailError("*Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("*Password must be at least 6 characters long.");
      return;
    }
    setLoading(true);
    Axios.post(
      "https://ieee-backend-06597876c603.herokuapp.com/team/login",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    )
      .then((res) => {
        console.log(res);
        const cookieValue = Cookies.getItem("token");
        console.log("Cookie Value:", cookieValue);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        // Set error messages based on the response or handle as needed
        setMainError("Invalid email or password.");
      });
  };

  return (
    <section className="login-section">
      <div className="container">
        <div className="login-form">
          <div className="logo">
            <img src={logo} alt="logo" loading="lazy" />
          </div>
          {mainError.length !== 0 && (
            <MainError msg={mainError} className={"login-error"} />
          )}
          <Form>
            <div className="input-container">
              <MdEmail />
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="error-message">{emailError}</div>
            <div className="input-container">
              <FaLock />
              <Form.Control
                type={showPass}
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPass(showPass === "password" ? "text" : "password");
                }}
              >
                {showPass === "password" ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>
            <div className="error-message">{passwordError}</div>
            <button className="main-btn login-btn" onClick={handleLogin}>
              {loading && <MainSpinner />}
              {!loading && "Login"}
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Login;
