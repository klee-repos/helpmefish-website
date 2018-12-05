require('dotenv').config();

import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const port = 8000;
const app = express();
const server = require('http').createServer(app);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(path.join(__dirname,"public")));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


server.listen(process.env.PORT || port, function() {
	console.log(`Node server started ${port}`)
});