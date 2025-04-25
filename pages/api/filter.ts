import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export default function handler(req, res) {
    const results = [];
    const filePath = path.join(process.cwd(), 'data', 'pharmacies.csv');

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // Implement filtering logic here based on query parameters
            res.status(200).json(results);
        });
}
