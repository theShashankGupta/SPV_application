import express from "express"
import connectDB from "./db.js";
import  dataProcesser  from "./data_processing/controller/index.js";
import router from "./routing/index.js";


const app=express();
const port=8000;
app.use(express.json())

connectDB();

dataProcesser();

const routes = () => {
    app.use('/', router); 
    return app;
};
routes();

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})

