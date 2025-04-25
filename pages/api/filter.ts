import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { NextApiRequest, NextApiResponse } from 'next';
import { Pharmacy } from '../../types/pharmacy';
import { QueryParams } from '../../types/queryParams';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const results: Pharmacy[] = [];
    const filePath = path.join(process.cwd(), 'data', 'pharmacies.csv');

    const { state = "MG", city = "BELO HORIZONTE" } = req.query as QueryParams;

    try {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                if (data.state === state && data.city.toUpperCase() === city.toUpperCase()) {
                    results.push(data);
                }
            })
            .on('end', () => {
                res.status(200).json(results);
            })
            .on('error', (error) => {
                res.status(500).json({ error: 'Error reading CSV file' });
            });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
