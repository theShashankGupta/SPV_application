import downloadAndExtract from "./zip.js";
import fs from "fs";
import readCsvToMongo from "./csv.js";
import last50Days  from "./formatDate.js";

const baseBSEUrl = 'https://www.bseindia.com/download/BhavCopy/Equity/';

export const dataProcessor = async () => {
  const dates = last50Days;

  for (const date of dates) {
    const url = `${baseBSEUrl}EQ${date}_CSV.ZIP`;
    const destination = `EQ${date}_CSV.ZIP`;

    if (await downloadAndExtract(url, destination)) {
      await readCsvToMongo(`./data_processing/controller/EQ${date}.CSV`);
      fs.unlinkSync(`./data_processing/controller/EQ${date}.CSV`);
      fs.unlinkSync(`./${destination}`);
      console.log(`Data for ${date} processed successfully.`);
    } else {
      console.log(`Data for ${date} not processed.`);
    }
  }

  console.log('Script completed successfully.');
};
export default dataProcessor