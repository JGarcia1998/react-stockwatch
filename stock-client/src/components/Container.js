import React from "react";
import { Icon } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import GraphicEqRoundedIcon from "@material-ui/icons/GraphicEqRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

function Container() {
  return (
    <>
      <div className="main-body">
        <div className="navbar">
          <div className="navbar__container">
            <div class="navbar__img"></div>
            <h1 className="navbar__container-heading">StockWatch</h1>
            <p className="navbar__container-item">
              Up to date stock and crypto currencies daily
            </p>
          </div>

          <div className="navbar__icon">
            <HomeOutlinedIcon style={{ fontSize: 30 }}></HomeOutlinedIcon>
            <a href="#" className="navbar__label">
              Home
            </a>
          </div>

          <div className="navbar__icon">
            <AddShoppingCartRoundedIcon
              style={{ fontSize: 30 }}
            ></AddShoppingCartRoundedIcon>
            <a href="#" className="navbar__label">
              Watchlist
            </a>
          </div>

          <div className="navbar__icon">
            <ShowChartRoundedIcon
              style={{ fontSize: 30 }}
            ></ShowChartRoundedIcon>
            <a href="#" className="navbar__label">
              Stocks
            </a>
          </div>

          <div className="navbar__icon">
            <GraphicEqRoundedIcon
              style={{ fontSize: 30 }}
            ></GraphicEqRoundedIcon>
            <a href="#" className="navbar__label">
              Crypto
            </a>
          </div>

          <div className="navbar__icon">
            <ExitToAppRoundedIcon
              style={{ fontSize: 30 }}
            ></ExitToAppRoundedIcon>
            <a href="#" className="navbar__label">
              Sign out
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
