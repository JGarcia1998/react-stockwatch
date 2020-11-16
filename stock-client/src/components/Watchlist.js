import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

function Watchlist(props) {
  const [watchlist, setWatchlist] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [stockInfo, setStockInfo] = useState(null);

  useEffect(() => {
    if (props.currId !== null && props.userAuth === true) {
      fetch("http://localhost:1234/user-watchlist/" + props.currId.toString())
        .then((res) => res.json())
        .then((result) => {
          if (result.watchlist) {
            setWatchlist(result.watchlist);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [setWatchlist, props.currId, props.userAuth]);

  const statPopup = (symbol) => {
    if (showPopup === false) {
      setShowPopup(true);
    }

    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=LTTSRB12RXT9ZBDH`
    )
      .then((res) => res.json())
      .then((result) => {
        const weirdJsonFromApi = result["Time Series (Daily)"];
        const todaysValue = Object.values(weirdJsonFromApi)[0];

        const newValue = Object.values(todaysValue);

        const open = newValue[0];
        const high = newValue[1];
        const low = newValue[2];
        const close = newValue[3];
        const volume = newValue[4];

        setStockInfo({
          high: high,
          open: open,
          low: low,
          close: close,
          volume: volume,
        });
      });
  };

  const removeItem = (item) => {
    fetch("http://localhost:1234/remove-item/" + props.currId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: item }),
    })
      .then((res) => res.json())
      .then((result) => {
        setWatchlist(result.watchlist);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const closePopup = () => {
    setShowPopup(false);
    setStockInfo(null);
  };

  return (
    <>
      <div className="main-body">
        <Navbar></Navbar>

        <div className="header">
          {stockInfo !== null ? (
            <div
              className={showPopup === true ? "stat-popup" : "stat-popup-none"}
            >
              <button onClick={closePopup} className="stat-popup__btn">
                X
              </button>
              <h2 className="stat-popup__title">Stats for AAPL</h2>

              <div className="stat-popup__container">
                <div className="stat-popup__row">
                  <span className="stat-popup__atr">High:</span>
                  <span className="stat-popup__info">{stockInfo.high}</span>
                  <span className="stat-popup__atr">Low:</span>
                  <span className="stat-popup__info">{stockInfo.low}</span>
                </div>

                <div className="stat-popup__row">
                  <span className="stat-popup__atr">Open:</span>
                  <span className="stat-popup__info">{stockInfo.open}</span>
                  <span className="stat-popup__atr">Close:</span>
                  <span className="stat-popup__info">{stockInfo.close}</span>
                </div>

                <div className="stat-popup__volume-name">Volume</div>

                <div className="stat-popup__volume">{stockInfo.volume}</div>
              </div>
            </div>
          ) : null}
          {props.currId !== null ? (
            <div className="display-amount">{watchlist.length} / 4 </div>
          ) : null}
          {props.currId !== null ? (
            <h2 className="header__title">Welcome to your watchlist</h2>
          ) : (
            <h2 className="header__title">
              Sorry, you must log in to see this
            </h2>
          )}

          {props.currId !== null ? (
            <p className="header__p">Here are all of your saved stocks</p>
          ) : null}
          <div className="watchlist__wrap">
            {watchlist.map((stock) => {
              let symbol = stock.symbol.split("")[0];
              return (
                <div className="watchlist">
                  <div className="watchlist__symbol">
                    <span className="watchlist__ltr">{symbol}</span>
                  </div>

                  <h2 className="watchlist__name">{stock.symbol}</h2>
                  <div className="watchlist__row">
                    <button
                      onClick={() => removeItem(stock.symbol)}
                      className="watchlist__remove"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => statPopup(stock.symbol)}
                      className="watchlist__stats"
                    >
                      Stats
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="main-right">
          <div className="crypto__center">
            <h2 className="crypto__right-title">Information</h2>
            <p className="crypto__right-text">
              Here are all of your personalized watchlisted currencies. You can
              remove stocks and click the stats button to see the current price
              of the stock. Each user is allowed a max of 4 watchlisted stocks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currId: state.userId,
    userAuth: state.authenticated,
  };
};

export default connect(mapStateToProps)(Watchlist);
