import mongoose from "mongoose";

const favouriteStocksSchema = new mongoose.Schema({
    SC_CODE:{
        type :String,
        unique: true,
        required: true
    },
    SC_NAME: {
        type :String,
        unique: true,
        required: true
    }
  });
  
export const favouriteStock = mongoose.model('favouriteStock', favouriteStocksSchema)