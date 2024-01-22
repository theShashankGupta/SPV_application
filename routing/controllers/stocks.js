import { Equity } from "../../data_processing/module/equity.js";

const  getStockByName= async(req,res)=>{
    const {SC_NAME}=req.body;
    try{
        const stock=await Equity.findOne({SC_NAME :SC_NAME });
        res.status(200).json(stock);
    }
    catch(error){
        res.status(404).json(error);
    }
}

export {getStockByName};