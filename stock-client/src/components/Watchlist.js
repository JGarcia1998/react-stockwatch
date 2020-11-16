import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

function Watchlist(props) {
  const [watchlist, setWatchlist] = useState([]);

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
  }, [setWatchlist]);

  return (
    <>
      <div className="main-body">
        <Navbar></Navbar>

        <div className="header">
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
                    <button className="watchlist__remove">Remove</button>
                    <button className="watchlist__stats">Stats</button>
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
