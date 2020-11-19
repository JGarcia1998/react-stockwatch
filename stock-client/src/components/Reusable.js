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

  const symbols = ["BSV", "LTC", "ETH", "BCH"];
  let temp = [];

  useEffect(() => {
    if (props.seeCrypto === false) {
      fetchSymbols();
    }
  }, []);

  async function fetchSymbols() {
    props.onSetCrypto();

    for (let i = 0; i < symbols.length; i++) {
      await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbols[i]}&apikey=LTTSRB12RXT9ZBDH`
      )
        .then((res) => res.json())
        .then((allStocks) => {
          console.log(allStocks);
          try {
            let metaDataEntries = allStocks["Meta Data"];
            let symbol = metaDataEntries["2. Symbol"].toUpperCase();
            let pastDataEntries = allStocks["Time Series (Daily)"];
            let pastDataValues = Object.values(pastDataEntries);
            let mostRecentValue = pastDataValues[0];
            let x = Object.values(mostRecentValue);
            let open = parseFloat(x[0]).toFixed(2);
            let high = parseFloat(x[1]).toFixed(2);
            let low = parseFloat(x[2]).toFixed(2);
            let close = parseFloat(x[3]).toFixed(2);
            let colorToSend;
            let change = close - open;
            let percentage = (change / close) * 100;
            let result = parseFloat(percentage).toFixed(2);

            if (percentage < 0) {
              colorToSend = "red";
            } else {
              colorToSend = "rgb(30, 216, 139)";
            }

            temp.push({
              symbol: symbol,
              high: high,
              low: low,
              close: close,
              open: open,
              percentage: result,
              color: colorToSend,
            });
          } catch {
            console.log("API called more than 5 times in one minute");
          }
        });
    }

    props.onCryptoInfo(temp);
  }

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
                  <span className="crypto__price">
                    $
                    {props.cryptoInfo[0]?.high
                      ? props.cryptoInfo[0].high
                      : "loading"}
                  </span>

                  <span className="crypto__title">Low:</span>
                  <span className="crypto__price">
                    $
                    {props.cryptoInfo[0]?.low
                      ? props.cryptoInfo[0].low
                      : "loading"}
                  </span>
                </div>

                <div className="crypto__row">
                  <span className="crypto__title">Open:</span>
                  <span className="crypto__price">
                    $
                    {props.cryptoInfo[0]?.open
                      ? props.cryptoInfo[0].open
                      : "loading"}
                  </span>

                  <span className="crypto__title">Close:</span>
                  <span className="crypto__price">
                    $
                    {props.cryptoInfo[0]?.close
                      ? props.cryptoInfo[0].close
                      : "loading"}
                  </span>
                </div>
              </div>
              <div className="crypto__symbol-1">
                <span className="crypto__symbol-ltr">B</span>
              </div>
              <div
                style={{
                  color: props.cryptoInfo[0]?.color
                    ? props.cryptoInfo[0].color
                    : "green",
                }}
                className="crypto__percentage"
              >
                {props.cryptoInfo[0]?.percentage
                  ? props.cryptoInfo[0].percentage
                  : "loading"}
                %
              </div>
              <span className="crypto__name">Bitcoin SV</span>
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
                  <span className="crypto__price">
                    {" "}
                    $
                    {props.cryptoInfo[1]?.high
                      ? props.cryptoInfo[1].high
                      : "loading"}
                  </span>

                  <span className="crypto__title">Low:</span>
                  <span className="crypto__price">
                    {" "}
                    $
                    {props.cryptoInfo[1]?.low
                      ? props.cryptoInfo[1].low
                      : "loading"}
                  </span>
                </div>

                <div className="crypto__row">
                  <span className="crypto__title">Open:</span>
                  <span className="crypto__price">
                    {" "}
                    $
                    {props.cryptoInfo[1]?.open
                      ? props.cryptoInfo[1].open
                      : "loading"}
                  </span>

                  <span className="crypto__title">Close:</span>
                  <span className="crypto__price">
                    {" "}
                    $
                    {props.cryptoInfo[1]?.close
                      ? props.cryptoInfo[1].close
                      : "loading"}
                  </span>
                </div>
              </div>
              <div className="crypto__symbol-2">
                <span className="crypto__symbol-ltr">L</span>
              </div>
              <div
                style={{
                  color: props.cryptoInfo[1]?.color
                    ? props.cryptoInfo[1].color
                    : "green",
                }}
                className="crypto__percentage"
              >
                {props.cryptoInfo[1]?.percentage
                  ? props.cryptoInfo[1].percentage
                  : "loading"}
                %
              </div>
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
                  <span className="crypto__price">
                    {" "}
                    $
                    {props.cryptoInfo[2]?.high
                      ? props.cryptoInfo[2].high
                      : "loading"}
                  </span>

                  <span className="crypto__title">Low:</span>
                  <span className="crypto__price">
                    {" "}
                    $
                    {props.cryptoInfo[2]?.low
                      ? props.cryptoInfo[2].low
                      : "loading"}
                  </span>
                </div>

                <div className="crypto__row">
                  <span className="crypto__title">Open:</span>
                  <span className="crypto__price">
                    {" "}
                    $
                    {props.cryptoInfo[2]?.open
                      ? props.cryptoInfo[2].open
                      : "loading"}
                  </span>

                  <span className="crypto__title">Close:</span>
                  <span className="crypto__price">
                    {" "}
                    $
                    {props.cryptoInfo[2]?.close
                      ? props.cryptoInfo[2].close
                      : "loading"}
                  </span>
                </div>
              </div>
              <div className="crypto__symbol-3">
                <span className="crypto__symbol-ltr">E</span>
              </div>
              <div
                style={{
                  color: props.cryptoInfo[2]?.color
                    ? props.cryptoInfo[2].color
                    : "green",
                }}
                className="crypto__percentage"
              >
                {props.cryptoInfo[2]?.percentage
                  ? props.cryptoInfo[2].percentage
                  : "loading"}
                %
              </div>
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
                  <span className="crypto__price">
                    {" "}
                    $
                    {props.cryptoInfo[3]?.high
                      ? props.cryptoInfo[3].high
                      : "loading"}
                  </span>

                  <span className="crypto__title">Low:</span>
                  <span className="crypto__price">
                    {" "}
                    $
                    {props.cryptoInfo[3]?.low
                      ? props.cryptoInfo[3].low
                      : "loading"}
                  </span>
                </div>

                <div className="crypto__row">
                  <span className="crypto__title">Open:</span>
                  <span className="crypto__price">
                    {" "}
                    $
                    {props.cryptoInfo[3]?.open
                      ? props.cryptoInfo[3].open
                      : "loading"}
                  </span>

                  <span className="crypto__title">Close:</span>
                  <span className="crypto__price">
                    {" "}
                    $
                    {props.cryptoInfo[3]?.close
                      ? props.cryptoInfo[3].close
                      : "loading"}
                  </span>
                </div>
              </div>
              <div className="crypto__symbol-4">
                <span className="crypto__symbol-ltr">B</span>
              </div>
              <div
                style={{
                  color: props.cryptoInfo[3]?.color
                    ? props.cryptoInfo[3].color
                    : "green",
                }}
                className="crypto__percentage"
              >
                {props.cryptoInfo[3]?.percentage
                  ? props.cryptoInfo[3].percentage
                  : "loading"}
                %
              </div>
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
    cryptoInfo: state.cryptoInfo,
    seeCrypto: state.cryptosSet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCryptoInfo: (temp) => {
      dispatch({
        type: "SETCRYPTOINFO",
        value: temp,
      });
    },

    onSetCrypto: () => {
      dispatch({
        type: "SETCRYPTO",
        value: true,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reusable);
