const cors = require('cors');

app.use(cors({
    origin: '*'
}));

const express = require('express');
const app = express();

app.use(express.json());

const homepageController=require('./controller/homepage.controller')
app.use('/mensdata1',homepageController);

module.exports=app;