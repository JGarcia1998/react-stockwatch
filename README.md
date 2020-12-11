# StockWatch
StockWatch is a Currency dashboard for daily updates on stocks and crypto prices along with news articles related to each currency. Users can add stocks to their personalized watchlist after creating an account with the application. Users can also view recent news articles for each stock or crypto currency. Cards will display the open, high, close, low and percentage change in value over the course of the day.   

# Technologies 
- React
- Redux
- Material UI
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM

# Dashboard(Main page)
Here is the main dashboard upon load of the site. 4 main stocks are immediately fetched and served from an up to date API. The top right card showcases the selected stock, users can select any stock they would like and add it to their watchlist assuming they are logged in. Users can also fetch recent news articles related to each stock using the news button on the cards.

<img width="1213" alt="stockwatchnew" src="https://user-images.githubusercontent.com/62822850/99897034-95b14180-2c5b-11eb-9a4c-1389a3d64c3f.png">

# Watchlist
Here is the users watchlist, symbols are stored in a PostgreSQL database and new prices are fetched when the user selects, "stats". Users are allowed up to 4 watchlisted stocks at a time.

<img width="1223" alt="Screen Shot 2020-11-22 at 7 53 53 PM" src="https://user-images.githubusercontent.com/62822850/99923867-563b3180-2cfd-11eb-882a-b2de3cc17366.png">

# News articles
The main content of the page is available through the middle section on y-scroll, down below the top 4 stocks are recent news articles around the globe to stay up to date on any recent news.

<img width="1155" alt="Screen Shot 2020-11-22 at 7 57 43 PM" src="https://user-images.githubusercontent.com/62822850/99923879-66531100-2cfd-11eb-91d7-1f3f4de71c00.png">

# Crypto currencies
Here is the crypto currnecy tab, similar to the main stock dashboard, users can view the top 4 recent crypto currency prices along with news articles related to them as well. 

<img width="1195" alt="Screen Shot 2020-11-22 at 8 10 58 PM" src="https://user-images.githubusercontent.com/62822850/99924204-e037ca00-2cfe-11eb-8e80-8ab1726da37c.png">

# Installation
This application can only be ran through localhost, online deployment is not allowed. 

- Clone this repository.
- cd into stock-client and run "npm install", then "npm start" to start the client side.
- in a seperate directory, cd into stock-server and run "npm install", then "node app.js" to start the server.

