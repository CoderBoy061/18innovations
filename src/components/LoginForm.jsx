import React from "react";
import "./style/loginform.css";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <div className="main-loginform-container">
      <div className="login-form-heading">
        <p>
          Welcome to <span>LOREM</span>
        </p>
        <div>
          <p>No Account ?</p>
          <p>Signup</p>
        </div>
      </div>
      <div className="social-login-container">
        <div className="google-login-div">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.3761 13.2526C24.3761 12.3174 24.2987 11.6349 24.1311 10.9271H13.2333V15.1484H19.6301C19.5011 16.1975 18.8047 17.7774 17.2571 18.839L17.2354 18.9803L20.6811 21.5962L20.9198 21.6196C23.1122 19.6353 24.3761 16.7157 24.3761 13.2526Z"
              fill="#4285F4"
            />
            <path
              d="M13.2326 24.375C16.3664 24.375 18.9974 23.3638 20.919 21.6197L17.2563 18.839C16.2762 19.5089 14.9607 19.9766 13.2326 19.9766C10.1632 19.9766 7.55804 17.9923 6.62938 15.2496L6.49326 15.261L2.9104 17.9784L2.86354 18.106C4.77224 21.8218 8.69287 24.375 13.2326 24.375Z"
              fill="#34A853"
            />
            <path
              d="M6.63006 15.2497C6.38502 14.5419 6.24321 13.7835 6.24321 13C6.24321 12.2163 6.38502 11.458 6.61717 10.7502L6.61067 10.5995L2.9829 7.83849L2.86421 7.89381C2.07754 9.43578 1.62614 11.1673 1.62614 13C1.62614 14.8326 2.07754 16.5641 2.86421 18.106L6.63006 15.2497Z"
              fill="#FBBC05"
            />
            <path
              d="M13.2326 6.0233C15.4122 6.0233 16.8824 6.94594 17.7207 7.71696L20.9965 4.5825C18.9846 2.74987 16.3665 1.625 13.2326 1.625C8.69291 1.625 4.77225 4.17804 2.86354 7.89384L6.61651 10.7503C7.55806 8.00763 10.1632 6.0233 13.2326 6.0233Z"
              fill="#EB4335"
            />
          </svg>
          <p>Sign in with Google</p>
        </div>
        <div className="facebook-login">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="14.5"
              cy="13.34"
              rx="12.6875"
              ry="12.6875"
              fill="url(#paint0_linear_2_38)"
            />
            <path
              d="M19.2249 18.3802L19.7885 14.7992H16.2629V12.4763C16.2629 11.4964 16.7544 10.5407 18.3336 10.5407H19.9375V7.49196C19.9375 7.49196 18.4825 7.25 17.0921 7.25C14.1872 7.25 12.2903 8.96548 12.2903 12.0698V14.7992H9.0625V18.3802H12.2903V27.0375C12.9383 27.1367 13.6012 27.1875 14.2766 27.1875C14.9519 27.1875 15.6148 27.1367 16.2629 27.0375V18.3802H19.2249Z"
              fill="#F7F7F7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_38"
                x1="14.5"
                y1="0.652496"
                x2="14.5"
                y2="25.9522"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18ACFE" />
                <stop offset="1" stop-color="#0163E0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="facebook-login">
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.1875 14C27.1875 20.762 21.5098 26.25 14.5 26.25C7.49016 26.25 1.8125 20.762 1.8125 14C1.8125 7.23187 7.49016 1.75 14.5 1.75C21.5098 1.75 27.1875 7.23187 27.1875 14Z"
              fill="#283544"
            />
            <path
              d="M20.4469 10.9002C20.3777 10.9392 18.7295 11.7622 18.7295 13.5869C18.8072 15.6678 20.8094 16.3976 20.8438 16.3976C20.8094 16.4366 20.5415 17.3917 19.7478 18.393C19.1179 19.2554 18.4188 20.125 17.3572 20.125C16.3474 20.125 15.9849 19.5502 14.8197 19.5502C13.5684 19.5502 13.2143 20.125 12.2563 20.125C11.1947 20.125 10.4438 19.2089 9.77959 18.3545C8.91668 17.2363 8.18324 15.4815 8.15734 13.7965C8.13989 12.9037 8.33015 12.026 8.81311 11.2805C9.49477 10.2398 10.7117 9.53333 12.0407 9.51004C13.059 9.47915 13.9652 10.139 14.5867 10.139C15.1822 10.139 16.2956 9.51004 17.5553 9.51004C18.0991 9.51055 19.5491 9.65792 20.4469 10.9002ZM14.5005 9.33177C14.3193 8.51641 14.8197 7.70104 15.2858 7.18093C15.8813 6.55193 16.8219 6.125 17.633 6.125C17.6848 6.94037 17.3566 7.74003 16.7701 8.32244C16.2438 8.95144 15.3376 9.42496 14.5005 9.33177Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="login-input-conatiner">
        <div className="input-div">
          <label htmlFor="Enter your username or email address">
            Enter your username or email address
          </label>
          <input type="text" placeholder="Username or emailaddress" />
        </div>
        <div className="input-div">
          <label htmlFor="Enter your Password">Enter your Password</label>
          <input type="password" placeholder="Password" />
          <p className="forgot-password">Forgot Password</p>
        </div>
      </div>
      <button className="login-btn" onClick={()=>navigate("/dashboard")}>Sign In</button>
    </div>
  );
};

export default LoginForm;
