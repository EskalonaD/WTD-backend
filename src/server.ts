/**
 * How to create simple Nodejs crud-api: https://zellwk.com/blog/crud-express-mongodb/
 *
 * how to add typescript to nodejs: https://khalilstemmler.com/blogs/typescript/node-starter-project/
 * es6 import need to add types to express/fs or it will be any
*/

import express from 'express';
import bodyParser from 'body-parser';

import { DataStorage } from './model'

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const a = new DataStorage('users');

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
