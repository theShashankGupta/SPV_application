import fs from "fs";
import { Equity } from "../module/equity.js";

export default async function readCsvToMongo(csvPath) {
  const data = fs.readFileSync(csvPath, 'utf-8');
  const lines = data.split('\n');

  // Assuming the CSV file has a header and data starts from the second line
  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');

    // Create an object to store the equity data
    const equityData = {};

    headers.forEach((header, index) => {
      equityData[header] = values[index];
    });

    // Convert specific fields to appropriate types
    equityData.OPEN = parseFloat(equityData.OPEN);
    equityData.HIGH = parseFloat(equityData.HIGH);
    equityData.LOW = parseFloat(equityData.LOW);
    equityData.CLOSE = parseFloat(equityData.CLOSE);

    // Save data to MongoDB using Mongoose
    try {
      await Equity.create(equityData);
      // console.log(``);
    } catch (error) {
      console.error(`Error inserting record into MongoDB: ${error.message}`);
    }
  }

  console.log(`Inserted records into MongoDB for date: ${new Date().toLocaleString()}`);
}
