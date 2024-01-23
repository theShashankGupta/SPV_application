import express from "express";
import { getAllFavouriteStocks, deleteStockFromFavourite, addToFavourite } from "./controllers/favourite.js";
import { getStockByName } from "./controllers/stocks.js";
import priceList from "./controllers/valueList.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json("coming from main index");
});

router.get('/favouriteStocks', getAllFavouriteStocks);
router.post('/favouriteStocks', addToFavourite);
router.delete('/favouriteStocks', deleteStockFromFavourite);
router.get('/stocksByName', getStockByName);
router.get('/priceList', priceList);


export default router;