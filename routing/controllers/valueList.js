import { Equity } from "../../data_processing/module/equity.js";

const priceList =async (req,res)=>{
    const {SC_NAME , SC_CODE}=req.body;
    if(SC_NAME!=undefined&&SC_CODE!=undefined){
        try {
            const stock=await Equity.findOne({SC_CODE:SC_CODE,SC_NAME:SC_NAME});
            res.status(200).json(stock);
        } catch (error) {
            res.status(404).json({message:"Bad Request",error:error});
        }
    }
    else if(SC_NAME!=undefined){
        try {
            const stock=await Equity.findOne({SC_NAME:SC_NAME});
            res.status(200).json(stock);
        } catch (error) {
            res.status(404).json({message:"Bad Request",error:error});
        }
    }
    else if(SC_CODE!=undefined){
        try {
            const stock=await Equity.findOne({SC_CODE:SC_CODE});
            res.status(200).json(stock);
        } catch (error) {
            res.status(404).json({message:"Bad Request",error:error});
        }
    }
}

export default priceList;