import mongoose from "mongoose";

const EquitySchema = new mongoose.Schema({
    SC_CODE: String,
    SC_NAME: String,
    OPEN: {
      type : [Number]
    },
    HIGH:  {
      type : [Number]
    },
    LOW:  {
      type : [Number]
    },
    CLOSE:  {
      type : [Number]
    },
  });
  
export const Equity = mongoose.model('Equity', EquitySchema)