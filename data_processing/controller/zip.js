import AdmZip from "adm-zip";
import axios from "axios";
import fs from "fs"
import { promisify } from "util";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const writeFileAsync= promisify(fs.writeFile)
export default async function downloadAndExtract(url, destination) {
  try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      if (response.status === 200) {
        await writeFileAsync(destination, response.data);
        
        const zip = new AdmZip(destination);
        zip.extractAllTo(__dirname, true);
        
        console.log(`Download and extraction successful: ${destination}`);
        return true;
      } else {
        console.log(`Failed to download file from ${url}`);
        return false;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return false;
    }
  }
  
  