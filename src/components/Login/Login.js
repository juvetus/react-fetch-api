import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
async function LoginUser(credentials) {
  return fetch("https://server-api-react.herokuapp.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await LoginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <p>Enter a username and password to access the homepage</p>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            className="username-input"
          />
        </label>

        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassWord(e.target.value)}
            className="username-input"
          />
        </label>
        <div>
          <button type="submit" className="login-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
