import express from 'express';
import csv from 'csvtojson';
import {promises as fsPromises} from 'fs';

const upload = express.Router();

const inputFile = './fs_db/tracings/sample_data.csv';
const outputFile = './fs_db/tracings/JSON-tracings/sample.json';

upload.get('/upload', (req, res)=>{
    res.send('converting CSV data to JSON...');
    csv()
        .fromFile(inputFile)
        .then((data)=>{
            let newData = data.map((row: { 
                rep: string; 
                territory: string; 
                method_of_sale: string; 
                period_month: number; 
                period_year: number; 
                commission_month: number; 
                commission_year: number; 
            })=>{
                let rep = row.rep;
                let territory = row.territory;
                let method_of_sale = row.method_of_sale;
                let period_month = row.period_month;
                let period_year = row.period_year;
                let commission_month = row.commission_month;
                let commission_year = row.commission_year;

                return {rep, territory, method_of_sale, period_month, period_year, commission_month, commission_year}
            });
            fsPromises.writeFile(outputFile, JSON.stringify(newData));
        })
});

export default upload;