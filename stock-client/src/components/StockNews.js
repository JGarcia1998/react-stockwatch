import React from "react";

export default function StockNews() {
  return (
    <>
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
    </>
  );
}
