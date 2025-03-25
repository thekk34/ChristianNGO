import { useState } from "react";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
} from "./Firebase";
import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import "./login.css";

const Login_page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [Registration, setRegistration] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Registration) {
      axios
        .post("http://localhost:5000/send-otp", { email, number }) 
        .then((response) => {
          console.log("OTP sent:", response.data);

          localStorage.setItem(
            "pendingUser",
            JSON.stringify({ email, password, username, number })
          );

        //   navigate("/otp-verification");
        })
        .catch((err) => {
          setMessage(err.response?.data?.message || "Failed to send OTP");
        });
    } else {
      axios
        .post("http://localhost:5000/login", { email, password })
        .then((response) => {
          console.log("Login successful:", response.data);
          setEmail("");
          setPassword("");
        //   navigate("/landing");
        })
        .catch((err) => {
          setMessage(err.response?.data?.message || "Login failed");
        });
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Sign-In Success:", result.user);
      setSuccess("Google Login successful");
    //   navigate("/landing");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const signInWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log("Facebook Sign-In Success:", result.user);
      setSuccess("Facebook Login successful");
    //   navigate("/landing");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, twitterProvider);
      console.log("Twitter Sign-In Success:", result.user);
      setSuccess("Twitter Login successful");
    //   navigate("/landing");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <div className="auth-box">
        <h2>{Registration ? "Register" : "Login"}</h2>
        {success && <p className="success-message">{success}</p>}

        <form onSubmit={handleSubmit}>
          {Registration && (
            <>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
                className="input-field"
              />
              <input
                type="number"
                placeholder="Mobile number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                className="input-field"
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />

          <div className="password-container">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
          <button
            type="submit"
            className={Registration ? "register-btn" : "login-btn"}
          >
            {Registration ? "Register" : "Login"}
          </button>
        </form>

        {message && <p className="error-message">{message}</p>}

        <div className="social-login">
          <button onClick={signInWithGoogle} className="social-btn google-btn">
            <FaGoogle className="icon google-icon" /> Sign in with Google
          </button>

          <button
            onClick={signInWithFacebook}
            className="social-btn facebook-btn"
          >
            <FaFacebook className="icon facebook-icon" /> Sign in with Facebook
          </button>

          <button onClick={signInWithGithub} className="social-btn github-btn">
            <FaGithub className="icon github-icon" /> Sign in with GitHub
          </button>
        </div>

        <div className="toggle-form">
          <p
            onClick={() => setRegistration(!Registration)}
            className="toggle-link"
          >
            {Registration
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </p>
          <p className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login_page;

