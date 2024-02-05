import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import logo from "../../../Assets/logos/horizontal logo.png";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLock, FaUserCircle } from "react-icons/fa";
import "./Style/login.css";
import http from "../../../Helper/http";
import Cookies from "js-cookies";
import MainSpinner from "./../../../Shared/components/MainSpinner";
import MainError from "./../../../Shared/components/MainError";
import { setAuthUser } from "../../../Helper/Storage";
import { useNavigate } from "react-router";

const Login = () => {
  const [showPass, setShowPass] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mainError, setMainError] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password should be at least 8 characters long
    return password.length >= 8;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset error messages
    setEmailError("");
    setPasswordError("");

    // Collect error messages
    const emailErrors = [];
    const passwordErrors = [];

    // Basic form validation
    if (!validateEmail(email)) {
      emailErrors.push("*Please enter a valid email address.");
    }

    if (!validatePassword(password)) {
      passwordErrors.push("*Password must be at least 8 characters long.");
    }

    // Display errors
    setEmailError(emailErrors.join(" "));
    setPasswordError(passwordErrors.join(" "));

    // If there are validation errors, return early
    if (emailErrors.length > 0 || passwordErrors.length > 0) {
      return;
    }

    setLoading(true);
    http
      .POST(
        `/team/login/${role}`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        setLoading(false);
        console.log(res);
        setAuthUser(res);
        setMainError("");
        const cookieValue = Cookies.getItem("token");
        console.log("Cookie Value:", cookieValue);
        navigate("/admin/dashboard/home");
      })
      .catch((err) => {
        setLoading(false);
        setMainError("Invalid email or password.");
        // Set error messages based on the response or handle as needed
      });
  };

  return (
    <section className="login-section">
      <div className="container">
        {role.length === 0 && (
          <div className="role-btns">
            <button
              className="role-btn"
              onClick={() => {
                setRole("Chairman");
              }}
            >
              <FaUserCircle />
              Chairman
            </button>
            <button
              className="role-btn"
              onClick={() => {
                setRole("Director");
              }}
            >
              <FaUserCircle />
              Director
            </button>
            <button
              className="role-btn"
              onClick={() => {
                setRole("Volunteer");
              }}
            >
              <FaUserCircle />
              Volunteer
            </button>
          </div>
        )}

        {role.length !== 0 && (
          <div className="login-form">
            <div className="logo">
              <img src={logo} alt="logo" loading="lazy" />
            </div>
            {mainError.length !== 0 && <MainError msg={mainError} />}
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
        )}
      </div>
    </section>
  );
};

export default Login;
