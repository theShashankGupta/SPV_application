import fs from "fs";
import { Equity } from "../module/equity.js";
const unwrapValue = (value) => (Array.isArray(value) ? value[0] : value);


const isValidNumber=(value)=> {
  return !isNaN(parseFloat(value)) && isFinite(value);
}



export default async function readCsvToMongo(csvPath) {
  const data = fs.readFileSync(csvPath, 'utf-8');
  const lines = data.split('\n');

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const trimmedSCName = values[1] ? values[1].trim() : '';
    const equityDocument = await Equity.findOneAndUpdate(
      { SC_CODE: values[0], SC_NAME: trimmedSCName },
      {},
      { upsert: true, new: true }
    );

    const open = isValidNumber(values[4]) ? parseFloat(values[4]) : 0;
    const high = isValidNumber(values[5]) ? parseFloat(values[5]) : 0;
    const low = isValidNumber(values[6]) ? parseFloat(values[6]) : 0;
    const close = isValidNumber(values[7]) ? parseFloat(values[7]) : 0;

    
    equityDocument.OPEN.push(unwrapValue(open));
    equityDocument.HIGH.push(unwrapValue(high));
    equityDocument.LOW.push(unwrapValue(low));
    equityDocument.CLOSE.push(unwrapValue(close));

    try {
      await equityDocument.save();
    } catch (error) {
      console.error(`Error updating document in MongoDB: ${error.message}`);
    }
  }

  console.log(`Inserted records into MongoDB for date: ${new Date().toLocaleString()}`);
}
