import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
function TopStocks(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [stockUpdate, setStockUpdate] = useState([]);
  const [prevStock, setPrevStock] = useState(null);

  const changeStock = (e) => {
    setPrevStock(props.selectedStock);
    props.onSetSelectedStock(e);
  };

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
                <span className="header__grid-price">$495.85</span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">$467.26</span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">$495.85</span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">$467.26</span>
              </div>
            </div>

            <div className="header__icon">
              <span className="header__icon-1-symbol">A</span>
            </div>
            <p className="header__stock-title">AAPL</p>
            <p className="header__stock-price">15%</p>
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
                <span className="header__grid-price">$495.85</span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">$467.26</span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">$495.85</span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">$467.26</span>
              </div>
            </div>
            <div className="header__icon-2">
              <span className="header__icon-2-symbol">N</span>
            </div>
            <p className="header__stock-title">NFLX</p>
            <p className="header__stock-price">12%</p>
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
                <span className="header__grid-price">$495.85</span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">$467.26</span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">$495.85</span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">$467.26</span>
              </div>
            </div>

            <div className="header__icon-3">
              <span className="header__icon-3-symbol">G</span>
            </div>
            <p className="header__stock-title">GOOGL</p>
            <p className="header__stock-price">9%</p>
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
                <span className="header__grid-price">$495.85</span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">$467.26</span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">$495.85</span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">$467.26</span>
              </div>
            </div>

            <div className="header__icon-4">
              <span className="header__icon-4-symbol">T</span>
            </div>
            <p className="header__stock-title">TSLA</p>
            <p className="header__stock-price">3%</p>
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
