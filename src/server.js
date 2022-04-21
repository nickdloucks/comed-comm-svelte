import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

dotenv.config();

const server = express();
const port = process.env.PORT || 3002;

server.use(express.static('public'));
server.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})




server.listen(port, ()=>{
    console.log(`CoMedical Commissions app is listening for requests at http://localhost:${port}.`)
});

