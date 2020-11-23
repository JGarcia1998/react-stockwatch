# StockWatch
StockWatch is a Currency dashboard for daily updates on stocks and crypto prices along with news articles related to each currency. Users can add stocks to their personalized watchlist after creating an account with the application. Users can also view recent news articles for each stock or crypto currency. Cards will display the open, high, close, low and percentage change in value over the course of the day.   

# Dashboard(Main page)
Here is the main dashboard upon load of the site. 4 main stocks are immediately fetched and served from an up to date API. The top right card showcases the selected stock, users can select any stock they would like and add it to their watchlist assuming they are logged in. Users can also fetch recent news articles related to each stock using the news button on the cards.

<img width="1213" alt="stockwatchnew" src="https://user-images.githubusercontent.com/62822850/99897034-95b14180-2c5b-11eb-9a4c-1389a3d64c3f.png">

# Watchlist
Here is the users watchlist, symbols are stored in a PostgreSQL database and new prices are fetched when the user selects, "stats". Users are allowed up to 4 watchlisted stocks at a time.

<img width="1223" alt="Screen Shot 2020-11-22 at 7 53 53 PM" src="https://user-images.githubusercontent.com/62822850/99923867-563b3180-2cfd-11eb-882a-b2de3cc17366.png">

<img width="1155" alt="Screen Shot 2020-11-22 at 7 57 43 PM" src="https://user-images.githubusercontent.com/62822850/99923879-66531100-2cfd-11eb-91d7-1f3f4de71c00.png">
