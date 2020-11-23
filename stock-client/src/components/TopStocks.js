import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

function TopStocks(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [stockUpdate, setStockUpdate] = useState([]);
  const [prevStock, setPrevStock] = useState(null);
  const [flag, setFlag] = useState({ active: false });

  const symbols = ["AAPL", "NFLX", "GOOGL", "TSLA"];
  let temp = [];

  useEffect(() => {
    if (props.setStocks === false) {
      fetchSymbols();
    }
  }, []);

  // Run after fetchSymbols finishes:
  useEffect(() => {
    if (props.stockInfo.length) {
      props.onInitialSet(
        props.stockInfo[2].symbol,
        props.stockInfo[2].percentage,
        props.stockInfo[2].close
      );
    }
  }, [props.stockInfo]);

  const changeStock = (e) => {
    setPrevStock(props.selectedStock);
    props.onSetSelectedStock(e);
  };

  async function fetchSymbols() {
    props.onSetStocks();

    for (let i = 0; i < symbols.length; i++) {
      await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbols[i]}&apikey=${process.env.REACT_APP_STOCK}`
      )
        .then((res) => res.json())
        .then((allStocks) => {
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
            let chng = close - open;

            let percentage = (chng / close) * 100;

            if (percentage < 0) {
              colorToSend = "red";
            } else {
              colorToSend = "rgb(30, 216, 139)";
            }
            let result = parseFloat(percentage).toFixed(2);

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
            alert("Due to API block, please refresh the site in 1 minute");
          }
        });
    }

    props.onStockInfo(temp);
  }

  const showPopupFunc = (e) => {
    if (showPopup === false) {
      setShowPopup(true);
    }

    let search = e.target.dataset.name;

    if (search !== undefined) {
      fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_KEY}`
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

  return (
    <>
      <div className={showPopup === true ? "news-popup" : "news-popup-false"}>
        <button onClick={closePopUp} className="news-close">
          X
        </button>

        {stockUpdate.splice(0, 3).map((article, index) => {
          return (
            <div key={index} className="stock-updates">
              <img
                src={article.urlToImage}
                className="stock-updates__img"
                alt="News Article"
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
                  href={article.url}
                  target="__blank"
                >
                  Article
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="header__stock-hold">
        {/* <DragDropContainer targetKey="foo"> */}

        <div className="header__stock-row">
          <div className="header__stock">
            <div
              data-attr="A"
              data-percentage={
                props.stockInfo[0]?.percentage
                  ? props.stockInfo[0].percentage
                  : "9.5"
              }
              data-symbol="AAPL"
              data-price={
                props.stockInfo[0]?.close ? props.stockInfo[0].close : "loading"
              }
              onClick={changeStock}
              className="header__stock-hover"
            ></div>
            <div onClick={showPopupFunc} className="header__stock-news">
              <div data-name="apple" className="header__stock-news-word">
                News
              </div>
            </div>

            <h2 className="header__stats">Stats</h2>

            <div className="header__flex-col">
              <div className="header__flex-row">
                <span className="header__grid-title">High:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[0]?.high
                    ? props.stockInfo[0].high
                    : "loading"}
                </span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[0]?.low ? props.stockInfo[0].low : "loading"}
                </span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[0]?.open
                    ? props.stockInfo[0].open
                    : "loading"}
                </span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[0]?.close
                    ? props.stockInfo[0].close
                    : "loading"}
                </span>
              </div>
            </div>

            <div className="header__icon">
              <span className="header__icon-1-symbol">A</span>
            </div>
            <p className="header__stock-title">AAPL</p>
            <p
              style={{
                color: props.stockInfo[0]?.color
                  ? props.stockInfo[0].color
                  : "green",
              }}
              className="header__stock-price"
            >
              {props.stockInfo[0]?.percentage
                ? props.stockInfo[0].percentage
                : "loading"}
              %
            </p>
          </div>

          <div data-name="netflix" className="header__stock">
            <div
              data-attr="N"
              data-percentage={
                props.stockInfo[1]?.percentage
                  ? props.stockInfo[1].percentage
                  : "9.5"
              }
              data-symbol="NFLX"
              data-price={
                props.stockInfo[1]?.close ? props.stockInfo[1].close : "loading"
              }
              onClick={changeStock}
              className="header__stock-hover"
            ></div>
            <div onClick={showPopupFunc} className="header__stock-news">
              <div data-name="netflix" className="header__stock-news-word">
                News
              </div>
            </div>
            <h2 className="header__stats">Stats</h2>
            <div className="header__flex-col">
              <div className="header__flex-row">
                <span className="header__grid-title">High:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[1]?.high
                    ? props.stockInfo[1].high
                    : "loading"}
                </span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[1]?.low ? props.stockInfo[1].low : "loading"}
                </span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[1]?.open
                    ? props.stockInfo[1].open
                    : "loading"}
                </span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[1]?.close
                    ? props.stockInfo[1].close
                    : "loading"}
                </span>
              </div>
            </div>
            <div className="header__icon-2">
              <span className="header__icon-2-symbol">N</span>
            </div>
            <p className="header__stock-title">NFLX</p>
            <p
              style={{
                color: props.stockInfo[1]?.color
                  ? props.stockInfo[1].color
                  : "green",
              }}
              className="header__stock-price"
            >
              {props.stockInfo[1]?.percentage
                ? props.stockInfo[1].percentage
                : "loading"}
              %
            </p>
          </div>
        </div>

        <div className="header__stock-row">
          <div data-name="google" className="header__stock">
            <div
              data-attr="G"
              data-symbol="GOOGL"
              data-price={
                props.stockInfo[2]?.close ? props.stockInfo[2].close : "loading"
              }
              data-percentage={
                props.stockInfo[2]?.percentage
                  ? props.stockInfo[2].percentage
                  : "9.5"
              }
              onClick={changeStock}
              className="header__stock-hover"
            ></div>
            <div onClick={showPopupFunc} className="header__stock-news">
              <div data-name="google" className="header__stock-news-word">
                News
              </div>
            </div>

            <h2 className="header__stats">Stats</h2>

            <div className="header__flex-col">
              <div className="header__flex-row">
                <span className="header__grid-title">High:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[2]?.high
                    ? props.stockInfo[2].high
                    : "loading"}
                </span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[2]?.low ? props.stockInfo[2].low : "loading"}
                </span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[2]?.open
                    ? props.stockInfo[2].open
                    : "loading"}
                </span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[2]?.close
                    ? props.stockInfo[2].close
                    : "loading"}
                </span>
              </div>
            </div>

            <div className="header__icon-3">
              <span className="header__icon-3-symbol">G</span>
            </div>
            <p className="header__stock-title">GOOGL</p>
            <p
              style={{
                color: props.stockInfo[2]?.color
                  ? props.stockInfo[2].color
                  : "green",
              }}
              className="header__stock-price"
            >
              {props.stockInfo[2]?.percentage
                ? props.stockInfo[2].percentage
                : "loading"}
              %
            </p>
          </div>

          <div data-name="tesla" className="header__stock">
            <div
              data-attr="T"
              data-symbol="TSLA"
              data-price={
                props.stockInfo[3]?.close ? props.stockInfo[3].close : "loading"
              }
              data-percentage={
                props.stockInfo[3]?.percentage
                  ? props.stockInfo[3].percentage
                  : "9.5"
              }
              onClick={changeStock}
              className="header__stock-hover"
            ></div>
            <div onClick={showPopupFunc} className="header__stock-news">
              <div data-name="tesla" className="header__stock-news-word">
                News
              </div>
            </div>

            <h2 className="header__stats">Stats</h2>

            <div className="header__flex-col">
              <div className="header__flex-row">
                <span className="header__grid-title">High:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[3]?.high
                    ? props.stockInfo[3].high
                    : "loading"}
                </span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[3]?.low ? props.stockInfo[3].low : "loading"}
                </span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[3]?.open
                    ? props.stockInfo[3].open
                    : "loading"}
                </span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">
                  $
                  {props.stockInfo[3]?.close
                    ? props.stockInfo[3].close
                    : "loading"}
                </span>
              </div>
            </div>

            <div className="header__icon-4">
              <span className="header__icon-4-symbol">T</span>
            </div>
            <p className="header__stock-title">TSLA</p>
            <p
              style={{
                color: props.stockInfo[3]?.color
                  ? props.stockInfo[3].color
                  : "green",
              }}
              className="header__stock-price"
            >
              {props.stockInfo[3]?.percentage
                ? props.stockInfo[3].percentage
                : "loading"}
              %
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSelectedStock: (e) =>
      dispatch({
        type: "SETSELECTEDSTOCK",
        value: {
          name: e.target.dataset.symbol,
          price: e.target.dataset.price,
          symbol: e.target.dataset.symbol,
          percentage: e.target.dataset.percentage,
        },
      }),

    onInitialSet: (symbol, percentage, price) => {
      dispatch({
        type: "INITIALSET",
        value: {
          price: price,
          symbol: symbol,
          percentage: percentage,
        },
      });
    },

    onSetStocks: () => {
      dispatch({
        type: "STOCKSSET",
        value: true,
      });
    },

    onStockInfo: (temp) => {
      dispatch({
        type: "SETSTOCKINFO",
        value: temp,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    selectedStock: state.selectedStock,
    setStocks: state.stocksSet,
    stockInfo: state.stockInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopStocks);
