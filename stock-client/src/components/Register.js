import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login() {
  const [user, setUser] = useState({});

  const registerDB = () => {
    fetch("https://safe-citadel-64633.herokuapp.com/create-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result.message);
      });
  };

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="login">
        <div className="login__svg"></div>
        <h1 className="login__title">StockWatch</h1>
      </div>

      <div className="container">
        <div className="container__title-container">
          <p className="container__text">welcome</p>
          <h2 className="container__title">Register for an account</h2>
        </div>
        <div className="container__input-container">
          <p className="container__input-title">Username</p>
          <input
            onChange={handleInput}
            name="username"
            className="container__input"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="container__input-container">
          <p className="container__input-title">Password</p>
          <input
            onChange={handleInput}
            name="password"
            className="container__input"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button onClick={registerDB} className="container__btn">
          Register
        </button>
        <p className="container__registration">Already have an account?</p>
        <NavLink className="container__register" to="/login">
          Login
        </NavLink>
      </div>
    </>
  );
}
