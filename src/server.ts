/** 
 * How to create simple Nodejs crud-api: https://zellwk.com/blog/crud-express-mongodb/
 * 
 * how to add typescript to nodejs: https://khalilstemmler.com/blogs/typescript/node-starter-project/
 * es6 import need to add types to express/fs or it will be any
*/

import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

import { DataStorage } from './model'

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let data: object;

if(fs.existsSync(`${__dirname}/data/data.json`)) {
    data = JSON.parse(fs.readFileSync(`${__dirname}\\data\\data.json`, 'utf8'));
}
else if(fs.existsSync(`${__dirname}/data/test-data.json`)) {
    data = JSON.parse(fs.readFileSync(`${__dirname}/data/test-data.json`, 'utf8'));
}
else {
    fs.appendFileSync(`${__dirname}/data/test-data.json`, '{}');
    data = JSON.parse(fs.readFileSync(`${__dirname}/data/test-data.json`, 'utf8'));
}

const synchronizeData: () => void = () => {
    fs.writeFileSync(`${__dirname}\\data\\data.json`, JSON.stringify(data, null, 4), 'utf8')
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
    console.log('post', req.body);
});

app.put('/quotes', (req, res) => {
    console.log('put', req.body);
});

app.delete('/quotes', (req, res) => {
    console.log('delete', req.body);
})

app.listen(3000, () => console.log('on3000'));


const a = new DataStorage('users');
