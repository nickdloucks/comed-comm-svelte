
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import {dirname}  from 'path';
import { fileURLToPath } from 'url';
// import { default as upload } from './src/routes/upload';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const server = express();
const port = process.env.PORT || 3002;

server.use(express.static('fs_db/statements/'));
server.use(express.static('public'));

// server.get('/fs_db_landing.html', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, 'fs_db', 'statements', 'fs_db_landing.html'));
// })

server.get('/index.html', (req, res)=>{
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

console.log(__dirname);

// server.use(upload);

server.listen(port, ()=>{
    console.log(`CoMedical Commissions app is listening for requests at http://localhost:${port}.`)
});