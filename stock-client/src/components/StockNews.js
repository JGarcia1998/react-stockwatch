import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function StockNews() {
  const [showPopup, setShowPopup] = useState(false);
  const [stockUpdate, setStockUpdate] = useState([]);

  const showPopupFunc = (e) => {
    if (showPopup === false) {
      setShowPopup(true);
    }
    let search = e.target.parentNode.dataset.name;
    console.log(e.target.parentNode);

    if (search != undefined) {
      fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=` +
          process.env.REACT_APP_KEY
      )
        .then((res) => res.json())
        .then((results) => {
          console.log(results);
          setStockUpdate(results.articles);
        });
    }
  };
  const closePopUp = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className={showPopup === true ? "news-popup" : "news-popup-false"}>
        <button onClick={closePopUp} className="news-close">
          X
        </button>

        {stockUpdate.splice(0, 4).map((article) => {
          return (
            <div className="stock-updates">
              <img
                src={article.urlToImage}
                className="stock-updates__img"
                alt="News Image"
              />
              <div className="stock-updates__col">
                <h2 className="news__title">{article.title}</h2>
                <p className="news__info">{article.content}</p>
                <Button
                  style={{
                    width: "30%",
                    margin: "1rem 0",
                    alignSelf: "flex-start",
                  }}
                  variant="contained"
                  color="primary"
                  href="#"
                >
                  Article
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="header__stock-news-grid">
        <div data-name="twitter" className="header__stock-news-grid-container">
          <span className="header__stock-news-grid-logo-twtr"></span>

          <div className="header__stock-news-grid-col">
            <p className="header__stock-news-grid-title">TWTR</p>
            <p className="header__stock-news-grid-name">
              Social Network Company
            </p>
          </div>
          <button
            onClick={showPopupFunc}
            className="header__stock-news-grid-news"
          >
            Updates
          </button>
        </div>

        <div data-name="ford" className="header__stock-news-grid-container">
          <span className="header__stock-news-grid-logo-ford"></span>

          <div className="header__stock-news-grid-col">
            <p className="header__stock-news-grid-title">FORD</p>
            <p className="header__stock-news-grid-name">Car manufacturer</p>
          </div>
          <button
            onClick={showPopupFunc}
            className="header__stock-news-grid-news"
          >
            Updates
          </button>
        </div>

        <div data-name="bitcoin" className="header__stock-news-grid-container">
          <span className="header__stock-news-grid-logo-btc"></span>

          <div className="header__stock-news-grid-col">
            <p className="header__stock-news-grid-title">BTC</p>
            <p className="header__stock-news-grid-name">Crypto currency</p>
          </div>
          <button
            onClick={showPopupFunc}
            className="header__stock-news-grid-news"
          >
            Updates
          </button>
        </div>

        <div data-name="tesla" className="header__stock-news-grid-container">
          <span className="header__stock-news-grid-logo-tsla"></span>

          <div className="header__stock-news-grid-col">
            <p className="header__stock-news-grid-title">TSLA</p>
            <p className="header__stock-news-grid-name">
              Electric car manufacturer
            </p>
          </div>
          <button
            onClick={showPopupFunc}
            className="header__stock-news-grid-news"
          >
            Updates
          </button>
        </div>

        <div data-name="amazon" className="header__stock-news-grid-container">
          <span className="header__stock-news-grid-logo-amzn"></span>

          <div className="header__stock-news-grid-col">
            <p className="header__stock-news-grid-title">AMZN</p>
            <p className="header__stock-news-grid-name">
              Multinational tech company
            </p>
          </div>
          <button
            onClick={showPopupFunc}
            className="header__stock-news-grid-news"
          >
            Updates
          </button>
        </div>

        <div data-name="snapchat" className="header__stock-news-grid-container">
          <span className="header__stock-news-grid-logo-snap"></span>

          <div className="header__stock-news-grid-col">
            <p className="header__stock-news-grid-title">SNAP</p>
            <p className="header__stock-news-grid-name">
              Multi media messaging app
            </p>
          </div>
          <button
            onClick={showPopupFunc}
            className="header__stock-news-grid-news"
          >
            Updates
          </button>
        </div>
      </div>
    </>
  );
}
