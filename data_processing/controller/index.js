import downloadAndExtract from "./zip.js";
import fs from "fs"
import readCsvToMongo from "./csv.js";

const formatted_date="090124"
const url = "https://www.bseindia.com/download/BhavCopy/Equity/EQ090124_CSV.ZIP"
const destination = `EQ${formatted_date}_CSV.ZIP`;

export const dataProcesser=async ()=>{
  if (await downloadAndExtract(url, destination)) {
    // Read CSV and store in MongoDB
    await readCsvToMongo("./data_processing/controller/EQ090124.CSV");

    // // Clean up: Remove downloaded ZIP and extracted CSV
    fs.unlinkSync("./data_processing/controller/EQ090124.CSV");
    fs.unlinkSync("./EQ090124_CSV.ZIP");
    console.log('Script completed successfully.');
  }
  else {
    console.log("Data not processed");
  }
}

