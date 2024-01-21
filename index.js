import connectDB from "./db.js";
import { dataProcesser } from "./data_processing/controller/index.js";

connectDB();
dataProcesser();


