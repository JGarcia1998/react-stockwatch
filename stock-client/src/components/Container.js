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
              Dashboard
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

        <div className="header">
          <h2 className="header__title">Top Stocks</h2>
          <p className="header__p">
            Latest prices and news related to each currency
          </p>

          <div className="header__stock-hold">
            <div className="header__stock">
              <a href="#" className="header__stock-news">
                <div className="header__stock-news-word">News</div>
              </a>

              <h2 className="header__stats">Stats</h2>

              <div className="header__flex-col">
                <div className="header__flex-row">
                  <span className="header__grid-title">High:</span>
                  <span className="header__grid-price">$495.85</span>
                  <span className="header__grid-title">Low:</span>
                  <span className="header__grid-price">467.26</span>
                </div>

                <div className="header__flex-row">
                  <span className="header__grid-title">Open:</span>
                  <span className="header__grid-price">$495.85</span>
                  <span className="header__grid-title">Close:</span>
                  <span className="header__grid-price">467.26</span>
                </div>
              </div>

              <button className="header__icon"></button>
              <p className="header__stock-title">Apple</p>
              <p className="header__stock-price">15%</p>
            </div>
            <div className="header__stock">
              <a href="#" className="header__stock-news">
                <div className="header__stock-news-word">News</div>
              </a>
              <h2 className="header__stats">Stats</h2>
              <div className="header__flex-col">
                <div className="header__flex-row">
                  <span className="header__grid-title">High:</span>
                  <span className="header__grid-price">$495.85</span>
                  <span className="header__grid-title">Low:</span>
                  <span className="header__grid-price">467.26</span>
                </div>

                <div className="header__flex-row">
                  <span className="header__grid-title">Open:</span>
                  <span className="header__grid-price">$495.85</span>
                  <span className="header__grid-title">Close:</span>
                  <span className="header__grid-price">467.26</span>
                </div>
              </div>
              <button className="header__icon-2"></button>
              <p className="header__stock-title">Netflix</p>
              <p className="header__stock-price">12%</p>
            </div>
          </div>

          <h2 className="header__news-title">Individual stock updates</h2>

          <div className="header__stock-news-grid">
            <div className="header__stock-news-grid-container">
              <span className="header__stock-news-grid-logo-twtr"></span>

              <div className="header__stock-news-grid-col">
                <p className="header__stock-news-grid-title">TWTR</p>
                <p className="header__stock-news-grid-name">
                  Social Network Company
                </p>
              </div>
              <a className="header__stock-news-grid-news" href="#">
                Updates
              </a>
            </div>

            <div className="header__stock-news-grid-container">
              <span className="header__stock-news-grid-logo-ford"></span>

              <div className="header__stock-news-grid-col">
                <p className="header__stock-news-grid-title">FORD</p>
                <p className="header__stock-news-grid-name">Car manufacturer</p>
              </div>
              <a className="header__stock-news-grid-news" href="#">
                Updates
              </a>
            </div>

            <div className="header__stock-news-grid-container">
              <span className="header__stock-news-grid-logo-btc"></span>

              <div className="header__stock-news-grid-col">
                <p className="header__stock-news-grid-title">BTC</p>
                <p className="header__stock-news-grid-name">Crypto currency</p>
              </div>
              <a className="header__stock-news-grid-news" href="#">
                Updates
              </a>
            </div>

            <div className="header__stock-news-grid-container">
              <span className="header__stock-news-grid-logo-tsla"></span>

              <div className="header__stock-news-grid-col">
                <p className="header__stock-news-grid-title">TSLA</p>
                <p className="header__stock-news-grid-name">
                  Electric car manufacturer
                </p>
              </div>
              <a className="header__stock-news-grid-news" href="#">
                Updates
              </a>
            </div>

            <div className="header__stock-news-grid-container">
              <span className="header__stock-news-grid-logo-amzn"></span>

              <div className="header__stock-news-grid-col">
                <p className="header__stock-news-grid-title">AMZN</p>
                <p className="header__stock-news-grid-name">
                  Social Network Company
                </p>
              </div>
              <a className="header__stock-news-grid-news" href="#">
                Updates
              </a>
            </div>

            <div className="header__stock-news-grid-container">
              <span className="header__stock-news-grid-logo-snap"></span>

              <div className="header__stock-news-grid-col">
                <p className="header__stock-news-grid-title">SNAP</p>
                <p className="header__stock-news-grid-name">
                  Social Network Company
                </p>
              </div>
              <a className="header__stock-news-grid-news" href="#">
                Updates
              </a>
            </div>
          </div>
        </div>

        <div className="main-right">
          <div className="main-right__stock">
            <div className="main-right__logo">G</div>
            <h2 className="main-right__name">GOOGL</h2>
            <p className="main-right__price">$1,999</p>
            <p className="main-right__percentage">+2.2% (5.76)</p>
            <svg
              className="main-right-chart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="rgb(65, 98, 189)"
                fill-opacity="1"
                d="M0,128L26.7,149.3C53.3,171,107,213,160,245.3C213.3,277,267,299,320,272C373.3,245,427,171,480,154.7C533.3,139,587,181,640,170.7C693.3,160,747,96,800,80C853.3,64,907,96,960,101.3C1013.3,107,1067,85,1120,101.3C1173.3,117,1227,171,1280,202.7C1333.3,235,1387,245,1413,250.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
              ></path>
            </svg>
            <div className="main-right__days">
              <span className="main-right__times c">1D</span>
              <span className="main-right__times">5D</span>
              <span className="main-right__times">1M</span>
              <span className="main-right__times">6M</span>
              <span className="main-right__times">1Y</span>
              <span className="main-right__times">5Y</span>
            </div>
          </div>

          <div className="main-right__info">
            <h2 className="main-right__info-name">ABOUT</h2>
            <p className="main-right__text">
              StockWatch is a currency dashboard for getting daily updates on
              stock and crypto prices. Each price is updated every day at market
              close(3pm).
            </p>
          </div>
        </div>

        <button className="btn-fixed"></button>
      </div>
    </>
  );
}

export default Container;
