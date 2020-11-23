import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function Login(props) {
  const [login, setLogin] = useState({});

  const loginDB = () => {
    fetch("https://safe-citadel-64633.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.login === true) {
          props.onSetAuthenticated();
          props.onSetUserId(result.id);
        } else if (!result.login) {
          alert("Login incorrect");
        }
      });
  };

  const handleGuestLogin = () => {
    fetch("https://safe-citadel-64633.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username: "guest", password: "guest" }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.login) {
          props.onSetAuthenticated();
          props.onSetUserId(result.id);
        } else {
          alert("Login incorrect");
        }
      });
  };

  const handleLogin = (e) => {
    setLogin({
      ...login,
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
          <p className="container__text">welcome back</p>
          <h2 className="container__title">Log into your account</h2>
        </div>
        <div className="container__input-container">
          <p className="container__input-title">Username</p>
          <input
            onChange={handleLogin}
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
            onChange={handleLogin}
            name="password"
            className="container__input"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button onClick={loginDB} className="container__btn">
          Login now
        </button>
        <p className="container__registration">Not registered yet?</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <NavLink className="container__register" to="/register">
            Register
          </NavLink>{" "}
          <p
            style={{
              marginLeft: "1rem",
              color: "rgb(182, 182, 182)",
              fontSize: "1.2rem",
            }}
          >
            or
          </p>
          <button onClick={handleGuestLogin} className="container__guest">
            Log in as guest
          </button>
        </div>
      </div>
      {props.authentication === true ? <Redirect to="/" /> : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetAuthenticated: () =>
      dispatch({
        type: "SETAUTHENTICATED",
        value: true,
      }),

    onSetUserId: (id) => {
      dispatch({
        type: "SETID",
        value: id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
