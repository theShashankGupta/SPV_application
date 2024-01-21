import mongoose from "mongoose";

const EquitySchema = new mongoose.Schema({
    SC_CODE: String,
    SC_NAME: String,
    OPEN: Number,
    HIGH: Number,
    LOW: Number,
    CLOSE: Number,
  });
  
export const Equity = mongoose.model('Equity', EquitySchema)