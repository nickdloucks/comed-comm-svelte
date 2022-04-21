import App from './App.svelte';
import path from 'path';
import express from 'express';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});



const server = express();
const port = 3002;

server.use(express.static('public'));
server.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

console.log("HELLO FROM Main.TS");


server.listen(port, ()=>{
    console.log(`CoMedical Commissions app is listening for requests at http://localhost:${port}.`)
});

export default app;