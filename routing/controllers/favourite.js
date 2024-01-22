import { favouriteStock } from "../models/favourite.js";
import { Equity } from "../../data_processing/module/equity.js";

const addToFavourite = async (req, res) => {
    try {
        const { SC_CODE, SC_NAME } = req.body;
        const existingEquity = await Equity.findOne({ SC_CODE, SC_NAME });
        if (existingEquity) {
            const existingFavouriteStock = await favouriteStock.findOne({ SC_CODE, SC_NAME });
            if (!existingFavouriteStock) {
                const newFavouriteStock = new favouriteStock({SC_CODE,SC_NAME});
                await newFavouriteStock.save();
                res.status(200).json("Stock Added To Favourite");
            } else {
                res.status(200).json("Stock already in favourites");
            }
        } else {
            res.status(404).json("Equity not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
};


const getAllFavouriteStocks= async(req,res)=>{
    const allFavouriteStocks=await favouriteStock.find();
    if(allFavouriteStocks) {
        res.status(200).json(allFavouriteStocks)
    }
    else{
        res.status(404).json("Bad Request");
    }
}

const deleteStockFromFavourite = async (req, res) => {
    const { SC_CODE, SC_NAME } = req.body;
    
    try {
        const deletedStock = await favouriteStock.findOneAndDelete({ SC_CODE, SC_NAME });

        if (deletedStock) {
            res.status(200).json({
                message: "Stock deleted from favourite",
                stock: deletedStock
            });
        } else {
            res.status(404).json("Stock not found in favourites");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
};

export {addToFavourite, getAllFavouriteStocks, deleteStockFromFavourite};