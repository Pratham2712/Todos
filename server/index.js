import express from "express";
import Connection from './mongo.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import route from "./routes.js";
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',route);
const PORT = 5000;
Connection();
app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})