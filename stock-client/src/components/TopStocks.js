import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
function TopStocks(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [stockUpdate, setStockUpdate] = useState([]);
  const [prevStock, setPrevStock] = useState(null);
  const [stockInfo, setStockInfo] = useState([]);

  const symbols = ["AAPL", "NFLX", "GOOGL", "TSLA"];

  useEffect(() => {
    fetchSymbols();
  }, []);

  const changeStock = (e) => {
    setPrevStock(props.selectedStock);
    props.onSetSelectedStock(e);
  };

  async function fetchSymbols() {
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

            let percentage = close - open;
            let result = parseFloat(percentage).toFixed(2);

            let temp = [...stockInfo];
            temp.push({
              symbol: symbol,
              high: high,
              low: low,
              close: close,
              open: open,
              percentage: result,
            });

            setStockInfo(temp);
          } catch {
            console.log("surpassed the limit of 4 requests in under a minute");
          }
        });
    }
  }

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

      <div className="header__stock-hold">
        {/* <DragDropContainer targetKey="foo"> */}

        <div className="header__stock-row">
          <div className="header__stock">
            <div
              data-attr="A"
              data-symbol="AAPL"
              data-price="467.26"
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
                  ${stockInfo[0]?.high ? stockInfo[0].high : "loading"}
                </span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">
                  ${stockInfo[0]?.low ? stockInfo[0].low : "loading"}
                </span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">
                  ${stockInfo[0]?.open ? stockInfo[0].open : "loading"}
                </span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">
                  ${stockInfo[0]?.close ? stockInfo[0].close : "loading"}
                </span>
              </div>
            </div>

            <div className="header__icon">
              <span className="header__icon-1-symbol">A</span>
            </div>
            <p className="header__stock-title">AAPL</p>
            <p className="header__stock-price">
              {stockInfo[0]?.percentage ? stockInfo[0].percentage : "loading"}%
            </p>
          </div>
          {/* </DragDropContainer> */}

          <div data-name="netflix" className="header__stock">
            <div
              data-attr="N"
              data-symbol="NFLX"
              data-price="467.26"
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
                  ${stockInfo[1]?.high ? stockInfo[1].high : "loading"}
                </span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">
                  ${stockInfo[1]?.low ? stockInfo[1].low : "loading"}
                </span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">
                  ${stockInfo[1]?.open ? stockInfo[1].open : "loading"}
                </span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">
                  ${stockInfo[1]?.close ? stockInfo[1].close : "loading"}
                </span>
              </div>
            </div>
            <div className="header__icon-2">
              <span className="header__icon-2-symbol">N</span>
            </div>
            <p className="header__stock-title">NFLX</p>
            <p className="header__stock-price">
              {stockInfo[1]?.percentage ? stockInfo[1].percentage : "loading"}%
            </p>
          </div>
        </div>

        <div className="header__stock-row">
          <div data-name="google" className="header__stock">
            <div
              data-attr="G"
              data-symbol="GOOGL"
              data-price="467.26"
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
                  ${stockInfo[2]?.high ? stockInfo[2].high : "loading"}
                </span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">
                  ${stockInfo[2]?.low ? stockInfo[2].low : "loading"}
                </span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">
                  ${stockInfo[2]?.open ? stockInfo[2].open : "loading"}
                </span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">
                  ${stockInfo[2]?.close ? stockInfo[2].close : "loading"}
                </span>
              </div>
            </div>

            <div className="header__icon-3">
              <span className="header__icon-3-symbol">G</span>
            </div>
            <p className="header__stock-title">GOOGL</p>
            <p className="header__stock-price">
              {stockInfo[2]?.percentage ? stockInfo[2].percentage : "loading"}%
            </p>
          </div>

          <div data-name="tesla" className="header__stock">
            <div
              data-attr="T"
              data-symbol="TSLA"
              data-price="467.26"
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
                  ${stockInfo[3]?.high ? stockInfo[3].high : "loading"}
                </span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">
                  ${stockInfo[3]?.low ? stockInfo[3].low : "loading"}
                </span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">
                  ${stockInfo[3]?.open ? stockInfo[3].open : "loading"}
                </span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">
                  ${stockInfo[3]?.close ? stockInfo[3].close : "loading"}
                </span>
              </div>
            </div>

            <div className="header__icon-4">
              <span className="header__icon-4-symbol">T</span>
            </div>
            <p className="header__stock-title">TSLA</p>
            <p className="header__stock-price">
              {stockInfo[3]?.percentage ? stockInfo[3].percentage : "loading"}%
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
          symbol: e.target.dataset.attr,
          open: "$" + "122.45",
          close: "$" + "134.56",
          high: "$" + "188.94",
          low: "$" + "111.23",
        },
      }),
  };
};

const mapStateToProps = (state) => {
  return {
    selectedStock: state.selectedStock,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopStocks);
