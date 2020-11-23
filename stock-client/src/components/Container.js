import React from "react";
import Navbar from "./Navbar";
import StockNews from "./StockNews";
import TopStocks from "./TopStocks";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { Button, Snackbar, IconButton } from "@material-ui/core";

function Container(props) {
  const [open, setOpen] = useState({ open: false, message: "" });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen({ open: false, message: "" });
  };

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          props.setNews(result.articles.splice(0, 5));
        }
      });
  }, [props.setNews]);

  const watchlistDB = () => {
    if (props.currId === null) {
      setOpen({ open: true, message: "You need to log in first" });
    } else {
      fetch("https://safe-citadel-64633.herokuapp.com/watchlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: props.currId,
          symbol: props.selectedStock.name
            ? props.selectedStock.name
            : props.selectedStock.symbol,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          setOpen({ open: true, message: result.message });
        });
    }
  };

  return (
    <>
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={open.open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={open.message}
          action={
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </div>
      <div className="main-body">
        <Navbar></Navbar>

        <div className="header">
          <button onClick={watchlistDB} className="btn-fixed-phone"></button>
          <h2 className="header__title">Top Stocks</h2>
          <p className="header__p">
            Latest prices and news related to each currency
          </p>

          <TopStocks></TopStocks>

          <h2 className="header__news-title">Individual stock updates</h2>

          <StockNews></StockNews>

          <h2 className="header__news-title">News articles around the globe</h2>

          {props.news.map((article, index) => {
            const link = article.url;

            return (
              <div key={index} className="news">
                <img
                  src={article.urlToImage}
                  className="news__img"
                  alt="News"
                />
                <div className="news__col">
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
                    href={link}
                    target="__blank"
                  >
                    Article
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="main-right">
          <div className="main-right__stock">
            <div className="main-right__logo">
              {props.selectedStock.symbol?.split("")[0]}
            </div>
            <h2 className="main-right__name">{props.selectedStock.symbol}</h2>
            <p className="main-right__price">${props.selectedStock.price}</p>
            <p
              style={{
                color:
                  props.selectedStock.percentage < 0
                    ? "red"
                    : "rgb(30, 216, 139)",
              }}
              className="main-right__percentage"
            >
              {props.selectedStock.percentage}%
            </p>
            <svg
              className="main-right-chart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="rgb(65, 98, 189)"
                fillOpacity="1"
                d="M0,128L26.7,149.3C53.3,171,107,213,160,245.3C213.3,277,267,299,320,272C373.3,245,427,171,480,154.7C533.3,139,587,181,640,170.7C693.3,160,747,96,800,80C853.3,64,907,96,960,101.3C1013.3,107,1067,85,1120,101.3C1173.3,117,1227,171,1280,202.7C1333.3,235,1387,245,1413,250.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
              ></path>
            </svg>
            <div className="main-right__days">
              <span className="main-right__times c">1D</span>
              <span className="main-right__times">5D</span>
              <span className="main-right__times">1M</span>
              <span className="main-right__times">6M</span>
              <span className="main-right__times">1Y</span>
              <span className="main-right__times">5Y</span>
            </div>
          </div>

          <div className="main-right__info">
            <h2 className="main-right__info-name">ABOUT</h2>
            <p className="main-right__text">
              StockWatch is a currency dashboard for getting daily updates on
              stock and crypto prices. Each price is updated every day at market
              close(3pm).
            </p>
          </div>
        </div>

        <button onClick={watchlistDB} className="btn-fixed"></button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedStock: state.selectedStock,
    currId: state.userId,
    news: state.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNews: (info) =>
      dispatch({
        type: "SETNEWS",
        value: info,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
