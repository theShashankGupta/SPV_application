#Stock Price View Application

### Setup Instructions

1. **Clone the Repository:**
  * git clone git@github.com:theShashankGupta/SPV_application.git
  * cd SPV_application

2. npm install
3. **Configure MongoDB:**
    Ensure that MongoDB is installed and running on your machine.
Update the MongoDB connection URL in the connectDB function in the db.js file.

4.  **Run the Application:** npm start
5.  The API will be accessible at http://localhost:8000.

###How to Use the API
1. **Get Favourite Stocks**
* Endpoint: /favouriteStocks
* Method: GET
* Description: Get a list of all favourite stocks.

2. **Add Stock to Favourites**
* Endpoint: /favouriteStocks
* Method: POST
* Description: Add a stock to the list of favourites.

3. **Delete Stock from Favourites**
*  Endpoint: /favouriteStocks
* Method: DELETE
* Description: Delete a stock from the list of favourites.

4. **Get Stock by Name**
* Endpoint: /stocksByName
* Method: GET
* Description: Get stock information by stocks name.

5. **Get Price List**
* Endpoint: /priceList
* Method: GET
* Description: Get a list of stock prices.
