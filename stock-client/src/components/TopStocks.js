import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
function TopStocks(props) {
  const [prevStock, setPrevStock] = useState(null);

  const changeStock = (e) => {
    setPrevStock(props.selectedStock);
    // setSelectedStock({
    //   name: e.target.dataset.symbol,
    //   price: e.target.dataset.price,
    //   symbol: e.target.dataset.attr,
    //   open: "$" + "122.45",
    //   close: "$" + "134.56",
    //   high: "$" + "188.94",
    //   low: "$" + "111.23",
    // });
    props.onSetSelectedStock(e);
  };

  return (
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
          <a href="#" className="header__stock-news">
            <div className="header__stock-news-word">News</div>
          </a>

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

        <div className="header__stock">
          <div
            data-attr="N"
            data-symbol="NFLX"
            data-price="467.26"
            onClick={changeStock}
            className="header__stock-hover"
          ></div>
          <a href="#" className="header__stock-news">
            <div className="header__stock-news-word">News</div>
          </a>
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
        <div className="header__stock">
          <div
            data-attr="G"
            data-symbol="GOOGL"
            data-price="467.26"
            onClick={changeStock}
            className="header__stock-hover"
          ></div>
          <a href="#" className="header__stock-news">
            <div className="header__stock-news-word">News</div>
          </a>

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

        <div className="header__stock">
          <div
            data-attr="T"
            data-symbol="TSLA"
            data-price="467.26"
            onClick={changeStock}
            className="header__stock-hover"
          ></div>
          <a href="#" className="header__stock-news">
            <div className="header__stock-news-word">News</div>
          </a>

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
