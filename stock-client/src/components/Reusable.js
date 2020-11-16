import React from "react";
import Navbar from "./Navbar";
import StockNews from "./StockNews";
import TopStocks from "./TopStocks";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Reusable(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [stockUpdate, setStockUpdate] = useState([]);
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const showPopupFunc = (e) => {
    if (showPopup === false) {
      setShowPopup(true);
    }

    let search = e.target.dataset.name;

    if (search != undefined) {
      fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=` +
          process.env.REACT_APP_KEY
      )
        .then((res) => res.json())
        .then((results) => {
          setStockUpdate(results.articles);
        });
    }
  };

  const closePopUp = () => {
    setShowPopup(false);
    setStockUpdate([]);
  };
  const classes = useStyles();

  return (
    <>
      <div className={showPopup === true ? "news-popup" : "news-popup-false"}>
        <button onClick={closePopUp} className="news-close">
          X
        </button>

        {stockUpdate.splice(0, 3).map((article) => {
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
      <div className="main-body">
        <Navbar></Navbar>

        <div className="header">
          <h2 className="header__title">Top Crypto Currencies</h2>
          <p className="header__p">
            Latest prices and news related to each currency
          </p>

          <div className="crypto">
            <div className="crypto__container">
              <div
                onClick={showPopupFunc}
                className="header__stock-news special"
                data-name="bitcoin"
              >
                <div data-name="bitcoin" className="header__stock-news-word">
                  News
                </div>
              </div>
              <h2 className="crypto__stats">Stats</h2>
              <div className="crypto__grid">
                <div className="crypto__row">
                  <span className="crypto__title">High:</span>
                  <span className="crypto__price">$1,246</span>

                  <span className="crypto__title">Low:</span>
                  <span className="crypto__price">$1,200</span>
                </div>

                <div className="crypto__row">
                  <span className="crypto__title">Open:</span>
                  <span className="crypto__price">$1,212</span>

                  <span className="crypto__title">Close:</span>
                  <span className="crypto__price">$1,112</span>
                </div>
              </div>
              <div className="crypto__symbol-1">
                <span className="crypto__symbol-ltr">B</span>
              </div>
              <div className="crypto__percentage">120%</div>
              <span className="crypto__name">Bitcoin</span>
            </div>

            <div className="crypto__container">
              <div
                onClick={showPopupFunc}
                className="header__stock-news special"
                data-name="litecoin"
              >
                <div data-name="litecoin" className="header__stock-news-word">
                  News
                </div>
              </div>
              <h2 className="crypto__stats">Stats</h2>
              <div className="crypto__grid">
                <div className="crypto__row">
                  <span className="crypto__title">High:</span>
                  <span className="crypto__price">$1,246</span>

                  <span className="crypto__title">Low:</span>
                  <span className="crypto__price">$1,200</span>
                </div>

                <div className="crypto__row">
                  <span className="crypto__title">Open:</span>
                  <span className="crypto__price">$1,212</span>

                  <span className="crypto__title">Close:</span>
                  <span className="crypto__price">$1,112</span>
                </div>
              </div>
              <div className="crypto__symbol-2">
                <span className="crypto__symbol-ltr">L</span>
              </div>
              <div className="crypto__percentage">120%</div>
              <span className="crypto__name">Litecoin</span>
            </div>

            <div className="crypto__container">
              <div
                onClick={showPopupFunc}
                className="header__stock-news special"
                data-name="etherum"
              >
                <div data-name="etherum" className="header__stock-news-word">
                  News
                </div>
              </div>
              <h2 className="crypto__stats">Stats</h2>
              <div className="crypto__grid">
                <div className="crypto__row">
                  <span className="crypto__title">High:</span>
                  <span className="crypto__price">$1,246</span>

                  <span className="crypto__title">Low:</span>
                  <span className="crypto__price">$1,200</span>
                </div>

                <div className="crypto__row">
                  <span className="crypto__title">Open:</span>
                  <span className="crypto__price">$1,212</span>

                  <span className="crypto__title">Close:</span>
                  <span className="crypto__price">$1,112</span>
                </div>
              </div>
              <div className="crypto__symbol-3">
                <span className="crypto__symbol-ltr">E</span>
              </div>
              <div className="crypto__percentage">120%</div>
              <span className="crypto__name">Etherum</span>
            </div>

            <div className="crypto__container">
              <div
                onClick={showPopupFunc}
                className="header__stock-news special"
                data-name="bitcoincash"
              >
                <div
                  data-name="bitcoincash"
                  className="header__stock-news-word"
                >
                  News
                </div>
              </div>
              <h2 className="crypto__stats">Stats</h2>
              <div className="crypto__grid">
                <div className="crypto__row">
                  <span className="crypto__title">High:</span>
                  <span className="crypto__price">$1,246</span>

                  <span className="crypto__title">Low:</span>
                  <span className="crypto__price">$1,200</span>
                </div>

                <div className="crypto__row">
                  <span className="crypto__title">Open:</span>
                  <span className="crypto__price">$1,212</span>

                  <span className="crypto__title">Close:</span>
                  <span className="crypto__price">$1,112</span>
                </div>
              </div>
              <div className="crypto__symbol-4">
                <span className="crypto__symbol-ltr">B</span>
              </div>
              <div className="crypto__percentage">120%</div>
              <span className="crypto__name">Bitcoin Cash</span>
            </div>
          </div>
        </div>

        <div className="main-right">
          <div className="crypto__center">
            <h2 className="crypto__right-title">Information</h2>
            <p className="crypto__right-text">
              Here you can find the top 4 cypto currencies including Bitcoin,
              Litecoin, Bitcoin Cash, and Etherum. The news button will display
              a few recent articles related to that curency.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedStock: state.selectedStock,
  };
};

export default connect(mapStateToProps)(Reusable);
