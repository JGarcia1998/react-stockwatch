import React from "react";
import { Icon } from "@material-ui/core";
import { NavLink, Redirect } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import GraphicEqRoundedIcon from "@material-ui/icons/GraphicEqRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__img"></div>
        <h1 className="navbar__container-heading">StockWatch</h1>
        <p className="navbar__container-item">
          Up to date stock and crypto currencies daily
        </p>
      </div>

      <NavLink to="/" className="navbar__icon">
        <div className="navbar__effect"></div>
        <HomeOutlinedIcon
          style={{ fontSize: 30, zIndex: 250, color: "black" }}
        ></HomeOutlinedIcon>
        <div className="navbar__label">Dashboard</div>
      </NavLink>

      <NavLink to="/watchlist" className="navbar__icon">
        <div className="navbar__effect"></div>
        <AddShoppingCartRoundedIcon
          style={{ fontSize: 30, zIndex: 250, color: "black" }}
        ></AddShoppingCartRoundedIcon>
        <div className="navbar__label">Watchlist</div>
      </NavLink>

      <NavLink to="/" className="navbar__icon">
        <div className="navbar__effect"></div>
        <ShowChartRoundedIcon
          style={{ fontSize: 30, zIndex: 250, color: "black" }}
        ></ShowChartRoundedIcon>
        <div className="navbar__label">Stocks</div>
      </NavLink>

      <NavLink to="/crypto" className="navbar__icon">
        <div className="navbar__effect"></div>
        <GraphicEqRoundedIcon
          style={{ fontSize: 30, zIndex: 250, color: "black" }}
        ></GraphicEqRoundedIcon>
        <div className="navbar__label">Crypto</div>
      </NavLink>

      <NavLink to="/logout" className="navbar__icon">
        <div className="navbar__effect"></div>
        <ExitToAppRoundedIcon
          style={{ fontSize: 30, zIndex: 250, color: "black" }}
        ></ExitToAppRoundedIcon>
        <div className="navbar__label">Sign out</div>
      </NavLink>
    </div>
  );
}

export default Navbar;
