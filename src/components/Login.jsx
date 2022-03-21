import React from "react";
import "./style/login.css";
import image from "../assests/image.png";
import avatar from "../assests/avatar.png";
import cancel from "../assests/cancel.png";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="main-login-container">
      <div className="upper-login-container">
        <p>Your Logo</p>
        <div className="upper-login-heading">
          <div>
            <p>Sign in to </p>
            <p>Lorem Ipsum is simply </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="lower-login-container">
        <p>Login as</p>
        <div className="dispaly-avatar">
          <div className="user-avatar">
            <img src={cancel} alt="" />
            <img src={avatar} alt="" />
            <div>
              <p>John Peter</p>
              <p>Active 1 day ago</p>
            </div>
          </div>
          <div className="user-avatar">
            <img src={cancel} alt="" />
            <img src={avatar} alt="" />
            <div>
              <p>John Peter</p>
              <p>Active 1 day ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="login-form">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
